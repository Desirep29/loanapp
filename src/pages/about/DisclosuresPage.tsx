import {
  ChevronRight,
  FileText,
  AlertCircle,
  Shield,
  Lock,
  Scale,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function DisclosuresPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const disclosures = [
    {
      title: "Privacy Policy",
      description:
        "Learn how we protect and use your personal information in accordance with federal regulations.",
      link: "#",
      category: "Privacy",
      lastUpdated: "2024-01-15",
      icon: Shield,
    },
    {
      title: "Electronic Signature Disclosure",
      description:
        "Information about electronic signatures, records, and your rights under the E-SIGN Act.",
      link: "/about/disclosures/esign",
      category: "Digital Banking",
      lastUpdated: "2024-02-01",
      icon: Lock,
    },
    {
      title: "Terms and Conditions",
      description:
        "Complete terms and conditions governing your use of our banking services and products.",
      link: "#",
      category: "General",
      lastUpdated: "2024-01-20",
      icon: FileText,
    },
    {
      title: "Fee Schedule",
      description:
        "Current fee schedule for all account types, services, and optional features.",
      link: "#",
      category: "Accounts",
      lastUpdated: "2024-03-01",
      icon: Scale,
    },
    {
      title: "Truth in Savings",
      description:
        "Account rate and fee disclosures as required by the Truth in Savings Act.",
      link: "#",
      category: "Accounts",
      lastUpdated: "2024-02-15",
      icon: Scale,
    },
    {
      title: "Funds Availability Policy",
      description:
        "Learn when deposited funds are available for withdrawal under Regulation CC.",
      link: "#",
      category: "Deposits",
      lastUpdated: "2024-01-10",
      icon: FileText,
    },
    {
      title: "Electronic Fund Transfer Disclosure",
      description:
        "Your rights and responsibilities regarding electronic fund transfers under Regulation E.",
      link: "#",
      category: "Digital Banking",
      lastUpdated: "2024-02-20",
      icon: Lock,
    },
    {
      title: "Overdraft Protection Disclosure",
      description:
        "Details about overdraft protection services, fees, and your opt-in rights.",
      link: "#",
      category: "Accounts",
      lastUpdated: "2024-01-30",
      icon: Shield,
    },
  ];

  const categories = [
    "All",
    "Privacy",
    "Digital Banking",
    "Accounts",
    "Deposits",
    "General",
  ];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredDisclosures = disclosures.filter((disclosure) => {
    const matchesSearch =
      disclosure.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      disclosure.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || disclosure.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="bg-gradient-to-r from-gray-50 to-white py-4 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-[#006064] transition-colors">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link
              to="/about"
              className="hover:text-[#006064] transition-colors"
            >
              About
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-[#006064] font-semibold">Disclosures</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#006064] to-[#004d50] text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                <FileText className="h-6 w-6" />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-balance">
                Disclosures & Legal Information
              </h1>
            </div>
            <p className="text-lg text-blue-100 text-pretty max-w-3xl">
              Access important legal documents, policies, and disclosures about
              our services and your rights as a member. Stay informed about how
              we protect your financial information.
            </p>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-6 bg-amber-50 border-b border-amber-200">
        <div className="container mx-auto px-4">
          <div className="flex gap-4 items-start max-w-6xl">
            <AlertCircle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h3 className="font-semibold text-amber-900 mb-2 text-lg">
                Important Legal Information
              </h3>
              <p className="text-amber-800">
                These disclosures contain important information about your
                rights and responsibilities. Please review them carefully and
                contact us if you have any questions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
              <div className="flex-1 w-full md:max-w-md">
                <div className="relative">
                  <FileText className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <input
                    type="text"
                    placeholder="Search disclosures..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#006064] focus:border-transparent bg-white"
                  />
                </div>
              </div>
              <div className="flex items-center gap-4 w-full md:w-auto">
                <span className="text-sm text-gray-600 font-medium">
                  Filter by:
                </span>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#006064] focus:border-transparent bg-white"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="text-center">
              <p className="text-gray-600">
                Showing {filteredDisclosures.length} of {disclosures.length}{" "}
                disclosures
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Disclosures List */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          {filteredDisclosures.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {filteredDisclosures.map((disclosure, index) => (
                <Card
                  key={index}
                  className="group bg-white border border-gray-200 hover:border-[#006064] hover:shadow-xl transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#B8D430]/20 flex items-center justify-center group-hover:bg-[#B8D430]/30 transition-colors flex-shrink-0">
                        <disclosure.icon className="h-6 w-6 text-[#006064]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-2">
                          <h2 className="font-bold text-lg text-[#006064] group-hover:text-[#004d50] transition-colors">
                            {disclosure.title}
                          </h2>
                          <span className="bg-gray-100 text-gray-700 text-xs font-medium px-2 py-1 rounded-full">
                            {disclosure.category}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-3 leading-relaxed">
                          {disclosure.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">
                            Updated:{" "}
                            {new Date(
                              disclosure.lastUpdated
                            ).toLocaleDateString()}
                          </span>
                          <div className="flex gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-[#006064] text-[#006064] hover:bg-[#006064] hover:text-white"
                            >
                              <Link
                                to={disclosure.link}
                                className="flex items-center gap-2"
                              >
                                View <ChevronRight className="h-4 w-4" />
                              </Link>
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-gray-600 hover:text-[#006064]"
                            >
                              <Download className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="max-w-md mx-auto">
                <FileText className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  No disclosures found
                </h3>
                <p className="text-gray-600 mb-6">
                  We couldn't find any disclosures matching your search
                  criteria. Try adjusting your filters or search terms.
                </p>
                <Button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("All");
                  }}
                  className="bg-[#006064] hover:bg-[#004d50] text-white"
                >
                  Clear Filters
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#006064] mb-4">
              Need Additional Assistance?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-8">
              Our team is here to help you understand these important documents
              and answer any questions you may have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-[#006064] hover:bg-[#004d50] text-white px-8 py-3">
                Contact Legal Department
              </Button>
              <Button
                variant="outline"
                className="border-[#006064] text-[#006064] hover:bg-[#006064] hover:text-white px-8 py-3"
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory Information */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-[#006064] to-[#004d50] text-white">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4">
                  Regulatory Information
                </h3>
                <div className="grid md:grid-cols-2 gap-6 text-sm">
                  <div>
                    <p className="font-semibold mb-2">
                      National Credit Union Administration
                    </p>
                    <p className="text-blue-100">Federally insured by NCUA</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">
                      Equal Housing Opportunity
                    </p>
                    <p className="text-blue-100">
                      We do business in accordance with the Fair Housing Act
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
