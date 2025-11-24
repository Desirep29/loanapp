// components/Payment/PaymentSelection.tsx
"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Loader2, CreditCard, Smartphone, Building, AlertCircle } from "lucide-react";
import { toast } from "react-toastify";

interface PaymentOption {
  id: string;
  provider: string;
  accountNumber: string;
  accountName: string;
  bankName: string;
  type: "mobile_money" | "bank_transfer";
  amount: number;
  currency: string;
}

export default function PaymentSelection() {
  const [paymentOptions, setPaymentOptions] = useState<PaymentOption[]>([]);
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Check if user has token
    const token = localStorage.getItem('authToken');
    if (!token) {
      toast.error('Please verify your email first');
      window.location.href = '/verify-email';
      return;
    }
    
    fetchPaymentOptions();
  }, []);

  const fetchPaymentOptions = async () => {
    try {
      const token = localStorage.getItem('authToken');
      if (!token) {
        throw new Error('No authentication token found');
      }

      const response = await fetch("https://bank-account-backend-hgpt.onrender.com/api/v1/payments/options", {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        if (response.status === 401) {
          // Token expired or invalid
          localStorage.removeItem('authToken');
          toast.error('Session expired. Please verify your email again.');
          window.location.href = '/verify-email';
          return;
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.success) {
        setPaymentOptions(data.paymentOptions);
      } else {
        throw new Error(data.message || "Failed to fetch payment options");
      }
    } catch (error) {
      console.error("Error fetching payment options:", error);
      toast.error("Failed to load payment options");
    } finally {
      setIsLoading(false);
    }
  };

  const handlePaymentSelection = async () => {
    if (!selectedOption) {
      toast.error("Please select a payment method");
      return;
    }

    setIsSubmitting(true);
    try {
      const token = localStorage.getItem('authToken');
      if (!token) {
        throw new Error('No authentication token found');
      }

      console.log('🔄 Initializing payment with token:', token.substring(0, 20) + '...');

      const response = await fetch("https://bank-account-backend-hgpt.onrender.com/api/v1/payments/initialize", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
          paymentAccountId: selectedOption,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        if (response.status === 401) {
          localStorage.removeItem('authToken');
          toast.error('Session expired. Please verify your email again.');
          window.location.href = '/verify-email';
          return;
        }
        throw new Error(data.message || `HTTP error! status: ${response.status}`);
      }

      if (data.success) {
        console.log('✅ Payment initialized successfully:', data);
        localStorage.setItem("paymentInfo", JSON.stringify(data.paymentInfo));
        localStorage.setItem("paymentInstructions", JSON.stringify(data.instructions));
        localStorage.setItem("paymentReference", data.paymentInfo.paymentReference);
        
        toast.success("Payment initialized successfully!");
        window.location.href = "/payment/instructions";
      } else {
        throw new Error(data.message || "Failed to initialize payment");
      }
    } catch (error: any) {
      console.error("Payment initialization error:", error);
      toast.error(error.message || "Failed to initialize payment");
    } finally {
      setIsSubmitting(false);
    }
  };

  const getProviderIcon = (type: string) => {
    switch (type) {
      case "mobile_money":
        return <Smartphone className="h-5 w-5 sm:h-6 sm:w-6" />;
      case "bank_transfer":
        return <Building className="h-5 w-5 sm:h-6 sm:w-6" />;
      default:
        return <CreditCard className="h-5 w-5 sm:h-6 sm:w-6" />;
    }
  };


  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-[#006064]" />
          <p className="text-sm sm:text-base">Loading payment options...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-4 sm:py-6 lg:py-8 px-3 xs:px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">
            Complete Your Activation
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600">
            Pay your activation fee of{" "}
            <span className="font-semibold text-[#006064]">$5,000</span> to get
            started
          </p>
        </div>

        {/* Token Status Alert */}
        {!localStorage.getItem('authToken') && (
          <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
            <AlertCircle className="h-5 w-5 text-red-500 mr-3" />
            <div>
              <p className="text-red-800 font-medium">Authentication Required</p>
              <p className="text-red-600 text-sm">Please verify your email first</p>
            </div>
            <Button 
              onClick={() => window.location.href = '/verify-email'}
              className="ml-auto bg-red-600 hover:bg-red-700"
              size="sm"
            >
              Verify Email
            </Button>
          </div>
        )}

        {/* Selection Card */}
        <Card className="mb-4 sm:mb-6">
          <CardHeader className="text-center pb-3 sm:pb-4 px-4 sm:px-6">
            <CardTitle className="text-lg sm:text-xl lg:text-2xl">
              Select Payment Method
            </CardTitle>
            <CardDescription className="text-sm sm:text-base">
              Choose how you'd like to pay your activation fee
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Payment Options */}
        <div className="space-y-3 sm:space-y-4">
          {paymentOptions.map((option) => (
            <Card
              key={option.id}
              className={`cursor-pointer transition-all duration-200 ${
                selectedOption === option.id
                  ? "border-2 border-[#006064] bg-[#006064]/5"
                  : "border border-gray-200 hover:border-gray-300"
              }`}
              onClick={() => setSelectedOption(option.id)}
            >
              <CardContent className="p-4 sm:p-6">
                <div className="flex flex-col xs:flex-row items-start xs:items-center justify-between gap-3 sm:gap-4">
                  {/* Left Section - Provider Info */}
                  <div className="flex items-start xs:items-center space-x-3 sm:space-x-4 flex-1 min-w-0">
                    <div
                      className={`p-2 sm:p-3 rounded-full flex-shrink-0 ${
                        selectedOption === option.id
                          ? "bg-[#006064] text-white"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {getProviderIcon(option.type)}
                    </div>
                    
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-base sm:text-lg truncate">
                        {option.provider}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 truncate">
                        {option.bankName}
                      </p>
                      
                      {/* Account Details */}
                      <div className="flex flex-col xs:flex-row xs:items-center gap-1 xs:gap-3 xs:space-x-0 mt-2 text-xs sm:text-sm">
                        <div className="flex items-center">
                          <span className="text-gray-500 whitespace-nowrap">Account:</span>
                          <span className="font-mono ml-1 truncate">
                            {option.accountNumber}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-gray-500 whitespace-nowrap">Name:</span>
                          <span className="ml-1 truncate">{option.accountName}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Section - Amount */}
                  <div className="text-right flex-shrink-0 w-full xs:w-auto">
                    <div className="text-xl sm:text-2xl font-bold text-[#006064]">
                      ${option.amount.toLocaleString()}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-500 capitalize">
                      {option.type.replace("_", " ")}
                    </div>
                  </div>
                </div>

                {/* Selected State */}
                {selectedOption === option.id && (
                  <div className="mt-3 sm:mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <span className="text-green-800 text-sm text-center sm:text-left">
                        ✓ Selected for payment
                      </span>
                      <Button
                        onClick={handlePaymentSelection}
                        disabled={isSubmitting || !localStorage.getItem('authToken')}
                        className="bg-[#006064] text-white hover:bg-[#004d40] w-full sm:w-auto text-sm sm:text-base"
                        size="sm"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-3 w-3 sm:h-4 sm:w-4 animate-spin" />
                            Processing...
                          </>
                        ) : (
                          "Continue to Payment"
                        )}
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
        {/* Important Notes */}
        <div className="mt-6 sm:mt-8 bg-blue-50 border border-blue-200 rounded-lg p-3 sm:p-4">
          <h4 className="font-semibold text-blue-900 text-sm sm:text-base mb-2">
            Important Notes:
          </h4>
          <ul className="text-xs sm:text-sm text-blue-800 space-y-1">
            <li>• This is a one-time activation fee of $5,000</li>
            <li>• Your account will be activated immediately after payment verification</li>
            <li>• Payment processing may take a few minutes</li>
            <li>• Keep your transaction details for verification</li>
          </ul>
        </div>
      </div>
    </div>
  );
}