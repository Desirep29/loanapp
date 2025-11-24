import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  CreditCard,
  PiggyBank,
  House,
  Car,
  Building2,
  FileText,
  ArrowRight,
  Award,
  Play,
  Pause,
  Shield,
  Users,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import CountUp from "react-countup";

const actions = [
  {
    icon: FileText,
    label: "Open Checking",
   
  },
  {
    icon: PiggyBank,
    label: "Open Savings",

  },
  {
    icon: CreditCard,
    label: "Credit Card",
  
  },
  {
    icon: House,
    label: "Mortgage",
  
  },
  {
    icon: Car,
    label: "Auto Loan",
  },
  {
    icon: Building2,
    label: "Business Loan",
   
  },
];

const slides = [
  {
    title: "Referral bonuses are unlimited, so keep on referring!",
    subtitle: "REFER A FRIEND. GET REWARDED.",
    cta: "Learn More",
    image:
      "https://i.pinimg.com/736x/20/7f/46/207f468c0034296545c113047915e499.jpg",
    gradient: "from-[#006064] to-[#004d50]",
    link: "/referral-page",
  },
  {
    title: "Get the best rates on auto loans",
    subtitle: "DRIVE YOUR DREAMS",
    cta: "Apply Now",
    image:
      "https://i.pinimg.com/736x/8a/92/d9/8a92d9dbc98fb89d49e071f55f66fde0.jpg",
    gradient: "from-[#004d50] to-[#003d40]",
    link: "/loans/produts",
  },
  {
    title:
      "Exclusive Rate Discount for Teachers, School Staff & College Faculty",
    subtitle: "1% Off an Auto or Rec Vehicle Loan",
    cta: "Learn More",
    image:
      "https://i.pinimg.com/736x/fa/51/6c/fa516cd707c8fba93a20541eec1a8160.jpg",
    gradient: "from-[#006064] to-[#00838f]",
    link: "/teacher-discount-page",
  },
];

const features = [
  {
    icon: Shield,
    title: "Digital Banking",
    description:
      "Pay bills, deposit checks, transfer money, and more with our secure digital platform.",
    image:
      "https://i.pinimg.com/736x/a7/42/b5/a742b51147148c9f1816e7a53424ebeb.jpg",
    color: "bg-gradient-to-br from-[#006064] to-[#004d50]",
  },
  {
    icon: TrendingUp,
    title: "Thrive Savings",
    description:
      "High-yield savings account to help you reach your financial goals faster.",
    image:
      "https://i.pinimg.com/736x/79/e7/33/79e73332a01c082e167f1320437c92f4.jpg",
    color: "bg-gradient-to-br from-[#004d50] to-[#003d40]",
  },
  {
    icon: Users,
    title: "Financial Education",
    description:
      "Empowering your success through financial education and community resources.",
    image:
      "https://i.pinimg.com/736x/58/15/62/581562522a401ad58c2d2566347dbd46.jpg",
    color: "bg-gradient-to-br from-[#006064] to-[#00838f]",
  },
];

const rates = [
  {
    icon: Car,
    label: "AUTO LOANS",
    rate: "5.29%",
    description: "Starting at",
    disclaimer: "APR*",
    trend: "down",
  },
  {
    icon: House,
    label: "HOME EQUITY",
    rate: "7.49%",
    description: "Starting at",
    disclaimer: "APR*",
    trend: "stable",
  },
  {
    icon: Award,
    label: "CDs",
    rate: "3.95%",
    description: "Up to",
    disclaimer: "APY*",
    trend: "up",
  },
];

const stats = [
  { number: 89, suffix: "+", label: "Years Serving Members" },
  { number: 32466, suffix: "+", label: "Current Members" },
  { number: 112733, prefix: "$", label: "Donated to Communities in 2025" },
];

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const toggleAutoplay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Carousel */}
      <section className="relative bg-gradient-to-br from-[#006064] to-[#004d50] overflow-hidden">
        <div className="container mx-auto px-4 py-8 md:py-16">
          <div className="relative bg-gradient-to-r from-[#003d40] to-[#002729] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-8 items-center p-6 md:p-8 lg:p-12">
              <div className="text-white space-y-4 md:space-y-6 order-2 lg:order-1">
                <p className="text-[#B8D430] text-sm font-semibold uppercase tracking-wider">
                  {slides[currentSlide].subtitle}
                </p>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  {slides[currentSlide].title}
                </h1>
                <div className="flex flex-col sm:flex-row gap-3">
                 <Link to={slides[currentSlide].link}>  
                  <Button className="bg-[#B8D430] hover:bg-[#a0bb28] text-[#006064] font-semibold px-6 py-3 text-base md:text-lg">
                    {slides[currentSlide].cta}
                  </Button>
                  </Link>
                  {/* <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-[#006064] bg-transparent"
                  >
                    Learn More →
                  </Button> */}
                </div>
              </div>
              <div className="relative order-1 lg:order-2">
                <img
                  src={slides[currentSlide].image}
                  alt="Hero"
                  className="w-full h-48 sm:h-64 md:h-80 lg:h-96 rounded-xl object-cover shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl" />
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="bg-white/20 hover:bg-white/30 text-white rounded-full hidden sm:flex"
                onClick={prevSlide}
              >
                <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>

              <div className=" gap-2 hidden sm:flex ">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? "bg-[#B8D430] w-6"
                        : "bg-white/40 hover:bg-white/60"
                    }`}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>

              <Button
                variant="ghost"
                size="icon"
                className="bg-white/20 hover:bg-white/30 text-white rounded-full hidden sm:flex"
                onClick={nextSlide}
              >
                <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="bg-white/20 hover:bg-white/30 text-white rounded-full ml-2 hidden sm:flex"
                onClick={toggleAutoplay}
              >
                {isPlaying ? (
                  <Pause className="h-4 w-4" />
                ) : (
                  <Play className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              What would you like to do?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get started with our most popular services
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {actions.map((action) => (
              <div
                key={action.label}
                className="group relative bg-white rounded-xl border border-gray-200 hover:border-[#006064] hover:shadow-lg transition-all duration-300 p-4 text-center"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#B8D430]/10 flex items-center justify-center group-hover:bg-[#B8D430]/20 transition-colors mx-auto mb-3">
                  <action.icon className="h-6 w-6 md:h-8 md:w-8 text-[#006064]" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-gray-700 group-hover:text-[#006064] line-clamp-2">
                  {action.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <feature.icon className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>
                <div className={`${feature.color} text-white p-6 space-y-4`}>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-sm leading-relaxed opacity-90">
                    {feature.description}
                  </p>
                  <Link
                    to="#"
                    className="inline-flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all group/link"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rates */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Friendly service and great rates.
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Competitive rates designed to help you achieve your financial
              goals
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
            {rates.map((rate) => (
              <div
                key={rate.label}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 md:p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-[#B8D430]/10 flex items-center justify-center">
                    <rate.icon className="h-8 w-8 text-[#006064]" />
                  </div>
                </div>
                <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-4">
                  {rate.label}
                </p>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">{rate.description}</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <p className="text-3xl md:text-4xl font-bold text-[#006064]">
                      {rate.rate}
                    </p>
                    <span className="text-sm text-gray-500 align-super">
                      {rate.disclaimer}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#006064] hover:bg-[#004d50] text-white px-8 py-3">
              View Deposit Rates
            </Button>
            <Button
              variant="outline"
              className="border-[#006064] text-[#006064] hover:bg-[#006064] hover:text-white px-8 py-3"
            >
              View Loan Rates →
            </Button>
          </div>
        </div>
      </section>

      {/* Stats CTA */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-[#006064] to-[#004d50] text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#B8D430] rounded-full -translate-y-36 translate-x-36"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#B8D430] rounded-full translate-y-48 -translate-x-48"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6">
              <p className="text-[#B8D430] text-sm font-semibold uppercase tracking-wider">
                JOIN US TODAY
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                Together we can do great things for your financial future.
              </h2>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-[#B8D430] hover:bg-[#a0bb28] text-[#006064] font-semibold px-6 py-3">
                  Become a Member
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[#006064] bg-transparent px-6 py-3"
                >
                  About Us →
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center ${
                    index === 2 ? "col-span-2" : ""
                  }`}
                >
                  <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#B8D430] mb-2">
                    {stat.prefix}
                    <CountUp end={stat.number} duration={3} separator="," />
                    {stat.suffix}
                  </p>
                  <p className="text-sm sm:text-base text-white/90">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
