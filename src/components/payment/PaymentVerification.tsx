// components/Payment/PaymentVerification.tsx
"use client";

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, CheckCircle, XCircle, AlertCircle } from "lucide-react";
import { toast } from 'react-toastify';

export default function PaymentVerification() {
  const [formData, setFormData] = useState({
    transactionId: '',
    paymentDate: '',
    amount: '5000'
  });
  const [paymentReference, setPaymentReference] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [verificationStatus, setVerificationStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    // Check if user has token
    const token = localStorage.getItem('authToken');
    if (!token) {
      toast.error('Please verify your email first');
      window.location.href = '/verify-email';
      return;
    }

    const storedPaymentInfo = localStorage.getItem('paymentInfo');
    if (storedPaymentInfo) {
      const paymentInfo = JSON.parse(storedPaymentInfo);
      setPaymentReference(paymentInfo.paymentReference);
    } else {
      toast.error('Payment information not found');
      window.location.href = '/payment';
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.transactionId || !formData.paymentDate) {
      toast.error('Please fill in all required fields');
      return;
    }

    const token = localStorage.getItem('authToken');
    if (!token) {
      toast.error('Authentication token missing. Please verify your email again.');
      window.location.href = '/verify-email';
      return;
    }

    setIsLoading(true);
    try {
      console.log('🔄 Verifying payment with token:', token.substring(0, 20) + '...');

      const response = await fetch('https://firstintlservices.onrender.com/api/v1/payments/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          paymentReference,
          transactionId: formData.transactionId,
          paymentDate: formData.paymentDate,
          amount: parseInt(formData.amount)
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
        setVerificationStatus('success');
        toast.success('Payment verified successfully!');
        
        console.log('✅ Payment verification successful:', data);
        
        // Store account information
        localStorage.setItem('accountInfo', JSON.stringify(data.account));
        
        // Clear payment data but keep token for login
        localStorage.removeItem('paymentInfo');
        localStorage.removeItem('paymentInstructions');
        localStorage.removeItem('paymentReference');
        
        // Store the new token if provided (for immediate login)
        if (data.token) {
          localStorage.setItem('authToken', data.token);
        }
        
        // Redirect to success page after delay
        setTimeout(() => {
          window.location.href = '/membership-login'; // Redirect to login instead of success page
        }, 2000);
      } else {
        setVerificationStatus('error');
        toast.error(data.message || 'Payment verification failed');
      }
    } catch (error: any) {
      console.error('Verification error:', error);
      setVerificationStatus('error');
      toast.error(error.message || 'Failed to verify payment');
    } finally {
      setIsLoading(false);
    }
  };


  if (verificationStatus === 'success') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <Card className="w-full max-w-md text-center">
          <CardContent className="pt-6">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Payment Verified!</h2>
            <p className="text-gray-600 mb-4">
              Your account has been successfully activated. Redirecting to login...
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Verify Payment</h1>
          <p className="text-lg text-gray-600">
            Enter your transaction details to verify payment
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

        <Card>
          <CardHeader>
            <CardTitle>Transaction Details</CardTitle>
            <CardDescription>
              Enter the details from your bank or mobile money app
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="paymentReference" className="block text-sm font-medium text-gray-700 mb-1">
                  Payment Reference
                </label>
                <Input
                  id="paymentReference"
                  value={paymentReference}
                  disabled
                  className="bg-gray-50"
                />
                <p className="text-xs text-gray-500 mt-1">
                  This was provided in the payment instructions
                </p>
              </div>

              <div>
                <label htmlFor="transactionId" className="block text-sm font-medium text-gray-700 mb-1">
                  Transaction ID *
                </label>
                <Input
                  id="transactionId"
                  name="transactionId"
                  value={formData.transactionId}
                  onChange={handleInputChange}
                  placeholder="e.g., OPAY123456789"
                  required
                  disabled={!localStorage.getItem('authToken')}
                />
                <p className="text-xs text-gray-500 mt-1">
                  Find this in your transaction history
                </p>
              </div>

              <div>
                <label htmlFor="paymentDate" className="block text-sm font-medium text-gray-700 mb-1">
                  Payment Date *
                </label>
                <Input
                  id="paymentDate"
                  name="paymentDate"
                  type="date"
                  value={formData.paymentDate}
                  onChange={handleInputChange}
                  required
                  disabled={!localStorage.getItem('authToken')}
                />
              </div>

              <div>
                <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
                  Amount Paid ($)
                </label>
                <Input
                  id="amount"
                  name="amount"
                  type="number"
                  value={formData.amount}
                  onChange={handleInputChange}
                  min="5000"
                  max="5000"
                  disabled={!localStorage.getItem('authToken')}
                />
                <p className="text-xs text-gray-500 mt-1">
                  Should be exactly $5,000
                </p>
              </div>

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
                disabled={isLoading || !localStorage.getItem('authToken')}
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

            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">Where to find Transaction ID:</h4>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Check your bank transaction history</li>
                <li>• Look in your mobile money app notifications</li>
                <li>• Check your SMS for transaction confirmation</li>
                <li>• Contact your bank if you can't find it</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}