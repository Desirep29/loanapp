// components/Admin/LoanDashboard.tsx
"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import {
  Users,
  TrendingUp,
  FileText,
  Download,
  RefreshCw,
  BarChart3,
  PieChart,
  Activity,
} from "lucide-react";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import type { RootState } from "@/redux/store";
import DisbursementModal from "./DisbursementModal";
import RecentLoans from "./RecentLoans";
import LoanChart from "./LoanChart";
import LoanMetrics from "./LoanMetrics";
import StatusModal from "./StatusModal";

// In LoanDashboard.tsx - update the Loan interface
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
  loanType: string;
  loanAmount: number;
  status:
    | "pending"
    | "under_review"
    | "approved"
    | "rejected"
    | "disbursed"
    | "closed"; // CHANGED
  applicationDate: string;
  approvedAmount?: number;
  interestRate: number;
  repaymentTerm: number;
  loanOfficer?: string;
  disbursementDate?: string;
  paymentReference?: string;
}

interface DashboardStats {
  totalLoans: number;
  totalPortfolio: number;
  pendingLoans: number;
  approvedLoans: number;
  rejectedLoans: number;
  disbursedLoans: number;
  averageLoanAmount: number;
  approvalRate: number;
  monthlyGrowth: number;
  activeLoans: number;
  totalMembers: number;
  collectionRate: number;
}

export default function LoanDashboard() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [recentLoans, setRecentLoans] = useState<Loan[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedLoan, setSelectedLoan] = useState<Loan | null>(null);
  const [statusModalOpen, setStatusModalOpen] = useState(false);
  const [disbursementModalOpen, setDisbursementModalOpen] = useState(false);
  const [timeRange, setTimeRange] = useState("30d");

  const token = useSelector((state: RootState) => state.member.token);

  useEffect(() => {
    fetchDashboardData();
  }, [timeRange]);

  const fetchDashboardData = async () => {
    try {
      setIsLoading(true);

      // Fetch statistics
      const statsResponse = await fetch(
        "http://localhost:5000/api/v1/loans/admin/statistics",
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      // Fetch recent loans
      const loansResponse = await fetch(
        "http://localhost:5000/api/v1/loans/admin/all",
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!statsResponse.ok || !loansResponse.ok) {
        throw new Error("Failed to fetch dashboard data");
      }

      const statsResult = await statsResponse.json();
      const loansResult = await loansResponse.json();

      console.log("Statistics API Response:", statsResult); // Debug log
      console.log("Loans API Response:", loansResult); // Debug log

      if (statsResult.success) {
        setStats(statsResult.data);
      }

      if (loansResult.success) {
        // FIXED: Handle different possible response structures
        const loansData =
          loansResult.data?.loans ||
          loansResult.data ||
          loansResult.loans ||
          [];
        // Get only recent 10 loans for the dashboard
        setRecentLoans(Array.isArray(loansData) ? loansData.slice(0, 10) : []);
      }
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
      toast.error("Failed to load dashboard");
    } finally {
      setIsLoading(false);
    }
  };

  const getStatusCount = (status: string) => {
    return recentLoans.filter((loan) => loan.status === status).length;
  };

  // Add mock stats for demo if API fails
  const mockStats: DashboardStats = {
    totalLoans: 156,
    totalPortfolio: 45000000,
    pendingLoans: 12,
    approvedLoans: 89,
    rejectedLoans: 23,
    disbursedLoans: 67,
    averageLoanAmount: 288461,
    approvalRate: 74,
    monthlyGrowth: 12.5,
    activeLoans: 67,
    totalMembers: 234,
    collectionRate: 95.2,
  };

  const displayStats = stats || mockStats;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="animate-pulse space-y-6">
            {/* Header Skeleton */}
            <div className="flex justify-between items-center">
              <div className="space-y-2">
                <div className="h-8 bg-gray-200 rounded w-64"></div>
                <div className="h-4 bg-gray-200 rounded w-48"></div>
              </div>
              <div className="h-10 bg-gray-200 rounded w-32"></div>
            </div>

            {/* Metrics Skeleton */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-32 bg-gray-200 rounded-lg"></div>
              ))}
            </div>

            {/* Chart Skeleton */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 h-80 bg-gray-200 rounded-lg"></div>
              <div className="h-80 bg-gray-200 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Loan Dashboard</h1>
            <p className="text-gray-600 mt-2">
              Overview of your loan portfolio and performance
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#006064] focus:border-transparent"
            >
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
              <option value="1y">Last year</option>
            </select>
            <Button variant="outline" onClick={fetchDashboardData}>
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh
            </Button>
            <Button>
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        {/* Key Metrics */}
        <LoanMetrics stats={displayStats} />

        {/* Charts & Data Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Chart */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Portfolio Performance</CardTitle>
                  <CardDescription>
                    Loan applications and approvals over time
                  </CardDescription>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge
                    variant="outline"
                    className="bg-green-50 text-green-700"
                  >
                    <TrendingUp className="h-3 w-3 mr-1" />
                    {displayStats.monthlyGrowth}% growth
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <LoanChart timeRange={timeRange} />
              </CardContent>
            </Card>
          </div>

          {/* Status Distribution */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <PieChart className="h-5 w-5 mr-2 text-[#006064]" />
                  Status Distribution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      status: "pending",
                      label: "Pending",
                      count: getStatusCount("pending"),
                      color: "bg-yellow-500",
                    },
                    {
                      status: "under_review",
                      label: "Under Review",
                      count: getStatusCount("under_review"),
                      color: "bg-blue-500",
                    },
                    {
                      status: "approved",
                      label: "Approved",
                      count: getStatusCount("approved"),
                      color: "bg-green-500",
                    },
                    {
                      status: "rejected",
                      label: "Rejected",
                      count: getStatusCount("rejected"),
                      color: "bg-red-500",
                    },
                    {
                      status: "disbursed",
                      label: "Disbursed",
                      count: getStatusCount("disbursed"),
                      color: "bg-purple-500",
                    },
                    {
                      status: "closed",
                      label: "Closed",
                      count: getStatusCount("closed"),
                      color: "bg-gray-500",
                    }, // CHANGED
                  ].map((item) => (
                    <div
                      key={item.status}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-3 h-3 rounded-full ${item.color}`}
                        ></div>
                        <span className="text-sm font-medium text-gray-700">
                          {item.label}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="font-semibold">{item.count}</span>
                        <span className="text-xs text-gray-500 ml-1">
                          (
                          {recentLoans.length > 0
                            ? Math.round(
                                (item.count / recentLoans.length) * 100
                              )
                            : 0}
                          %)
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Common administrative tasks</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start" variant="outline">
                  <FileText className="h-4 w-4 mr-2" />
                  New Loan Application
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Users className="h-4 w-4 mr-2" />
                  Manage Members
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  Generate Reports
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Activity className="h-4 w-4 mr-2" />
                  System Analytics
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Recent Loans & Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Loan Applications</CardTitle>
              <CardDescription>
                Latest loan applications requiring attention
              </CardDescription>
            </CardHeader>
            <CardContent>
              <RecentLoans
                loans={recentLoans}
                onStatusUpdate={(loan: any) => {
                  setSelectedLoan(loan);
                  setStatusModalOpen(true);
                }}
                onDisburse={(loan: any) => {
                  setSelectedLoan(loan);
                  setDisbursementModalOpen(true);
                }}
              />
            </CardContent>
          </Card>

          {/* System Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>
                Latest system events and updates
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    action: "Loan Approved",
                    user: "Sarah Johnson",
                    time: "2 min ago",
                    type: "success",
                  },
                  {
                    action: "Document Uploaded",
                    user: "Mike Chen",
                    time: "15 min ago",
                    type: "info",
                  },
                  {
                    action: "Status Updated",
                    user: "Admin",
                    time: "1 hour ago",
                    type: "warning",
                  },
                  {
                    action: "Loan Disbursed",
                    user: "System",
                    time: "2 hours ago",
                    type: "success",
                  },
                  {
                    action: "New Application",
                    user: "David Wilson",
                    time: "3 hours ago",
                    type: "info",
                  },
                ].map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div
                      className={`w-2 h-2 rounded-full mt-2 ${
                        activity.type === "success"
                          ? "bg-green-500"
                          : activity.type === "warning"
                          ? "bg-yellow-500"
                          : "bg-blue-500"
                      }`}
                    ></div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">
                        {activity.action}
                      </p>
                      <p className="text-sm text-gray-500">
                        by {activity.user}
                      </p>
                    </div>
                    <span className="text-xs text-gray-400 whitespace-nowrap">
                      {activity.time}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Modals */}
        <StatusModal
          open={statusModalOpen}
          onOpenChange={setStatusModalOpen}
          loan={selectedLoan}
          onStatusUpdate={() => {
            fetchDashboardData();
            setStatusModalOpen(false);
            setSelectedLoan(null);
          }}
        />

        <DisbursementModal
          open={disbursementModalOpen}
          onOpenChange={setDisbursementModalOpen}
          loan={selectedLoan}
          onDisburse={() => {
            fetchDashboardData();
            setDisbursementModalOpen(false);
            setSelectedLoan(null);
          }}
        />
      </div>
    </div>
  );
}
