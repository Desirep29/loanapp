// components/Admin/RecentLoans.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Edit, 
  DollarSign,
  Clock,
  CheckCircle,
  XCircle,
  FileText,
  User,
  CircleCheck
} from "lucide-react";

interface Loan {
  _id: string;
  applicationId?: string;
  memberId?: {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    accountNumber: string;
  };
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  member?: {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
  userId?: {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
  };
  user?: {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
  };
  applicant?: {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
  };
  loanType: string;
  loanAmount: number;
  status: "pending" | "under_review" | "approved" | "rejected" | "disbursed" | "closed"; // CHANGED: 'completed' to 'closed'
  applicationDate: string;
}

interface RecentLoansProps {
  loans: Loan[];
  onStatusUpdate: (loan: Loan) => void;
  onDisburse: (loan: Loan) => void;
}

// UPDATED: Changed 'completed' to 'closed'
const statusConfig = {
  pending: { label: "Pending", color: "bg-yellow-100 text-yellow-800", icon: Clock },
  under_review: { label: "Under Review", color: "bg-blue-100 text-blue-800", icon: FileText },
  approved: { label: "Approved", color: "bg-green-100 text-green-800", icon: CheckCircle },
  rejected: { label: "Rejected", color: "bg-red-100 text-red-800", icon: XCircle },
  disbursed: { label: "Disbursed", color: "bg-purple-100 text-purple-800", icon: DollarSign },
  closed: { label: "Closed", color: "bg-gray-100 text-gray-800", icon: CircleCheck }, // CHANGED: 'completed' to 'closed'
};

// Helper function to safely get member information
const getMemberInfo = (loan: Loan) => {
  console.log("Loan data:", loan); // Debug log to see actual structure
  
  // Try memberId first (this is what your API returns)
  if (loan.memberId) {
    return {
      name: `${loan.memberId.firstName || ''} ${loan.memberId.lastName || ''}`.trim() || 'Unknown Member',
      email: loan.memberId.email || 'No email'
    };
  }
  
  // If no memberId, try direct fields (firstName, lastName from your API)
  if (loan.firstName || loan.lastName) {
    return {
      name: `${loan.firstName || ''} ${loan.lastName || ''}`.trim() || 'Unknown Member',
      email: loan.email || 'No email'
    };
  }
  
  // Fallback to other possible field names
  const member = loan.member || loan.userId || loan.user || loan.applicant;
  if (member) {
    return {
      name: `${member.firstName || 'Unknown'} ${member.lastName || ''}`.trim() || 'Unknown Member',
      email: member.email || 'No email'
    };
  }
  
  return {
    name: 'Unknown Member',
    email: 'No email'
  };
};

// Helper to get application ID
const getApplicationId = (loan: Loan) => {
  // Use applicationId if available, otherwise fall back to _id
  return loan.applicationId || loan._id || 'No ID';
};

// Safe status config access with fallback
const getStatusConfig = (status: string) => {
  return statusConfig[status as keyof typeof statusConfig] || {
    label: status.charAt(0).toUpperCase() + status.slice(1),
    color: "bg-gray-100 text-gray-800",
    icon: FileText
  };
};

export default function RecentLoans({ loans, onStatusUpdate, onDisburse }: RecentLoansProps) {
  if (!loans || loans.length === 0) {
    return (
      <div className="text-center py-8">
        <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
        <p className="text-gray-500">No recent loan applications</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {loans.map((loan) => {
        // Use the safe status config getter
        const statusConfigItem = getStatusConfig(loan.status);
        const StatusIcon = statusConfigItem.icon;
        const memberInfo = getMemberInfo(loan);
        
        return (
          <div key={loan._id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 transition-colors">
            <div className="flex items-center space-x-3 flex-1 min-w-0">
              <div className="p-2 bg-gray-100 rounded-full">
                <User className="h-4 w-4 text-gray-600" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-1">
                  <p className="font-semibold text-gray-900 truncate text-sm">
                    {memberInfo.name}
                  </p>
                  <Badge variant="outline" className="text-xs capitalize">
                    {loan.loanType?.replace('_', ' ') || 'Unknown Type'}
                  </Badge>
                </div>
                <div className="flex items-center space-x-4 text-xs text-gray-600">
                  <span className="font-mono">{getApplicationId(loan)}</span>
                  <span>₦{loan.loanAmount?.toLocaleString() || '0'}</span>
                  <span>{loan.applicationDate ? new Date(loan.applicationDate).toLocaleDateString() : 'Unknown date'}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Badge className={`${statusConfigItem.color} px-2 py-1 text-xs`}>
                <StatusIcon className="h-3 w-3 mr-1" />
                {statusConfigItem.label}
              </Badge>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => onStatusUpdate(loan)}
              >
                <Edit className="h-3 w-3" />
              </Button>

              {loan.status === "approved" && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onDisburse(loan)}
                >
                  <DollarSign className="h-3 w-3" />
                </Button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}