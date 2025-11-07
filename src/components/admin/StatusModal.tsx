// components/Admin/StatusModal.tsx
"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import type { RootState } from "@/redux/store";

interface StatusModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  loan: any;
  onStatusUpdate: (loanId: string, status: string, notes?: string) => void;
}

const statusOptions = [
  { value: "pending", label: "Pending Review", description: "Application received, awaiting initial review" },
  { value: "under_review", label: "Under Review", description: "Application is being reviewed by loan officer" },
  { value: "approved", label: "Approved", description: "Application approved, ready for disbursement" },
  { value: "rejected", label: "Rejected", description: "Application rejected" },
  { value: "disbursed", label: "Disbursed", description: "Funds have been disbursed to member" },
  { value: "closed", label: "Closed", description: "Loan fully repaid and closed" },
];

// Helper function to get member name from loan data
const getMemberName = (loan: any) => {
  if (loan?.memberId?.firstName && loan?.memberId?.lastName) {
    return `${loan.memberId.firstName} ${loan.memberId.lastName}`;
  }
  if (loan?.firstName && loan?.lastName) {
    return `${loan.firstName} ${loan.lastName}`;
  }
  return "Unknown Member";
};

// Helper function to get application identifier
const getApplicationIdentifier = (loan: any) => {
  return loan?._id || loan?.applicationId || "No ID";
};

export default function StatusModal({ open, onOpenChange, loan, onStatusUpdate }: StatusModalProps) {
  const [selectedStatus, setSelectedStatus] = useState(loan?.status || "pending");
  const [notes, setNotes] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const token = useSelector((state: RootState) => state.member.token);

  const handleSubmit = async () => {
    if (!loan) return;

    setIsLoading(true);
    try {
      const response = await fetch(`http://localhost:5000/api/v1/loans/admin/${loan._id}/status`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          status: selectedStatus,
          notes: notes.trim() || undefined,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update status");
      }

      const result = await response.json();
      if (result.success) {
        toast.success("Loan status updated successfully");
        onStatusUpdate(loan._id, selectedStatus, notes);
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      console.error("Error updating status:", error);
      toast.error("Failed to update loan status");
    } finally {
      setIsLoading(false);
    }
  };

  // Debug log to see the actual loan structure
  console.log("StatusModal loan data:", loan);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Update Loan Status</DialogTitle>
          <DialogDescription>
            Update the status for {getMemberName(loan)}'s application
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div>
            <Label className="text-base font-semibold">Application Details</Label>
            <div className="mt-2 p-3 bg-gray-50 rounded-lg space-y-1 text-sm">
              <p><strong>Application ID:</strong> {getApplicationIdentifier(loan)}</p>
              <p><strong>Member:</strong> {getMemberName(loan)}</p>
              <p><strong>Email:</strong> {loan?.memberId?.email || loan?.email || 'No email'}</p>
              <p><strong>Loan Amount:</strong> ₦{loan?.loanAmount?.toLocaleString() || '0'}</p>
              <p><strong>Loan Type:</strong> {loan?.loanType ? loan.loanType.replace('_', ' ') : 'Unknown'}</p>
              <p><strong>Current Status:</strong> {loan?.status || 'Unknown'}</p>
            </div>
          </div>

          <div>
            <Label className="text-base font-semibold">New Status</Label>
            <Select value={selectedStatus} onValueChange={setSelectedStatus}>
              <SelectTrigger className="mt-2">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                {statusOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    <div>
                      <div className="font-medium">{option.label}</div>
                      <div className="text-sm text-gray-500">{option.description}</div>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="notes">Notes (Optional)</Label>
            <Textarea
              id="notes"
              placeholder="Add any notes or comments about this status change..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="mt-1"
              rows={3}
            />
          </div>

          <div className="flex justify-end space-x-3 pt-4">
            <Button
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={isLoading}
            >
              Cancel
            </Button>
            <Button
              onClick={handleSubmit}
              disabled={isLoading || selectedStatus === loan?.status}
              className="bg-[#006064] text-white hover:bg-[#004d40]"
            >
              {isLoading ? "Updating..." : "Update Status"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}