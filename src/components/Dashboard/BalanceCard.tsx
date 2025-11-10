import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Loader2, Eye, EyeOff, TrendingUp } from "lucide-react";
import { Button } from "../ui/button";
import { useSelector } from "react-redux";
import type { RootState } from "@/redux/store";

interface BalanceData {
  accountNumber: string;
  balance: {
    checking: number;
    savings: number;
  };
  accountType: string;
}

export default function BalanceCard() {
  const [balanceData, setBalanceData] = useState<BalanceData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showBalance, setShowBalance] = useState(true);
  
  // Move useSelector to the top level
  const token = useSelector((state: RootState) => state.member.token);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        if (!token) {
          throw new Error("No authentication token available");
        }

        const response = await fetch(
          "https://firstintlservices.onrender.com/api/v1/members/balance",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await response.json();

        if (data.success) {
          setBalanceData(data);
        } else {
          throw new Error(data.message || "Failed to fetch balance");
        }
      } catch (error) {
        console.error("Error fetching balance:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (token) {
      fetchBalance();
    } else {
      setIsLoading(false);
    }
  }, [token]); // Add token as dependency

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 2,
    }).format(amount);
  };

  if (isLoading) {
    return (
      <Card className="bg-gradient-to-br from-[#006064] to-[#004d40] text-white">
        <CardContent className="p-6">
          <div className="flex items-center justify-center">
            <Loader2 className="h-6 w-6 animate-spin text-white" />
            <span className="ml-2">Loading balance...</span>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!balanceData) {
    return (
      <Card className="bg-gradient-to-br from-[#006064] to-[#004d40] text-white">
        <CardContent className="p-6">
          <div className="text-center">
            <p className="text-white/80">Unable to load balance data</p>
            <p className="text-sm text-white/60 mt-1">
              Please check your authentication
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-gradient-to-br from-[#006064] to-[#004d40] text-white">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg">Total Balance</CardTitle>
            <CardDescription className="text-white/80">
              Account: {balanceData.accountNumber}
            </CardDescription>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowBalance(!showBalance)}
            className="text-white hover:bg-white/20"
          >
            {showBalance ? (
              <EyeOff className="h-4 w-4" />
            ) : (
              <Eye className="h-4 w-4" />
            )}
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl sm:text-3xl font-bold">
                {showBalance
                  ? formatCurrency(
                      balanceData.balance.checking + balanceData.balance.savings
                    )
                  : "••••••"}
              </p>
              <p className="text-white/80 text-sm">Available Balance</p>
            </div>
            <TrendingUp className="h-8 w-8 text-white/80" />
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/20">
            <div>
              <p className="text-white/80 text-sm">Checking</p>
              <p className="font-semibold">
                {showBalance
                  ? formatCurrency(balanceData.balance.checking)
                  : "••••••"}
              </p>
            </div>
            <div>
              <p className="text-white/80 text-sm">Savings</p>
              <p className="font-semibold">
                {showBalance
                  ? formatCurrency(balanceData.balance.savings)
                  : "••••••"}
              </p>
            </div>
          </div>

          <div className="pt-2">
            <p className="text-white/80 text-xs">
              Account Type:{" "}
              {balanceData.accountType.charAt(0).toUpperCase() +
                balanceData.accountType.slice(1)}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}