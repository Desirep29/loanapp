// components/Loans/LoanTypes.tsx
"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Home, 
  Car, 
  GraduationCap, 
  Briefcase, 
  Heart, 
  Zap,
  CheckCircle,
  Clock,
  Percent
} from "lucide-react";
import { Link } from "react-router-dom";

const loanProducts = [
  {
    icon: Home,
    title: "Mortgage Loans",
    description: "Finance your dream home with competitive rates",
    features: ["Up to ₦100M", "30-year terms", "Fixed & adjustable rates"],
    interestRate: "6.5% - 8.5%",
    processingTime: "10-14 days",
    bestFor: "Home buyers and homeowners"
  },
  {
    icon: Car,
    title: "Auto Loans",
    description: "Get behind the wheel of your new vehicle",
    features: ["Up to ₦20M", "84-month terms", "New & used vehicles"],
    interestRate: "5.9% - 9.9%",
    processingTime: "2-3 days",
    bestFor: "Vehicle purchases"
  },
  {
    icon: GraduationCap,
    title: "Education Loans",
    description: "Invest in your future with education financing",
    features: ["Up to ₦10M", "Deferred payments", "School certified"],
    interestRate: "4.5% - 7.5%",
    processingTime: "5-7 days",
    bestFor: "Students and parents"
  },
  {
    icon: Briefcase,
    title: "Business Loans",
    description: "Grow your business with flexible financing",
    features: ["Up to ₦50M", "Working capital", "Equipment financing"],
    interestRate: "8.5% - 12.5%",
    processingTime: "5-7 days",
    bestFor: "Business owners"
  },
  {
    icon: Heart,
    title: "Personal Loans",
    description: "Flexible loans for your personal needs",
    features: ["Up to ₦5M", "No collateral", "Quick approval"],
    interestRate: "10.5% - 15.5%",
    processingTime: "1-2 days",
    bestFor: "Various personal expenses"
  },
  {
    icon: Zap,
    title: "Emergency Loans",
    description: "Quick funds for unexpected situations",
    features: ["Up to ₦2M", "Same-day funding", "Minimal paperwork"],
    interestRate: "12.0% - 18.0%",
    processingTime: "24 hours",
    bestFor: "Urgent financial needs"
  }
];

export default function LoanTypes() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Loan Products
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our comprehensive range of loan products designed to meet your financial needs
          </p>
        </div>

        {/* Loan Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {loanProducts.map((loan, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="p-3 bg-[#006064] rounded-lg">
                    <loan.icon className="h-6 w-6 text-white" />
                  </div>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    {loan.interestRate}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{loan.title}</CardTitle>
                <CardDescription className="text-base">
                  {loan.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Features */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-gray-700">Key Features</h4>
                  <ul className="space-y-1">
                    {loan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Details */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 text-gray-400 mr-2" />
                    <span>{loan.processingTime}</span>
                  </div>
                  <div className="flex items-center">
                    <Percent className="h-4 w-4 text-gray-400 mr-2" />
                    <span>From {loan.interestRate}</span>
                  </div>
                </div>

                {/* Best For */}
                <div>
                  <p className="text-xs text-gray-500">Best for:</p>
                  <p className="text-sm font-medium">{loan.bestFor}</p>
                </div>

              <Link to="/loans/apply">
                <Button className="w-full bg-[#006064] hover:bg-[#004d40] text-white">
                  Apply Now
                </Button>
              </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <Card className="bg-gradient-to-r from-[#006064] to-[#004d40] text-white">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Why Choose Capital Credit Union?</h2>
              <p className="text-xl opacity-90">
                We make borrowing simple, transparent, and affordable
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { title: "Low Rates", desc: "Competitive interest rates" },
                { title: "Fast Approval", desc: "Quick application process" },
                { title: "Flexible Terms", desc: "Customized repayment plans" },
                { title: "No Hidden Fees", desc: "Transparent pricing" }
              ].map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold mb-2">{feature.title}</div>
                  <div className="text-sm opacity-80">{feature.desc}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}