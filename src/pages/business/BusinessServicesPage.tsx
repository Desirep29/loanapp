import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Globe,
  Smartphone,
  CreditCard,
  DollarSign,
  FileText,
  Users,
  ArrowRight,
  CheckCircle,
  Shield,
  Building,
  Calculator,
  BarChart3,
} from "lucide-react";

export default function BusinessServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-cyan-50/20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#006064]/5 to-[#B8D430]/5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#006064]/10 text-[#006064] text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-[#B8D430] rounded-full"></div>
              Business / Services & Tools
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#006064] leading-tight">
              Powerful tools to{" "}
              <span className="bg-gradient-to-r from-[#006064] to-[#004d50] bg-clip-text text-transparent">
                streamline
              </span>{" "}
              your business banking.
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mt-6">
              Save time and increase efficiency with our comprehensive suite of
              business banking services and digital tools designed to help you
              manage your finances with ease.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#006064] mb-4">
              Business Banking Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to manage your business finances efficiently
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
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
                <CardContent className="space-y-6">
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
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
                    {service.buttonText}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[#006064]/5 to-[#B8D430]/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-[#006064] mb-4">
                Additional Business Services
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive solutions to meet all your business banking needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {additionalServices.map((service, index) => (
                <Card
                  key={index}
                  className="group relative bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 rounded-2xl overflow-hidden"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold text-[#006064] group-hover:text-[#004d50] transition-colors duration-300">
                        {service.title}
                      </h3>
                      <div className="w-12 h-12 bg-gradient-to-br from-[#006064] to-[#004d50] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <service.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <Button
                      variant="link"
                      className="p-0 text-[#006064] hover:text-[#004d50] group transition-all duration-300"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold text-[#006064] mb-6">
                  Built for{" "}
                  <span className="bg-gradient-to-r from-[#006064] to-[#004d50] bg-clip-text text-transparent">
                    Business Growth
                  </span>
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Our business services are designed to scale with your company,
                  providing the tools and support you need at every stage of
                  growth.
                </p>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-4 rounded-xl bg-gray-50/50 hover:bg-gray-50 transition-colors duration-200"
                    >
                      <div className="w-12 h-12 bg-[#B8D430]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <feature.icon className="h-6 w-6 text-[#006064]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/placeholder.svg?key=business-dashboard"
                    alt="Business banking dashboard"
                    className="w-full h-auto"
                  />
                </div>
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#B8D430]/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#006064]/20 rounded-full blur-xl"></div>
              </div>
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
                Ready to streamline your business banking?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Contact our business banking team to learn more about our
                services and find the right solutions for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button className="bg-gradient-to-r from-[#006064] to-[#004d50] hover:from-[#004d50] hover:to-[#006064] text-white px-10 py-7 text-lg rounded-xl transition-all duration-300 hover:scale-105 shadow-lg">
                  Contact Business Banking
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-[#006064] text-[#006064] hover:bg-[#006064] hover:text-white px-8 py-7 text-lg rounded-xl transition-all duration-300"
                >
                  Schedule Demo
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-6">
                24/7 Support • Enterprise Security • Custom Solutions
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const services = [
  {
    icon: Globe,
    title: "Business Online Banking",
    description:
      "Manage your business accounts anytime, anywhere with secure online access.",
    features: [
      "View account balances and transactions",
      "Transfer funds between accounts",
      "Download statements and reports",
      "Manage user permissions",
    ],
    buttonText: "Enroll Now",
  },
  {
    icon: Smartphone,
    title: "Mobile Banking",
    description:
      "Bank on the go with our mobile app designed for business owners.",
    features: [
      "Mobile check deposit",
      "Account alerts and notifications",
      "Find ATMs and branches",
      "Secure biometric login",
    ],
    buttonText: "Download App",
  },
  {
    icon: DollarSign,
    title: "ACH & Wire Transfers",
    description:
      "Send and receive payments efficiently with ACH and wire transfer services.",
    features: [
      "Domestic and international wires",
      "ACH origination for payroll",
      "Batch payment processing",
      "Same-day wire transfers",
    ],
    buttonText: "Learn More",
  },
  {
    icon: CreditCard,
    title: "Merchant Services",
    description:
      "Accept credit and debit card payments with competitive processing rates.",
    features: [
      "Point-of-sale terminals",
      "Online payment processing",
      "Mobile card readers",
      "Next-day funding available",
    ],
    buttonText: "Get Started",
  },
  {
    icon: FileText,
    title: "Remote Deposit Capture",
    description:
      "Deposit checks from your office with our remote deposit capture service.",
    features: [
      "Scan and deposit checks remotely",
      "Faster access to funds",
      "Reduce trips to the branch",
      "Detailed deposit reporting",
    ],
    buttonText: "Apply Now",
  },
  {
    icon: Users,
    title: "Payroll Services",
    description:
      "Simplify payroll processing with our integrated payroll solutions.",
    features: [
      "Direct deposit for employees",
      "Tax filing and reporting",
      "Time and attendance tracking",
      "Employee self-service portal",
    ],
    buttonText: "Learn More",
  },
];

const additionalServices = [
  {
    icon: Building,
    title: "Cash Management",
    description:
      "Optimize your cash flow with sweep accounts, lockbox services, and automated clearing house (ACH) solutions.",
  },
  {
    icon: Calculator,
    title: "Business Bill Pay",
    description:
      "Pay vendors and suppliers quickly and securely with our online bill pay service designed for businesses.",
  },
  {
    icon: Shield,
    title: "Positive Pay",
    description:
      "Protect your business from check fraud with our positive pay service that matches checks against your issued check list.",
  },
  {
    icon: BarChart3,
    title: "Treasury Management",
    description:
      "Comprehensive treasury solutions including account reconciliation, fraud prevention, and liquidity management.",
  },
];

const features = [
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Bank-level security with multi-factor authentication and fraud monitoring",
  },
  {
    icon: Users,
    title: "Multi-User Access",
    description:
      "Assign different permission levels to team members and employees",
  },
  {
    icon: BarChart3,
    title: "Advanced Reporting",
    description:
      "Generate custom reports and analytics for better financial insights",
  },
  {
    icon: Calculator,
    title: "Integration Ready",
    description:
      "Seamlessly integrate with popular accounting and business software",
  },
];
