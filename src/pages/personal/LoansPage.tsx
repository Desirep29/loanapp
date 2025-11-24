import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Home,
  Car,
  CreditCard,
  Briefcase,
  ArrowRight,
  Zap,
  Shield,
  Clock,
  Star,
  Calculator,
} from "lucide-react";
import { useState } from "react";

export default function LoansPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const loanCategories = [
    { id: "all", label: "All Loans" },
    { id: "auto", label: "Auto Loans" },
    { id: "home", label: "Home Loans" },
    { id: "personal", label: "Personal Loans" },
    { id: "recreational", label: "Recreational" },
  ];

  const loanProducts = [
    {
      id: "auto",
      icon: Car,
      title: "Auto Loans",
      description: "New and used vehicle financing with competitive rates",
      rate: "Starting at 5.29% APR*",
      features: [
        "Competitive rates for new and used vehicles",
        "Terms up to 84 months available",
        "Quick pre-approval in minutes",
        "Refinancing options available",
        "Gap insurance options",
        "Online payment management",
      ],
      popular: true,
      minAmount: "$5,000",
      maxAmount: "$100,000",
      processTime: "24-48 hours",
    },
    {
      id: "home",
      icon: Home,
      title: "Home Loans",
      description: "Mortgages and home equity solutions for homeowners",
      rate: "Starting at 6.25% APR*",
      features: [
        "First-time homebuyer programs",
        "Fixed and adjustable rate options",
        "Home equity loans and lines of credit",
        "Refinancing available",
        "Local underwriting decisions",
        "Competitive closing costs",
      ],
      popular: true,
      minAmount: "$50,000",
      maxAmount: "$1,000,000",
      processTime: "2-3 weeks",
    },
    {
      id: "personal",
      icon: CreditCard,
      title: "Personal Loans",
      description: "Flexible financing for any need without collateral",
      rate: "Starting at 8.99% APR*",
      features: [
        "Borrow up to $50,000",
        "No collateral required",
        "Fast approval and funding",
        "Use for any purpose",
        "Fixed monthly payments",
        "No prepayment penalties",
      ],
      minAmount: "$1,000",
      maxAmount: "$50,000",
      processTime: "1-2 business days",
    },
    {
      id: "rv-boat",
      icon: Briefcase,
      title: "RV & Boat Loans",
      description:
        "Finance your adventures with specialized recreational loans",
      rate: "Starting at 6.49% APR*",
      features: [
        "New and used RVs and boats",
        "Extended terms up to 15 years",
        "Competitive rates",
        "Simple application process",
        "Online account management",
        "Flexible down payment options",
      ],
      minAmount: "$10,000",
      maxAmount: "$250,000",
      processTime: "3-5 business days",
    },
    {
      id: "home-equity",
      icon: Home,
      title: "Home Equity Lines",
      description: "Access your home's equity for major expenses",
      rate: "Starting at 7.25% APR*",
      features: [
        "Access up to 85% of home equity",
        "Interest-only payments available",
        "Draw period up to 10 years",
        "Tax-deductible interest*",
        "Online access to funds",
        "No closing costs specials",
      ],
      minAmount: "$25,000",
      maxAmount: "$500,000",
      processTime: "2-3 weeks",
    },
    {
      id: "student",
      icon: CreditCard,
      title: "Student Loans",
      description: "Education financing for students and families",
      rate: "Starting at 5.99% APR*",
      features: [
        "Undergraduate and graduate programs",
        "Competitive fixed and variable rates",
        "Flexible repayment options",
        "Cosigner release available",
        "Deferment and forbearance options",
        "Career counseling resources",
      ],
      minAmount: "$1,000",
      maxAmount: "$150,000",
      processTime: "1-2 weeks",
    },
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Quick Approval",
      description:
        "Get pre-approved in minutes with our streamlined application process",
    },
    {
      icon: Shield,
      title: "Local Decisions",
      description:
        "Work with local experts who understand your community and needs",
    },
    {
      icon: Clock,
      title: "Fast Funding",
      description:
        "Receive your funds quickly once approved, often within 24-48 hours",
    },
    {
      icon: Star,
      title: "Competitive Rates",
      description:
        "Enjoy rates that are often better than big banks and online lenders",
    },
  ];

  const filteredLoans =
    activeCategory === "all"
      ? loanProducts
      : loanProducts.filter(
          (loan) =>
            loan.id === activeCategory ||
            (activeCategory === "recreational" && loan.id === "rv-boat")
        );

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="bg-gradient-to-r from-gray-50 to-white py-4 border-b">
        <div className="container mx-auto px-4">
          <div className="text-sm text-gray-600">
            <span className="text-[#006064] font-semibold">01</span> / PERSONAL
            / LOANS
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
                  Personal / Loans
                </p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-balance">
                  Financing for Life's Big Moments
                </h1>
                <p className="text-lg text-blue-100 leading-relaxed">
                  From buying your first home to getting a new car, we offer
                  competitive rates and flexible terms to help you achieve your
                  goals. Our local loan specialists are here to guide you
                  through every step.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-[#B8D430] hover:bg-[#a0bb28] text-[#006064] font-semibold px-8 py-3">
                  Apply for a Loan
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[#006064] px-8 py-3"
                >
                  View Rates & Calculators →
                </Button>
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-1 backdrop-blur-sm">
                <img
                  src="https://i.pinimg.com/736x/85/42/b7/8542b703767a80d739b51a775e0e91b8.jpg"
                  alt="Happy couple with keys"
                  className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-xl"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-[#B8D430] text-[#006064] px-6 py-3 rounded-lg shadow-lg">
                <p className="font-bold text-lg">5.29%</p>
                <p className="text-sm">Lowest Auto APR</p>
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
                $1.2B+
              </p>
              <p className="text-sm text-gray-600 mt-1">Loans Funded</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-[#006064]">
                24-48h
              </p>
              <p className="text-sm text-gray-600 mt-1">Average Approval</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-[#006064]">
                98%
              </p>
              <p className="text-sm text-gray-600 mt-1">Approval Rate</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-[#006064]">
                4.9/5
              </p>
              <p className="text-sm text-gray-600 mt-1">Member Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {loanCategories.map((category) => (
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

      {/* Loan Products Grid */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#006064] mb-4">
              Explore Our Loan Options
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Competitive rates, flexible terms, and local expertise for all
              your financing needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {filteredLoans.map((loan, index) => (
              <Card
                key={index}
                className="border-2 border-[#006064] hover:shadow-2xl transition-all duration-300 group"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-12 h-12 rounded-full bg-[#B8D430]/20 flex items-center justify-center group-hover:bg-[#B8D430]/30 transition-colors">
                      <loan.icon className="h-6 w-6 text-[#006064]" />
                    </div>
                    {loan.popular && (
                      <div className="flex items-center gap-1 bg-[#B8D430] text-[#006064] px-2 py-1 rounded-full text-xs font-bold">
                        <Star className="h-3 w-3 fill-current" />
                        Popular
                      </div>
                    )}
                  </div>
                  <CardTitle className="text-xl text-[#006064] group-hover:text-[#004d50] transition-colors">
                    {loan.title}
                  </CardTitle>
                  <p className="text-sm text-gray-600 mt-1">
                    {loan.description}
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-gradient-to-r from-[#B8D430]/20 to-[#006064]/10 p-4 rounded-lg">
                    <p className="text-lg font-bold text-[#006064]">
                      {loan.rate}
                    </p>
                    <div className="flex justify-between text-xs text-gray-600 mt-2">
                      <span>
                        Amount: {loan.minAmount} - {loan.maxAmount}
                      </span>
                      <span>Process: {loan.processTime}</span>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {loan.features.slice(0, 4).map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-gray-700"
                      >
                        <Zap className="h-4 w-4 text-[#B8D430] flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-2 pt-2">
                    <Button className="flex-1 bg-[#006064] hover:bg-[#004d50] text-white">
                      Apply Now
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-[#006064] text-[#006064] hover:bg-[#006064] hover:text-white"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </Button>
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
              Why Choose Our Loans?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Experience the credit union difference with personalized service
              and member-focused benefits
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

      {/* Tools & Calculators */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto border-2 border-[#006064] bg-gradient-to-r from-[#006064]/5 to-[#B8D430]/5">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-[#006064]">
                    Loan Calculators & Tools
                  </h3>
                  <p className="text-gray-600">
                    Use our interactive calculators to estimate payments,
                    compare loan options, and plan your budget with confidence.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <Button className="bg-[#006064] hover:bg-[#004d50] text-white h-auto py-3">
                      <Calculator className="h-4 w-4 mr-2" />
                      Payment Calculator
                    </Button>
                    <Button
                      variant="outline"
                      className="border-[#006064] text-[#006064] hover:bg-[#006064] hover:text-white h-auto py-3"
                    >
                      Affordability Tool
                    </Button>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-[#006064] to-[#004d50] rounded-2xl p-1">
                  <img
                    src="/loan-calculator-tools-modern.jpg"
                    alt="Loan calculator tools"
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
              Ready to Get Started?
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Our local loan specialists are here to help you find the perfect
              financing solution for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[#B8D430] hover:bg-[#a0bb28] text-[#006064] font-semibold px-8 py-3"
              >
                Apply Online Now
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
            *APR = Annual Percentage Rate. All rates are subject to change
            without notice and based on creditworthiness. Other terms and
            conditions may apply. All loans subject to credit approval. Contact
            First International Financial Services for complete rate information and loan details.
            **Tax deductibility depends on individual circumstances; consult a
            tax advisor.
          </p>
        </div>
      </section>
    </div>
  );
}
