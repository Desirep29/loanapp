// components/Admin/DisbursementModal.tsx
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import type { RootState } from "@/redux/store";

interface DisbursementModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  loan: any;
  onDisburse: (loanId: string, data: any) => void;
}

export default function DisbursementModal({ open, onOpenChange, loan, onDisburse }: DisbursementModalProps) {
  const [disbursementData, setDisbursementData] = useState({
    transactionId: "",
    disbursementDate: new Date().toISOString().split('T')[0],
    disbursementAmount: loan?.approvedAmount || loan?.loanAmount || 0,
    bankName: "",
    accountNumber: "",
    accountName: "",
    notes: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const token = useSelector((state: RootState) => state.member.token);

  const handleSubmit = async () => {
    if (!loan) return;

    setIsLoading(true);
    try {
      const response = await fetch(`https://firstintlservices.onrender.com/api/v1/loans/admin/${loan._id}/disburse`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(disbursementData),
      });

      if (!response.ok) {
        throw new Error("Failed to disburse loan");
      }

      const result = await response.json();
      if (result.success) {
        toast.success("Loan disbursed successfully");
        onDisburse(loan._id, disbursementData);
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      console.error("Error disbursing loan:", error);
      toast.error("Failed to disburse loan");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Disburse Loan</DialogTitle>
          <DialogDescription>
            Process disbursement for {loan?.member?.firstName} {loan?.member?.lastName}'s approved loan
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="disbursementAmount">Disbursement Amount (₦)</Label>
              <Input
                id="disbursementAmount"
                type="number"
                value={disbursementData.disbursementAmount}
                onChange={(e) => setDisbursementData(prev => ({
                  ...prev,
                  disbursementAmount: parseFloat(e.target.value) || 0
                }))}
              />
            </div>
            <div>
              <Label htmlFor="disbursementDate">Disbursement Date</Label>
              <Input
                id="disbursementDate"
                type="date"
                value={disbursementData.disbursementDate}
                onChange={(e) => setDisbursementData(prev => ({
                  ...prev,
                  disbursementDate: e.target.value
                }))}
              />
            </div>
          </div>

          <div>
            <Label htmlFor="transactionId">Transaction ID</Label>
            <Input
              id="transactionId"
              placeholder="Enter bank transaction ID"
              value={disbursementData.transactionId}
              onChange={(e) => setDisbursementData(prev => ({
                ...prev,
                transactionId: e.target.value
              }))}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="bankName">Bank Name</Label>
              <Input
                id="bankName"
                placeholder="e.g., First Bank"
                value={disbursementData.bankName}
                onChange={(e) => setDisbursementData(prev => ({
                  ...prev,
                  bankName: e.target.value
                }))}
              />
            </div>
            <div>
              <Label htmlFor="accountNumber">Account Number</Label>
              <Input
                id="accountNumber"
                placeholder="Account number"
                value={disbursementData.accountNumber}
                onChange={(e) => setDisbursementData(prev => ({
                  ...prev,
                  accountNumber: e.target.value
                }))}
              />
            </div>
          </div>

          <div>
            <Label htmlFor="accountName">Account Name</Label>
            <Input
              id="accountName"
              placeholder="Account holder name"
              value={disbursementData.accountName}
              onChange={(e) => setDisbursementData(prev => ({
                ...prev,
                accountName: e.target.value
              }))}
            />
          </div>

          <div>
            <Label htmlFor="notes">Disbursement Notes</Label>
            <Textarea
              id="notes"
              placeholder="Add any notes about this disbursement..."
              value={disbursementData.notes}
              onChange={(e) => setDisbursementData(prev => ({
                ...prev,
                notes: e.target.value
              }))}
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
              disabled={isLoading}
              className="bg-green-600 text-white hover:bg-green-700"
            >
              {isLoading ? "Processing..." : "Disburse Funds"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}