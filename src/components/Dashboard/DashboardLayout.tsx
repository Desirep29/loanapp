import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Loader2, LogOut, Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/redux/store";
import { logout } from "@/redux/slices/memberSlice";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const token = useSelector((state: RootState) => state.member?.token);
  const member = useSelector((state: RootState) => state.member.member);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    if (!token) {
      console.log("We have a problem here");
      navigate("/membership-login");
      return;
    }

    try {
      const response = await fetch("https://bank-account-backend-hgpt.onrender.com/api/v1/members/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Token invalid");
      }
    } catch (error) {
      localStorage.removeItem("authToken");
      localStorage.removeItem("userData");
      navigate("/membership-login");
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("authToken");
    localStorage.removeItem("userData");
    navigate("/membership-login");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-[#006064]" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            {/* Left Section - Brand */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
               <Link to={"/"}>
                <h1 className="text-xl sm:text-2xl font-bold text-[#006064]">
                  First International Financial Services
                </h1>
               </Link>
              </div>
            </div>

            {/* Desktop User Info and Logout */}
            <div className="hidden sm:flex items-center space-x-3 lg:space-x-4">
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900 truncate max-w-[120px] lg:max-w-none">
                  Welcome, {member?.firstName} {member?.lastName}
                </p>
                <p className="text-xs text-gray-500 truncate max-w-[120px] lg:max-w-none">
                  Account: {member?.accountNumber}
                </p>
              </div>
              <Button
                onClick={handleLogout}
                variant="outline"
                size="sm"
                className="text-gray-700 hidden xs:flex"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
              {/* Compact logout button for very small screens */}
              <Button
                onClick={handleLogout}
                variant="outline"
                size="sm"
                className="text-gray-700 xs:hidden"
              >
                <LogOut className="h-4 w-4" />
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center sm:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-700"
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="sm:hidden border-t border-gray-200 py-4 px-4 bg-white">
              <div className="space-y-3">
                {/* User Info */}
                <div className="text-center">
                  <p className="text-sm font-medium text-gray-900">
                    {member?.firstName} {member?.lastName}
                  </p>
                  <p className="text-xs text-gray-500">
                    Account: {member?.accountNumber}
                  </p>
                </div>

                {/* Quick Actions for Mobile */}
                <div className="grid grid-cols-2 gap-2 pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-xs"
                    onClick={() => {
                      navigate("/transfer");
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Send Money
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-xs"
                    onClick={() => {
                      navigate("/transactions");
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Transactions
                  </Button>
                </div>

                {/* Logout Button */}
                <Button
                  onClick={handleLogout}
                  variant="outline"
                  size="sm"
                  className="w-full text-gray-700 border-red-200  hover:bg-red-50"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-4 sm:py-6 px-3 xs:px-4 sm:px-6 lg:px-8">
        <div className="py-4 sm:py-6">
          {children}
        </div>
      </div>
    </div>
  );
}