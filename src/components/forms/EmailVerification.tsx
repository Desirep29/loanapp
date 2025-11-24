

import { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Mail } from "lucide-react";
import { verifyEmail, resendVerificationCode } from '@/service/apiCall';
import { toast } from 'react-toastify';

export default function EmailVerification() {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [isLoading, setIsLoading] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [countdown, setCountdown] = useState(300);
  const [userEmail, setUserEmail] = useState<string>('');
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    console.log('🔍 EmailVerification mounted - checking for stored email...');
    
    const getStoredEmail = () => {
      // Check all possible storage locations
      const storageChecks = {
        'localStorage.userEmail': localStorage.getItem('userEmail'),
        'sessionStorage.userEmail': sessionStorage.getItem('userEmail'),
        'URLParams.email': new URLSearchParams(window.location.search).get('email'),
        'localStorage.registrationData': (() => {
          try {
            const data = localStorage.getItem('registrationData');
            return data ? JSON.parse(data).email : null;
          } catch (e) {
            return null;
          }
        })()
      };

      console.log('📋 Storage check results:', storageChecks);

      // Find the first valid email
      for (const [source, email] of Object.entries(storageChecks)) {
        if (email && typeof email === 'string' && email.includes('@')) {
          console.log(`✅ Found email in ${source}:`, email);
          return email;
        }
      }

      console.log('❌ No email found in any storage location');
      return '';
    };

    const email = getStoredEmail();
    setUserEmail(email);

    // Focus first input
    const timer = setTimeout(() => {
      inputRefs.current[0]?.focus();
    }, 100);

    // Countdown timer
    const countdownTimer = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    
    return () => {
      clearTimeout(timer);
      clearInterval(countdownTimer);
    };
  }, []);

  const [manualEmail, setManualEmail] = useState('');

  const setInputRef = (index: number) => (el: HTMLInputElement | null) => {
    inputRefs.current[index] = el;
  };

  const handleChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
    
    if (index === 5 && value) {
      const fullCode = [...newCode.slice(0, index), value].join('');
      if (fullCode.length === 6) {
        handleSubmit(fullCode);
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text');
    const digits = pastedData.replace(/\D/g, '').split('').slice(0, 6);
    
    const newCode = [...code];
    digits.forEach((digit, index) => {
      newCode[index] = digit;
    });
    setCode(newCode);
    
    const nextEmptyIndex = digits.length < 6 ? digits.length : 5;
    inputRefs.current[nextEmptyIndex]?.focus();
    
    if (digits.length === 6) {
      handleSubmit(digits.join(''));
    }
  };

  const handleResendCode = async () => {
    const emailToUse = userEmail || manualEmail;
    
    if (!emailToUse) {
      toast.error('Please enter your email address');
      return;
    }

    console.log('🔄 Resending code to:', emailToUse);
    setIsResending(true);
    try {
      await resendVerificationCode(emailToUse);
      setCountdown(300);
      setCode(['', '', '', '', '', '']);
      inputRefs.current[0]?.focus();
      toast.success('Verification code sent successfully!');
      
      // Store the manually entered email
      if (manualEmail && !userEmail) {
        setUserEmail(manualEmail);
        localStorage.setItem('userEmail', manualEmail);
      }
    } catch (error: any) {
      console.error('❌ Failed to resend code:', error);
      toast.error(error.response?.data?.message || 'Failed to resend verification code');
    } finally {
      setIsResending(false);
    }
  };

  const handleSubmit = async (verificationCode?: string) => {
    const codeToVerify = verificationCode || code.join('');
    const emailToUse = userEmail || manualEmail;
    
    if (codeToVerify.length !== 6) {
      toast.error('Please enter all 6 digits');
      return;
    }

    if (!emailToUse) {
      toast.error('Please enter your email address');
      return;
    }

    console.log('🚀 Submitting verification:', {
      email: emailToUse,
      code: codeToVerify
    });

    setIsLoading(true);
    
    try {
      const response = await verifyEmail({ 
        email: emailToUse, 
        verificationCode: codeToVerify 
      });

      console.log('✅ Verification successful:', response);
      toast.success(response?.message || 'Email verified successfully!');
      
      // Clear stored email after successful verification
      localStorage.removeItem('userEmail');
      sessionStorage.removeItem('userEmail');
      localStorage.removeItem('registrationData');
      
      if (response.token) {
        localStorage.setItem('authToken', response.token);
      }
      
      setTimeout(() => {
        window.location.href = '/payment';
      }, 1500);
      
    } catch (error: any) {
      console.error('❌ Verification failed:', error);
      console.error('Error details:', {
        status: error.response?.status,
        data: error.response?.data,
        message: error.message
      });
      
      toast.error(error.response?.data?.message || 'Verification failed. Please try again.');
      
      setCode(['', '', '', '', '', '']);
      inputRefs.current[0]?.focus();
    } finally {
      setIsLoading(false);
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleSubmit();
  };

  // Show manual email input if no email is found
  const showManualEmail = !userEmail;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center space-y-2">
          <div className="flex justify-center mb-2">
            <Mail className="h-8 w-8 text-[#006064]" />
          </div>
          <CardTitle className="text-xl sm:text-2xl">Verify Your Email</CardTitle>
          <CardDescription className="text-sm sm:text-base">
            Enter the 6-digit code sent to your email address
          </CardDescription>
          
          {userEmail ? (
            <div className="text-center">
              <p className="text-sm text-gray-600">Code sent to:</p>
              <p className="text-sm font-medium text-gray-800 bg-blue-50 p-2 rounded mt-1">
                {userEmail}
              </p>
            </div>
          ) : (
            <p className="text-sm text-yellow-600 bg-yellow-50 p-2 rounded">
              Please enter the email you used for registration
            </p>
          )}
        </CardHeader>
        
        <CardContent>
          {/* Manual email input */}
          {showManualEmail && (
            <div className="mb-6 p-4 bg-gray-50 rounded-lg border">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Email Address *
              </label>
              <Input
                type="email"
                value={manualEmail}
                onChange={(e) => setManualEmail(e.target.value)}
                placeholder="Enter the email you used for registration"
                className="w-full"
                required
              />
              <p className="text-xs text-gray-500 mt-1">
                This should be the same email you used during registration
              </p>
            </div>
          )}

          <form onSubmit={handleFormSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3 text-center">
                6-Digit Verification Code
              </label>
              <div className="flex justify-between space-x-2">
                {code.map((digit, index) => (
                  <Input
                    key={index}
                    ref={setInputRef(index)}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleChange(e.target.value, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    onPaste={index === 0 ? handlePaste : undefined}
                    className="h-12 w-12 text-center text-lg font-semibold"
                    required
                    disabled={isLoading}
                  />
                ))}
              </div>
            </div>

            <Button
              type="submit"
              disabled={isLoading || code.some(digit => !digit) || (!userEmail && !manualEmail)}
              className="w-full bg-[#006064] text-white hover:bg-[#004d40]"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Verifying...
                </>
              ) : (
                'Verify Email'
              )}
            </Button>

            <div className="text-center space-y-2">
              <p className="text-sm text-gray-600">
                {countdown > 0 
                  ? `Resend code in ${Math.floor(countdown / 60)}:${(countdown % 60).toString().padStart(2, '0')}`
                  : "Didn't receive the code?"
                }
              </p>
              <Button
                type="button"
                variant="link"
                disabled={countdown > 0 || isLoading || isResending || (!userEmail && !manualEmail)}
                onClick={handleResendCode}
                className="text-[#006064] hover:text-[#004d40]"
              >
                {isResending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  'Resend Verification Code'
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}