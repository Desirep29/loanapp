import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Check,
  Star,
  TrendingUp,
  Lock,
  Calendar,
  Users,
  PiggyBank,
  ArrowRight,
  Target,
  Zap,
} from "lucide-react";
import { useState } from "react";

export default function SavingsPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const savingsCategories = [
    { id: "all", label: "All Accounts" },
    { id: "everyday", label: "Everyday Savings" },
    { id: "high-yield", label: "High Yield" },
    { id: "cds", label: "Certificates" },
    { id: "retirement", label: "Retirement" },
    { id: "youth", label: "Youth Accounts" },
  ];

  const savingsProducts = [
    {
      id: "regular",
      category: "everyday",
      icon: PiggyBank,
      title: "Regular Savings",
      description: "A flexible account for everyday savings goals",
      apy: "0.25%",
      apyDescription: "Annual Percentage Yield*",
      features: [
        "No minimum balance requirements",
        "Easy access to your funds anytime",
        "Dividends paid monthly",
        "No monthly maintenance fees",
        "Online and mobile banking access",
        "Automatic transfers available",
      ],
      minBalance: "$0",
      bestFor: "Emergency funds and short-term goals",
      popular: false,
    },
    {
      id: "thrive",
      category: "high-yield",
      icon: TrendingUp,
      title: "Thrive Savings",
      description: "High-yield savings for serious savers",
      apy: "3.95%",
      apyDescription: "Annual Percentage Yield*",
      features: [
        "Competitive high-yield rate",
        "$500 minimum balance to earn APY",
        "Watch your savings grow faster",
        "No withdrawal limits",
        "FDIC insured up to $250,000",
        "Priority customer service",
      ],
      minBalance: "$500",
      bestFor: "Building substantial savings efficiently",
      popular: true,
    },
    {
      id: "money-market",
      category: "high-yield",
      icon: TrendingUp,
      title: "Money Market",
      description: "Higher rates with tiered balances and check writing",
      apy: "Up to 3.50%",
      apyDescription: "Tiered Annual Percentage Yield*",
      features: [
        "Tiered dividend rates",
        "$2,500 minimum balance",
        "Limited check writing privileges",
        "Debit card access",
        "Higher tiers earn more",
        "Combined statement options",
      ],
      minBalance: "$2,500",
      bestFor: "Larger balances with some liquidity needs",
      popular: true,
    },
    {
      id: "cds",
      category: "cds",
      icon: Lock,
      title: "Certificates of Deposit",
      description: "Lock in great rates for guaranteed returns",
      apy: "Up to 4.25%",
      apyDescription: "Annual Percentage Yield*",
      features: [
        "Terms from 3 to 60 months",
        "$500 minimum deposit",
        "Fixed rates guaranteed",
        "Automatic renewal options",
        "Early withdrawal penalties apply",
        "IRA CD options available",
      ],
      minBalance: "$500",
      bestFor: "Long-term savings with guaranteed returns",
      popular: false,
    },
    {
      id: "ira",
      category: "retirement",
      icon: Calendar,
      title: "IRA Accounts",
      description: "Save for retirement with tax advantages",
      apy: "Up to 4.00%",
      apyDescription: "IRA Annual Percentage Yield*",
      features: [
        "Traditional & Roth IRA options",
        "Tax-advantaged savings growth",
        "Competitive IRA rates",
        "Annual contribution limits apply",
        "Retirement planning resources",
        "Rollover services available",
      ],
      minBalance: "$100",
      bestFor: "Long-term retirement planning",
      popular: false,
    },
    {
      id: "youth",
      category: "youth",
      icon: Users,
      title: "Youth Savings",
      description: "Help kids learn financial responsibility",
      apy: "0.50%",
      apyDescription: "Annual Percentage Yield*",
      features: [
        "For members under 18 years old",
        "No minimum balance requirements",
        "Financial education resources",
        "Parent/guardian joint ownership",
        "Fun savings challenges",
        "Educational workshops",
      ],
      minBalance: "$0",
      bestFor: "Teaching children about money management",
      popular: false,
    },
  ];

  const benefits = [
    {
      icon: Lock,
      title: "FDIC Insured",
      description: "All deposits insured up to $250,000 per account",
    },
    {
      icon: Zap,
      title: "Competitive Rates",
      description:
        "Rates that often beat national banks and online competitors",
    },
    {
      icon: Target,
      title: "Goal Tracking",
      description: "Set and track savings goals with our digital tools",
    },
    {
      icon: Star,
      title: "No Hidden Fees",
      description: "Transparent pricing with no surprise maintenance fees",
    },
  ];

  const filteredProducts =
    activeCategory === "all"
      ? savingsProducts
      : savingsProducts.filter(
          (product) => product.category === activeCategory
        );

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="bg-gradient-to-r from-gray-50 to-white py-4 border-b">
        <div className="container mx-auto px-4">
          <div className="text-sm text-gray-600">
            <span className="text-[#006064] font-semibold">01</span> / PERSONAL
            / SAVINGS
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
                  Personal / Savings
                </p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-balance">
                  Save for What Matters Most to You
                </h1>
                <p className="text-lg text-blue-100 leading-relaxed">
                  Whether you're saving for a rainy day, a dream vacation, or
                  your child's education, we have savings accounts designed to
                  help you reach your financial goals with competitive rates and
                  flexible options.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-[#B8D430] hover:bg-[#a0bb28] text-[#006064] font-semibold px-8 py-3">
                  Open a Savings Account
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[#006064] px-8 py-3"
                >
                  Compare Rates & Accounts →
                </Button>
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-1 backdrop-blur-sm">
                <img
                  src="https://i.pinimg.com/736x/59/79/1b/59791b88f2e59c57537a09f70a7dc67a.jpg"
                  alt="Savings concept with piggy bank and growth chart"
                  className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-xl"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-[#B8D430] text-[#006064] px-6 py-3 rounded-lg shadow-lg">
                <p className="font-bold text-lg">4.25%</p>
                <p className="text-sm">Highest CD APY</p>
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
                3.95%
              </p>
              <p className="text-sm text-gray-600 mt-1">High-Yield APY</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-[#006064]">
                $0
              </p>
              <p className="text-sm text-gray-600 mt-1">Monthly Fees</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-[#006064]">
                24/7
              </p>
              <p className="text-sm text-gray-600 mt-1">Account Access</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-[#006064]">
                $250K
              </p>
              <p className="text-sm text-gray-600 mt-1">FDIC Insurance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {savingsCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  activeCategory === category.id
                    ? "bg-[#006064] text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Savings Products Grid */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#006064] mb-4">
              Choose Your Savings Account
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Find the perfect savings solution for your financial goals and
              timeline
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {filteredProducts.map((product, index) => (
              <Card
                key={index}
                className="border-2 border-[#006064] hover:shadow-2xl transition-all duration-300 group"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-12 h-12 rounded-full bg-[#B8D430]/20 flex items-center justify-center group-hover:bg-[#B8D430]/30 transition-colors">
                      <product.icon className="h-6 w-6 text-[#006064]" />
                    </div>
                    {product.popular && (
                      <div className="flex items-center gap-1 bg-[#B8D430] text-[#006064] px-2 py-1 rounded-full text-xs font-bold">
                        <Star className="h-3 w-3 fill-current" />
                        Popular
                      </div>
                    )}
                  </div>
                  <CardTitle className="text-xl text-[#006064] group-hover:text-[#004d50] transition-colors">
                    {product.title}
                  </CardTitle>
                  <p className="text-sm text-gray-600 mt-1">
                    {product.description}
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-gradient-to-r from-[#B8D430]/20 to-[#006064]/10 p-4 rounded-lg">
                    <p className="text-2xl font-bold text-[#006064]">
                      {product.apy}
                    </p>
                    <p className="text-sm text-gray-600">
                      {product.apyDescription}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Min. Balance: {product.minBalance}
                    </p>
                  </div>
                  <ul className="space-y-2">
                    {product.features.slice(0, 4).map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-gray-700"
                      >
                        <Check className="h-4 w-4 text-[#B8D430] flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-xs text-gray-500 mb-3">
                      <strong>Best for:</strong> {product.bestFor}
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

      {/* Benefits Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#006064] mb-4">
              Why Save With Us?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Experience the credit union difference with member-focused
              benefits and local service
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="border border-gray-200 hover:border-[#006064] hover:shadow-xl transition-all duration-300 text-center"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-[#B8D430]/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#B8D430]/30 transition-colors">
                    <benefit.icon className="h-6 w-6 text-[#006064]" />
                  </div>
                  <h3 className="font-bold text-[#006064] mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Savings Calculator CTA */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto border-2 border-[#006064] bg-gradient-to-r from-[#006064]/5 to-[#B8D430]/5">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-[#006064]">
                    Savings Calculator
                  </h3>
                  <p className="text-gray-600">
                    See how your savings can grow over time with our interactive
                    calculator. Plan your financial future with confidence.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <Button className="bg-[#006064] hover:bg-[#004d50] text-white h-auto py-3">
                      <TrendingUp className="h-4 w-4 mr-2" />
                      Calculate Growth
                    </Button>
                    <Button
                      variant="outline"
                      className="border-[#006064] text-[#006064] hover:bg-[#006064] hover:text-white h-auto py-3"
                    >
                      Set Savings Goals
                    </Button>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-[#006064] to-[#004d50] rounded-2xl p-1">
                  <img
                    src="/savings-calculator-modern.jpg"
                    alt="Savings calculator visualization"
                    className="w-full h-48 object-cover rounded-xl"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-[#006064] to-[#004d50] text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Start Growing Your Savings Today
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of members who are building their financial future
              with our competitive savings accounts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[#B8D430] hover:bg-[#a0bb28] text-[#006064] font-semibold px-8 py-3"
              >
                Open Account Online
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#006064] px-8 py-3"
              >
                Speak with a Specialist
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <p className="text-xs text-gray-600 leading-relaxed max-w-4xl mx-auto text-center">
            *APY = Annual Percentage Yield. Rates are subject to change without
            notice and may change after account opening. Fees could reduce
            earnings on the account. Minimum balance requirements and other
            restrictions may apply. Contact First International Financial Services for complete
            rate information and account details. FDIC insurance up to $250,000
            per depositor.
          </p>
        </div>
      </section>
    </div>
  );
}
