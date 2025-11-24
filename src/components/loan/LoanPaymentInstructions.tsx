import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Copy,
  Check,
  Mail,
  FileText,
  Clock,
  Shield,
  ArrowRight,
  CreditCard,
  Building,
  Smartphone,
} from "lucide-react";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import type { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

interface PaymentAccount {
  id: string;
  provider: string;
  accountNumber: string;
  accountName: string;
  bankName: string;
  type: "mobile_money" | "bank_transfer";
  currency: string;
  amount: number;
  description: string;
  instructions: string[];
}

interface LoanPaymentResponse {
  success: boolean;
  message: string;
  applicationId: string;
  applicationScore: number;
  paymentRequired: boolean;
  upfrontPaymentAmount: number;
  paymentReference: string;
  paymentAccounts: PaymentAccount[];
  emailSent: boolean;
  nextSteps: string[];
}

export default function LoanPaymentInstructions() {
  const [loanData, setLoanData] = useState<LoanPaymentResponse | null>(null);
  const [selectedAccount, setSelectedAccount] = useState<string>("");
  const [copiedField, setCopiedField] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { loanId } = useParams();
  const token = useSelector((state: RootState) => state.member.token);

  useEffect(() => {
    const fetchLoanData = async () => {
      try {
        setIsLoading(true);

        if (!token) {
          throw new Error("No authentication token found");
        }

        // ADD THIS: Use the full backend URL
        const API_BASE_URL = "https://bank-account-backend-hgpt.onrender.com";

        const response = await fetch(
          `${API_BASE_URL}/api/v1/loans/${loanId}/payment-instructions`, // CHANGED: Added full URL
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch payment instructions");
        }

        const data = await response.json();
        console.log("Payment instructions API response:", data); // Debug log

        if (data.success) {
          setLoanData(data);
          setSelectedAccount(data.paymentAccounts[0]?.id || "");
        } else {
          throw new Error(data.message);
        }
      } catch (error) {
        console.error("Error fetching loan data:", error);
        toast.error("Failed to load payment instructions");

        // Redirect if loan not found or unauthorized
        if (
          error instanceof Error &&
          (error.message.includes("not found") ||
            error.message.includes("unauthorized") ||
            error.message.includes("404"))
        ) {
          navigate("/loans");
        }
      } finally {
        setIsLoading(false);
      }
    };

    if (loanId) {
      fetchLoanData();
    } else {
      toast.error("No loan application specified");
      navigate("/loans/apply");
    }
  }, [loanId, navigate, token]); // ADDED: token to dependency array

  const copyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      toast.success("Copied to clipboard!");
      setTimeout(() => setCopiedField(""), 2000);
    } catch (err) {
      toast.error("Failed to copy to clipboard");
    }
  };

  const getProviderIcon = (type: string) => {
    switch (type) {
      case "mobile_money":
        return <Smartphone className="h-5 w-5" />;
      case "bank_transfer":
        return <Building className="h-5 w-5" />;
      default:
        return <CreditCard className="h-5 w-5" />;
    }
  };

  const handleProceedToVerification = () => {
    if (loanData) {
      localStorage.setItem(
        "loanPaymentData",
        JSON.stringify({
          applicationId: loanData.applicationId,
          paymentReference: loanData.paymentReference,
          amount: loanData.upfrontPaymentAmount,
          selectedAccount: selectedAccount,
        })
      );
      navigate("/loans/payment/verify");
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#006064] mx-auto mb-4"></div>
          <p>Loading payment instructions...</p>
        </div>
      </div>
    );
  }

  if (!loanData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600">Failed to load payment instructions</p>
          <Button onClick={() => navigate("/loans/apply")} className="mt-4">
            Return to Application
          </Button>
        </div>
      </div>
    );
  }

  const selectedAccountData = loanData.paymentAccounts.find(
    (acc) => acc.id === selectedAccount
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-green-100 rounded-full">
              <FileText className="h-8 w-8 text-green-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Payment Required
              </h1>
              <p className="text-lg text-gray-600">
                Complete your upfront payment to process your loan application
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Payment Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Application Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Application Summary</span>
                  <Badge
                    variant="secondary"
                    className="bg-blue-100 text-blue-800"
                  >
                    Score: {loanData.applicationScore}/100
                  </Badge>
                </CardTitle>
                <CardDescription>
                  Your loan application has been pre-approved pending upfront
                  payment
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600">Application ID</p>
                    <p className="font-mono text-sm font-semibold">
                      {loanData.applicationId}
                    </p>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600">Payment Reference</p>
                    <p className="font-mono text-sm font-semibold">
                      {loanData.paymentReference}
                    </p>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600">Upfront Payment</p>
                    <p className="text-lg font-bold text-[#006064]">
                      ${loanData.upfrontPaymentAmount.toLocaleString()}
                    </p>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600">Payment Type</p>
                    <p className="text-sm font-semibold">20% Upfront</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Method Selection */}
            <Card>
              <CardHeader>
                <CardTitle>Select Payment Method</CardTitle>
                <CardDescription>
                  Choose how you'd like to make your upfront payment
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {loanData.paymentAccounts.map((account) => (
                    <Card
                      key={account.id}
                      className={`cursor-pointer transition-all duration-200 ${
                        selectedAccount === account.id
                          ? "border-2 border-[#006064] bg-[#006064]/5"
                          : "border border-gray-200 hover:border-gray-300"
                      }`}
                      onClick={() => setSelectedAccount(account.id)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div
                              className={`p-2 rounded-full ${
                                selectedAccount === account.id
                                  ? "bg-[#006064] text-white"
                                  : "bg-gray-100"
                              }`}
                            >
                              {getProviderIcon(account.type)}
                            </div>
                            <div>
                              <h3 className="font-semibold">
                                {account.provider}
                              </h3>
                              <p className="text-sm text-gray-600">
                                {account.bankName}
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-lg font-bold text-[#006064]">
                              ${account.amount.toLocaleString()}
                            </p>
                            <p className="text-xs text-gray-500 capitalize">
                              {account.type.replace("_", " ")}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Payment Instructions */}
            {selectedAccountData && (
              <Card>
                <CardHeader>
                  <CardTitle>Payment Instructions</CardTitle>
                  <CardDescription>
                    Follow these steps to complete your payment via{" "}
                    {selectedAccountData.provider}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Account Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-blue-50 rounded-lg">
                    <div>
                      <label className="text-sm font-medium text-gray-700">
                        Account Number
                      </label>
                      <div className="flex items-center justify-between mt-1">
                        <span className="font-mono text-lg font-semibold">
                          {selectedAccountData.accountNumber}
                        </span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            copyToClipboard(
                              selectedAccountData.accountNumber,
                              "account"
                            )
                          }
                        >
                          {copiedField === "account" ? (
                            <Check className="h-4 w-4" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-700">
                        Account Name
                      </label>
                      <div className="flex items-center justify-between mt-1">
                        <span className="font-semibold">
                          {selectedAccountData.accountName}
                        </span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            copyToClipboard(
                              selectedAccountData.accountName,
                              "name"
                            )
                          }
                        >
                          {copiedField === "name" ? (
                            <Check className="h-4 w-4" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <label className="text-sm font-medium text-gray-700">
                        Payment Reference
                      </label>
                      <div className="flex items-center justify-between mt-1">
                        <span className="font-mono text-sm">
                          {loanData.paymentReference}
                        </span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            copyToClipboard(
                              loanData.paymentReference,
                              "reference"
                            )
                          }
                        >
                          {copiedField === "reference" ? (
                            <Check className="h-4 w-4" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        Use this exact reference in your transfer description
                      </p>
                    </div>
                  </div>

                  {/* Step-by-step Instructions */}
                  <div className="space-y-3">
                    <h4 className="font-semibold">
                      Step-by-Step Instructions:
                    </h4>
                    {selectedAccountData.instructions.map(
                      (instruction, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-6 h-6 bg-[#006064] text-white rounded-full flex items-center justify-center text-xs font-semibold">
                            {index + 1}
                          </div>
                          <p className="text-gray-700 pt-0.5">{instruction}</p>
                        </div>
                      )
                    )}
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <p className="text-sm text-yellow-800">
                      <strong>Important:</strong> Include the payment reference
                      in your transfer description. Without the correct
                      reference, we cannot match your payment to your
                      application.
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Right Column - Next Steps & Actions */}
          <div className="space-y-6">
            {/* Next Steps */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-[#006064]" />
                  Next Steps
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {loanData.nextSteps.map((step, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs font-semibold">
                        {index + 1}
                      </div>
                      <p className="text-sm text-gray-700">{step}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Email Confirmation */}
            {loanData.emailSent && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Mail className="h-5 w-5 mr-2 text-[#006064]" />
                    Email Sent
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-3">
                    We've sent detailed payment instructions to your email
                    address.
                  </p>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => window.open("mailto:", "_blank")}
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Check Your Email
                  </Button>
                </CardContent>
              </Card>
            )}

            {/* Security Notice */}
            <Card className="bg-green-50 border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center text-green-800">
                  <Shield className="h-5 w-5 mr-2" />
                  Security Notice
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-green-700 space-y-2">
                  <li>• Only transfer to the accounts listed above</li>
                  <li>• Never share your banking details with anyone</li>
                  <li>• Contact support if you notice anything suspicious</li>
                  <li>• Keep your transaction receipt for verification</li>
                </ul>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button
                onClick={handleProceedToVerification}
                className="w-full bg-[#006064] text-white hover:bg-[#004d40]"
                size="lg"
              >
                I've Made the Payment
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <Button
                variant="outline"
                className="w-full"
                onClick={() => window.print()}
              >
                Print Instructions
              </Button>

              <Button
                variant="ghost"
                className="w-full"
                onClick={() => navigate("/loans/apply")}
              >
                Back to Application
              </Button>
            </div>
          </div>
        </div>

        {/* Support Section */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Need Help?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div>
                <h4 className="font-semibold mb-2">Customer Support</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>• Phone: 1-800-LOAN-NOW</li>
                  <li>• Email: loans@capitalcu.com</li>
                  <li>• Live Chat: Available 24/7</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Processing Time</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>• Payment Verification: 1-2 hours</li>
                  <li>• Loan Processing: 2-3 business days</li>
                  <li>• Funds Disbursement: Same day after approval</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Important Notes</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>
                    • Upfront payment is refundable if loan is not approved
                  </li>
                  <li>• Keep your transaction ID for verification</li>
                  <li>• Contact support for payment issues</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
