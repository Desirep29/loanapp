import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CreditCard,
  Shield,
  Percent,
  TrendingUp,
  ArrowRight,
  Users,
  FileText,
  Building,
} from "lucide-react";

export default function BusinessCardsPage() {
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
                Business / Cards
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#006064] leading-tight">
                Business cards that work{" "}
                <span className="bg-gradient-to-r from-[#006064] to-[#004d50] bg-clip-text text-transparent">
                  as hard
                </span>{" "}
                as you do.
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Manage business expenses, earn rewards, and simplify accounting
                with our business credit and debit card solutions designed for
                companies of all sizes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gradient-to-r from-[#006064] to-[#004d50] hover:from-[#004d50] hover:to-[#006064] text-white px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105 shadow-lg">
                  Apply for a Card
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-[#006064] text-[#006064] hover:bg-[#006064] hover:text-white px-8 py-6 text-lg rounded-xl transition-all duration-300"
                >
                  Compare Cards
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://i.pinimg.com/1200x/bf/65/af/bf65af58dff266620fff7a4efbef71a0.jpg"
                  alt="Business credit cards"
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

      {/* Credit Cards */}
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#006064] mb-4">
              Business Credit Cards
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Separate business and personal expenses while earning rewards and
              building business credit.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
            {creditCards.map((card, index) => (
              <Card
                key={index}
                className="group relative bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-2xl overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#006064] to-[#004d50]"></div>
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <CardTitle className="text-2xl md:text-3xl text-[#006064] group-hover:text-[#004d50] transition-colors duration-300">
                      {card.title}
                    </CardTitle>
                    <div className="w-12 h-8 bg-gradient-to-r from-[#006064] to-[#004d50] rounded-lg"></div>
                  </div>
                  <p className="text-gray-600">{card.subtitle}</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-gradient-to-r from-[#006064]/10 to-[#B8D430]/10 p-6 rounded-xl border border-[#006064]/20">
                    <p className="text-2xl md:text-3xl font-bold text-[#006064]">
                      {card.apr}
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      Based on creditworthiness
                    </p>
                  </div>

                  <div className="space-y-4">
                    {card.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50/50 transition-colors duration-200"
                      >
                        <div className="w-8 h-8 bg-[#B8D430]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <feature.icon className="h-4 w-4 text-[#006064]" />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-gray-900">
                            {feature.title}
                          </p>
                          <p className="text-sm text-gray-600 mt-1">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button className="w-full bg-gradient-to-r from-[#006064] to-[#004d50] hover:from-[#004d50] hover:to-[#006064] text-white py-6 rounded-xl transition-all duration-300 group-hover:shadow-lg">
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Debit Cards */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-[#006064] mb-4">
              Business Debit Cards
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Direct access to your business checking account with enhanced
              security and controls.
            </p>
          </div>

          <Card className="max-w-4xl mx-auto bg-gradient-to-br from-white to-gray-50/50 border-0 shadow-2xl rounded-2xl overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#006064] to-[#004d50]"></div>
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl md:text-3xl text-[#006064]">
                    Business Debit Card
                  </CardTitle>
                  <p className="text-gray-600 mt-2">
                    Convenient access to your business funds
                  </p>
                </div>
                <div className="w-16 h-10 bg-gradient-to-r from-[#006064] to-[#004d50] rounded-lg"></div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {debitFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white/50 border border-gray-200/50"
                  >
                    <div className="w-10 h-10 bg-[#B8D430]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="h-5 w-5 text-[#006064]" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        {feature.title}
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <Button className="bg-gradient-to-r from-[#006064] to-[#004d50] hover:from-[#004d50] hover:to-[#006064] text-white px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105 shadow-lg">
                Order Debit Cards
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[#006064]/5 to-[#B8D430]/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-[#006064] mb-4">
                Business Card Benefits
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Everything you need to manage your business finances effectively
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

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-[#006064] to-[#004d50] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to elevate your business banking?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of businesses that trust us with their financial
            success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="bg-[#B8D430] hover:bg-[#9bb82a] text-gray-900 px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105 shadow-lg">
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[#006064] px-8 py-6 text-lg rounded-xl transition-all duration-300"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-white/80">
        <div className="container mx-auto px-4">
          <p className="text-xs text-gray-600 leading-relaxed max-w-5xl mx-auto text-center">
            *APR = Annual Percentage Rate. Rates are based on creditworthiness
            and are subject to change. All credit card applications are subject
            to credit approval. Other terms and conditions may apply. Contact
            First International Financial Services for complete details.
          </p>
        </div>
      </section>
    </div>
  );
}

const creditCards = [
  {
    title: "Business Rewards Credit Card",
    subtitle: "Earn rewards on business purchases",
    apr: "10.99% - 18.99% APR*",
    features: [
      {
        icon: TrendingUp,
        title: "Earn 2% cash back",
        description: "On all business purchases",
      },
      {
        icon: Shield,
        title: "Fraud protection",
        description: "Zero liability on unauthorized charges",
      },
      {
        icon: Percent,
        title: "No annual fee",
        description: "Keep more of your earnings",
      },
      {
        icon: Users,
        title: "Employee cards",
        description: "Issue cards to authorized users",
      },
    ],
  },
  {
    title: "Business Classic Credit Card",
    subtitle: "Low rate business credit",
    apr: "9.99% - 16.99% APR*",
    features: [
      {
        icon: Percent,
        title: "Low interest rate",
        description: "Save on interest charges",
      },
      {
        icon: Shield,
        title: "Fraud protection",
        description: "Zero liability on unauthorized charges",
      },
      {
        icon: CreditCard,
        title: "No annual fee",
        description: "Simple and affordable",
      },
      {
        icon: FileText,
        title: "Detailed statements",
        description: "Easy expense tracking",
      },
    ],
  },
];

const debitFeatures = [
  {
    icon: Shield,
    title: "EMV chip technology",
    description: "Enhanced security for transactions",
  },
  {
    icon: CreditCard,
    title: "Contactless payments",
    description: "Tap to pay convenience",
  },
  {
    icon: Shield,
    title: "Card controls",
    description: "Set spending limits and restrictions",
  },
  {
    icon: Users,
    title: "Multiple cards",
    description: "Issue cards to employees",
  },
];

const benefits = [
  {
    icon: FileText,
    title: "Expense Tracking",
    description:
      "Detailed statements make accounting and tax preparation easier with categorized spending and export capabilities.",
  },
  {
    icon: Shield,
    title: "Fraud Protection",
    description:
      "24/7 monitoring and zero liability on unauthorized charges keep your business funds secure.",
  },
  {
    icon: Building,
    title: "Build Credit",
    description:
      "Establish and strengthen your business credit history with responsible card usage and timely payments.",
  },
];
