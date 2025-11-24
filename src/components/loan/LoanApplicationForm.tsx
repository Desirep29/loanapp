
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Loader2,
  Calculator,
  FileText,
  Building,
  User,
  DollarSign,
  Shield,
  CheckCircle,
} from "lucide-react";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import type { RootState } from "@/redux/store";
import { useNavigate } from "react-router-dom";

interface LoanApplicationData {
  // Personal Information
  firstName: string;
  lastName: string;
  email: string;
  phone: string;

  // Employment Information
  employmentStatus: string;
  employerName: string;
  jobTitle: string;
  monthlyIncome: number;
  employmentDuration: string;

  // Loan Details
  loanType: string;
  loanAmount: number;
  loanPurpose: string;
  repaymentTerm: string; // in months
  preferredInterestRate: number;

  // Financial Information
  monthlyExpenses: number;
  existingLoans: number;
  creditScore: number;

  // Collateral (if applicable)
  hasCollateral: boolean;
  collateralType?: string;
  collateralValue?: number;
  collateralDescription?: string;

  // Additional Information
  additionalNotes?: string;
  agreeToTerms: boolean;
}

const loanTypes = [
  {
    value: "personal",
    label: "Personal Loan",
    maxAmount: 5000000,
    maxTerm: 60,
  },
  {
    value: "business",
    label: "Business Loan",
    maxAmount: 50000000,
    maxTerm: 84,
  },
  {
    value: "mortgage",
    label: "Mortgage Loan",
    maxAmount: 100000000,
    maxTerm: 360,
  },
  { value: "auto", label: "Auto Loan", maxAmount: 20000000, maxTerm: 84 },
  {
    value: "education",
    label: "Education Loan",
    maxAmount: 10000000,
    maxTerm: 120,
  },
  {
    value: "emergency",
    label: "Emergency Loan",
    maxAmount: 2000000,
    maxTerm: 24,
  },
];

const employmentStatuses = [
  "Employed Full-time",
  "Employed Part-time",
  "Self-Employed",
  "Unemployed",
  "Student",
  "Retired",
];

const repaymentTerms = [
  { value: "12", label: "12 months" },
  { value: "24", label: "24 months" },
  { value: "36", label: "36 months" },
  { value: "48", label: "48 months" },
  { value: "60", label: "60 months" },
  { value: "84", label: "84 months" },
  { value: "120", label: "120 months" },
];

const collateralTypes = [
  "Real Estate",
  "Vehicle",
  "Savings Account",
  "Investment Portfolio",
  "Equipment",
  "Other",
];

export default function LoanApplicationForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const member = useSelector((state: RootState) => state.member.member);
  const token = useSelector((state: RootState) => state.member.token);
  const navigate= useNavigate()

  const form = useForm<LoanApplicationData>({
    defaultValues: {
      firstName: member?.firstName || "",
      lastName: member?.lastName || "",
      email: member?.email || "",
      phone: member?.phone || "",
      employmentStatus: "",
      employerName: "",
      jobTitle: "",
      monthlyIncome: 0,
      employmentDuration: "",
      loanType: "",
      loanAmount: 0,
      loanPurpose: "",
      repaymentTerm: "36",
      preferredInterestRate: 12,
      monthlyExpenses: 0,
      existingLoans: 0,
      creditScore: 0,
      hasCollateral: false,
      collateralType: "",
      collateralValue: 0,
      collateralDescription: "",
      additionalNotes: "",
      agreeToTerms: false,
    },
  });

  const watchLoanType = form.watch("loanType");
  const selectedLoanType = loanTypes.find((lt) => lt.value === watchLoanType);
  const watchLoanAmount = form.watch("loanAmount");
  const watchRepaymentTerm = form.watch("repaymentTerm");
  const watchInterestRate = form.watch("preferredInterestRate");

  // Calculate loan details
  const calculateLoanDetails = () => {
    if (!watchLoanAmount || !watchRepaymentTerm || !watchInterestRate)
      return null;

    const principal = watchLoanAmount;
    const monthlyRate = watchInterestRate / 100 / 12;
    const numberOfPayments = parseInt(watchRepaymentTerm);

    const monthlyPayment =
      (principal *
        (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    const totalPayment = monthlyPayment * numberOfPayments;
    const totalInterest = totalPayment - principal;

    return {
      monthlyPayment: Math.round(monthlyPayment),
      totalPayment: Math.round(totalPayment),
      totalInterest: Math.round(totalInterest),
    };
  };

  const loanDetails = calculateLoanDetails();

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 5));
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

const onSubmit = async (data: LoanApplicationData) => {
  setIsLoading(true);
  try {
    if (!token) {
      throw new Error("No authentication token found");
    }

    const response = await fetch("https://bank-account-backend-hgpt.onrender.com/api/v1/loans/apply", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        ...data,
        memberId: member?._id,
        accountNumber: member?.accountNumber,
      }),
    });

    const result = await response.json();
    console.log("API Response:", result);

    if (result.success) {
      toast.success(result.message || "Loan application submitted successfully!");
      
      // Store data for payment instructions
      localStorage.setItem("loanPaymentData", JSON.stringify({
        applicationId: result.applicationId,
        paymentReference: result.paymentReference,
        amount: result.upfrontPaymentAmount,
      }));

      // Navigate to payment instructions
      navigate(`/loans/${result.applicationId}/payment-instructions`);

    } else {
      throw new Error(result.message || "Failed to submit loan application");
    }
  } catch (error: any) {
    console.error("Loan application error:", error);
    toast.error(error.message || "Failed to submit loan application");
  } finally {
    setIsLoading(false);
  }
};

  const steps = [
    { number: 1, title: "Loan Details", icon: DollarSign },
    { number: 2, title: "Personal Info", icon: User },
    { number: 3, title: "Employment", icon: Building },
    { number: 4, title: "Financials", icon: Calculator },
    { number: 5, title: "Review", icon: FileText },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-[#006064] rounded-xl">
              <Calculator className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">
              Loan Application
            </h1>
          </div>
          <p className="text-lg text-gray-600">
            Complete your loan application in 5 simple steps
          </p>
        </div>

        {/* Progress Steps */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex flex-col gap-5 md:flex-row md:gap-0 md:items-center md:justify-between ">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center">
                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-full ${
                      currentStep >= step.number
                        ? "bg-[#006064] text-white"
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {currentStep > step.number ? (
                      <CheckCircle className="h-5 w-5" />
                    ) : (
                      <step.icon className="h-5 w-5" />
                    )}
                  </div>
                  <span
                    className={`ml-2 text-sm font-medium ${
                      currentStep >= step.number
                        ? "text-[#006064]"
                        : "text-gray-500"
                    }`}
                  >
                    {step.title}
                  </span>
                  {index < steps.length - 1 && (
                    <div
                      className={`w-12 h-0.5 mx-4 ${
                        currentStep > step.number
                          ? "bg-[#006064]"
                          : "bg-gray-200"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Step 1: Loan Details */}
            {currentStep === 1 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <DollarSign className="h-5 w-5 mr-2 text-[#006064]" />
                    Loan Details
                  </CardTitle>
                  <CardDescription>
                    Tell us about the loan you're looking for
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="loanType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Loan Type *</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select loan type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {loanTypes.map((type) => (
                                <SelectItem key={type.value} value={type.value}>
                                  {type.label} (Up to $
                                  {type.maxAmount.toLocaleString()})
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="loanAmount"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Loan Amount ($) *</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              placeholder="Enter amount"
                              {...field}
                              onChange={(e) =>
                                field.onChange(parseFloat(e.target.value))
                              }
                              min="1000"
                              max={selectedLoanType?.maxAmount || 100000000}
                            />
                          </FormControl>
                          {selectedLoanType && (
                            <FormDescription>
                              Maximum: $
                              {selectedLoanType.maxAmount.toLocaleString()}
                            </FormDescription>
                          )}
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="loanPurpose"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Loan Purpose *</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Please describe what you need the loan for..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="repaymentTerm"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Repayment Term *</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select term" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {repaymentTerms.map((term) => (
                                <SelectItem key={term.value} value={term.value}>
                                  {term.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="preferredInterestRate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Preferred Interest Rate (%) *</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              step="0.1"
                              placeholder="e.g., 12.5"
                              {...field}
                              onChange={(e) =>
                                field.onChange(parseFloat(e.target.value))
                              }
                              min="5"
                              max="25"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Loan Calculation Preview */}
                  {loanDetails && (
                    <Card className="bg-blue-50 border-blue-200">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-blue-900 mb-3">
                          Loan Calculation Preview
                        </h4>
                        <div className="grid grid-cols-3 gap-4 text-sm">
                          <div>
                            <p className="text-blue-700">Monthly Payment</p>
                            <p className="font-semibold text-lg">
                              ${loanDetails.monthlyPayment.toLocaleString()}
                            </p>
                          </div>
                          <div>
                            <p className="text-blue-700">Total Payment</p>
                            <p className="font-semibold text-lg">
                              ${loanDetails.totalPayment.toLocaleString()}
                            </p>
                          </div>
                          <div>
                            <p className="text-blue-700">Total Interest</p>
                            <p className="font-semibold text-lg">
                              ${loanDetails.totalInterest.toLocaleString()}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </CardContent>
              </Card>
            )}

            {/* Step 2: Personal Information */}
            {currentStep === 2 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <User className="h-5 w-5 mr-2 text-[#006064]" />
                    Personal Information
                  </CardTitle>
                  <CardDescription>Your basic personal details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name *</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name *</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address *</FormLabel>
                          <FormControl>
                            <Input type="email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number *</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 3: Employment Information */}
            {currentStep === 3 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Building className="h-5 w-5 mr-2 text-[#006064]" />
                    Employment Information
                  </CardTitle>
                  <CardDescription>
                    Tell us about your employment status
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <FormField
                    control={form.control}
                    name="employmentStatus"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Employment Status *</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select status" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {employmentStatuses.map((status) => (
                              <SelectItem key={status} value={status}>
                                {status}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="employerName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Employer Name *</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="jobTitle"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Job Title *</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="monthlyIncome"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Monthly Income ($) *</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              {...field}
                              onChange={(e) =>
                                field.onChange(parseFloat(e.target.value))
                              }
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="employmentDuration"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Employment Duration *</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., 3 years" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 4: Financial Information */}
            {currentStep === 4 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calculator className="h-5 w-5 mr-2 text-[#006064]" />
                    Financial Information
                  </CardTitle>
                  <CardDescription>
                    Your current financial situation
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="monthlyExpenses"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Monthly Expenses ($) *</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              {...field}
                              onChange={(e) =>
                                field.onChange(parseFloat(e.target.value))
                              }
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="existingLoans"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Existing Loan Payments ($) *</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              {...field}
                              onChange={(e) =>
                                field.onChange(parseFloat(e.target.value))
                              }
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="creditScore"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Credit Score</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            {...field}
                            onChange={(e) =>
                              field.onChange(parseFloat(e.target.value))
                            }
                            min="300"
                            max="850"
                          />
                        </FormControl>
                        <FormDescription>
                          If unknown, leave blank or enter 0
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="hasCollateral"
                    render={({ field }) => (
                      <FormItem className="flex items-center space-x-2">
                        <FormControl>
                          <Input
                            type="checkbox"
                            checked={field.value}
                            onChange={field.onChange}
                            className="w-4 h-4"
                          />
                        </FormControl>
                        <FormLabel className="!mt-0">
                          Do you have collateral to secure this loan?
                        </FormLabel>
                      </FormItem>
                    )}
                  />

                  {form.watch("hasCollateral") && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 bg-gray-50 rounded-lg">
                      <FormField
                        control={form.control}
                        name="collateralType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Collateral Type</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select type" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {collateralTypes.map((type) => (
                                  <SelectItem key={type} value={type}>
                                    {type}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="collateralValue"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Collateral Value ($)</FormLabel>
                            <FormControl>
                              <Input
                                type="number"
                                {...field}
                                onChange={(e) =>
                                  field.onChange(parseFloat(e.target.value))
                                }
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="collateralDescription"
                        render={({ field }) => (
                          <FormItem className="md:col-span-2">
                            <FormLabel>Collateral Description</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Describe the collateral in detail..."
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  )}
                </CardContent>
              </Card>
            )}

            {/* Step 5: Review and Submit */}
            {currentStep === 5 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="h-5 w-5 mr-2 text-[#006064]" />
                    Review Your Application
                  </CardTitle>
                  <CardDescription>
                    Please review all information before submitting
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Loan Summary */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Loan Summary</CardTitle>
                    </CardHeader>
                    <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-600">Loan Type</p>
                        <p className="font-semibold">
                          {
                            loanTypes.find(
                              (lt) => lt.value === form.watch("loanType")
                            )?.label
                          }
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Loan Amount</p>
                        <p className="font-semibold">
                          ${form.watch("loanAmount")?.toLocaleString()}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Monthly Payment</p>
                        <p className="font-semibold">
                          ${loanDetails?.monthlyPayment.toLocaleString()}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Total Interest</p>
                        <p className="font-semibold">
                          ${loanDetails?.totalInterest.toLocaleString()}
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <FormField
                    control={form.control}
                    name="additionalNotes"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Additional Notes</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Any additional information you'd like to share..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="agreeToTerms"
                    render={({ field }) => (
                      <FormItem className="flex items-start space-x-3 space-y-0">
                        <FormControl>
                          <Input
                            type="checkbox"
                            checked={field.value}
                            onChange={field.onChange}
                            className="w-4 h-4 mt-1"
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            I agree to the terms and conditions
                          </FormLabel>
                          <FormDescription>
                            By submitting this application, I confirm that all
                            information provided is accurate and complete.
                          </FormDescription>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between">
              <Button
                type="button"
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}
              >
                Previous
              </Button>

              {currentStep < 5 ? (
                <Button
                  type="button"
                  onClick={nextStep}
                  className="bg-[#006064] text-white hover:bg-[#004d40]"
                >
                  Next Step
                </Button>
              ) : (
                <Button
                  type="submit"
                  disabled={isLoading || !form.watch("agreeToTerms")}
                  className="bg-[#006064] text-white hover:bg-[#004d40]"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit Application"
                  )}
                </Button>
              )}
            </div>
          </form>
        </Form>

        {/* Help Section */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="h-5 w-5 mr-2 text-[#006064]" />
              Need Help?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <h4 className="font-semibold mb-2">Loan Requirements</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>• Minimum credit score: 650</li>
                  <li>• Stable income source</li>
                  <li>• Valid identification</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Processing Time</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>• Personal loans: 2-3 days</li>
                  <li>• Business loans: 5-7 days</li>
                  <li>• Mortgage loans: 10-14 days</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Contact Support</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>• Phone: 1-800-LOAN-NOW</li>
                  <li>• Email: loans@capitalcu.com</li>
                  <li>• Live chat available</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
