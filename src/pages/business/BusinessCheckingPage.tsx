import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Check,
  Building,
  Smartphone,
  CreditCard,
  BarChart,
  Shield,
  Zap,
  ArrowRight,
  Users,
  Target,
} from "lucide-react";
import { useState } from "react";

export default function BusinessCheckingPage() {
  const [activeTab, setActiveTab] = useState("checking");

  const features = [
    {
      icon: Smartphone,
      title: "Online Business Banking",
      description:
        "Manage your business accounts 24/7 with secure online access. View balances, transfer funds, pay bills, and more from any device.",
    },
    {
      icon: Building,
      title: "Mobile Banking App",
      description:
        "Bank on the go with our mobile app. Deposit checks, monitor transactions, and manage your business finances from your smartphone.",
    },
    {
      icon: CreditCard,
      title: "Business Debit Cards",
      description:
        "Issue debit cards to authorized users with customizable spending limits and controls for better expense management.",
    },
    {
      icon: BarChart,
      title: "Merchant Services",
      description:
        "Accept credit and debit card payments with our competitive merchant services solutions designed for businesses of all sizes.",
    },
    {
      icon: Shield,
      title: "Fraud Protection",
      description:
        "Advanced security features including transaction monitoring, alerts, and zero liability protection for unauthorized transactions.",
    },
    {
      icon: Users,
      title: "Multi-User Access",
      description:
        "Grant secure access to employees with customizable permissions and spending limits for better financial control.",
    },
  ];

  const benefits = [
    "No hidden fees - transparent pricing",
    "Local decision-making for faster service",
    "Dedicated business banking specialists",
    "Free online and mobile banking",
    "Competitive merchant service rates",
    "24/7 account access and support",
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="bg-gradient-to-r from-gray-50 to-white py-4 border-b">
        <div className="container mx-auto px-4">
          <div className="text-sm text-gray-600">
            <span className="text-[#006064] font-semibold">01</span> / BUSINESS
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
                  Business / Checking
                </p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-balance">
                  Business Checking Built for Growth
                </h1>
                <p className="text-lg text-blue-100 leading-relaxed">
                  Whether you're a sole proprietor or managing a growing
                  enterprise, we have business checking accounts with the
                  features and flexibility you need to manage your cash flow
                  efficiently and scale your business.
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
                  Compare Accounts →
                </Button>
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-1 backdrop-blur-sm">
                <img
                  src="/business-owner-tablet-modern.jpg"
                  alt="Business owner with tablet"
                  className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-xl"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-[#B8D430] text-[#006064] px-6 py-3 rounded-lg shadow-lg">
                <p className="font-bold text-lg">$0</p>
                <p className="text-sm">Monthly Fees</p>
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
                $100
              </p>
              <p className="text-sm text-gray-600 mt-1">Min. Opening Deposit</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-[#006064]">
                200
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Free Transactions/Month
              </p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-[#006064]">
                24/7
              </p>
              <p className="text-sm text-gray-600 mt-1">Online Banking</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-[#006064]">
                0%
              </p>
              <p className="text-sm text-gray-600 mt-1">Monthly Fees</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { id: "checking", label: "Checking Accounts" },
              { id: "features", label: "Features" },
              { id: "benefits", label: "Benefits" },
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

      {/* Account Options */}
      {activeTab === "checking" && (
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#006064] mb-4">
                Choose Your Business Checking Account
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Select the account that best fits your business needs and
                transaction volume
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
              {/* Business Checking */}
              <Card className="border-2 border-[#B8D430] hover:shadow-2xl transition-all duration-300 group">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl text-[#006064] group-hover:text-[#004d50] transition-colors">
                      Business Checking
                    </CardTitle>
                    <Target className="h-6 w-6 text-[#B8D430]" />
                  </div>
                  <p className="text-sm text-gray-600">
                    Perfect for small businesses and startups
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-gradient-to-r from-[#B8D430]/20 to-[#006064]/10 p-4 rounded-lg">
                    <p className="text-lg font-bold text-[#006064]">
                      $100 minimum opening deposit
                    </p>
                    <p className="text-sm text-gray-600">
                      No monthly maintenance fee
                    </p>
                  </div>
                  <ul className="space-y-3">
                    {[
                      "200 free transactions per month",
                      "Online and mobile banking",
                      "Business debit card included",
                      "Free e-statements",
                      "Mobile check deposit",
                      "Bill pay services",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-[#B8D430] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="space-y-3">
                    <Button className="w-full bg-[#006064] hover:bg-[#004d50] text-white py-3">
                      Open Account
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-[#006064] text-[#006064] hover:bg-[#006064] hover:text-white"
                    >
                      Learn More <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Business Analyzed Checking */}
              <Card className="border-2 border-[#006064] bg-gradient-to-br from-[#006064]/5 to-[#B8D430]/5 hover:shadow-2xl transition-all duration-300 group">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl text-[#006064] group-hover:text-[#004d50] transition-colors">
                      Business Analyzed Checking
                    </CardTitle>
                    <BarChart className="h-6 w-6 text-[#006064]" />
                  </div>
                  <p className="text-sm text-gray-600">
                    For businesses with higher transaction volumes
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-gradient-to-r from-[#006064]/10 to-[#B8D430]/10 p-4 rounded-lg">
                    <p className="text-lg font-bold text-[#006064]">
                      $500 minimum opening deposit
                    </p>
                    <p className="text-sm text-gray-600">
                      Earnings credit to offset fees
                    </p>
                  </div>
                  <ul className="space-y-3">
                    {[
                      "Unlimited transactions",
                      "Earnings credit on collected balances",
                      "Advanced online banking features",
                      "ACH origination included",
                      "Detailed account analysis",
                      "Priority customer support",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-[#006064] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="space-y-3">
                    <Button className="w-full bg-[#006064] hover:bg-[#004d50] text-white py-3">
                      Open Account
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-[#006064] text-[#006064] hover:bg-[#006064] hover:text-white"
                    >
                      Learn More <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      {activeTab === "features" && (
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#006064] mb-4">
                Powerful Business Banking Features
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Everything you need to manage your business finances efficiently
                and securely
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="border border-gray-200 hover:border-[#006064] hover:shadow-xl transition-all duration-300 group"
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-[#B8D430]/20 flex items-center justify-center mb-4 group-hover:bg-[#B8D430]/30 transition-colors">
                      <feature.icon className="h-6 w-6 text-[#006064]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#006064] mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Benefits Section */}
      {activeTab === "benefits" && (
        <section className="py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8 md:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#006064] mb-4">
                  Why Choose Our Business Checking?
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                  Experience the difference of banking with a partner who truly
                  understands business needs
                </p>
              </div>
              <Card className="bg-white border-2 border-[#006064]">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <Zap className="h-5 w-5 text-[#B8D430] flex-shrink-0" />
                        <span className="text-gray-700 font-medium">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-[#006064] to-[#004d50] text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Ready to Power Your Business?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-blue-100">
              Get started today and experience the difference of banking with a
              partner who understands your business needs and supports your
              growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[#B8D430] hover:bg-[#a0bb28] text-[#006064] font-semibold px-8 py-3"
              >
                Open an Account
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#006064] px-8 py-3"
              >
                Speak with a Business Specialist
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-xl font-bold text-[#006064] mb-4">
              Need Help Choosing?
            </h3>
            <p className="text-gray-600 mb-6">
              Our business banking specialists are here to help you select the
              right account for your specific needs.
            </p>
            <Button
              variant="outline"
              className="border-[#006064] text-[#006064] hover:bg-[#006064] hover:text-white"
            >
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
