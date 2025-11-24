import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CreditCard,
  Shield,
  Percent,
  Gift,
  Zap,
  Star,
  Globe,
  Smartphone,
  CheckCircle,
} from "lucide-react";
import { useState } from "react";

export default function CardsPage() {
  const [activeTab, setActiveTab] = useState("credit");

  const features = [
    {
      icon: Shield,
      title: "Zero Fraud Liability",
      description: "You're not responsible for unauthorized charges",
    },
    {
      icon: Zap,
      title: "Instant Card Lock",
      description: "Lock your card instantly if it's lost or stolen",
    },
    {
      icon: Globe,
      title: "Worldwide Acceptance",
      description: "Use your card anywhere Visa is accepted",
    },
    {
      icon: Smartphone,
      title: "Mobile Wallet Ready",
      description: "Add to Apple Pay, Google Pay, or Samsung Pay",
    },
  ];

  const benefits = [
    "No annual fees on any cards",
    "Competitive interest rates",
    "24/7 fraud monitoring",
    "Contactless payment technology",
    "Free EMV chip cards",
    "Mobile app card management",
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="bg-gradient-to-r from-gray-50 to-white py-4 border-b">
        <div className="container mx-auto px-4">
          <div className="text-sm text-gray-600">
            <span className="text-[#006064] font-semibold">01</span> / PERSONAL
            / CARDS
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
                  Personal / Cards
                </p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-balance">
                  Cards That Work Harder For You
                </h1>
                <p className="text-lg text-blue-100 leading-relaxed">
                  Choose from our selection of credit cards with competitive
                  rates, generous rewards programs, and no annual fees. Plus,
                  enjoy the security and convenience of our advanced debit
                  cards.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-[#B8D430] hover:bg-[#a0bb28] text-[#006064] font-semibold px-8 py-3 text-base">
                  Apply for a Card
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[#006064] px-8 py-3 text-base"
                >
                  Compare Cards →
                </Button>
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-1 backdrop-blur-sm">
                <img
                  src="https://i.pinimg.com/736x/05/ea/60/05ea607f2d84df6344f2e2149dcdda47.jpg"
                  alt="Credit cards"
                  className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-xl"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-[#B8D430] text-[#006064] px-6 py-3 rounded-lg shadow-lg">
                <p className="font-bold text-lg">0%</p>
                <p className="text-sm">Annual Fees</p>
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
                1.5%
              </p>
              <p className="text-sm text-gray-600 mt-1">Cash Back Rewards</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-[#006064]">
                0%
              </p>
              <p className="text-sm text-gray-600 mt-1">Annual Fees</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-[#006064]">
                24/7
              </p>
              <p className="text-sm text-gray-600 mt-1">Fraud Protection</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-[#006064]">
                30K+
              </p>
              <p className="text-sm text-gray-600 mt-1">Free ATMs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { id: "credit", label: "Credit Cards" },
              { id: "debit", label: "Debit Cards" },
              { id: "features", label: "Card Features" },
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

      {/* Credit Cards */}
      {activeTab === "credit" && (
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#006064] mb-4">
                Credit Card Options
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Build credit, earn rewards, and enjoy financial flexibility with
                our credit card options.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
              {/* Platinum Rewards Card */}
              <Card className="border-2 border-[#B8D430] hover:shadow-2xl transition-all duration-300 group">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl text-[#006064] group-hover:text-[#004d50] transition-colors">
                      Platinum Rewards Card
                    </CardTitle>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="h-4 w-4 fill-[#B8D430] text-[#B8D430]"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    Earn rewards on every purchase
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-gradient-to-r from-[#B8D430]/20 to-[#006064]/10 p-4 rounded-lg">
                    <p className="text-2xl font-bold text-[#006064]">
                      9.99% - 17.99% APR*
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      Based on creditworthiness
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Gift className="h-5 w-5 text-[#B8D430] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-gray-900">
                          Earn 1.5% cash back
                        </p>
                        <p className="text-sm text-gray-600">
                          On all purchases with no limits
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Percent className="h-5 w-5 text-[#B8D430] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-gray-900">
                          No annual fee
                        </p>
                        <p className="text-sm text-gray-600">
                          Save money every year
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Zap className="h-5 w-5 text-[#B8D430] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-gray-900">
                          Rewards redemption
                        </p>
                        <p className="text-sm text-gray-600">
                          Cash back, gift cards, or travel
                        </p>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full bg-[#006064] hover:bg-[#004d50] text-white py-3 text-base">
                    Apply Now
                  </Button>
                </CardContent>
              </Card>

              {/* Classic Credit Card */}
              <Card className="border-2 border-[#006064] hover:shadow-2xl transition-all duration-300 group">
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl text-[#006064] group-hover:text-[#004d50] transition-colors">
                    Classic Credit Card
                  </CardTitle>
                  <p className="text-sm text-gray-600">
                    Low rate, no-frills credit card
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-gradient-to-r from-[#006064]/10 to-[#B8D430]/10 p-4 rounded-lg">
                    <p className="text-2xl font-bold text-[#006064]">
                      8.99% - 15.99% APR*
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      Based on creditworthiness
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Percent className="h-5 w-5 text-[#006064] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-gray-900">
                          Low interest rate
                        </p>
                        <p className="text-sm text-gray-600">
                          Save on interest charges
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CreditCard className="h-5 w-5 text-[#006064] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-gray-900">
                          No annual fee
                        </p>
                        <p className="text-sm text-gray-600">
                          Simple and affordable
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Shield className="h-5 w-5 text-[#006064] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-gray-900">
                          Credit building
                        </p>
                        <p className="text-sm text-gray-600">
                          Perfect for establishing credit
                        </p>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full bg-[#006064] hover:bg-[#004d50] text-white py-3 text-base">
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Debit Cards */}
      {activeTab === "debit" && (
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#006064] mb-4">
                Debit Cards
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Access your money anytime, anywhere with our secure and
                feature-rich debit cards.
              </p>
            </div>
            <Card className="max-w-4xl mx-auto border-2 border-[#006064] hover:shadow-2xl transition-all duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-[#006064]">
                  Capital Debit Card
                </CardTitle>
                <p className="text-sm text-gray-600">
                  Convenient access to your checking account
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-[#B8D430] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">
                        EMV chip technology
                      </p>
                      <p className="text-sm text-gray-600">
                        Enhanced security for your transactions
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CreditCard className="h-5 w-5 text-[#B8D430] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">
                        Contactless payments
                      </p>
                      <p className="text-sm text-gray-600">
                        Tap to pay at millions of locations
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-[#B8D430] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">
                        Fraud monitoring
                      </p>
                      <p className="text-sm text-gray-600">
                        24/7 protection and instant alerts
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Globe className="h-5 w-5 text-[#B8D430] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">
                        ATM access worldwide
                      </p>
                      <p className="text-sm text-gray-600">
                        Use at millions of ATMs globally
                      </p>
                    </div>
                  </div>
                </div>
                <Button className="bg-[#006064] hover:bg-[#004d50] text-white px-8 py-3">
                  Order a Debit Card
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Card Features */}
      {activeTab === "features" && (
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#006064] mb-4">
                Advanced Card Features
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                All our cards come with powerful features to protect your money
                and make banking easier.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 text-center border border-gray-100 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#B8D430]/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#B8D430]/30 transition-colors">
                    <feature.icon className="h-6 w-6 text-[#006064]" />
                  </div>
                  <h3 className="font-bold text-[#006064] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="max-w-3xl mx-auto">
              <Card className="bg-gradient-to-r from-[#006064] to-[#004d50] text-white">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">All Cards Include</h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-[#B8D430] flex-shrink-0" />
                        <span className="text-blue-100">{benefit}</span>
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
      <section className="py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-[#006064] to-[#004d50] rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Ready to Get Your Card?
            </h2>
            <p className="text-blue-100 max-w-2xl mx-auto mb-6 text-lg">
              Apply today and start enjoying the benefits of Capital Credit
              Union cards. Quick approval process and instant digital access
              upon approval.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-[#B8D430] hover:bg-[#a0bb28] text-[#006064] font-semibold px-8 py-3">
                Apply for Credit Card
              </Button>
              <Button
                variant="outline"
                className="border-white text-[#006064] hover:bg-white hover:text-[#006064] px-8 py-3"
              >
                Order Debit Card
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <p className="text-xs text-gray-600 leading-relaxed max-w-5xl mx-auto text-center">
            *APR = Annual Percentage Rate. Rates are based on creditworthiness
            and are subject to change. All credit card applications are subject
            to credit approval. Other terms and conditions may apply. Contact
            First International Financial Services for complete details. Debit cards require an
            active checking account.
          </p>
        </div>
      </section>
    </div>
  );
}
