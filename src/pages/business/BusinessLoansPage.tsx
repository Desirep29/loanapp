import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Building,
  TrendingUp,
  Home,
  Car,
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  Shield,
  DollarSign,
  FileText,
  ScrollText,
  Banknote,
} from "lucide-react";

export default function BusinessLoansPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-cyan-50/20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#006064]/5 to-[#B8D430]/5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#006064]/10 text-[#006064] text-sm font-medium">
                <div className="w-2 h-2 bg-[#B8D430] rounded-full"></div>
                Business / Loans
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#006064] leading-tight">
                Financing to help your{" "}
                <span className="bg-gradient-to-r from-[#006064] to-[#004d50] bg-clip-text text-transparent">
                  business grow
                </span>
                .
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                From equipment purchases to commercial real estate, we offer
                flexible business loan solutions with competitive rates and
                terms tailored to your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gradient-to-r from-[#006064] to-[#004d50] hover:from-[#004d50] hover:to-[#006064] text-white px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105 shadow-lg">
                  Apply for a Loan
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-[#006064] text-[#006064] hover:bg-[#006064] hover:text-white px-8 py-6 text-lg rounded-xl transition-all duration-300"
                >
                  Contact a Specialist
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://i.pinimg.com/736x/ca/63/7a/ca637abe4b5c89b67bbe46328cf176b1.jpg"
                  alt="Business handshake"
                  className="w-full h-auto"
                />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#B8D430]/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#006064]/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Loan Products */}
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#006064] mb-4">
              Business Loan Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Flexible financing options designed to support your business
              growth and success
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {loanProducts.map((loan, index) => (
              <Card
                key={index}
                className="group relative bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-2xl overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#006064] to-[#004d50]"></div>
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#006064] to-[#004d50] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <loan.icon className="h-7 w-7 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-gray-100 group-hover:text-[#006064]/10 transition-colors duration-300">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>
                  <CardTitle className="text-2xl text-[#006064] group-hover:text-[#004d50] transition-colors duration-300">
                    {loan.title}
                  </CardTitle>
                  <p className="text-gray-600">{loan.subtitle}</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-gradient-to-r from-[#006064]/10 to-[#B8D430]/10 p-6 rounded-xl border border-[#006064]/20">
                    <p className="text-2xl md:text-3xl font-bold text-[#006064]">
                      {loan.rate}
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      {loan.rateSubtitle}
                    </p>
                  </div>

                  <ul className="space-y-3">
                    {loan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-3 text-gray-700"
                      >
                        <CheckCircle className="h-5 w-5 text-[#B8D430] flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button className="w-full bg-gradient-to-r from-[#006064] to-[#004d50] hover:from-[#004d50] hover:to-[#006064] text-white py-6 rounded-xl transition-all duration-300 group-hover:shadow-lg">
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-[#006064] to-[#004d50] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-3">
                <div className="text-3xl md:text-5xl font-bold text-[#B8D430]">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-white/80 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[#006064]/5 to-[#B8D430]/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-[#006064] mb-4">
                Why Choose Our Business Loans?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Experience the difference of working with a financial partner
                that truly understands business growth
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card
                  key={index}
                  className="group text-center bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 rounded-2xl overflow-hidden"
                >
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#006064] to-[#004d50] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <benefit.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-[#006064] mb-3">
                      {benefit.value}
                    </div>
                    <h3 className="text-xl font-bold text-[#006064] mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-[#006064] mb-4">
                Simple Application Process
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Get the funding you need in just a few easy steps
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center group">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#006064] to-[#004d50] rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-[#006064] to-[#004d50] transform translate-x-12"></div>
                    )}
                  </div>
                  <div className="text-2xl font-bold text-[#006064] mb-2">
                    Step {index + 1}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#006064] to-[#004d50] opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20">
              <h2 className="text-3xl md:text-5xl font-bold text-[#006064] mb-6">
                Ready to grow your business?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Talk to one of our business lending specialists to find the
                right financing solution for your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button className="bg-gradient-to-r from-[#006064] to-[#004d50] hover:from-[#004d50] hover:to-[#006064] text-white px-10 py-7 text-lg rounded-xl transition-all duration-300 hover:scale-105 shadow-lg">
                  Apply Online
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-[#006064] text-[#006064] hover:bg-[#006064] hover:text-white px-8 py-7 text-lg rounded-xl transition-all duration-300"
                >
                  Contact Specialist
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-6">
                Fast approvals • Competitive rates • Local decision making
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-white/80">
        <div className="container mx-auto px-4">
          <p className="text-xs text-gray-600 leading-relaxed max-w-5xl mx-auto text-center">
            *APR = Annual Percentage Rate. All rates are subject to change
            without notice and based on creditworthiness. Other terms and
            conditions may apply. All loans subject to credit approval. Contact
            First International Financial Services for complete rate information and loan details.
          </p>
        </div>
      </section>
    </div>
  );
}

const loanProducts = [
  {
    icon: Building,
    title: "Commercial Real Estate Loans",
    subtitle: "Finance your business property",
    rate: "Competitive Rates",
    rateSubtitle: "Contact us for current rates",
    features: [
      "Purchase or refinance commercial property",
      "Terms up to 25 years",
      "Fixed and variable rate options",
      "Owner-occupied and investment properties",
    ],
  },
  {
    icon: TrendingUp,
    title: "Business Term Loans",
    subtitle: "Flexible financing for business needs",
    rate: "Starting at 7.99% APR*",
    rateSubtitle: "Fixed rates available",
    features: [
      "Borrow up to $250,000",
      "Terms from 1 to 10 years",
      "Use for equipment, inventory, or expansion",
      "Fast approval process",
    ],
  },
  {
    icon: Home,
    title: "Business Lines of Credit",
    subtitle: "Flexible access to working capital",
    rate: "Variable Rates",
    rateSubtitle: "Based on prime rate",
    features: [
      "Credit lines up to $100,000",
      "Draw funds as needed",
      "Pay interest only on what you use",
      "Revolving credit for ongoing needs",
    ],
  },
  {
    icon: Car,
    title: "Equipment Financing",
    subtitle: "Finance the tools your business needs",
    rate: "Starting at 6.99% APR*",
    rateSubtitle: "Competitive financing options",
    features: [
      "New and used equipment",
      "Terms up to 7 years",
      "Competitive rates",
      "Quick approval and funding",
    ],
  },
];

const stats = [
  { value: "24-48h", label: "Average Approval" },
  { value: "$250K", label: "Max Loan Amount" },
  { value: "7.99%", label: "Starting APR" },
  { value: "25 yrs", label: "Max Term" },
];

const benefits = [
  {
    icon: Users,
    value: "Local",
    title: "Local Decision Making",
    description:
      "Work with local lenders who understand your market and community with personalized service.",
  },
  {
    icon: Clock,
    value: "Fast",
    title: "Quick Approvals",
    description:
      "Get decisions quickly with our streamlined process so you can move forward with your plans.",
  },
  {
    icon: DollarSign,
    value: "Flexible",
    title: "Flexible Terms",
    description:
      "Customized loan structures and repayment terms designed to fit your unique business needs.",
  },
];

const processSteps = [
  {
    icon: FileText,
    title: "Apply Online",
    description: "Complete our simple application form in minutes",
  },
  {
    icon: Shield,
    title: "Get Approved",
    description: "Receive a decision quickly from our local team",
  },
  {
    icon: ScrollText,
    title: "Review Terms",
    description: "Discuss and finalize your loan terms and conditions",
  },
  {
    icon: Banknote,
    title: "Receive Funds",
    description: "Get the capital you need deposited directly to your account",
  },
];
