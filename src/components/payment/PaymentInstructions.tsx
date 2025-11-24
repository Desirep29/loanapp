// components/Payment/PaymentInstructions.tsx
"use client";

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Copy, Check, ArrowRight, Smartphone } from "lucide-react";
import { toast } from 'react-toastify';

interface PaymentInfo {
  accountNumber: string;
  accountName: string;
  amount: number;
  currency: string;
  paymentReference: string;
  selectedPaymentAccount: {
    provider: string;
    accountNumber: string;
    accountName: string;
    bankName: string;
  };
}

export default function PaymentInstructions() {
  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo | null>(null);
  const [instructions, setInstructions] = useState<string[]>([]);
  const [copiedField, setCopiedField] = useState<string>('');

  useEffect(() => {
    const storedPaymentInfo = localStorage.getItem('paymentInfo');
    const storedInstructions = localStorage.getItem('paymentInstructions');

    if (storedPaymentInfo && storedInstructions) {
      setPaymentInfo(JSON.parse(storedPaymentInfo));
      setInstructions(JSON.parse(storedInstructions));
    } else {
      toast.error('Payment information not found');
      window.location.href = '/payment';
    }
  }, []);

  const copyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      toast.success(`Copied to clipboard!`);
      setTimeout(() => setCopiedField(''), 2000);
    } catch (err) {
      toast.error('Failed to copy to clipboard');
    }
  };

  const handleProceedToVerification = () => {
    window.location.href = '/payment/verify';
  };

  if (!paymentInfo) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p>Loading payment instructions...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Payment Instructions</h1>
          <p className="text-lg text-gray-600">
            Follow these steps to complete your payment
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Payment Details Card */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="text-lg">Payment Details</CardTitle>
              <CardDescription>
                Use these details for your transfer
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div>
                  <label className="text-sm font-medium text-gray-500">Account Number</label>
                  <div className="flex items-center justify-between mt-1">
                    <span className="font-mono text-lg font-semibold">
                      {paymentInfo.selectedPaymentAccount.accountNumber}
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => copyToClipboard(paymentInfo.selectedPaymentAccount.accountNumber, 'account')}
                    >
                      {copiedField === 'account' ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-500">Account Name</label>
                  <div className="flex items-center justify-between mt-1">
                    <span className="font-semibold">
                      {paymentInfo.selectedPaymentAccount.accountName}
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => copyToClipboard(paymentInfo.selectedPaymentAccount.accountName, 'name')}
                    >
                      {copiedField === 'name' ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-500">Amount</label>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-2xl font-bold text-[#006064]">
                      ${paymentInfo.amount.toLocaleString()}
                    </span>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-500">Payment Reference</label>
                  <div className="flex items-center justify-between mt-1">
                    <span className="font-mono text-sm">
                      {paymentInfo.paymentReference}
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => copyToClipboard(paymentInfo.paymentReference, 'reference')}
                    >
                      {copiedField === 'reference' ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </Button>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Use this as transfer description
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                <p className="text-sm text-yellow-800">
                  <strong>Important:</strong> Include the payment reference in your transfer description
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Instructions Card */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-lg">Step-by-Step Instructions</CardTitle>
              <CardDescription>
                Follow these steps to complete your payment via {paymentInfo.selectedPaymentAccount.provider}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {instructions.map((instruction, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#006064] text-white rounded-full flex items-center justify-center text-sm font-semibold">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 pt-1">{instruction}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">After Payment:</h4>
                <p className="text-sm text-blue-800">
                  Once you've completed the transfer, click the button below to verify your payment. 
                  You'll need your transaction ID from your bank or mobile money app.
                </p>
              </div>

              <div className="mt-6 flex justify-end">
                <Button 
                  onClick={handleProceedToVerification}
                  className="bg-[#006064] text-white hover:bg-[#004d40]"
                >
                  I've Made the Payment
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <Smartphone className="h-8 w-8 text-[#006064]" />
                <div>
                  <h4 className="font-semibold">Need Help?</h4>
                  <p className="text-sm text-gray-600">Contact support if you encounter any issues</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <Copy className="h-8 w-8 text-[#006064]" />
                <div>
                  <h4 className="font-semibold">Save Details</h4>
                  <p className="text-sm text-gray-600">Take a screenshot for reference</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}