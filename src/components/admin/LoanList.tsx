"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Eye, 
  Edit, 
  DollarSign,
  Clock,
  CheckCircle,
  XCircle,
  FileText,
  User
} from "lucide-react";

interface Loan {
  _id: string;
  applicationId: string;
  member: {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
  loanType: string;
  loanAmount: number;
  status: "pending" | "under_review" | "approved" | "rejected" | "disbursed" | "completed";
  applicationDate: string;
  approvedAmount?: number;
  interestRate: number;
  repaymentTerm: number;
}

interface LoanListProps {
  loans: Loan[];
  isLoading: boolean;
  onStatusUpdate: (loan: Loan) => void;
  onDisburse: (loan: Loan) => void;
}

const statusConfig = {
  pending: { label: "Pending", color: "bg-yellow-100 text-yellow-800", icon: Clock },
  under_review: { label: "Under Review", color: "bg-blue-100 text-blue-800", icon: FileText },
  approved: { label: "Approved", color: "bg-green-100 text-green-800", icon: CheckCircle },
  rejected: { label: "Rejected", color: "bg-red-100 text-red-800", icon: XCircle },
  disbursed: { label: "Disbursed", color: "bg-purple-100 text-purple-800", icon: DollarSign },
  completed: { label: "Completed", color: "bg-gray-100 text-gray-800", icon: CheckCircle }
};

export default function LoanList({ loans, isLoading, onStatusUpdate, onDisburse }: LoanListProps) {
  if (isLoading) {
    return (
      <div className="space-y-4">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="animate-pulse p-4 border rounded-lg">
            <div className="flex justify-between items-center">
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded w-32"></div>
                <div className="h-3 bg-gray-200 rounded w-24"></div>
              </div>
              <div className="h-6 bg-gray-200 rounded w-20"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (loans.length === 0) {
    return (
      <div className="text-center py-12">
        <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
        <p className="text-gray-500">No loans found</p>
        <p className="text-sm text-gray-400 mt-1">
          {loans.length === 0 ? "No loan applications match your criteria" : "No loans in this category"}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {loans.map((loan) => {
        const StatusIcon = statusConfig[loan.status].icon;
        
        return (
          <div key={loan._id} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 flex-1">
                <div className="p-2 bg-gray-100 rounded-full">
                  <User className="h-4 w-4 text-gray-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-1">
                    <p className="font-semibold text-gray-900 truncate">
                      {loan.member.firstName} {loan.member.lastName}
                    </p>
                    <Badge variant="outline" className="text-xs">
                      {loan.loanType}
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span className="font-mono">{loan.applicationId}</span>
                    <span>{loan.member.email}</span>
                    <span>₦{loan.loanAmount.toLocaleString()}</span>
                    <span>{new Date(loan.applicationDate).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Badge className={`${statusConfig[loan.status].color} px-2 py-1`}>
                  <StatusIcon className="h-3 w-3 mr-1" />
                  {statusConfig[loan.status].label}
                </Badge>

                <div className="flex items-center space-x-1">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onStatusUpdate(loan)}
                  >
                    <Edit className="h-3 w-3" />
                  </Button>

                  {loan.status === "approved" && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => onDisburse(loan)}
                    >
                      <DollarSign className="h-3 w-3" />
                    </Button>
                  )}

                  <Button variant="outline" size="sm">
                    <Eye className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            {loan.approvedAmount && (
              <div className="mt-2 pt-2 border-t border-gray-100">
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span>
                    <strong>Approved:</strong> ₦{loan.approvedAmount.toLocaleString()}
                  </span>
                  <span>
                    <strong>Interest:</strong> {loan.interestRate}%
                  </span>
                  <span>
                    <strong>Term:</strong> {loan.repaymentTerm} months
                  </span>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}