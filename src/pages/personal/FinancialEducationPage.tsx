import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BookOpen,
  Calculator,
  TrendingUp,
  PiggyBank,
  GraduationCap,
  Users,
  ArrowRight,
  PlayCircle,
  Download,
  Star,
  Zap,
} from "lucide-react";
import { useState } from "react";

export default function FinancialEducationPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Resources" },
    { id: "budgeting", label: "Budgeting" },
    { id: "saving", label: "Saving" },
    { id: "credit", label: "Credit" },
    { id: "investing", label: "Investing" },
    { id: "retirement", label: "Retirement" },
  ];

  const resources = [
    {
      id: "budgeting",
      icon: Calculator,
      title: "Budgeting Basics",
      description:
        "Learn how to create and maintain a budget that works for your lifestyle and financial goals.",
      features: [
        "Creating a monthly budget",
        "Tracking expenses effectively",
        "Setting achievable financial goals",
        "Budget calculators and tools",
      ],
      type: "Guide",
      duration: "15 min read",
      level: "Beginner",
      popular: true,
    },
    {
      id: "saving",
      icon: PiggyBank,
      title: "Saving Strategies",
      description:
        "Discover effective ways to build your savings and prepare for future financial needs.",
      features: [
        "Emergency fund planning",
        "Automatic savings systems",
        "Short and long-term goals",
        "High-yield savings options",
      ],
      type: "Video Series",
      duration: "3 videos",
      level: "Beginner",
    },
    {
      id: "credit",
      icon: TrendingUp,
      title: "Credit Management",
      description:
        "Understand credit scores and learn how to build and maintain excellent credit history.",
      features: [
        "Understanding credit scores",
        "Building credit from scratch",
        "Managing credit cards wisely",
        "Credit report monitoring",
      ],
      type: "Interactive Course",
      duration: "45 min",
      level: "Intermediate",
      popular: true,
    },
    {
      id: "investing",
      icon: TrendingUp,
      title: "Investment Basics",
      description:
        "Start your investment journey with fundamental concepts and risk management strategies.",
      features: [
        "Stock market fundamentals",
        "Risk assessment tools",
        "Diversification strategies",
        "Long-term growth planning",
      ],
      type: "Course",
      duration: "1 hour",
      level: "Intermediate",
    },
    {
      id: "retirement",
      icon: GraduationCap,
      title: "Retirement Planning",
      description:
        "Plan for a secure retirement with comprehensive savings strategies and investment options.",
      features: [
        "IRA and 401(k) options",
        "Retirement calculators",
        "Investment strategies",
        "Social Security planning",
      ],
      type: "Guide",
      duration: "20 min read",
      level: "All Levels",
    },
    {
      id: "home-buying",
      icon: BookOpen,
      title: "Home Buying Guide",
      description:
        "Navigate the home buying process with confidence using our step-by-step comprehensive guide.",
      features: [
        "First-time buyer tips",
        "Mortgage basics explained",
        "Down payment strategies",
        "Home buying checklist",
      ],
      type: "Ebook",
      duration: "30 min read",
      level: "Beginner",
    },
  ];

  const workshops = [
    {
      title: "Budgeting for Beginners",
      date: "March 15, 2024",
      time: "6:00 PM - 7:30 PM",
      location: "Virtual & Main Branch",
      seats: "15 spots left",
      instructor: "Sarah Johnson, CFP",
    },
    {
      title: "Credit Score Masterclass",
      date: "March 22, 2024",
      time: "5:30 PM - 7:00 PM",
      location: "Virtual Only",
      seats: "Filling fast",
      instructor: "Mike Chen, Credit Specialist",
    },
    {
      title: "Retirement Planning Workshop",
      date: "April 5, 2024",
      time: "6:30 PM - 8:00 PM",
      location: "North Branch",
      seats: "20 spots available",
      instructor: "Dr. Emily Rodriguez",
    },
  ];

  const filteredResources =
    activeCategory === "all"
      ? resources
      : resources.filter((resource) => resource.id === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="bg-gradient-to-r from-gray-50 to-white py-4 border-b">
        <div className="container mx-auto px-4">
          <div className="text-sm text-gray-600">
            <span className="text-[#006064] font-semibold">01</span> / PERSONAL
            / FINANCIAL EDUCATION
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#006064] to-[#004d50] text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-6">
              <p className="text-[#B8D430] text-sm font-semibold uppercase tracking-wider">
                Personal / Financial Education
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-balance leading-tight">
                Empower Your Financial Future Through Education
              </h1>
              <p className="text-lg text-blue-100 leading-relaxed max-w-2xl mx-auto">
                Knowledge is power when it comes to managing your money. Explore
                our comprehensive resources, interactive tools, and expert-led
                workshops designed to help you make informed financial
                decisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-[#B8D430] hover:bg-[#a0bb28] text-[#006064] font-semibold px-8 py-3">
                  Explore Resources
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[#006064] px-8 py-3"
                >
                  View Workshop Schedule →
                </Button>
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
                50+
              </p>
              <p className="text-sm text-gray-600 mt-1">Free Resources</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-[#006064]">
                12
              </p>
              <p className="text-sm text-gray-600 mt-1">Workshops/Month</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-[#006064]">
                5K+
              </p>
              <p className="text-sm text-gray-600 mt-1">Members Educated</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-[#006064]">
                100%
              </p>
              <p className="text-sm text-gray-600 mt-1">Free Access</p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  activeCategory === category.id
                    ? "bg-[#006064] text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#006064] mb-4">
              Financial Education Resources
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Comprehensive learning materials designed for all experience
              levels
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {filteredResources.map((resource, index) => (
              <Card
                key={index}
                className="border-2 border-[#006064] hover:shadow-2xl transition-all duration-300 group"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-12 h-12 rounded-full bg-[#B8D430]/20 flex items-center justify-center group-hover:bg-[#B8D430]/30 transition-colors">
                      <resource.icon className="h-6 w-6 text-[#006064]" />
                    </div>
                    {resource.popular && (
                      <div className="flex items-center gap-1 bg-[#B8D430] text-[#006064] px-2 py-1 rounded-full text-xs font-bold">
                        <Star className="h-3 w-3 fill-current" />
                        Popular
                      </div>
                    )}
                  </div>
                  <CardTitle className="text-xl text-[#006064] group-hover:text-[#004d50] transition-colors">
                    {resource.title}
                  </CardTitle>
                  <p className="text-sm text-gray-600 mt-1">
                    {resource.description}
                  </p>
                  <div className="flex items-center gap-4 mt-3 text-xs text-gray-500">
                    <span className="bg-gray-100 px-2 py-1 rounded">
                      {resource.type}
                    </span>
                    <span>{resource.duration}</span>
                    <span>{resource.level}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {resource.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-gray-700"
                      >
                        <Zap className="h-4 w-4 text-[#B8D430] flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-2 pt-2">
                    <Button className="flex-1 bg-[#006064] hover:bg-[#004d50] text-white">
                      {resource.type.includes("Video") ? (
                        <>
                          <PlayCircle className="h-4 w-4 mr-2" />
                          Watch Now
                        </>
                      ) : resource.type.includes("Ebook") ? (
                        <>
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </>
                      ) : (
                        "Learn More"
                      )}
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-[#006064] text-[#006064] hover:bg-[#006064] hover:text-white"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Workshops Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#006064] mb-4">
                Upcoming Financial Workshops
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Join our expert-led workshops and interactive sessions to deepen
                your financial knowledge
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {workshops.map((workshop, index) => (
                <Card
                  key={index}
                  className="border-2 border-[#B8D430] hover:shadow-xl transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-[#006064]">
                        {workshop.title}
                      </h3>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-[#B8D430]" />
                          <span>
                            {workshop.date} • {workshop.time}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-[#B8D430]" />
                          <span>{workshop.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-[#B8D430]" />
                          <span>{workshop.seats}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <GraduationCap className="h-4 w-4 text-[#B8D430]" />
                          <span>Instructor: {workshop.instructor}</span>
                        </div>
                      </div>
                      <Button className="w-full bg-[#006064] hover:bg-[#004d50] text-white">
                        Register Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Resource */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <Card className="max-w-6xl mx-auto border-2 border-[#006064] bg-gradient-to-r from-[#006064]/5 to-[#B8D430]/5">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div>
                    <span className="bg-[#B8D430] text-[#006064] px-3 py-1 rounded-full text-sm font-bold">
                      Featured Resource
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-[#006064] mt-4">
                      Smart Strategies for Financial Success
                    </h3>
                    <p className="text-gray-600 leading-relaxed mt-3">
                      Discover practical financial advice and proven strategies
                      to put you on the path to financial growth and security.
                      This comprehensive guide covers everything from basic
                      money management to advanced investment techniques.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="bg-[#006064] hover:bg-[#004d50] text-white px-6 py-3">
                      <BookOpen className="h-4 w-4 mr-2" />
                      Read Guide
                    </Button>
                    <Button
                      variant="outline"
                      className="border-[#006064] text-[#006064] hover:bg-[#006064] hover:text-white px-6 py-3"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download PDF
                    </Button>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-[#006064] to-[#004d50] rounded-2xl p-1">
                  <img
                    src="/financial-planning-modern-concept.jpg"
                    alt="Financial planning concept"
                    className="w-full h-64 object-cover rounded-xl"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-[#006064] to-[#004d50] text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Start Your Financial Education Journey Today
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Take control of your financial future with our comprehensive
              resources, expert guidance, and supportive community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[#B8D430] hover:bg-[#a0bb28] text-[#006064] font-semibold px-8 py-3"
              >
                Explore All Resources
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#006064] px-8 py-3"
              >
                Get Personalized Advice
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Add missing icons
const Calendar = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
);

const MapPin = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);
