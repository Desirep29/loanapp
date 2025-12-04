import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Loader2, Eye, EyeOff } from "lucide-react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setmember } from "@/redux/slices/memberSlice";

interface LoginFormData {
  email: string;
  password: string;
}

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const form = useForm<LoginFormData>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://firstintlservices.onrender.com/api/v1/members/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();

      if (result.success) {
        dispatch(setmember({ token: result.token, member: result.member }));
        toast.success("Login successful! Welcome back.");
        onClose(); // Close modal on success
        form.reset(); // Reset form
        window.location.href = "/dashboard";
      } else {
        throw new Error(result.message || "Login failed");
      }
    } catch (error: any) {
      console.error("Login error:", error);
      toast.error(error.message || "Failed to login");
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    form.reset();
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md max-w-[95vw] mx-2 p-0 gap-0 rounded-lg sm:rounded-lg">
        {/* Header */}
        <DialogHeader className="px-4 sm:px-6 pt-4 sm:pt-6 pb-3 sm:pb-4 border-b relative">
          <div className="flex items-center justify-between">
            <div className="pr-8">
              <DialogTitle className="text-xl sm:text-2xl font-bold text-gray-900">
                Member Login
              </DialogTitle>
              <DialogDescription className="text-gray-600 mt-1 text-sm sm:text-base">
                Sign in to access your account
              </DialogDescription>
            </div>
          </div>
    
        </DialogHeader>

        {/* Form Content */}
        <div className="px-4 sm:px-6 py-3 sm:py-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 sm:space-y-4">
              {/* Email Field */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-700">
                      Email Address
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        {...field}
                        className="h-10 sm:h-12 text-sm sm:text-base border-gray-300 focus:border-[#006064] focus:ring-[#006064]"
                        disabled={isLoading}
                      />
                    </FormControl>
                    <FormMessage className="text-red-500 text-xs" />
                  </FormItem>
                )}
              />

              {/* Password Field */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-700">
                      Password
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
                          {...field}
                          className="h-10 sm:h-12 text-sm sm:text-base border-gray-300 focus:border-[#006064] focus:ring-[#006064] pr-10 sm:pr-12"
                          disabled={isLoading}
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-2 sm:px-3 py-2 hover:bg-transparent"
                          onClick={() => setShowPassword(!showPassword)}
                          disabled={isLoading}
                        >
                          {showPassword ? (
                            <EyeOff className="h-3 w-3 sm:h-4 sm:w-4 text-gray-500" />
                          ) : (
                            <Eye className="h-3 w-3 sm:h-4 sm:w-4 text-gray-500" />
                          )}
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage className="text-red-500 text-xs" />
                  </FormItem>
                )}
              />

              {/* Login Button */}
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-10 sm:h-12 text-sm sm:text-base font-semibold bg-[#006064] hover:bg-[#004d40] text-white transition-colors"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-3 w-3 sm:h-4 sm:w-4 animate-spin mr-2" />
                    Signing in...
                  </>
                ) : (
                  "Sign In"
                )}
              </Button>

              {/* Additional Links */}
              <div className="text-center space-y-2 pt-1 sm:pt-2">
                <a
                  href="/forgot-password"
                  className="text-xs sm:text-sm text-[#006064] hover:text-[#004d40] font-medium transition-colors block"
                  onClick={handleClose}
                >
                  Forgot your password?
                </a>
                <p className="text-xs sm:text-sm text-gray-600">
                  Don't have an account?{" "}
                  <a
                    href="/register"
                    className="font-medium text-[#006064] hover:text-[#004d40] transition-colors"
                    onClick={handleClose}
                  >
                    Sign up
                  </a>
                </p>
              </div>
            </form>
          </Form>
        </div>

        {/* Security Notice */}
        <div className="px-4 sm:px-6 pb-4 sm:pb-6">
          <p className="text-[10px] sm:text-xs text-gray-500 text-center leading-tight sm:leading-normal">
            Your financial security is our priority. We use bank-level encryption to protect your data.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}