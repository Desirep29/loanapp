import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CheckCircle2,
  TrendingUp,
  Shield,
  Users,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Star,
  Target,
  PieChart,
  Award,
  BarChart3,
} from "lucide-react";

export default function InvestmentsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-cyan-50/20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#006064]/5 to-[#B8D430]/5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#006064]/10 text-[#006064] text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-[#B8D430] rounded-full"></div>
              Investment Services
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#006064] leading-tight mb-6">
              Plan for your{" "}
              <span className="bg-gradient-to-r from-[#006064] to-[#004d50] bg-clip-text text-transparent">
                financial future
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl">
              Personalized investment guidance from our experienced financial
              advisors to help you achieve your long-term financial goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-[#006064] to-[#004d50] hover:from-[#004d50] hover:to-[#006064] text-white px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105 shadow-lg">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="border-2 border-[#006064] text-[#006064] hover:bg-[#006064] hover:text-white px-8 py-6 text-lg rounded-xl transition-all duration-300"
              >
                View Investment Options
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-[#006064] mb-6">
              Your Financial Future Starts Here
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              First International Financial Services partners with CUNA Brokerage Services, Inc.
              to provide comprehensive investment and retirement planning
              services. Our registered representatives are here to help you
              achieve your financial goals.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[#006064]/5 to-[#B8D430]/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#006064] mb-4">
              Investment Services We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions to help you build and protect your wealth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {investmentServices.map((service, index) => (
              <Card
                key={index}
                className="group relative bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-2xl overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#006064] to-[#004d50]"></div>
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#006064] to-[#004d50] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="h-7 w-7 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-gray-100 group-hover:text-[#006064]/10 transition-colors duration-300">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>
                  <CardTitle className="text-xl text-[#006064] group-hover:text-[#004d50] transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-3 text-gray-700"
                      >
                        <CheckCircle2 className="h-5 w-5 text-[#B8D430] flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-gradient-to-r from-[#006064] to-[#004d50] hover:from-[#004d50] hover:to-[#006064] text-white py-6 rounded-xl transition-all duration-300 group-hover:shadow-lg">
                    Learn More
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
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-[#006064] mb-4">
                Why Choose Our Investment Services?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Experience the difference of working with financial advisors who
                put your goals first
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card
                  key={index}
                  className="group text-center bg-gradient-to-br from-white to-gray-50/50 border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 rounded-2xl overflow-hidden"
                >
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#006064] to-[#004d50] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <benefit.icon className="h-8 w-8 text-white" />
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

      {/* Investment Process */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[#006064]/5 to-[#B8D430]/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-[#006064] mb-4">
                Our Investment Process
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                A structured approach to help you achieve your financial
                objectives
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

      {/* Financial Advisor Contact */}
      <section id="contact" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-[#006064] mb-4">
                Meet Your Financial Advisor
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Get personalized guidance from our experienced investment
                professionals
              </p>
            </div>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl rounded-2xl overflow-hidden">
              <div className="md:flex">
                <div className="md:w-2/5 bg-gradient-to-br from-[#006064] to-[#004d50] p-12 flex flex-col items-center justify-center text-white text-center">
                  <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mb-6">
                    <Users className="h-16 w-16 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">
                    Investment Services Team
                  </h3>
                  <p className="text-white/80">
                    Registered Representatives, CUNA Brokerage Services, Inc.
                  </p>
                  <div className="flex items-center gap-2 mt-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="h-5 w-5 text-[#B8D430] fill-current"
                      />
                    ))}
                    <span className="text-white/80 ml-2">4.9/5 Rating</span>
                  </div>
                </div>
                <div className="md:w-3/5 p-8 md:p-12">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50/50 hover:bg-gray-50 transition-colors duration-200">
                      <div className="w-12 h-12 bg-[#B8D430]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-[#006064]" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Phone</p>
                        <p className="text-gray-600">(800) 555-0123</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50/50 hover:bg-gray-50 transition-colors duration-200">
                      <div className="w-12 h-12 bg-[#B8D430]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-[#006064]" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Email</p>
                        <p className="text-gray-600">investments@capcu.org</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50/50 hover:bg-gray-50 transition-colors duration-200">
                      <div className="w-12 h-12 bg-[#B8D430]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-[#006064]" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Location</p>
                        <p className="text-gray-600">
                          Available at all branch locations
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8">
                    <Button className="w-full bg-gradient-to-r from-[#006064] to-[#004d50] hover:from-[#004d50] hover:to-[#006064] text-white py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105 shadow-lg">
                      Schedule a Consultation
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
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
                Ready to Build Your Financial Future?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Take the first step toward achieving your investment goals with
                personalized guidance from our financial advisors.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button className="bg-gradient-to-r from-[#006064] to-[#004d50] hover:from-[#004d50] hover:to-[#006064] text-white px-10 py-7 text-lg rounded-xl transition-all duration-300 hover:scale-105 shadow-lg">
                  Schedule Your Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-[#006064] text-[#006064] hover:bg-[#006064] hover:text-white px-8 py-7 text-lg rounded-xl transition-all duration-300"
                >
                  Call: (800) 555-0123
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-6">
                No obligation • Fee transparency • Personalized strategies
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-white/80">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-sm text-gray-600 text-center">
            <p className="mb-4">
              <strong>Important Disclosures:</strong> Non-deposit investment
              products and services are offered through CUNA Brokerage Services,
              Inc. (CBSI), member FINRA/SIPC, a registered broker/dealer and
              investment advisor. CBSI is under contract with the financial
              institution to make securities available to members. Not
              NCUA/NCUSIF/FDIC insured, May Lose Value, No Financial Institution
              Guarantee. Not a deposit of any financial institution.
            </p>
            <p>FR-6789012 (01/2024)</p>
          </div>
        </div>
      </section>
    </div>
  );
}

const investmentServices = [
  {
    icon: TrendingUp,
    title: "Retirement Planning",
    features: [
      "Traditional & Roth IRAs",
      "401(k) Rollovers",
      "SEP & SIMPLE IRAs",
      "Retirement Income Strategies",
    ],
  },
  {
    icon: Shield,
    title: "Investment Products",
    features: [
      "Mutual Funds",
      "Stocks & Bonds",
      "Exchange-Traded Funds (ETFs)",
      "Fixed & Variable Annuities",
    ],
  },
  {
    icon: Users,
    title: "Financial Planning",
    features: [
      "Goal-Based Planning",
      "Education Savings (529 Plans)",
      "Estate Planning Strategies",
      "Tax-Advantaged Investing",
    ],
  },
];

const stats = [
  { value: "25+", label: "Years Experience" },
  { value: "4.9/5", label: "Client Satisfaction" },
  { value: "$2.5B", label: "Assets Managed" },
  { value: "95%", label: "Goal Achievement" },
];

const benefits = [
  {
    icon: Users,
    title: "Personalized Guidance",
    description:
      "Work one-on-one with experienced financial advisors who understand your unique goals and circumstances.",
  },
  {
    icon: Award,
    title: "Member-Focused",
    description:
      "As a credit union member, you benefit from our not-for-profit structure and commitment to your success.",
  },
  {
    icon: PieChart,
    title: "Comprehensive Solutions",
    description:
      "Access a full range of investment products and services to build a diversified portfolio.",
  },
  {
    icon: Shield,
    title: "Trusted Partnership",
    description:
      "Backed by CUNA Brokerage Services, Inc., a leader in credit union investment services.",
  },
];

const processSteps = [
  {
    icon: Target,
    title: "Define Goals",
    description: "Identify your financial objectives and timeline",
  },
  {
    icon: BarChart3,
    title: "Create Plan",
    description: "Develop a personalized investment strategy",
  },
  {
    icon: PieChart,
    title: "Implement Strategy",
    description: "Execute your plan with appropriate investments",
  },
  {
    icon: TrendingUp,
    title: "Monitor & Adjust",
    description: "Regular reviews and strategy adjustments",
  },
];
