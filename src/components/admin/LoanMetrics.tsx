import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  DollarSign, 
  FileText,
  CheckCircle,
  Clock,
  ArrowUp,
  ArrowDown
} from "lucide-react";

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

interface LoanMetricsProps {
  stats: DashboardStats;
}

const colorClasses = {
  blue: "bg-blue-100 text-blue-600",
  green: "bg-green-100 text-green-600",
  yellow: "bg-yellow-100 text-yellow-600",
  purple: "bg-purple-100 text-purple-600",
};

const MetricCard = ({ title, value, subtitle, icon: Icon, trend, trendValue, color = "blue" }: any) => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-600">{title}</p>
            <div className="flex items-baseline space-x-2 mt-1">
              <p className="text-2xl font-bold text-gray-900">{value}</p>
              {trend && (
                <Badge variant="outline" className={`text-xs ${
                  trend === 'up' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                }`}>
                  {trend === 'up' ? <ArrowUp className="h-3 w-3 mr-1" /> : <ArrowDown className="h-3 w-3 mr-1" />}
                  {trendValue}
                </Badge>
              )}
            </div>
            {subtitle && (
              <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
            )}
          </div>
          <div className={`p-3 rounded-full ${colorClasses[color as keyof typeof colorClasses]}`}>
            <Icon className="h-6 w-6" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default function LoanMetrics({ stats }: LoanMetricsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <MetricCard
        title="Total Portfolio"
        value={`₦${(stats.totalPortfolio / 1000000).toFixed(1)}M`}
        subtitle={`${stats.totalLoans} total loans`}
        icon={DollarSign}
        trend="up"
        trendValue={`${stats.monthlyGrowth}%`}
        color="green"
      />
      
      <MetricCard
        title="Active Loans"
        value={stats.activeLoans}
        subtitle={`${stats.disbursedLoans} disbursed`}
        icon={FileText}
        trend="up"
        trendValue="12%"
        color="blue"
      />
      
      <MetricCard
        title="Approval Rate"
        value={`${stats.approvalRate}%`}
        subtitle={`${stats.approvedLoans} approved`}
        icon={CheckCircle}
        trend="up"
        trendValue="5%"
        color="green"
      />
      
      <MetricCard
        title="Pending Review"
        value={stats.pendingLoans}
        subtitle="Requiring attention"
        icon={Clock}
        trend="down"
        trendValue="8%"
        color="yellow"
      />
    </div>
  );
}