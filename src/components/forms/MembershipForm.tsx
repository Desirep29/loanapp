import { z } from "zod";
import { useState } from "react";
import { useForm, type Resolver } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "react-toastify";
import { Loader2, ArrowLeft, ArrowRight, Upload, X } from "lucide-react";
import { becomeMember } from "@/service/apiCall";

const getMaxDateFor18 = () => {
  const date = new Date();
  date.setFullYear(date.getFullYear() - 18);
  return date.toISOString().split("T")[0];
};

// Full Zod Schema with ALL validations
const formSchema = z
  .object({
    firstName: z.string().min(2, "First name must be at least 2 characters"),
    lastName: z.string().min(2, "Last name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    phone: z
      .string()
      .regex(/^[+]?[0-9]{10,15}$/, "Invalid phone number (e.g., +1234567890)"),

    dateOfBirth: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date")
      .refine((date) => {
        const birthDate = new Date(date);
        const eighteenYearsAgo = new Date();
        eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18);
        return birthDate <= eighteenYearsAgo;
      }, "You must be at least 18 years old"),

    ssn: z
      .string()
      .regex(/^\d{3}-\d{2}-\d{4}$/, "SSN must be in format: 123-45-6789"),

    address: z.object({
      street: z.string().min(5, "Street address is required"),
      city: z.string().min(2, "City is required"),
      state: z.string().length(2, "State must be 2 letters (e.g., NY)"),
      zip: z.string().regex(/^\d{5}$/, "ZIP code must be 5 digits"),
      country: z.string(),
    }),

    occupation: z.string().min(2, "Occupation is required"),
    annualIncome: z.coerce.number().min(0, "Income cannot be negative"),
    governmentId: z.string().min(5, "Government ID is required"),
    openingDeposit: z.coerce.number().min(25, "Minimum opening deposit is $25"),
    accountType: z.enum(["checking", "savings", "both"]),

    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type FormData = z.infer<typeof formSchema>;

export function RegistrationForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentTab, setCurrentTab] = useState<string>("personal");
  const [uploadedFiles, setUploadedFiles] = useState<{
    birthCertificate?: File;
    passport?: File;
    driversLicense?: File;
  }>({});

  const maxDate18 = getMaxDateFor18(); // For date input max

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema) as Resolver<FormData>,
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      dateOfBirth: "",
      ssn: "",
      address: {
        street: "",
        city: "",
        state: "",
        zip: "",
        country: "US",
      },
      occupation: "",
      annualIncome: 0,
      governmentId: "",
      openingDeposit: 25,
      accountType: "checking",
      password: "",
      confirmPassword: "",
    },
  });

  const handleFileUpload = (
    fieldName: "birthCertificate" | "passport" | "driversLicense",
    file: File | null
  ) => {
    if (file) {
      const allowedTypes = [
        "image/jpeg",
        "image/jpg",
        "image/png",
        "application/pdf",
      ];
      if (!allowedTypes.includes(file.type)) {
        toast.error("Please upload JPEG, PNG, or PDF files only");
        return;
      }

      if (file.size > 10 * 1024 * 1024) {
        toast.error("File size must be less than 10MB");
        return;
      }

      setUploadedFiles((prev) => ({ ...prev, [fieldName]: file }));
      toast.success(
        `${fieldName.replace(/([A-Z])/g, " $1")} uploaded successfully`
      );
    } else {
      setUploadedFiles((prev) => {
        const newFiles = { ...prev };
        delete newFiles[fieldName];
        return newFiles;
      });
    }
  };

  const handleFileDrop = (
    fieldName: "birthCertificate" | "passport" | "driversLicense",
    e: React.DragEvent<HTMLDivElement>
  ) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    handleFileUpload(fieldName, file);
  };

  const handleFileInput = (
    fieldName: "birthCertificate" | "passport" | "driversLicense",
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0] || null;
    handleFileUpload(fieldName, file);
  };

  const nextTab = () => {
    const tabs = ["personal", "address", "financial", "documents", "review"];
    const currentIndex = tabs.indexOf(currentTab);
    if (currentIndex < tabs.length - 1) {
      setCurrentTab(tabs[currentIndex + 1]);
    }
  };

  const prevTab = () => {
    const tabs = ["personal", "address", "financial", "documents", "review"];
    const currentIndex = tabs.indexOf(currentTab);
    if (currentIndex > 0) {
      setCurrentTab(tabs[currentIndex - 1]);
    }
  };

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    try {
      const requiredDocs = ["birthCertificate", "passport", "driversLicense"];
      const missingDocs = requiredDocs.filter(
        (doc) => !uploadedFiles[doc as keyof typeof uploadedFiles]
      );

      if (missingDocs.length > 0) {
        toast.error(
          `Please upload all required documents: ${missingDocs.join(", ")}`
        );
        setIsLoading(false);
        return;
      }

      const formData = new FormData();

      Object.keys(data).forEach((key) => {
        if (key === "address") {
          Object.keys(data.address).forEach((addressKey) => {
            formData.append(
              `address[${addressKey}]`,
              (data.address as any)[addressKey]
            );
          });
        } else if (key !== "confirmPassword") {
          formData.append(key, (data as any)[key]);
        }
      });

      Object.entries(uploadedFiles).forEach(([key, file]) => {
        if (file) {
          formData.append(key, file);
        }
      });

      const response = await becomeMember(formData);
      toast.success(
        response?.message || "Account application submitted successfully!"
      );

      // DEBUG: Log what we're storing
      console.log("📧 Storing email for verification:", data.email);
      console.log("📦 Full registration data:", data);

      // Store email for verification
      localStorage.setItem("userEmail", data.email);
      sessionStorage.setItem("userEmail", data.email);

      localStorage.setItem("registrationData", JSON.stringify(data));

      // Verify storage worked
      const storedEmail = localStorage.getItem("userEmail");
      console.log("✅ Verified stored email:", storedEmail);

      // Redirect to email verification
      setTimeout(() => {
        window.location.href = "/verify-email";
      }, 1000);
    } catch (error) {
      console.error("Registration error:", error);
      toast.error(
        error instanceof Error ? error.message : "Failed to create account"
      );
    } finally {
      setIsLoading(false);
    }
  };

  const FileUploadArea = ({
    title,
    description,
    fieldName,
  }: {
    title: string;
    description: string;
    fieldName: "birthCertificate" | "passport" | "driversLicense";
  }) => (
    <div className="space-y-3">
      <div>
        <h4 className="font-medium text-sm sm:text-base">{title}</h4>
        <p className="text-xs sm:text-sm text-gray-600">{description}</p>
      </div>

      {uploadedFiles[fieldName] ? (
        <div className="flex items-center justify-between p-3 sm:p-4 border border-green-200 bg-green-50 rounded-lg">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Upload className="h-4 w-4 text-green-600" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium truncate">
                {uploadedFiles[fieldName]?.name}
              </p>
              <p className="text-xs text-gray-500">
                {(
                  (uploadedFiles[fieldName]?.size || 0) /
                  (1024 * 1024)
                ).toFixed(2)}{" "}
                MB
              </p>
            </div>
          </div>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => handleFileUpload(fieldName, null)}
            className="text-red-600 hover:text-red-700 hover:bg-red-50 flex-shrink-0 ml-2"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      ) : (
        <div
          className="border-2 border-dashed border-gray-300 rounded-lg p-4 sm:p-6 text-center hover:border-gray-400 transition-colors cursor-pointer"
          onDrop={(e) => handleFileDrop(fieldName, e)}
          onDragOver={(e) => e.preventDefault()}
          onClick={() => document.getElementById(`file-${fieldName}`)?.click()}
        >
          <Upload className="mx-auto h-6 w-6 sm:h-8 sm:w-8 text-gray-400 mb-2" />
          <p className="text-sm font-medium text-gray-700">
            Click to upload or drag and drop
          </p>
          <p className="text-xs text-gray-500 mt-1">
            JPEG, PNG, or PDF (Max 10MB)
          </p>
          <input
            id={`file-${fieldName}`}
            type="file"
            className="hidden"
            accept=".jpg,.jpeg,.png,.pdf"
            onChange={(e) => handleFileInput(fieldName, e)}
          />
        </div>
      )}
    </div>
  );

  return (
    <div className="w-full max-w-6xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
      {/* Mobile Progress Indicator */}
      <div className="block lg:hidden mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs sm:text-sm font-medium text-gray-700">
            Step{" "}
            {[
              "personal",
              "address",
              "financial",
              "documents",
              "review",
            ].indexOf(currentTab) + 1}{" "}
            of 5
          </span>
          <span className="text-xs text-gray-500 capitalize">{currentTab}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-[#B8D430] h-2 rounded-full transition-all duration-300"
            style={{
              width: `${
                (([
                  "personal",
                  "address",
                  "financial",
                  "documents",
                  "review",
                ].indexOf(currentTab) +
                  1) /
                  5) *
                100
              }%`,
            }}
          />
        </div>
      </div>

      <Card className="shadow-sm lg:shadow-md my-4 sm:my-6">
        <CardHeader className="pb-4 sm:pb-6 px-4 sm:px-6">
          <CardTitle className="text-xl sm:text-2xl lg:text-3xl text-center sm:text-left">
            Open Your Bank Account
          </CardTitle>
          <CardDescription className="text-sm sm:text-base text-center sm:text-left">
            Complete your application in 5 simple steps
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-4 sm:pt-6 px-4 sm:px-6">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6 sm:space-y-8"
            >
              <Tabs
                value={currentTab}
                onValueChange={setCurrentTab}
                className="w-full"
              >
                {/* Responsive Tabs - Horizontal on desktop, scrollable on mobile */}
                <TabsList className="w-full grid grid-cols-5 h-auto p-1 sm:p-1.5 overflow-x-auto">
                  <TabsTrigger
                    value="personal"
                    className="text-xs xs:text-sm py-2 px-1 sm:px-2 min-w-0 truncate data-[state=active]:bg-[#006064] data-[state=active]:text-[#B8D430]"
                  >
                    <span className="hidden xs:inline">Personal</span>
                    <span className="xs:hidden">Info</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="address"
                    className="text-xs xs:text-sm py-2 px-1 sm:px-2 min-w-0 truncate data-[state=active]:bg-[#006064] data-[state=active]:text-[#B8D430]"
                  >
                    Address
                  </TabsTrigger>
                  <TabsTrigger
                    value="financial"
                    className="text-xs xs:text-sm py-2 px-1 sm:px-2 min-w-0 truncate data-[state=active]:bg-[#006064] data-[state=active]:text-[#B8D430]"
                  >
                    <span className="hidden xs:inline">Financial</span>
                    <span className="xs:hidden">Finance</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="documents"
                    className="text-xs xs:text-sm py-2 px-1 sm:px-2 min-w-0 truncate data-[state=active]:bg-[#006064] data-[state=active]:text-[#B8D430]"
                  >
                    <span className="hidden xs:inline">Documents</span>
                    <span className="xs:hidden">Docs</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="review"
                    className="text-xs xs:text-sm py-2 px-1 sm:px-2 min-w-0 truncate data-[state=active]:bg-[#006064] data-[state=active]:text-[#B8D430]"
                  >
                    Review
                  </TabsTrigger>
                </TabsList>

                {/* Personal Information Tab */}
                <TabsContent
                  value="personal"
                  className="space-y-4 sm:space-y-6"
                >
                  <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm sm:text-base">
                            First Name *
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="John"
                              {...field}
                              required
                              className="h-10 sm:h-11 text-sm sm:text-base"
                            />
                          </FormControl>
                          <FormMessage className="text-xs sm:text-sm" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm sm:text-base">
                            Last Name *
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Doe"
                              {...field}
                              required
                              className="h-10 sm:h-11 text-sm sm:text-base"
                            />
                          </FormControl>
                          <FormMessage className="text-xs sm:text-sm" />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm sm:text-base">
                          Email Address *
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="john@example.com"
                            {...field}
                            required
                            className="h-10 sm:h-11 text-sm sm:text-base"
                          />
                        </FormControl>
                        <FormMessage className="text-xs sm:text-sm" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm sm:text-base">
                          Phone Number *
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="+1234567890"
                            {...field}
                            required
                            className="h-10 sm:h-11 text-sm sm:text-base"
                          />
                        </FormControl>
                        <FormMessage className="text-xs sm:text-sm" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="dateOfBirth"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm sm:text-base">
                          Date of Birth *
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="date"
                            {...field}
                            max={maxDate18}
                            required
                            className="h-10 sm:h-11 text-sm sm:text-base"
                          />
                        </FormControl>
                        <FormMessage className="text-xs sm:text-sm" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="ssn"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm sm:text-base">
                          Social Security Number *
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="123-45-6789"
                            {...field}
                            required
                            className="h-10 sm:h-11 text-sm sm:text-base"
                          />
                        </FormControl>
                        <FormMessage className="text-xs sm:text-sm" />
                      </FormItem>
                    )}
                  />

                  <div className="flex justify-end pt-2">
                    <Button
                      type="button"
                      onClick={nextTab}
                      className="gap-1 sm:gap-2 w-full xs:w-auto text-sm sm:text-base bg-[#006064] text-white hover:bg-[#004d40]"
                      size="sm"
                    >
                      Next <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
                    </Button>
                  </div>
                </TabsContent>

                {/* Address Information Tab */}
                <TabsContent value="address" className="space-y-4 sm:space-y-6">
                  <FormField
                    control={form.control}
                    name="address.street"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm sm:text-base">
                          Street Address *
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="123 Main Street"
                            {...field}
                            required
                            className="h-10 sm:h-11 text-sm sm:text-base"
                          />
                        </FormControl>
                        <FormMessage className="text-xs sm:text-sm" />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <FormField
                      control={form.control}
                      name="address.city"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm sm:text-base">
                            City *
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="New York"
                              {...field}
                              required
                              className="h-10 sm:h-11 text-sm sm:text-base"
                            />
                          </FormControl>
                          <FormMessage className="text-xs sm:text-sm" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="address.state"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm sm:text-base">
                            State *
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="NY"
                              {...field}
                              required
                              className="h-10 sm:h-11 text-sm sm:text-base"
                            />
                          </FormControl>
                          <FormMessage className="text-xs sm:text-sm" />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <FormField
                      control={form.control}
                      name="address.zip"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm sm:text-base">
                            ZIP Code *
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="10001"
                              {...field}
                              required
                              className="h-10 sm:h-11 text-sm sm:text-base"
                            />
                          </FormControl>
                          <FormMessage className="text-xs sm:text-sm" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="address.country"
                      render={({}) => (
                        <FormItem>
                          <FormLabel className="text-sm sm:text-base">
                            Country *
                          </FormLabel>
                          <FormControl>
                            <Input
                              value="United States"
                              disabled
                              className="h-10 sm:h-11 text-sm sm:text-base bg-gray-50"
                            />
                          </FormControl>
                          <FormMessage className="text-xs sm:text-sm" />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="flex flex-col xs:flex-row justify-between gap-3 pt-2">
                    <Button
                      type="button"
                      onClick={prevTab}
                      variant="outline"
                      className="gap-1 sm:gap-2 order-2 xs:order-1 text-sm sm:text-base"
                      size="sm"
                    >
                      <ArrowLeft className="h-3 w-3 sm:h-4 sm:w-4" /> Previous
                    </Button>
                    <Button
                      type="button"
                      onClick={nextTab}
                      className="gap-1 sm:gap-2 order-1 xs:order-2 text-sm sm:text-base bg-[#006064] text-white hover:bg-[#004d40]"
                      size="sm"
                    >
                      Next <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
                    </Button>
                  </div>
                </TabsContent>

                {/* Financial Information Tab */}
                <TabsContent
                  value="financial"
                  className="space-y-4 sm:space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="occupation"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm sm:text-base">
                          Occupation *
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Software Engineer"
                            {...field}
                            required
                            className="h-10 sm:h-11 text-sm sm:text-base"
                          />
                        </FormControl>
                        <FormMessage className="text-xs sm:text-sm" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="annualIncome"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm sm:text-base">
                          Annual Income ($) *
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            {...field}
                            required
                            className="h-10 sm:h-11 text-sm sm:text-base"
                          />
                        </FormControl>
                        <FormMessage className="text-xs sm:text-sm" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="governmentId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm sm:text-base">
                          Government ID Number *
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="A1234567"
                            {...field}
                            required
                            className="h-10 sm:h-11 text-sm sm:text-base"
                          />
                        </FormControl>
                        <FormMessage className="text-xs sm:text-sm" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="openingDeposit"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm sm:text-base">
                          Opening Deposit ($) *
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            min="25"
                            {...field}
                            required
                            className="h-10 sm:h-11 text-sm sm:text-base"
                          />
                        </FormControl>
                        <FormMessage className="text-xs sm:text-sm" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="accountType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm sm:text-base">
                          Account Type *
                        </FormLabel>
                        <FormControl>
                          <select
                            {...field}
                            className="w-full p-2 sm:p-3 border rounded-md text-sm sm:text-base h-10 sm:h-11"
                          >
                            <option value="checking">Checking Account</option>
                            <option value="savings">Savings Account</option>
                            <option value="both">
                              Both Checking & Savings
                            </option>
                          </select>
                        </FormControl>
                        <FormMessage className="text-xs sm:text-sm" />
                      </FormItem>
                    )}
                  />

                  <div className="flex flex-col xs:flex-row justify-between gap-3 pt-2">
                    <Button
                      type="button"
                      onClick={prevTab}
                      variant="outline"
                      className="gap-1 sm:gap-2 order-2 xs:order-1 text-sm sm:text-base"
                      size="sm"
                    >
                      <ArrowLeft className="h-3 w-3 sm:h-4 sm:w-4" /> Previous
                    </Button>
                    <Button
                      type="button"
                      onClick={nextTab}
                      className="gap-1 sm:gap-2 order-1 xs:order-2 text-sm sm:text-base bg-[#006064] text-white hover:bg-[#004d40]"
                      size="sm"
                    >
                      Next <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
                    </Button>
                  </div>
                </TabsContent>

                {/* Documents Tab */}
                <TabsContent
                  value="documents"
                  className="space-y-6 sm:space-y-8"
                >
                  <div className="bg-blue-50 p-3 sm:p-4 rounded-lg">
                    <h3 className="font-semibold text-sm sm:text-base mb-2">
                      Required Documents
                    </h3>
                    <p className="text-xs sm:text-sm">
                      Please upload clear photos or scans of the following
                      documents. All documents are required to complete your
                      application.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <FileUploadArea
                      title="Birth Certificate"
                      description="Upload a clear copy of your birth certificate"
                      fieldName="birthCertificate"
                    />

                    <FileUploadArea
                      title="Passport"
                      description="Upload a clear copy of your passport photo page"
                      fieldName="passport"
                    />

                    <FileUploadArea
                      title="Driver's License"
                      description="Upload both front and back of your driver's license"
                      fieldName="driversLicense"
                    />
                  </div>

                  <div className="bg-yellow-50 p-3 sm:p-4 rounded-lg">
                    <h4 className="font-medium text-sm sm:text-base mb-2">
                      Important Notes:
                    </h4>
                    <ul className="text-xs sm:text-sm text-yellow-800 space-y-1">
                      <li>• Files must be in JPEG, PNG, or PDF format</li>
                      <li>• Maximum file size: 10MB per document</li>
                      <li>• Ensure all text is clear and readable</li>
                      <li>• Documents will be securely stored and encrypted</li>
                    </ul>
                  </div>

                  <div className="flex flex-col xs:flex-row justify-between gap-3 pt-2">
                    <Button
                      type="button"
                      onClick={prevTab}
                      variant="outline"
                      className="gap-1 sm:gap-2 order-2 xs:order-1 text-sm sm:text-base"
                      size="sm"
                    >
                      <ArrowLeft className="h-3 w-3 sm:h-4 sm:w-4" /> Previous
                    </Button>
                    <Button
                      type="button"
                      onClick={nextTab}
                      className="gap-1 sm:gap-2 order-1 xs:order-2 text-sm sm:text-base bg-[#006064] text-white hover:bg-[#004d40]"
                      size="sm"
                    >
                      Next <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
                    </Button>
                  </div>
                </TabsContent>

                {/* Review Tab */}
                <TabsContent value="review" className="space-y-4 sm:space-y-6">
                  <div className="bg-blue-50 p-3 sm:p-4 rounded-lg">
                    <h3 className="font-semibold text-sm sm:text-base mb-2">
                      Review Your Information
                    </h3>
                    <p className="text-xs sm:text-sm">
                      Please review all information before submitting your
                      application.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm sm:text-base">
                            Password *
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="password"
                              placeholder="Create a strong password"
                              {...field}
                              required
                              className="h-10 sm:h-11 text-sm sm:text-base"
                            />
                          </FormControl>
                          <FormMessage className="text-xs sm:text-sm" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="confirmPassword"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm sm:text-base">
                            Confirm Password *
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="password"
                              placeholder="Confirm your password"
                              {...field}
                              required
                              className="h-10 sm:h-11 text-sm sm:text-base"
                            />
                          </FormControl>
                          <FormMessage className="text-xs sm:text-sm" />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="flex flex-col xs:flex-row justify-between gap-3 pt-2">
                    <Button
                      type="button"
                      onClick={prevTab}
                      variant="outline"
                      className="gap-1 sm:gap-2 order-2 xs:order-1 text-sm sm:text-base"
                      size="sm"
                    >
                      <ArrowLeft className="h-3 w-3 sm:h-4 sm:w-4" /> Previous
                    </Button>
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="gap-1 sm:gap-2 order-1 xs:order-2 text-sm sm:text-base bg-[#006064] text-white hover:bg-[#004d40]"
                      size="sm"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="h-3 w-3 sm:h-4 sm:w-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        "Submit Application"
                      )}
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
