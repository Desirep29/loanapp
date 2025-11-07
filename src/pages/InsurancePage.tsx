import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CheckCircle2,
  Home,
  Car,
  Heart,
  Briefcase,
  Shield,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Users,
  Star,
  Clock,
  FileText,
} from "lucide-react";

export default function InsurancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-cyan-50/20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#006064]/5 to-[#B8D430]/5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#006064]/10 text-[#006064] text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-[#B8D430] rounded-full"></div>
              Insurance Services
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#006064] leading-tight mb-6">
              Protect what{" "}
              <span className="bg-gradient-to-r from-[#006064] to-[#004d50] bg-clip-text text-transparent">
                matters most
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl">
              Comprehensive insurance solutions tailored to protect you, your
              family, and your assets with competitive rates and personalized
              service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-[#006064] to-[#004d50] hover:from-[#004d50] hover:to-[#006064] text-white px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105 shadow-lg">
                Get a Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="border-2 border-[#006064] text-[#006064] hover:bg-[#006064] hover:text-white px-8 py-6 text-lg rounded-xl transition-all duration-300"
              >
                Contact Agent
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
              Comprehensive Coverage for Every Stage of Life
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              First International Financial Services partners with TruStage to provide a full
              range of insurance products designed to protect you, your family,
              and your assets. Our licensed insurance agents are here to help
              you find the right coverage at competitive rates.
            </p>
          </div>
        </div>
      </section>

      {/* Insurance Types */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[#006064]/5 to-[#B8D430]/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#006064] mb-4">
              Insurance Products We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from our comprehensive range of insurance solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {insuranceProducts.map((product, index) => (
              <Card
                key={index}
                className="group relative bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-2xl overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#006064] to-[#004d50]"></div>
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#006064] to-[#004d50] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <product.icon className="h-7 w-7 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-gray-100 group-hover:text-[#006064]/10 transition-colors duration-300">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>
                  <CardTitle className="text-xl text-[#006064] group-hover:text-[#004d50] transition-colors duration-300">
                    {product.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-600 leading-relaxed">
                    {product.description}
                  </p>
                  <ul className="space-y-3">
                    {product.features.map((feature, featureIndex) => (
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
                    Get Quote
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
                Why Choose Our Insurance Services?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Experience the difference of working with insurance experts who
                truly care about your protection
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

      {/* Insurance Agent Contact */}
      <section
        id="contact"
        className="py-16 md:py-24 bg-gradient-to-r from-[#006064]/5 to-[#B8D430]/5"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-[#006064] mb-4">
                Meet Your Insurance Agent
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Get personalized guidance from our licensed insurance
                professionals
              </p>
            </div>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl rounded-2xl overflow-hidden">
              <div className="md:flex">
                <div className="md:w-2/5 bg-gradient-to-br from-[#006064] to-[#004d50] p-12 flex flex-col items-center justify-center text-white text-center">
                  <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mb-6">
                    <Shield className="h-16 w-16 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">
                    Insurance Services Team
                  </h3>
                  <p className="text-white/80">
                    Licensed Insurance Agents, TruStage
                  </p>
                  <div className="flex items-center gap-2 mt-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="h-5 w-5 text-[#B8D430] fill-current"
                      />
                    ))}
                    <span className="text-white/80 ml-2">5.0 Rating</span>
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
                        <p className="text-gray-600">(800) 555-0124</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50/50 hover:bg-gray-50 transition-colors duration-200">
                      <div className="w-12 h-12 bg-[#B8D430]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-[#006064]" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Email</p>
                        <p className="text-gray-600">insurance@capcu.org</p>
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
                  <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <Button className="flex-1 bg-gradient-to-r from-[#006064] to-[#004d50] hover:from-[#004d50] hover:to-[#006064] text-white py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105 shadow-lg">
                      Get a Free Quote
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 border-2 border-[#006064] text-[#006064] hover:bg-[#006064] hover:text-white py-6 text-lg rounded-xl transition-all duration-300"
                    >
                      File a Claim
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-[#006064] mb-4">
                Insurance Resources
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Tools and information to help you make informed insurance
                decisions
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {resources.map((resource, index) => (
                <Card
                  key={index}
                  className="group relative bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 rounded-2xl overflow-hidden"
                >
                  <CardHeader className="pb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#006064] to-[#004d50] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <resource.icon className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="text-xl text-[#006064]">
                      {resource.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600 leading-relaxed">
                      {resource.description}
                    </p>
                    <Button
                      variant="outline"
                      className="w-full border-2 border-[#006064] text-[#006064] hover:bg-[#006064] hover:text-white py-6 rounded-xl transition-all duration-300"
                    >
                      {resource.buttonText}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
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
                Ready to Protect What Matters?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Get personalized insurance solutions and peace of mind with our
                expert guidance
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button className="bg-gradient-to-r from-[#006064] to-[#004d50] hover:from-[#004d50] hover:to-[#006064] text-white px-10 py-7 text-lg rounded-xl transition-all duration-300 hover:scale-105 shadow-lg">
                  Get Your Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-[#006064] text-[#006064] hover:bg-[#006064] hover:text-white px-8 py-7 text-lg rounded-xl transition-all duration-300"
                >
                  Call Now: (800) 555-0124
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-6">
                No obligation • Licensed agents • Competitive rates
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
              <strong>Important Disclosures:</strong> Insurance products are
              offered through TruStage Insurance Agency, LLC and issued by CMFG
              Life Insurance Company and other leading insurance companies. Not
              insured by NCUA or any federal government agency. Not a deposit of
              or guaranteed by the credit union or any credit union affiliate.
            </p>
            <p>
              Insurance products are subject to terms, conditions, and
              exclusions not described here. Please refer to the actual policy
              for complete details. Licensed insurance agents are available to
              answer your questions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

const insuranceProducts = [
  {
    icon: Car,
    title: "Auto Insurance",
    description:
      "Comprehensive coverage for your vehicle with competitive rates and flexible payment options.",
    features: [
      "Liability Coverage",
      "Collision & Comprehensive",
      "Uninsured Motorist Protection",
      "Roadside Assistance",
    ],
  },
  {
    icon: Home,
    title: "Home Insurance",
    description:
      "Protect your home and belongings with comprehensive homeowners insurance coverage.",
    features: [
      "Dwelling Coverage",
      "Personal Property Protection",
      "Liability Coverage",
      "Additional Living Expenses",
    ],
  },
  {
    icon: Heart,
    title: "Life Insurance",
    description:
      "Secure your family's financial future with term or permanent life insurance coverage.",
    features: [
      "Term Life Insurance",
      "Whole Life Insurance",
      "Accidental Death & Dismemberment",
      "Mortgage Protection",
    ],
  },
  {
    icon: Shield,
    title: "Health & Disability",
    description:
      "Protect your income and health with disability and supplemental health insurance.",
    features: [
      "Short-Term Disability",
      "Long-Term Disability",
      "Critical Illness Insurance",
      "Hospital Indemnity",
    ],
  },
  {
    icon: Briefcase,
    title: "Business Insurance",
    description:
      "Protect your business with comprehensive commercial insurance solutions.",
    features: [
      "General Liability",
      "Property Insurance",
      "Workers' Compensation",
      "Business Owner's Policy",
    ],
  },
  {
    icon: Users,
    title: "Additional Coverage",
    description: "Specialized insurance products for unique protection needs.",
    features: [
      "Renters Insurance",
      "Boat & Watercraft",
      "RV & Motorcycle",
      "Umbrella Policy",
    ],
  },
];

const stats = [
  { value: "24/7", label: "Claims Support" },
  { value: "95%", label: "Customer Satisfaction" },
  { value: "50+", label: "Years Experience" },
  { value: "4.9/5", label: "Agent Rating" },
];

const benefits = [
  {
    icon: Star,
    title: "Competitive Rates",
    description:
      "Get quality coverage at affordable prices with exclusive member discounts and bundled savings.",
  },
  {
    icon: Users,
    title: "Expert Guidance",
    description:
      "Work with licensed insurance agents who understand your unique needs and provide personalized advice.",
  },
  {
    icon: Clock,
    title: "Convenient Service",
    description:
      "Bundle your insurance with your banking for easy management, payment, and account integration.",
  },
  {
    icon: Shield,
    title: "Trusted Partner",
    description:
      "Backed by TruStage, a leader in credit union insurance services with decades of experience.",
  },
];

const resources = [
  {
    icon: FileText,
    title: "Coverage Calculator",
    description:
      "Determine how much coverage you need for your home, auto, or life insurance with our easy-to-use tools.",
    buttonText: "Calculate Coverage",
  },
  {
    icon: Shield,
    title: "Claims Center",
    description:
      "File a claim online or check the status of an existing claim with our streamlined claims process.",
    buttonText: "File a Claim",
  },
  {
    icon: FileText,
    title: "Insurance FAQs",
    description:
      "Get answers to common questions about insurance coverage, policies, and claims process.",
    buttonText: "View FAQs",
  },
];
