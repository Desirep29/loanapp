import { Button } from "@/components/ui/button";
import {
  Check,
  Users,
  TrendingUp,
  Heart,
  Clock,
  MapPin,
  Building2,
  ArrowRight,
  Star,
} from "lucide-react";

const benefits = [
  "Competitive salary and performance bonuses",
  "Comprehensive health, dental, and vision insurance",
  "401(k) retirement plan with employer match",
  "Paid time off and holidays",
  "Professional development opportunities",
  "Tuition reimbursement program",
  "Employee wellness programs",
  "Flexible work arrangements",
];

const jobOpenings = [
  {
    title: "Member Service Representative",
    location: "Bismarck Main Office",
    type: "Full-Time",
    department: "Member Services",
    description:
      "Provide exceptional service to members, process transactions, and assist with account inquiries. Ideal candidate has strong communication skills and a passion for helping others.",
  },
  {
    title: "Loan Officer",
    location: "Fargo Veterans Blvd. Branch",
    type: "Full-Time",
    department: "Lending",
    description:
      "Evaluate, authorize, and recommend approval of loan applications. Work with members to find the best financial solutions for their needs.",
  },
  {
    title: "IT Support Specialist",
    location: "Bismarck Main Office",
    type: "Full-Time",
    department: "Information Technology",
    description:
      "Provide technical support to staff and maintain IT infrastructure. Experience with network administration and cybersecurity preferred.",
  },
  {
    title: "Marketing Coordinator",
    location: "Bismarck Main Office",
    type: "Full-Time",
    department: "Marketing",
    description:
      "Develop and execute marketing campaigns, manage social media presence, and create engaging content for our members.",
  },
  {
    title: "Financial Advisor",
    location: "Multiple Locations",
    type: "Full-Time",
    department: "Investments",
    description:
      "Help members achieve their financial goals through personalized investment strategies and financial planning.",
  },
  {
    title: "Branch Manager",
    location: "Mandan Branch",
    type: "Full-Time",
    department: "Branch Operations",
    description:
      "Lead branch operations, manage team performance, and ensure exceptional member service delivery.",
  },
];

const values = [
  {
    icon: Users,
    title: "Collaborative Culture",
    description:
      "Work in a supportive environment where teamwork and mutual respect drive our success.",
  },
  {
    icon: TrendingUp,
    title: "Growth Opportunities",
    description:
      "Access to training, mentorship, and clear career paths for professional development.",
  },
  {
    icon: Heart,
    title: "Community Impact",
    description:
      "Make a real difference in the lives of our members and local communities.",
  },
  {
    icon: Clock,
    title: "Work-Life Balance",
    description:
      "Flexible scheduling and generous benefits to support your well-being.",
  },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        {/* Breadcrumb */}
        <div className="bg-gradient-to-r from-gray-50 to-white py-4 border-b">
          <div className="container mx-auto px-4">
            <p className="text-sm text-gray-600">
              <span className="text-[#006064] font-semibold">01</span> / ABOUT /
              CAREERS
            </p>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#006064] leading-tight">
                    Build Your Career With Purpose
                  </h1>
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
                    Join our team and make a difference in people's financial
                    lives
                  </h2>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    At First International Financial Services, we're more than just a financial
                    institution. We're a community of dedicated professionals
                    committed to helping our members achieve their financial
                    goals. Join us and be part of something special.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-[#006064] hover:bg-[#004d50] text-white px-8 py-3 text-base">
                    View Open Positions
                  </Button>
                  <Button
                    variant="outline"
                    className="border-[#006064] text-[#006064] hover:bg-[#006064] hover:text-white px-8 py-3 text-base"
                  >
                    Learn About Our Culture
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-[#006064] to-[#004d50] rounded-2xl p-1">
                  <img
                    src="/team-collaboration.jpg"
                    alt="Team working together"
                    className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-xl"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-[#B8D430] text-[#006064] px-6 py-3 rounded-lg shadow-lg">
                  <p className="font-bold text-lg">12+</p>
                  <p className="text-sm">Open Positions</p>
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
                  150+
                </p>
                <p className="text-sm text-gray-600 mt-1">Team Members</p>
              </div>
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-[#006064]">
                  12
                </p>
                <p className="text-sm text-gray-600 mt-1">Branch Locations</p>
              </div>
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-[#006064]">
                  4.8
                </p>
                <p className="text-sm text-gray-600 mt-1">Employee Rating</p>
              </div>
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-[#006064]">
                  89%
                </p>
                <p className="text-sm text-gray-600 mt-1">Retention Rate</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Work Here Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#006064] mb-4">
                Why Choose First International Financial Services?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                We believe in investing in our employees. When you join our
                team, you become part of a culture that values growth,
                collaboration, and making a positive impact.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#B8D430]/20 flex items-center justify-center mb-4 group-hover:bg-[#B8D430]/30 transition-colors">
                    <value.icon className="h-6 w-6 text-[#006064]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#006064] mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {value.description}
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
              <div className="relative order-2 lg:order-1">
                <div className="bg-gradient-to-br from-[#006064] to-[#004d50] rounded-2xl p-1">
                  <img
                    src="/employee-benefits.jpg"
                    alt="Employee benefits"
                    className="w-full h-64 sm:h-80 object-cover rounded-xl"
                  />
                </div>
                <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4 border">
                  <Star className="h-8 w-8 text-[#B8D430] mb-2" />
                  <p className="font-bold text-[#006064]">Top Rated</p>
                  <p className="text-sm text-gray-600">Benefits Package</p>
                </div>
              </div>
              <div className="space-y-6 order-1 lg:order-2">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#006064] leading-tight">
                  Comprehensive Benefits Package
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  We offer a competitive benefits package designed to support
                  your health, financial security, and professional growth.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex gap-3 p-3 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                    >
                      <Check className="h-5 w-5 text-[#B8D430] flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Job Openings Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#006064] mb-4">
                Current Career Opportunities
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Join our growing team and help us build a brighter financial
                future for our members
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {jobOpenings.map((job, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-[#006064] group-hover:text-[#004d50] transition-colors">
                          {job.title}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <MapPin className="h-4 w-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Building2 className="h-4 w-4" />
                          <span>{job.department}</span>
                        </div>
                      </div>
                      <span className="bg-[#B8D430] text-[#006064] text-xs font-bold px-3 py-1 rounded-full">
                        {job.type}
                      </span>
                    </div>

                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {job.description}
                    </p>

                    <div className="flex gap-3">
                      <Button className="bg-[#006064] hover:bg-[#004d50] text-white flex-1">
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
                  </div>
                ))}
              </div>

              <div className="text-center bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 border">
                <h3 className="text-xl font-bold text-[#006064] mb-3">
                  Don't see the perfect role?
                </h3>
                <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                  We're always looking for talented individuals who share our
                  passion for helping others. Send us your resume and we'll keep
                  you in mind for future opportunities.
                </p>
                <Button
                  variant="outline"
                  className="border-[#006064] text-[#006064] hover:bg-[#006064] hover:text-white px-8 py-3"
                >
                  Submit General Application
                </Button>
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
                  Hear From Our Team
                </h2>
                <p className="text-blue-100 max-w-2xl mx-auto">
                  Discover why our employees love working at Capital Credit
                  Union
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
                    "Working at First International Financial Services has been incredibly
                    rewarding. The supportive team environment and opportunities
                    for growth have helped me develop both personally and
                    professionally. I truly feel like I'm making a difference in
                    our members' lives every day."
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Sarah Johnson</p>
                    <p className="text-blue-100">
                      Loan Officer • 5 Years with CCU
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center mt-8">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[#006064]"
                >
                  Read More Team Stories
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Application Process Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#006064] mb-4">
                Our Hiring Process
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                We make applying simple and transparent. Here's what you can
                expect:
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    step: "01",
                    title: "Apply Online",
                    description: "Submit your application through our portal",
                  },
                  {
                    step: "02",
                    title: "Phone Screening",
                    description: "Brief call with our HR team",
                  },
                  {
                    step: "03",
                    title: "In-Person Interview",
                    description: "Meet with the hiring team",
                  },
                  {
                    step: "04",
                    title: "Offer & Onboarding",
                    description: "Welcome to the team!",
                  },
                ].map((process, index) => (
                  <div
                    key={index}
                    className="text-center p-6 bg-gray-50 rounded-xl border border-gray-200"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#006064] text-white flex items-center justify-center font-bold text-lg mx-auto mb-4">
                      {process.step}
                    </div>
                    <h3 className="font-bold text-[#006064] mb-2">
                      {process.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {process.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-[#006064] to-[#004d50] rounded-2xl p-8 md:p-12 text-center text-white">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Ready to Start Your Journey With Us?
              </h2>
              <p className="text-blue-100 max-w-2xl mx-auto mb-6 text-lg">
                Join a team that values your growth, supports your success, and
                makes a real impact in our community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-[#B8D430] hover:bg-[#a0bb28] text-[#006064] font-semibold px-8 py-3">
                  Browse All Positions
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[#006064] px-8 py-3"
                >
                  Contact HR Team
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
