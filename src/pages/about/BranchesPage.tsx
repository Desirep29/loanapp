import { BranchCard } from "@/components/reuse/BranchCard";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone, Search, Filter } from "lucide-react";
import { useState } from "react";

const branches = [
  {
    name: "Main Office",
    address: "201 E. Thayer Ave",
    city: "Bismarck, ND 58501",
    phone: "(701) 255-0626",
    lobbyHours: "Mon-Fri: 9:00 AM - 5:00 PM\nSat: 9:00 AM - 12:00 PM",
    driveUpHours: "Mon-Fri: 8:00 AM - 6:00 PM\nSat: 9:00 AM - 12:00 PM",
    is24HourATM: true,
    hasDriveUp: true,
    hasSaturdayHours: true,
  },
  {
    name: "South Branch",
    address: "835 S. Washington St",
    city: "Bismarck, ND 58504",
    phone: "(701) 255-0630",
    lobbyHours: "Mon-Fri: 9:00 AM - 5:00 PM\nSat: 9:00 AM - 12:00 PM",
    driveUpHours: "Mon-Fri: 8:00 AM - 6:00 PM\nSat: 9:00 AM - 12:00 PM",
    is24HourATM: true,
    hasDriveUp: true,
    hasSaturdayHours: true,
  },
  {
    name: "Northwest Branch",
    address: "1050 Burnt Boat Dr",
    city: "Bismarck, ND 58503",
    phone: "(701) 255-0635",
    lobbyHours: "Mon-Fri: 9:00 AM - 5:00 PM",
    is24HourATM: true,
    hasSaturdayHours: false,
    additionalInfo: "Coming soon: Saturday hours starting next month",
  },
  {
    name: "Mandan Branch",
    address: "600 E. Main St",
    city: "Mandan, ND 58554",
    phone: "(701) 663-9520",
    lobbyHours: "Mon-Fri: 9:00 AM - 5:00 PM\nSat: 9:00 AM - 12:00 PM",
    isRemodeling: true,
    additionalInfo: "Temporary lobby closure - Drive-up only until Nov 30th",
    hasDriveUp: true,
    hasSaturdayHours: true,
  },
  {
    name: "North Branch",
    address: "1901 N. 11th St",
    city: "Bismarck, ND 58501",
    phone: "(701) 255-0640",
    lobbyHours: "Mon-Fri: 9:00 AM - 5:00 PM\nSat: 9:00 AM - 12:00 PM",
    driveUpHours: "Mon-Fri: 8:00 AM - 6:00 PM\nSat: 9:00 AM - 12:00 PM",
    is24HourATM: true,
    hasDriveUp: true,
    hasSaturdayHours: true,
  },
  {
    name: "Sunrise Branch",
    address: "3103 Yorktown Dr",
    city: "Bismarck, ND 58503",
    phone: "(701) 255-0645",
    lobbyHours: "Mon-Fri: 9:00 AM - 5:00 PM",
    is24HourATM: true,
    hasSaturdayHours: false,
  },
];

export default function BranchesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCity, setSelectedCity] = useState("All");

  const cities = ["All", "Bismarck", "Mandan", "Fargo", "Hazen", "New Salem"];

  const filteredBranches = branches.filter((branch) => {
    const matchesSearch =
      branch.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      branch.address.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCity =
      selectedCity === "All" || branch.city.includes(selectedCity);
    return matchesSearch && matchesCity;
  });

  return (
    <div className="min-h-screen bg-background">
      <main>
        {/* Breadcrumb */}
        <div className="bg-gradient-to-r from-gray-50 to-white py-4 border-b">
          <div className="container mx-auto px-4">
            <p className="text-sm text-gray-600">
              <span className="text-[#006064] font-semibold">01</span> / ABOUT /
              LOCATIONS
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
                    Find Your Nearest Branch
                  </h1>
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
                    How can we help you today?
                  </h2>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Come by any of our 11 branches in North Dakota to open
                    checking and savings accounts, apply for a mortgage or auto
                    loan, or just to say hello. We look forward to seeing you.
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
                    Get Directions
                  </Button>
                </div>
              </div>
              <div className="relative order-1 lg:order-2">
                <div className="bg-gradient-to-br from-[#006064] to-[#004d50] rounded-2xl p-1">
                  <img
                    src="/bismarck-cityscape.jpg"
                    alt="Bismarck cityscape"
                    className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-xl"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-[#B8D430] text-[#006064] px-6 py-3 rounded-lg shadow-lg">
                  <p className="font-bold text-lg">11</p>
                  <p className="text-sm">Branches Across ND</p>
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
                <MapPin className="h-8 w-8 text-[#006064] mx-auto mb-2" />
                <p className="text-2xl md:text-3xl font-bold text-[#006064]">
                  11
                </p>
                <p className="text-sm text-gray-600 mt-1">Branch Locations</p>
              </div>
              <div className="text-center">
                <Clock className="h-8 w-8 text-[#006064] mx-auto mb-2" />
                <p className="text-2xl md:text-3xl font-bold text-[#006064]">
                  6
                </p>
                <p className="text-sm text-gray-600 mt-1">Days a Week</p>
              </div>
              <div className="text-center">
                <Phone className="h-8 w-8 text-[#006064] mx-auto mb-2" />
                <p className="text-2xl md:text-3xl font-bold text-[#006064]">
                  24/7
                </p>
                <p className="text-sm text-gray-600 mt-1">ATM Access</p>
              </div>
              <div className="text-center">
                <div className="h-8 w-8 bg-[#B8D430] rounded-full mx-auto mb-2 flex items-center justify-center">
                  <span className="text-[#006064] font-bold text-sm">CU</span>
                </div>
                <p className="text-2xl md:text-3xl font-bold text-[#006064]">
                  30K+
                </p>
                <p className="text-sm text-gray-600 mt-1">Members Served</p>
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="flex-1 w-full md:max-w-md">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <input
                      type="text"
                      placeholder="Search by branch name or address..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#006064] focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-4 w-full md:w-auto">
                  <Filter className="h-4 w-4 text-gray-600" />
                  <select
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#006064] focus:border-transparent"
                  >
                    {cities.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="text-center mt-4">
                <p className="text-gray-600">
                  Showing {filteredBranches.length} of {branches.length}{" "}
                  branches
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Branches Grid */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            {filteredBranches.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {filteredBranches.map((branch, index) => (
                  <BranchCard key={index} {...branch} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="max-w-md mx-auto">
                  <MapPin className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    No branches found
                  </h3>
                  <p className="text-gray-600 mb-6">
                    We couldn't find any branches matching your search criteria.
                    Try adjusting your filters or search terms.
                  </p>
                  <Button
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedCity("All");
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

        {/* ATM Locator Section */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#006064] mb-4">
                Need an ATM?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-8">
                Access your money anytime with 30,000+ surcharge-free ATMs
                nationwide through our CO-OP network.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-[#006064] hover:bg-[#004d50] text-white px-8 py-3">
                  Find Nearby ATMs
                </Button>
                <Button
                  variant="outline"
                  className="border-[#006064] text-[#006064] hover:bg-[#006064] hover:text-white px-8 py-3"
                >
                  Download ATM Map
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-[#006064] to-[#004d50] rounded-2xl p-8 md:p-12 text-center text-white">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Ready to Visit Us?
              </h2>
              <p className="text-blue-100 max-w-2xl mx-auto mb-6 text-lg">
                Stop by any of our branches to experience the credit union
                difference. Our friendly team is ready to help you achieve your
                financial goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-[#B8D430] hover:bg-[#a0bb28] text-[#006064] font-semibold px-8 py-3">
                  Become a Member
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[#006064] px-8 py-3"
                >
                  Contact Us First
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
