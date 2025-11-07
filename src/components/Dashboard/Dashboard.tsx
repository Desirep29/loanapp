import DashboardLayout from "@/components/Dashboard/DashboardLayout";
import BalanceCard from "@/components/Dashboard/BalanceCard";
import ProfileCard from "@/components/Dashboard/ProfileCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ArrowDownLeft, History, CreditCard } from "lucide-react";

export default function Dashboard() {
  const quickActions = [
    {
      title: "Send Money",
      description: "Transfer to accounts",
      icon: ArrowUpRight,
      color: "text-green-600 bg-green-100",
      href: "/transfer"
    },
    {
      title: "Request Money",
      description: "Request funds",
      icon: ArrowDownLeft,
      color: "text-blue-600 bg-blue-100",
      href: "/request"
    },
    {
      title: "Transactions",
      description: "View history",
      icon: History,
      color: "text-purple-600 bg-purple-100",
      href: "/transactions"
    },
    {
      title: "Pay Bills",
      description: "Utilities & services",
      icon: CreditCard,
      color: "text-orange-600 bg-orange-100",
      href: "/bills"
    }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-4 sm:space-y-6">
        {/* Welcome Section */}
        <div className="text-center sm:text-left">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
            Dashboard
          </h1>
          <p className="text-base sm:text-lg text-gray-600">
            Welcome back! Here's your financial overview.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Left Column - Balance and Quick Actions */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            <BalanceCard />
            
            {/* Quick Actions */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg sm:text-xl">Quick Actions</CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Frequently used banking features
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 xs:grid-cols-4 gap-2 sm:gap-4">
                  {quickActions.map((action, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="h-auto p-2 sm:p-4 flex flex-col items-center justify-center space-y-1 sm:space-y-2 hover:bg-gray-50 min-h-[80px] sm:min-h-[100px]"
                      onClick={() => window.location.href = action.href}
                    >
                      <div className={`p-1 sm:p-2 rounded-full ${action.color}`}>
                        <action.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                      <div className="text-center space-y-1">
                        <p className="text-xs sm:text-sm font-medium leading-tight">
                          {action.title}
                        </p>
                        <p className="text-[10px] xs:text-xs text-gray-500 leading-tight hidden xs:block">
                          {action.description}
                        </p>
                      </div>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Profile and Recent Activity */}
          <div className="space-y-4 sm:space-y-6">
            <ProfileCard />
            
            {/* Recent Activity */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base sm:text-lg">Recent Activity</CardTitle>
                <CardDescription className="text-sm">
                  Your latest transactions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">Account Activation</p>
                    <p className="text-xs text-gray-500">Today</p>
                  </div>
                  <p className="text-sm font-semibold text-green-600">+₦1,000.00</p>
                </div>
                
                <div className="text-center py-3">
                  <p className="text-sm text-gray-500">No recent transactions</p>
                  <Button variant="link" className="text-[#006064] text-xs sm:text-sm">
                    View All Transactions
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Mobile Quick Actions Bottom Bar */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-2 sm:hidden z-40">
          <div className="grid grid-cols-4 gap-1">
            {quickActions.slice(0, 4).map((action, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                className="flex flex-col items-center justify-center h-12 p-1"
                onClick={() => window.location.href = action.href}
              >
                <div className={`p-1 rounded-full ${action.color}`}>
                  <action.icon className="h-3 w-3" />
                </div>
                <span className="text-[10px] mt-1">{action.title.split(' ')[0]}</span>
              </Button>
            ))}
          </div>
        </div>

        {/* Add padding to account for fixed bottom bar on mobile */}
        <div className="h-16 sm:h-0"></div>
      </div>
    </DashboardLayout>
  );
}