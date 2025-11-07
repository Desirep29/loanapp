// components/Payment/PaymentSuccess.tsx
"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle, Download, Mail } from "lucide-react";

interface AccountInfo {
  accountNumber: string;
  accountStatus: string;
  activatedAt: string;
  balance: {
    checking: number;
    savings: number;
  };
}

export default function PaymentSuccess() {
  const [accountInfo, setAccountInfo] = useState<AccountInfo | null>(null);

  useEffect(() => {
    const storedAccountInfo = localStorage.getItem("accountInfo");
    if (storedAccountInfo) {
      setAccountInfo(JSON.parse(storedAccountInfo));
    }
  }, []);

  const handleDownloadDetails = () => {
    // Create a text file with account details
    const details = `
First International Financial Services - Account Details

Account Number: ${accountInfo?.accountNumber}
Account Status: ${accountInfo?.accountStatus}
Activated: ${new Date(accountInfo?.activatedAt || "").toLocaleDateString()}

Account Balances:
- Checking: ₦${accountInfo?.balance.checking.toLocaleString()}
- Savings: ₦${accountInfo?.balance.savings.toLocaleString()}

Welcome to First International Financial Services!
    `.trim();

    const blob = new Blob([details], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `account-details-${accountInfo?.accountNumber}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleGoToLogin = () => {
    // Clear all temporary storage
    localStorage.removeItem("accountInfo");
    localStorage.removeItem("userEmail");
    sessionStorage.removeItem("userEmail");
    localStorage.removeItem("registrationData");

    window.location.href = "/membership-login";
  };

  if (!accountInfo) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading account information...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Welcome to First International Financial Services!
          </h1>
          <p className="text-xl text-gray-600">
            Your account has been successfully activated
          </p>
        </div>

        <Card className="mb-6">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Account Activated</CardTitle>
            <CardDescription>
              You can now access all banking services
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
              <div className="p-4 bg-green-50 rounded-lg">
                <div className="text-3xl font-bold text-[#006064] mb-2">
                  {accountInfo.accountNumber}
                </div>
                <p className="text-sm text-gray-600">Your Account Number</p>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-[#006064] mb-2">
                  ₦{accountInfo.balance.checking.toLocaleString()}
                </div>
                <p className="text-sm text-gray-600">Opening Balance</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-[#006064]" />
                What's Next?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Check your email for welcome package</li>
                <li>• Download our mobile banking app</li>
                <li>• Set up online banking access</li>
                <li>• Explore our financial products</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Download className="h-5 w-5 mr-2 text-[#006064]" />
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button
                onClick={handleDownloadDetails}
                variant="outline"
                className="w-full justify-start"
              >
                <Download className="h-4 w-4 mr-2" />
                Download Account Details
              </Button>
              <Button
                onClick={handleGoToLogin}
                className="w-full justify-start bg-[#006064] text-white hover:bg-[#004d40]"
              >
                Proceed to Login
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="font-semibold text-blue-900 mb-3">
            Important Information
          </h3>
          <div className="text-sm text-blue-800 space-y-2">
            <p>
              <strong>Internet Banking:</strong> Access your account online 24/7
            </p>
            <p>
              <strong>Mobile App:</strong> Download our app for banking on the
              go
            </p>
            <p>
              <strong>Customer Support:</strong> Available 24/7 to assist you
            </p>
            <p>
              <strong>Security:</strong> Your funds are protected and insured
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
