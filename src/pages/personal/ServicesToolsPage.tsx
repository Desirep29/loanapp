import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Smartphone,
  Globe,
  Shield,
  CreditCard,
  Mail,
  Phone,
  ArrowRight,
  CheckCircle,
  Play,
} from "lucide-react";

export default function ServicesToolsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-cyan-50/30">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#006064]/5 to-[#004d50]/5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#006064]/10 text-[#006064] text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-[#B8D430] rounded-full"></div>
              Personal / Services & Tools
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-[#006064] leading-tight">
              Banking made{" "}
              <span className="bg-gradient-to-r from-[#006064] to-[#004d50] bg-clip-text text-transparent">
                convenient
              </span>{" "}
              for your busy life.
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
              Access your accounts anytime, anywhere with our suite of digital
              banking tools and services designed to make managing your money
              easier than ever.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button className="bg-[#006064] hover:bg-[#004d4d] text-white px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105 shadow-lg">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="border-2 border-[#006064] text-[#006064] hover:bg-[#006064] hover:text-white px-8 py-6 text-lg rounded-xl transition-all duration-300"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#006064] mb-4">
              Digital Banking Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to manage your finances in one place
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group relative bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-2xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#006064] to-[#004d50] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <service.icon className="h-7 w-7 text-white" />
                      </div>
                      <div className="text-4xl font-bold text-gray-100 group-hover:text-[#006064]/10 transition-colors duration-300">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                    </div>
                    <CardTitle className="text-2xl text-[#006064] group-hover:text-[#004d4d] transition-colors duration-300">
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
                    <Button className="w-full bg-gradient-to-r from-[#006064] to-[#004d4d] hover:from-[#004d4d] hover:to-[#006064] text-white py-6 rounded-xl transition-all duration-300 group-hover:shadow-lg">
                      {service.buttonText}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-[#006064] to-[#004d4d] text-white">
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

      {/* CTA Section */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#006064] to-[#004d50] opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20">
              <h2 className="text-3xl md:text-5xl font-bold text-[#006064] mb-6">
                Ready to experience{" "}
                <span className="bg-gradient-to-r from-[#006064] to-[#004d50] bg-clip-text text-transparent">
                  convenient
                </span>{" "}
                banking?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Join thousands of satisfied customers who trust us with their
                financial needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button className="bg-gradient-to-r from-[#006064] to-[#004d50] hover:from-[#004d4d] hover:to-[#9bb82a] text-white px-10 py-7 text-lg rounded-xl transition-all duration-300 hover:scale-105 shadow-lg">
                  Enroll in Online Banking
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-[#006064] text-[#006064] hover:bg-[#006064] hover:text-white px-8 py-7 text-lg rounded-xl transition-all duration-300"
                >
                  Contact Support
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-6">
                No hidden fees • 24/7 Customer Support • FDIC Insured
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
    title: "Online Banking",
    description:
      "Manage your accounts 24/7 from any device with secure online banking access.",
    features: [
      "View account balances and history",
      "Transfer funds between accounts",
      "Pay bills online",
      "Download statements",
    ],
    buttonText: "Enroll Now",
  },
  {
    icon: Smartphone,
    title: "Mobile Banking",
    description:
      "Bank on the go with our mobile app for iOS and Android devices.",
    features: [
      "Mobile check deposit",
      "Account alerts and notifications",
      "Find nearby ATMs and branches",
      "Secure biometric login",
    ],
    buttonText: "Download App",
  },
  {
    icon: Mail,
    title: "Bill Pay",
    description:
      "Pay your bills quickly and securely with our online bill pay service.",
    features: [
      "Schedule one-time or recurring payments",
      "Pay anyone, anywhere",
      "Set up payment reminders",
      "View payment history",
    ],
    buttonText: "Get Started",
  },
  {
    icon: CreditCard,
    title: "Card Controls",
    description:
      "Manage your debit and credit cards with real-time controls and alerts.",
    features: [
      "Turn cards on/off instantly",
      "Set spending limits",
      "Transaction alerts",
      "Travel notifications",
    ],
    buttonText: "Manage Cards",
  },
  {
    icon: Shield,
    title: "Fraud Protection",
    description:
      "Advanced security features to protect your accounts and personal information.",
    features: [
      "24/7 fraud monitoring",
      "Zero liability protection",
      "Multi-factor authentication",
      "Secure encryption",
    ],
    buttonText: "Learn More",
  },
  {
    icon: Phone,
    title: "Member Services",
    description:
      "Get help when you need it with our dedicated member support team.",
    features: [
      "Phone support",
      "Live chat assistance",
      "Email support",
      "In-branch appointments",
    ],
    buttonText: "Contact Us",
  },
];

const stats = [
  { value: "99.9%", label: "Uptime Guarantee" },
  { value: "24/7", label: "Customer Support" },
  { value: "5min", label: "Average Setup" },
  { value: "1M+", label: "Happy Customers" },
];
