// components/Loans/LoanStatus.tsx
"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { 
  CheckCircle, 
  Clock, 
  FileText, 
  AlertCircle, 
  DollarSign, 
  Calendar,
  User,
  TrendingUp,
  Download,
  ArrowLeft,
  Mail,
  Phone,
  Upload
} from "lucide-react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "@/redux/store";
import { Progress } from "../ui/progress";

interface LoanStatusData {
  applicationId: string;
  status: "pending" | "under_review" | "approved" | "rejected" | "disbursed" | "completed";
  statusMessage: string;
  loanAmount: number;
  approvedAmount?: number;
  interestRate: number;
  repaymentTerm: number;
  monthlyPayment: number;
  applicationDate: string;
  estimatedDecisionDate: string;
  disbursementDate?: string;
  nextPaymentDate?: string;
  loanOfficer?: {
    name: string;
    email: string;
    phone: string;
  };
  documentsRequired: string[];
  progress: {
    step: number;
    totalSteps: number;
    currentStep: string;
    completed: boolean;
  };
  timeline: {
    date: string;
    status: string;
    description: string;
    completed: boolean;
  }[];
}

const statusConfig = {
  pending: { label: "Pending Review", color: "bg-yellow-100 text-yellow-800", icon: Clock },
  under_review: { label: "Under Review", color: "bg-blue-100 text-blue-800", icon: FileText },
  approved: { label: "Approved", color: "bg-green-100 text-green-800", icon: CheckCircle },
  rejected: { label: "Rejected", color: "bg-red-100 text-red-800", icon: AlertCircle },
  disbursed: { label: "Disbursed", color: "bg-purple-100 text-purple-800", icon: DollarSign },
  completed: { label: "Completed", color: "bg-gray-100 text-gray-800", icon: CheckCircle }
};

export default function LoanStatus() {
  const [loanData, setLoanData] = useState<LoanStatusData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const token = useSelector((state: RootState) => state.member.token);

  useEffect(() => {
    const fetchLoanStatus = async () => {
      try {
        setIsLoading(true);
        
        // In a real app, you'd fetch the latest application status
        // For demo, we'll use mock data that simulates API response
        const mockLoanData: LoanStatusData = {
          applicationId: "690af31ca15a43dfa67a46b5",
          status: "under_review",
          statusMessage: "Your loan application is currently under review by our credit team.",
          loanAmount: 700000,
          approvedAmount: 700000,
          interestRate: 12.5,
          repaymentTerm: 36,
          monthlyPayment: 23500,
          applicationDate: "2024-01-15",
          estimatedDecisionDate: "2024-01-22",
          loanOfficer: {
            name: "Sarah Johnson",
            email: "s.johnson@capitalcu.com",
            phone: "+1-555-0123"
          },
          documentsRequired: [
            "Recent bank statements (3 months)",
            "Government-issued ID",
            "Proof of income",
            "Utility bill for address verification"
          ],
          progress: {
            step: 3,
            totalSteps: 5,
            currentStep: "Credit Assessment",
            completed: false
          },
          timeline: [
            {
              date: "2024-01-15 10:30 AM",
              status: "Application Submitted",
              description: "Loan application successfully submitted",
              completed: true
            },
            {
              date: "2024-01-15 11:15 AM",
              status: "Payment Verified",
              description: "Upfront payment confirmed and verified",
              completed: true
            },
            {
              date: "2024-01-16 09:00 AM",
              status: "Document Review",
              description: "Documents are being reviewed by our team",
              completed: true
            },
            {
              date: "2024-01-17",
              status: "Credit Assessment",
              description: "Credit check and financial assessment in progress",
              completed: false
            },
            {
              date: "2024-01-22",
              status: "Final Decision",
              description: "Expected decision date",
              completed: false
            }
          ]
        };

        // Simulate API delay
        setTimeout(() => {
          setLoanData(mockLoanData);
          setIsLoading(false);
        }, 1000);

      } catch (error) {
        console.error("Error fetching loan status:", error);
        toast.error("Failed to load loan status");
        setIsLoading(false);
      }
    };

    fetchLoanStatus();
  }, [token]);

  const StatusIcon = statusConfig[loanData?.status || "pending"].icon;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#006064] mx-auto mb-4"></div>
          <p>Loading loan status...</p>
        </div>
      </div>
    );
  }

  if (!loanData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">Failed to load loan status</p>
          <Button onClick={() => navigate("/loans/apply")}>
            Apply for a Loan
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <Button
              variant="ghost"
              onClick={() => navigate("/loans")}
              className="mb-4"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Loans
            </Button>
            <h1 className="text-3xl font-bold text-gray-900">Loan Application Status</h1>
            <p className="text-gray-600 mt-2">
              Track the progress of your loan application
            </p>
          </div>
          <Badge className={`${statusConfig[loanData.status].color} px-3 py-1 text-sm font-medium`}>
            <StatusIcon className="h-4 w-4 mr-1" />
            {statusConfig[loanData.status].label}
          </Badge>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Progress & Timeline */}
          <div className="lg:col-span-2 space-y-6">
            {/* Progress Bar */}
            <Card>
              <CardHeader>
                <CardTitle>Application Progress</CardTitle>
                <CardDescription>
                  {loanData.progress.completed 
                    ? "Your application has been processed successfully"
                    : `Currently at: ${loanData.progress.currentStep}`
                  }
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Step {loanData.progress.step} of {loanData.progress.totalSteps}</span>
                  <span>{Math.round((loanData.progress.step / loanData.progress.totalSteps) * 100)}% Complete</span>
                </div>
                <Progress value={(loanData.progress.step / loanData.progress.totalSteps) * 100} className="h-2" />
                
                <div className="grid grid-cols-5 gap-2 text-xs text-center mt-4">
                  {["Applied", "Payment", "Documents", "Review", "Decision"].map((step, index) => (
                    <div key={step} className={`text-center ${index < loanData.progress.step ? 'text-green-600' : 'text-gray-400'}`}>
                      <div className={`w-3 h-3 rounded-full mx-auto mb-1 ${index < loanData.progress.step ? 'bg-green-500' : 'bg-gray-300'}`} />
                      {step}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Timeline */}
            <Card>
              <CardHeader>
                <CardTitle>Application Timeline</CardTitle>
                <CardDescription>
                  Track your application through each stage
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {loanData.timeline.map((event, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                        event.completed ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'
                      }`}>
                        {event.completed ? (
                          <CheckCircle className="h-4 w-4" />
                        ) : (
                          <Clock className="h-4 w-4" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className={`font-medium ${
                            event.completed ? 'text-green-900' : 'text-gray-900'
                          }`}>
                            {event.status}
                          </p>
                          <span className="text-sm text-gray-500">{event.date}</span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{event.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Status Message */}
            <Card className={loanData.status === 'rejected' ? 'border-red-200 bg-red-50' : ''}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  {loanData.status === 'rejected' ? (
                    <AlertCircle className="h-5 w-5 text-red-600 mr-2" />
                  ) : (
                    <FileText className="h-5 w-5 text-[#006064] mr-2" />
                  )}
                  Status Update
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className={loanData.status === 'rejected' ? 'text-red-800' : 'text-gray-700'}>
                  {loanData.statusMessage}
                </p>
                {loanData.status === 'rejected' && (
                  <Button variant="outline" className="mt-4 border-red-300 text-red-700 hover:bg-red-100">
                    View Reasons & Reapply
                  </Button>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Loan Details & Actions */}
          <div className="space-y-6">
            {/* Loan Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Loan Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600">Application ID</p>
                    <p className="font-mono font-semibold">{loanData.applicationId}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Applied Amount</p>
                    <p className="font-semibold">₦{loanData.loanAmount.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Approved Amount</p>
                    <p className="font-semibold">
                      {loanData.approvedAmount 
                        ? `₦${loanData.approvedAmount.toLocaleString()}`
                        : "Pending"
                      }
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600">Interest Rate</p>
                    <p className="font-semibold">{loanData.interestRate}%</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Term</p>
                    <p className="font-semibold">{loanData.repaymentTerm} months</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Monthly Payment</p>
                    <p className="font-semibold">₦{loanData.monthlyPayment.toLocaleString()}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Important Dates */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-[#006064]" />
                  Important Dates
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="text-sm text-gray-600">Application Date</p>
                  <p className="font-semibold">{new Date(loanData.applicationDate).toLocaleDateString()}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Estimated Decision</p>
                  <p className="font-semibold">{new Date(loanData.estimatedDecisionDate).toLocaleDateString()}</p>
                </div>
                {loanData.disbursementDate && (
                  <div>
                    <p className="text-sm text-gray-600">Disbursement Date</p>
                    <p className="font-semibold">{new Date(loanData.disbursementDate).toLocaleDateString()}</p>
                  </div>
                )}
                {loanData.nextPaymentDate && (
                  <div>
                    <p className="text-sm text-gray-600">Next Payment Due</p>
                    <p className="font-semibold">{new Date(loanData.nextPaymentDate).toLocaleDateString()}</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Loan Officer Contact */}
            {loanData.loanOfficer && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <User className="h-5 w-5 mr-2 text-[#006064]" />
                    Your Loan Officer
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="font-semibold">{loanData.loanOfficer.name}</p>
                    <p className="text-sm text-gray-600">Senior Loan Specialist</p>
                  </div>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <a href={`mailto:${loanData.loanOfficer.email}`}>
                        <Mail className="h-4 w-4 mr-2" />
                        {loanData.loanOfficer.email}
                      </a>
                    </Button>
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <a href={`tel:${loanData.loanOfficer.phone}`}>
                        <Phone className="h-4 w-4 mr-2" />
                        {loanData.loanOfficer.phone}
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button className="w-full bg-[#006064] text-white hover:bg-[#004d40]">
                <Download className="h-4 w-4 mr-2" />
                Download Application Summary
              </Button>
              
              <Button variant="outline" className="w-full">
                <Mail className="h-4 w-4 mr-2" />
                Contact Support
              </Button>

              {loanData.status === 'approved' && (
                <Button className="w-full bg-green-600 text-white hover:bg-green-700">
                  <DollarSign className="h-4 w-4 mr-2" />
                  Accept Loan Offer
                </Button>
              )}

              {loanData.status === 'rejected' && (
                <Button variant="outline" className="w-full">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Apply for Different Loan
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Documents Section */}
        {loanData.documentsRequired.length > 0 && (
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Required Documents</CardTitle>
              <CardDescription>
                Please ensure these documents are ready for verification
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {loanData.documentsRequired.map((doc, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <FileText className="h-4 w-4 text-gray-400" />
                    <span className="text-gray-700">{doc}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="mt-4">
                <Upload className="h-4 w-4 mr-2" />
                Upload Documents
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}