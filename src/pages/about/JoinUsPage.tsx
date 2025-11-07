import { Button } from "@/components/ui/button";
import {
  Check,
  Users,
  TrendingUp,
  MapPin,
  Heart,
  Shield,
  Star,
} from "lucide-react";

const membershipBenefits = [
  "Lower loan rates and higher savings rates",
  "Free checking accounts with no monthly fees",
  "Access to 30,000+ surcharge-free ATMs nationwide",
  "24/7 online and mobile banking",
  "Personalized financial guidance",
  "Local decision-making",
  "Community-focused values",
  "Member ownership and voting rights",
];

const eligibilityRequirements = [
  "Live, work, worship, or attend school in North Dakota",
  "Are an immediate family member of a current First International Financial Services member",
  "Work for a Select Employee Group (SEG) that has a relationship with First International Financial Services",
];

const features = [
  {
    icon: Users,
    title: "Member-Owned",
    description:
      "Unlike banks, credit unions are owned by their members. When you join, you become a part-owner with a voice in how we operate.",
  },
  {
    icon: TrendingUp,
    title: "Better Rates",
    description:
      "Our not-for-profit structure allows us to offer higher savings rates and lower loan rates than traditional banks.",
  },
  {
    icon: MapPin,
    title: "Local Focus",
    description:
      "We're deeply rooted in North Dakota communities. Your deposits stay local and help support your neighbors.",
  },
  {
    icon: Heart,
    title: "Personalized Service",
    description:
      "You're more than an account number. Our team takes time to understand your unique financial needs and goals.",
  },
];

const joinSteps = [
  {
    step: "01",
    title: "Apply Online",
    description:
      "Complete our simple online application in just a few minutes.",
    time: "5-10 minutes",
  },
  {
    step: "02",
    title: "Fund Your Account",
    description:
      "Make an initial deposit of just $5 to activate your membership.",
    amount: "$5 minimum",
  },
  {
    step: "03",
    title: "Start Banking",
    description:
      "Access all our services and start enjoying the credit union difference.",
    features: "Full access immediately",
  },
];

export default function JoinUsPage() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        {/* Breadcrumb */}
        <div className="bg-gradient-to-r from-gray-50 to-white py-4 border-b">
          <div className="container mx-auto px-4">
            <p className="text-sm text-gray-600">
              <span className="text-[#006064] font-semibold">01</span> / ABOUT /
              JOIN US
            </p>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="space-y-6 order-2 lg:order-1">
                <div className="space-y-4">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#006064] leading-tight">
                    Join Our Financial Family
                  </h1>
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
                    Become one of 30,000+ members who trust First International Financial Services
                  </h2>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    When you become a member of First International Financial Services, you're not
                    just opening an account—you're joining a financial
                    cooperative that puts your needs first. Experience the
                    credit union difference today.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-[#006064] hover:bg-[#004d50] text-white px-8 py-3 text-base">
                    Open an Account
                  </Button>
                  <Button
                    variant="outline"
                    className="border-[#006064] text-[#006064] hover:bg-[#006064] hover:text-white px-8 py-3 text-base"
                  >
                    Check Eligibility →
                  </Button>
                </div>
              </div>
              <div className="relative order-1 lg:order-2">
                <div className="bg-gradient-to-br from-[#006064] to-[#004d50] rounded-2xl p-1">
                  <img
                    src="/happy-members-family.jpg"
                    alt="Happy members"
                    className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-xl"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-[#B8D430] text-[#006064] px-6 py-3 rounded-lg shadow-lg">
                  <p className="font-bold text-lg">30,000+</p>
                  <p className="text-sm">Members & Growing</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-8 bg-white border-y">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-[#006064]">
                  30K+
                </p>
                <p className="text-sm text-gray-600 mt-1">Members Served</p>
              </div>
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-[#006064]">
                  $5
                </p>
                <p className="text-sm text-gray-600 mt-1">Min. Deposit</p>
              </div>
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-[#006064]">
                  30K+
                </p>
                <p className="text-sm text-gray-600 mt-1">Free ATMs</p>
              </div>
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-[#006064]">
                  89%
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  Member Satisfaction
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Join Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#006064] mb-4">
                The Credit Union Difference
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                As a not-for-profit financial cooperative, we exist to serve our
                members, not to maximize profits. That means better rates, lower
                fees, and personalized service.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#B8D430]/20 flex items-center justify-center mb-4 group-hover:bg-[#B8D430]/30 transition-colors">
                    <feature.icon className="h-6 w-6 text-[#006064]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#006064] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="space-y-6 order-2 lg:order-1">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#006064] leading-tight">
                  Membership Benefits You'll Love
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Enjoy all the benefits of membership from day one. Here's what
                  you can expect when you join First International Financial Services:
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {membershipBenefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex gap-3 p-3 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                    >
                      <Check className="h-5 w-5 text-[#B8D430] flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700 text-sm">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative order-1 lg:order-2">
                <div className="bg-gradient-to-br from-[#006064] to-[#004d50] rounded-2xl p-1">
                  <img
                    src="/member-benefits-illustration.jpg"
                    alt="Member benefits"
                    className="w-full h-64 sm:h-80 object-cover rounded-xl"
                  />
                </div>
                <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4 border">
                  <Shield className="h-8 w-8 text-[#006064] mb-2" />
                  <p className="font-bold text-[#006064]">FDIC Insured</p>
                  <p className="text-sm text-gray-600">Up to $250,000</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Eligibility Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8 md:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#006064] mb-4">
                  Who Can Join?
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                  Membership is open to anyone who meets one of the following
                  requirements
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100">
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {eligibilityRequirements.map((requirement, index) => (
                    <div
                      key={index}
                      className="flex gap-3 p-4 bg-white rounded-lg border border-gray-200 hover:border-[#B8D430] transition-colors"
                    >
                      <Check className="h-5 w-5 text-[#B8D430] flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700">{requirement}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-[#B8D430]/10 border border-[#B8D430]/20 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#B8D430] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white font-bold text-sm">?</span>
                    </div>
                    <div>
                      <p className="text-gray-700 font-semibold mb-2">
                        Not sure if you qualify?
                      </p>
                      <p className="text-gray-600">
                        Contact us and we'll help determine your eligibility. In
                        many cases, we can find a way for you to join our
                        financial family!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How to Join Section */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#006064] mb-4">
                How to Join in 3 Simple Steps
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Getting started is quick, easy, and completely digital
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                {joinSteps.map((step, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group text-center"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-[#006064] to-[#004d50] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold text-[#006064] mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {step.description}
                    </p>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <p className="text-sm font-semibold text-[#006064]">
                        {step.time || step.amount || step.features}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-12">
                <Button className="bg-[#006064] hover:bg-[#004d50] text-white text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                  Start Your Application Now
                </Button>
                <p className="text-gray-600 mt-4 text-sm">
                  No obligation • No credit check required • 5-minute
                  application
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-[#006064] to-[#004d50] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                  Hear From Our Members
                </h2>
                <p className="text-blue-100 max-w-2xl mx-auto">
                  Discover why thousands have chosen to join our financial
                  family
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20">
                <div className="text-center space-y-6">
                  <div className="flex justify-center gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="h-5 w-5 fill-[#B8D430] text-[#B8D430]"
                      />
                    ))}
                  </div>
                  <div className="text-xl md:text-2xl leading-relaxed italic">
                    "Switching to First International Financial Services was one of the best
                    financial decisions I've made. The personalized service and
                    better rates have saved me thousands. It feels great to bank
                    with an institution that truly cares about my financial
                    success."
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Sarah Johnson</p>
                    <p className="text-blue-100">Member Since 2018</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-[#006064] to-[#004d50] rounded-2xl p-8 md:p-12 text-center text-white">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Ready to Experience the Difference?
              </h2>
              <p className="text-blue-100 max-w-2xl mx-auto mb-6 text-lg">
                Join thousands of members who have discovered better banking
                with personalized service, lower fees, and higher returns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-[#B8D430] hover:bg-[#a0bb28] text-[#006064] font-semibold px-8 py-3 text-lg">
                  Become a Member Today
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[#006064] px-8 py-3 text-lg"
                >
                  Compare Our Rates →
                </Button>
              </div>
              <p className="text-blue-100 text-sm mt-4">
                $5 minimum deposit • No monthly fees • 24/7 member support
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
