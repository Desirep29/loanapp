// components/Loans/LoanPaymentVerification.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Loader2, CheckCircle, XCircle } from "lucide-react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "@/redux/store";

interface PaymentVerificationData {
  transactionId: string;
  paymentDate: string;
  amount: number;
  paymentMethod: string;
}

export default function LoanPaymentVerification() {
  const [isLoading, setIsLoading] = useState(false);
  const [verificationStatus, setVerificationStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const navigate = useNavigate();
  
  const token = useSelector((state: RootState) => state.member.token);

  const form = useForm<PaymentVerificationData>({
    defaultValues: {
      transactionId: "",
      paymentDate: "",
      amount: 0,
      paymentMethod: "",
    },
  });

  const onSubmit = async (data: PaymentVerificationData) => {
    setIsLoading(true);
    try {
      const loanPaymentData = JSON.parse(localStorage.getItem("loanPaymentData") || "{}");

      // Validate required data
      if (!token) {
        throw new Error("No authentication token found");
      }

      if (!loanPaymentData.applicationId) {
        throw new Error("Loan application data not found. Please start over.");
      }

      if (!loanPaymentData.paymentReference) {
        throw new Error("Payment reference not found.");
      }

      // Prepare the request body according to your backend API
      const requestBody = {
        loanId: loanPaymentData.applicationId, // Using applicationId as loanId
        paymentAmount: data.amount,
        paymentReference: loanPaymentData.paymentReference,
        // Include additional fields that might be needed
        transactionId: data.transactionId,
        paymentDate: data.paymentDate,
        paymentMethod: data.paymentMethod
      };

      console.log("Submitting payment verification:", requestBody);

      const response = await fetch("https://firstintlservices.onrender.com/api/v1/loans/verify-payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP ${response.status}: ${errorText}`);
      }

      const result = await response.json();
      console.log("Verification response:", result);

      if (result.success) {
        setVerificationStatus('success');
        toast.success("Payment verified successfully!");
        
        // Clear stored data
        localStorage.removeItem("loanPaymentData");
        
        // Redirect to status page after delay
        setTimeout(() => {
          navigate("/loans/status");
        }, 2000);
      } else {
        setVerificationStatus('error');
        toast.error(result.message || "Payment verification failed");
      }
    } catch (error: any) {
      console.error("Verification error:", error);
      setVerificationStatus('error');
      toast.error(error.message || "Failed to verify payment");
    } finally {
      setIsLoading(false);
    }
  };

  if (verificationStatus === 'success') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md text-center">
          <CardContent className="pt-6">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Payment Verified!</h2>
            <p className="text-gray-600 mb-4">
              Your loan application is now being processed. Redirecting...
            </p>
            <div className="animate-spin">
              <Loader2 className="h-6 w-6 text-[#006064] mx-auto" />
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Verify Payment
          </h1>
          <p className="text-lg text-gray-600">
            Enter your transaction details to verify payment
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Transaction Details</CardTitle>
            <CardDescription>
              Enter the details from your bank or mobile money app
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="transactionId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Transaction ID *</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="e.g., OPAY123456789"
                          {...field}
                          required
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="paymentDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Payment Date *</FormLabel>
                      <FormControl>
                        <Input
                          type="date"
                          {...field}
                          required
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="amount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Amount Paid ($) *</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Enter amount paid"
                          {...field}
                          onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)}
                          required
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="paymentMethod"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Payment Method *</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="e.g., OPay, Bank Transfer"
                          {...field}
                          required
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {verificationStatus === 'error' && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-2">
                    <XCircle className="h-5 w-5 text-red-500" />
                    <p className="text-sm text-red-800">
                      Verification failed. Please check your details and try again.
                    </p>
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-[#006064] text-white hover:bg-[#004d40]"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Verifying Payment...
                    </>
                  ) : (
                    'Verify Payment'
                  )}
                </Button>
              </form>
            </Form>

            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">Important Notes:</h4>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Make sure the amount matches your upfront payment</li>
                <li>• Use the exact payment reference provided</li>
                <li>• Transaction ID can be found in your bank app or SMS</li>
                <li>• Verification typically takes 1-2 hours</li>
              </ul>
            </div>

            {/* Debug info */}
            <div className="mt-4 p-3 bg-gray-50 rounded-lg">
              <p className="text-xs text-gray-600">
                Application ID: {JSON.parse(localStorage.getItem("loanPaymentData") || "{}").applicationId || "Not found"}
              </p>
              <p className="text-xs text-gray-600">
                Payment Reference: {JSON.parse(localStorage.getItem("loanPaymentData") || "{}").paymentReference || "Not found"}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}