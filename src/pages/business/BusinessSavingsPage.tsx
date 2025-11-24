import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Check,
  ArrowRight,
  TrendingUp,
  Shield,
  Clock,
  Building,
  Target,
  DollarSign,
} from "lucide-react";

export default function BusinessSavingsPage() {
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
                Business / Savings
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#006064] leading-tight">
                Grow your business reserves with{" "}
                <span className="bg-gradient-to-r from-[#006064] to-[#004d50] bg-clip-text text-transparent">
                  competitive rates
                </span>
                .
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Build your business savings with accounts designed to help you
                earn more on your idle funds while maintaining easy access when
                you need it.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gradient-to-r from-[#006064] to-[#004d50] hover:from-[#004d50] hover:to-[#006064] text-white px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105 shadow-lg">
                  Open a Savings Account
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-[#006064] text-[#006064] hover:bg-[#006064] hover:text-white px-8 py-6 text-lg rounded-xl transition-all duration-300"
                >
                  View Rates
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://i.pinimg.com/1200x/b1/62/f1/b162f169da5d256a73af82de6ff9bbe3.jpg"
                  alt="Business growth"
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

      {/* Savings Products */}
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#006064] mb-4">
              Business Savings Options
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the perfect savings solution to help your business funds
              grow
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
            {savingsProducts.slice(0, 2).map((product, index) => (
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
                    {product.featured && (
                      <div className="px-3 py-1 bg-[#B8D430]/20 text-[#006064] text-sm font-medium rounded-full">
                        Most Popular
                      </div>
                    )}
                  </div>
                  <CardTitle className="text-2xl text-[#006064] group-hover:text-[#004d50] transition-colors duration-300">
                    {product.title}
                  </CardTitle>
                  <p className="text-gray-600">{product.subtitle}</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-gradient-to-r from-[#006064]/10 to-[#B8D430]/10 p-6 rounded-xl border border-[#006064]/20">
                    <p className="text-3xl md:text-4xl font-bold text-[#006064]">
                      {product.rate}
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      {product.rateSubtitle}
                    </p>
                  </div>

                  <ul className="space-y-3">
                    {product.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-3 text-gray-700"
                      >
                        <Check className="h-5 w-5 text-[#B8D430] flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button className="w-full bg-gradient-to-r from-[#006064] to-[#004d50] hover:from-[#004d50] hover:to-[#006064] text-white py-6 rounded-xl transition-all duration-300 group-hover:shadow-lg">
                    Open Account
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Business Certificates */}
          <Card className="max-w-4xl mx-auto bg-gradient-to-br from-white to-gray-50/50 border-0 shadow-2xl rounded-2xl overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#006064] to-[#004d50]"></div>
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl md:text-3xl text-[#006064]">
                    Business Certificates of Deposit
                  </CardTitle>
                  <p className="text-gray-600 mt-2">
                    Lock in guaranteed returns for your business
                  </p>
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-[#006064] to-[#004d50] rounded-xl flex items-center justify-center">
                  <Target className="h-8 w-8 text-white" />
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-gradient-to-r from-[#006064]/10 to-[#B8D430]/10 p-6 rounded-xl border border-[#006064]/20">
                <p className="text-3xl md:text-4xl font-bold text-[#006064]">
                  Up to 4.50%
                </p>
                <p className="text-sm text-gray-600 mt-1">APY*</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-3">
                  {cdFeatures.slice(0, 3).map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <Check className="h-5 w-5 text-[#B8D430] flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <ul className="space-y-3">
                  {cdFeatures.slice(3).map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <Check className="h-5 w-5 text-[#B8D430] flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button className="bg-gradient-to-r from-[#006064] to-[#004d50] hover:from-[#004d50] hover:to-[#006064] text-white px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105 shadow-lg">
                View CD Rates
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Rates Comparison */}
      <section className="py-16 bg-gradient-to-r from-[#006064]/5 to-[#B8D430]/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#006064] mb-4">
                Competitive Rates Comparison
              </h2>
              <p className="text-xl text-gray-600">
                See how our rates stack up against the competition
              </p>
            </div>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl rounded-2xl">
              <CardContent className="p-6">
                <div className="grid grid-cols-4 gap-4 text-sm font-semibold text-[#006064] border-b border-gray-200 pb-4 mb-4">
                  <div>Account Type</div>
                  <div className="text-center">Our Rate</div>
                  <div className="text-center">National Average</div>
                  <div className="text-center">Difference</div>
                </div>
                {rateComparison.map((rate, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-4 gap-4 py-3 border-b border-gray-100 last:border-0"
                  >
                    <div className="font-medium text-gray-900">{rate.type}</div>
                    <div className="text-center font-bold text-[#006064]">
                      {rate.ourRate}
                    </div>
                    <div className="text-center text-gray-600">
                      {rate.nationalAvg}
                    </div>
                    <div className="text-center font-bold text-[#B8D430]">
                      {rate.difference}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-[#006064] mb-4">
                Why Save with First International Financial Services?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Experience the benefits of banking with a financial institution
                that puts your business first
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card
                  key={index}
                  className="group text-center bg-gradient-to-br from-white to-gray-50/50 border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 rounded-2xl overflow-hidden"
                >
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#006064] to-[#004d50] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <benefit.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-[#006064] mb-3">
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

      {/* CTA Section */}
      <section className="py-16 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#006064] to-[#004d50] opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20">
              <h2 className="text-3xl md:text-5xl font-bold text-[#006064] mb-6">
                Start Growing Your Business Savings Today
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Join thousands of businesses that trust us with their financial
                future
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button className="bg-gradient-to-r from-[#006064] to-[#004d50] hover:from-[#004d50] hover:to-[#006064] text-white px-10 py-7 text-lg rounded-xl transition-all duration-300 hover:scale-105 shadow-lg">
                  Open Account Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-[#006064] text-[#006064] hover:bg-[#006064] hover:text-white px-8 py-7 text-lg rounded-xl transition-all duration-300"
                >
                  Calculate Earnings
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-6">
                No hidden fees • FDIC insured • 24/7 online access
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-white/80">
        <div className="container mx-auto px-4">
          <p className="text-xs text-gray-600 leading-relaxed max-w-5xl mx-auto text-center">
            *APY = Annual Percentage Yield. Rates are subject to change without
            notice. Fees could reduce earnings on the account. Minimum balance
            requirements and other restrictions may apply. Contact Capital
            Credit Union for complete rate information and account details.
          </p>
        </div>
      </section>
    </div>
  );
}

const savingsProducts = [
  {
    icon: Building,
    title: "Business Savings Account",
    subtitle: "Flexible savings for your business",
    rate: "0.50%",
    rateSubtitle: "APY*",
    featured: false,
    features: [
      "$100 minimum opening deposit",
      "No monthly maintenance fee",
      "Easy access to funds",
      "Dividends paid monthly",
      "Online and mobile access",
    ],
  },
  {
    icon: TrendingUp,
    title: "Business Money Market",
    subtitle: "Higher rates with tiered balances",
    rate: "Up to 3.75%",
    rateSubtitle: "APY*",
    featured: true,
    features: [
      "$2,500 minimum opening deposit",
      "Tiered dividend rates",
      "Limited check writing privileges",
      "Competitive rates on higher balances",
      "Online and mobile access",
    ],
  },
];

const cdFeatures = [
  "Terms from 3 to 60 months",
  "$1,000 minimum deposit",
  "Fixed rates guaranteed",
  "NCUA insured",
  "Automatic renewal options",
  "Competitive rates",
];

const rateComparison = [
  {
    type: "Business Savings",
    ourRate: "0.50% APY",
    nationalAvg: "0.05% APY",
    difference: "+0.45%",
  },
  {
    type: "Money Market",
    ourRate: "Up to 3.75% APY",
    nationalAvg: "0.08% APY",
    difference: "+3.67%",
  },
  {
    type: "12-Month CD",
    ourRate: "4.25% APY",
    nationalAvg: "0.15% APY",
    difference: "+4.10%",
  },
  {
    type: "60-Month CD",
    ourRate: "4.50% APY",
    nationalAvg: "0.25% APY",
    difference: "+4.25%",
  },
];

const benefits = [
  {
    icon: Shield,
    value: "NCUA",
    title: "Federally Insured",
    description:
      "Your deposits are insured up to $250,000 per account, providing peace of mind and security for your business funds.",
  },
  {
    icon: Clock,
    value: "24/7",
    title: "Digital Access",
    description:
      "Manage your savings anytime, anywhere with our secure online and mobile banking platforms.",
  },
  {
    icon: DollarSign,
    value: "Local",
    title: "Community Focused",
    description:
      "We reinvest in the local community and provide personalized service from business banking experts.",
  },
];
