import { Button } from "@/components/ui/button";
import {
  Monitor,
  Smartphone,
  Calculator,
  BookOpen,
  Phone,
  Mail,
  MessageCircle,
  Share2,
} from "lucide-react";
import { useState } from "react";

export default function ContactUsPage() {
  const [activeTab, setActiveTab] = useState("get-in-touch");

  const contactMethods = [
    {
      icon: Phone,
      title: "By Phone",
      description: "Our Contact Center is available 24/7",
      details: [
        "Call Our Toll-Free Number: 701.255.0626",
        "Monday - Friday: 7:30 a.m. - 5:00 p.m.",
        "Saturday: 9 a.m. - 1 p.m.",
      ],
      emergency: "For lost/stolen cards: 1.888.241.2510",
    },
    {
      icon: MessageCircle,
      title: "By Live Chat",
      description: "Get instant help from our team",
      details: [
        "Monday - Friday: 7:30 a.m. - 5:00 p.m.",
        "Real-time support for quick questions",
        "Secure messaging platform",
      ],
    },
    {
      icon: Mail,
      title: "By Mail",
      description: "Send us correspondence",
      details: [
        "First International Financial Services",
        "PO Box 5008",
        "Bismarck, ND 58502-5008",
      ],
    },
    {
      icon: Share2,
      title: "Social Media",
      description: "Connect with us online",
      platforms: ["Facebook", "LinkedIn", "Twitter", "YouTube", "Instagram"],
    },
  ];

  const resources = [
    {
      icon: Monitor,
      title: "CU Online",
      description: "Access your accounts 24/7",
      link: "#",
    },
    {
      icon: Smartphone,
      title: "Mobile App",
      description: "Banking on the go",
      link: "#",
    },
    {
      icon: Calculator,
      title: "Financial Calculators",
      description: "Plan your financial future",
      link: "#",
    },
    {
      icon: BookOpen,
      title: "Financial Education",
      description: "Learn and grow financially",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <main>
        {/* Breadcrumb */}
        <div className="bg-gradient-to-r from-gray-50 to-white py-4 border-b">
          <div className="container mx-auto px-4">
            <p className="text-sm text-gray-600">
              <span className="text-[#006064] font-semibold">01</span> / ABOUT /
              CONTACT US
            </p>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="bg-gradient-to-br from-[#006064] to-[#004d50] rounded-2xl p-1">
                  <img
                    src="/customer-service-representative.jpg"
                    alt="Customer service representative"
                    className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-xl"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-[#B8D430] text-[#006064] px-6 py-3 rounded-lg shadow-lg">
                  <p className="font-bold text-lg">24/7</p>
                  <p className="text-sm">Support Available</p>
                </div>
              </div>
              <div className="space-y-6 order-1 lg:order-2">
                <div className="space-y-4">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#006064] leading-tight">
                    We're Here to Help
                  </h1>
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
                    Online, on the phone, or in person. We're ready when you
                    are.
                  </h2>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    We know you need to contact us and it's probably pretty
                    urgent. That's why we give you plenty of options and make
                    them easy to use. We're ready to serve and provide the
                    answers you need.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-[#006064] hover:bg-[#004d50] text-white px-8 py-3 text-base">
                    Schedule an Appointment
                  </Button>
                  <Button
                    variant="outline"
                    className="border-[#006064] text-[#006064] hover:bg-[#006064] hover:text-white px-8 py-3 text-base"
                  >
                    Visit a Branch →
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Methods Tabs */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#006064] mb-4">
                Choose Your Contact Method
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Multiple ways to reach us. Pick what works best for you.
              </p>
            </div>

            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-2 mb-8 md:mb-12">
              {[
                { id: "get-in-touch", label: "Get in Touch" },
                { id: "contact-form", label: "Contact Form" },
                { id: "donation-request", label: "Donation Request" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all ${
                    activeTab === tab.id
                      ? "bg-[#006064] text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="max-w-6xl mx-auto">
              {activeTab === "get-in-touch" && (
                <div className="grid md:grid-cols-2 gap-6">
                  {contactMethods.map((method, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-[#B8D430]/20 flex items-center justify-center">
                          <method.icon className="h-6 w-6 text-[#006064]" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-[#006064]">
                            {method.title}
                          </h3>
                          <p className="text-gray-600">{method.description}</p>
                        </div>
                      </div>

                      {method.details && (
                        <div className="space-y-2 mb-4">
                          {method.details.map((detail, idx) => (
                            <p key={idx} className="text-gray-700 text-sm">
                              {detail}
                            </p>
                          ))}
                        </div>
                      )}

                      {method.emergency && (
                        <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
                          <p className="text-red-700 text-sm font-semibold">
                            {method.emergency}
                          </p>
                        </div>
                      )}

                      {method.platforms && (
                        <div className="flex gap-2 flex-wrap">
                          {method.platforms.map((platform, idx) => (
                            <button
                              key={idx}
                              className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors text-sm"
                            >
                              {platform}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "contact-form" && (
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                  <div className="bg-gradient-to-r from-[#006064] to-[#004d50] text-white p-6">
                    <h3 className="text-2xl font-bold mb-2">
                      Send Us a Message
                    </h3>
                    <p className="text-blue-100">
                      We'll get back to you within 24 hours
                    </p>
                  </div>

                  <div className="p-6 md:p-8 space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#006064] focus:border-transparent"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#006064] focus:border-transparent"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#006064] focus:border-transparent"
                        placeholder="What is this regarding?"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                      </label>
                      <textarea
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#006064] focus:border-transparent"
                        placeholder="Please describe your inquiry in detail..."
                      />
                    </div>

                    <Button className="bg-[#006064] hover:bg-[#004d50] text-white px-8 py-3 w-full md:w-auto">
                      Send Message
                    </Button>
                  </div>
                </div>
              )}

              {activeTab === "donation-request" && (
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                  <div className="bg-gradient-to-r from-[#006064] to-[#004d50] text-white p-6">
                    <h3 className="text-2xl font-bold mb-2">
                      Donation Request
                    </h3>
                    <p className="text-blue-100">
                      Supporting our local communities
                    </p>
                  </div>

                  <div className="p-6 md:p-8">
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      First International Financial Services is committed to supporting our local
                      communities. Please fill out the form below to request a
                      donation for your organization or event.
                    </p>

                    <div className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Organization Name
                          </label>
                          <input
                            type="text"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Contact Person
                          </label>
                          <input
                            type="text"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Event Description
                        </label>
                        <textarea
                          rows={4}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                        />
                      </div>

                      <Button className="bg-[#006064] hover:bg-[#004d50] text-white px-8 py-3">
                        Submit Donation Request
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Emergency Contact Section */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-red-50 to-orange-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-red-200">
                <h2 className="text-2xl sm:text-3xl font-bold text-red-800 mb-4">
                  Emergency Contacts
                </h2>
                <div className="grid md:grid-cols-2 gap-6 text-left">
                  <div className="space-y-3">
                    <h3 className="font-bold text-gray-800">
                      Lost or Stolen Cards
                    </h3>
                    <p className="text-gray-700">
                      Call{" "}
                      <span className="font-semibold text-red-700">
                        1.888.241.2510
                      </span>{" "}
                      from anywhere in the U.S.
                    </p>
                    <p className="text-gray-700 text-sm">
                      Outside U.S.:{" "}
                      <span className="font-semibold">1.909.941.1398</span>
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-bold text-gray-800">
                      After Hours Support
                    </h3>
                    <p className="text-gray-700">
                      Available 24/7 for urgent matters requiring immediate
                      attention.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#006064] mb-4">
                Helpful Resources
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Tools and information to help you manage your finances
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {resources.map((resource, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-16 h-16 rounded-full bg-[#B8D430]/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#B8D430]/30 transition-colors">
                    <resource.icon className="h-8 w-8 text-[#006064]" />
                  </div>
                  <h3 className="font-bold text-[#006064] mb-2 text-lg">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {resource.description}
                  </p>
                  <Button
                    variant="link"
                    className="text-[#006064] p-0 h-auto font-semibold group-hover:gap-2 transition-all"
                  >
                    Learn More{" "}
                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-[#006064] to-[#004d50] rounded-2xl p-8 md:p-12 text-center text-white">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-blue-100 max-w-2xl mx-auto mb-6 text-lg">
                Join thousands of members who trust us with their financial
                future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-[#B8D430] hover:bg-[#a0bb28] text-[#006064] font-semibold px-8 py-3">
                  Become a Member
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[#006064] px-8 py-3"
                >
                  Schedule a Consultation
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
