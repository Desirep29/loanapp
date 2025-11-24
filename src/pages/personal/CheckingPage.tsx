import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Check,
  Star,
  Zap,
  Users,
  Target,
  ArrowRight,
  TrendingUp,
  Shield,
  Smartphone,
} from "lucide-react";
import { useState } from "react";

export default function CheckingPage() {
  const [activeTab, setActiveTab] = useState("overview");

  const accountTypes = [
    {
      id: "classic",
      name: "Classic Checking Account",
      description: "Earn dividends on your balance with premium features",
      apy: "2.00%",
      apyDescription: "Annual Percentage Yield (APY)*",
      features: [
        "Unlimited ATM fee refunds**",
        "Earn competitive dividends",
        "Premium online and mobile banking",
        "No monthly maintenance fees",
        "Free debit card with fraud protection",
        "Mobile check deposit",
      ],
      bestFor: "Everyday banking with rewards",
      icon: Star,
      popular: true,
    },
    {
      id: "edge",
      name: "Edge Checking Account",
      description: "Get the extra edge when you get ahead",
      features: [
        "Unlimited ATM fee refunds**",
        "Advanced digital banking tools",
        "No monthly maintenance fees",
        "Free debit card with contactless pay",
        "Mobile wallet compatibility",
        "Personal financial insights",
      ],
      bestFor: "Tech-savvy users who want maximum flexibility",
      icon: Zap,
    },
    {
      id: "edge-teen",
      name: "Edge Teen Checking Account",
      description: "Teens 13 to 17 years get an account tailored to them",
      features: [
        "All the features of Edge Checking",
        "Bonuses for good grades and more!*",
        "Parental monitoring tools",
        "Financial education resources",
        "Spending alerts and controls",
        "Youth-focused mobile app",
      ],
      bestFor: "Teens learning financial responsibility",
      icon: Users,
    },
    {
      id: "simple",
      name: "Simple Checking Account",
      description: "Straight-forward account with plenty of free services",
      features: [
        "No minimum balance requirement",
        "No monthly maintenance fees",
        "Basic online and mobile banking",
        "Free debit card",
        "Bill pay services",
        "e-Statements included",
      ],
      bestFor: "Simple, no-frills banking",
      icon: Target,
    },
  ];

  const features = [
    {
      icon: Shield,
      title: "Advanced Security",
      description:
        "24/7 fraud monitoring, zero liability protection, and instant card lock/unlock",
    },
    {
      icon: Smartphone,
      title: "Mobile Banking",
      description:
        "Deposit checks, pay bills, and manage your money from our award-winning mobile app",
    },
    {
      icon: TrendingUp,
      title: "Financial Tools",
      description:
        "Budgeting tools, spending insights, and savings goals to help you manage your money",
    },
    {
      icon: Zap,
      title: "Quick Access",
      description:
        "30,000+ free ATMs nationwide and contactless payments for faster transactions",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="bg-gradient-to-r from-gray-50 to-white py-4 border-b">
        <div className="container mx-auto px-4">
          <div className="text-sm text-gray-600">
            <span className="text-[#006064] font-semibold">01</span> / PERSONAL
            / CHECKING
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#006064] to-[#004d50] text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <div className="space-y-4">
                <p className="text-[#B8D430] text-sm font-semibold uppercase tracking-wider">
                  Personal / Checking
                </p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-balance">
                  Checking That Fits Your Life
                </h1>
                <p className="text-lg text-blue-100 leading-relaxed">
                  The world would be boring if people were exactly alike. The
                  same goes for checking accounts. Choose from options featuring
                  everything from unlimited ATM fee refunds to dividend earnings
                  to simple, straightforward banking.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-[#B8D430] hover:bg-[#a0bb28] text-[#006064] font-semibold px-8 py-3 text-base">
                  Open an Account
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[#006064] px-8 py-3 text-base"
                >
                  Check Application Status →
                </Button>
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-1 backdrop-blur-sm">
                <img
                  src="https://i.pinimg.com/736x/e7/18/58/e71858cd45bb9542f345faf93f4b1dad.jpg"
                  alt="Friends laughing outdoors"
                  className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-xl"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-[#B8D430] text-[#006064] px-6 py-3 rounded-lg shadow-lg">
                <p className="font-bold text-lg">4</p>
                <p className="text-sm">Account Options</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-8 bg-white border-y">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-[#006064]">
                $0
              </p>
              <p className="text-sm text-gray-600 mt-1">Monthly Fees</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-[#006064]">
                30K+
              </p>
              <p className="text-sm text-gray-600 mt-1">Free ATMs</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-[#006064]">
                2.00%
              </p>
              <p className="text-sm text-gray-600 mt-1">APY Available</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-[#006064]">
                24/7
              </p>
              <p className="text-sm text-gray-600 mt-1">Mobile Banking</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { id: "overview", label: "Account Overview" },
              { id: "compare", label: "Compare Accounts" },
              { id: "features", label: "Features" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  activeTab === tab.id
                    ? "bg-[#006064] text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Account Overview */}
      {activeTab === "overview" && (
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#006064] mb-4">
                Choose Your Perfect Checking Account
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Find the checking account that matches your lifestyle and
                financial goals
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
              {accountTypes.map((account) => (
                <Card
                  key={account.id}
                  className={`border-2 ${
                    account.popular
                      ? "border-[#B8D430] bg-gradient-to-br from-[#B8D430]/5 to-[#006064]/5"
                      : "border-[#006064]"
                  } hover:shadow-2xl transition-all duration-300 group relative`}
                >
                  {account.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-[#B8D430] text-[#006064] px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                        <Star className="h-4 w-4 fill-current" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl text-[#006064] group-hover:text-[#004d50] transition-colors">
                          {account.name}
                        </CardTitle>
                        <p className="text-sm text-gray-600 mt-1">
                          {account.description}
                        </p>
                      </div>
                      <account.icon className="h-6 w-6 text-[#006064] flex-shrink-0" />
                    </div>
                    {account.apy && (
                      <div className="bg-gradient-to-r from-[#B8D430]/20 to-[#006064]/10 p-3 rounded-lg mt-3">
                        <p className="text-lg font-bold text-[#006064]">
                          {account.apy}
                        </p>
                        <p className="text-xs text-gray-600">
                          {account.apyDescription}
                        </p>
                      </div>
                    )}
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      {account.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-[#B8D430] flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-xs text-gray-500 mb-3">
                        <strong>Best for:</strong> {account.bestFor}
                      </p>
                      <div className="space-y-2">
                        <Button className="w-full bg-[#006064] hover:bg-[#004d50] text-white">
                          Open Account
                        </Button>
                        <Button
                          variant="outline"
                          className="w-full border-[#006064] text-[#006064] hover:bg-[#006064] hover:text-white"
                        >
                          Learn More <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Compare Accounts */}
      {activeTab === "compare" && (
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#006064] mb-4">
                Compare Checking Accounts
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                See how our checking accounts stack up against each other
              </p>
            </div>
            <Card className="max-w-6xl mx-auto border-2 border-[#006064]">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gradient-to-r from-[#006064] to-[#004d50] text-white">
                        <th className="text-left p-4 font-semibold">Feature</th>
                        {accountTypes.map((account) => (
                          <th
                            key={account.id}
                            className="text-center p-4 font-semibold"
                          >
                            {account.name.split(" ")[0]}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          feature: "Minimum Opening Deposit",
                          classic: "$100",
                          edge: "$25",
                          teen: "$0",
                          simple: "$0",
                        },
                        {
                          feature: "Monthly Maintenance Fee",
                          classic: "$0",
                          edge: "$0",
                          teen: "$0",
                          simple: "$0",
                        },
                        {
                          feature: "ATM Fee Refunds",
                          classic: "✓",
                          edge: "✓",
                          teen: "✓",
                          simple: "—",
                        },
                        {
                          feature: "Earn Dividends",
                          classic: "✓",
                          edge: "—",
                          teen: "—",
                          simple: "—",
                        },
                        {
                          feature: "Mobile Check Deposit",
                          classic: "✓",
                          edge: "✓",
                          teen: "✓",
                          simple: "✓",
                        },
                        {
                          feature: "Bill Pay",
                          classic: "✓",
                          edge: "✓",
                          teen: "✓",
                          simple: "✓",
                        },
                        {
                          feature: "Debit Card",
                          classic: "✓",
                          edge: "✓",
                          teen: "✓",
                          simple: "✓",
                        },
                      ].map((row, index) => (
                        <tr
                          key={index}
                          className={
                            index % 2 === 0 ? "bg-gray-50" : "bg-white"
                          }
                        >
                          <td className="p-4 font-medium text-gray-900 border-r">
                            {row.feature}
                          </td>
                          <td className="text-center p-4 border-r">
                            <span
                              className={
                                row.classic === "✓"
                                  ? "text-[#B8D430] font-bold"
                                  : "text-gray-600"
                              }
                            >
                              {row.classic}
                            </span>
                          </td>
                          <td className="text-center p-4 border-r">
                            <span
                              className={
                                row.edge === "✓"
                                  ? "text-[#B8D430] font-bold"
                                  : "text-gray-600"
                              }
                            >
                              {row.edge}
                            </span>
                          </td>
                          <td className="text-center p-4 border-r">
                            <span
                              className={
                                row.teen === "✓"
                                  ? "text-[#B8D430] font-bold"
                                  : "text-gray-600"
                              }
                            >
                              {row.teen}
                            </span>
                          </td>
                          <td className="text-center p-4">
                            <span
                              className={
                                row.simple === "✓"
                                  ? "text-[#B8D430] font-bold"
                                  : "text-gray-600"
                              }
                            >
                              {row.simple}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Features */}
      {activeTab === "features" && (
        <section className="py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#006064] mb-4">
                Powerful Checking Features
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                All our checking accounts come with features designed to make
                banking easier and more secure
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="border border-gray-200 hover:border-[#006064] hover:shadow-xl transition-all duration-300 group text-center"
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-[#B8D430]/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#B8D430]/30 transition-colors">
                      <feature.icon className="h-6 w-6 text-[#006064]" />
                    </div>
                    <h3 className="font-bold text-[#006064] mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-[#006064] to-[#004d50] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Ready to Find Your Perfect Checking Account?
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of members who have discovered better banking with
              accounts designed for real life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-[#B8D430] hover:bg-[#a0bb28] text-[#006064] font-semibold px-8 py-3">
                Open an Account Today
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#006064] px-8 py-3"
              >
                Speak with a Specialist
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimers */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-xs text-gray-600 space-y-3 leading-relaxed">
            <p>
              *To be eligible for use of ATM fee refunds, there must be
              available funds in the account. Fees must be withdrawn from the
              account.
            </p>
            <p>
              **Checking APR is paid on members who meet the following
              requirements: be enrolled in e-Statements, have at least 12 debit
              card transactions per month, and have at least one direct deposit
              or automatic payment per month. If these requirements are not met,
              the APY will be 0.05%.
            </p>
            <p>
              Rates and terms are subject to change. Contact Capital Credit
              Union for complete details and current offers.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
