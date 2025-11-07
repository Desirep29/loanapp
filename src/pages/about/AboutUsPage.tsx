import { Button } from "@/components/ui/button";
import {
  Check,
  MapPin,
  Calendar,
  Users,
  Building,
  ArrowRight,
} from "lucide-react";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        {/* Breadcrumb */}
        <div className="bg-gradient-to-r from-gray-50 to-white py-4 border-b">
          <div className="container mx-auto px-4">
            <p className="text-sm text-gray-600">
              <span className="text-[#006064] font-semibold">01</span> / ABOUT /
              ABOUT US
            </p>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#006064] leading-tight">
                    Building Financial Futures Since 1936
                  </h1>
                  <p className="text-lg text-gray-600 max-w-2xl">
                    From humble beginnings to serving over 30,000 members, we've
                    been committed to empowering our community with financial
                    solutions that matter.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-[#006064] hover:bg-[#004d50] text-white px-8 py-3 text-base">
                    Contact Us
                  </Button>
                  <Button
                    variant="outline"
                    className="border-[#006064] text-[#006064] hover:bg-[#006064] hover:text-white px-8 py-3 text-base"
                  >
                    Our Locations →
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-[#006064] to-[#004d50] rounded-2xl p-1">
                  <img
                    src="https://i.pinimg.com/1200x/12/45/69/1245694e2dec768921d3436a28429219.jpg"
                    alt="Team collaboration"
                    className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-xl"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-[#B8D430] text-[#006064] px-6 py-3 rounded-lg shadow-lg">
                  <p className="font-bold text-lg">89+ Years</p>
                  <p className="text-sm">Of Trust & Service</p>
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
                  12+
                </p>
                <p className="text-sm text-gray-600 mt-1">Branch Locations</p>
              </div>
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-[#006064]">
                  $140M+
                </p>
                <p className="text-sm text-gray-600 mt-1">in Assets</p>
              </div>
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-[#006064]">
                  89
                </p>
                <p className="text-sm text-gray-600 mt-1">Years Strong</p>
              </div>
            </div>
          </div>
        </section>

        {/* Founded Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="relative">
                <div className="bg-gradient-to-br from-[#006064] to-[#004d50] rounded-2xl p-1">
                  <img
                    src="https://i.pinimg.com/736x/d7/ec/42/d7ec4294e43b6d32ae478f880eb3935e.jpg"
                    alt="Team collaboration"
                    className="w-full h-64 sm:h-80 object-cover rounded-xl"
                  />
                </div>
                <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4 border">
                  <Users className="h-8 w-8 text-[#006064] mb-2" />
                  <p className="font-bold text-[#006064]">Community First</p>
                  <p className="text-sm text-gray-600">Always has been</p>
                </div>
              </div>
              <div className="space-y-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#006064] leading-tight">
                  Founded in 1936. Stronger than ever today.
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  We're not your grandfather's First International Financial Services, even though he
                  might know our name. With a long history of serving North
                  Dakotans, we're always at the forefront of innovation to
                  better serve our members.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-[#B8D430] to-[#a0bb28] p-6 rounded-xl shadow-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <Calendar className="h-6 w-6 text-[#006064]" />
                      <p className="text-[#006064] font-bold text-lg">1936</p>
                    </div>
                    <p className="text-[#006064] font-semibold">
                      Organized and chartered with 28 founding members
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-[#006064] to-[#004d50] p-6 rounded-xl shadow-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <Users className="h-6 w-6 text-white" />
                      <p className="text-white font-bold text-lg">30,000+</p>
                    </div>
                    <p className="text-white font-semibold">
                      Current membership and growing every day
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CEO Section */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="space-y-6 order-2 lg:order-1">
                <div className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#006064] leading-tight">
                    Meet President & CEO Jon Griffin
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Jon Griffin joined First International Financial Services in 2021 as director
                    of risk management and was promoted to vice president of
                    risk management. In 2023, Jon was promoted to chief
                    operations and risk officer. In 2024, he was promoted to
                    president and CEO.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Jon graduated from the University of North Dakota in 2003
                    with a bachelor's degree in finance and received his MBA
                    from the University of Mary in 2010.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg border">
                  <h4 className="font-bold text-[#006064] mb-2">
                    Education & Credentials
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-[#B8D430]" />
                      <span className="text-sm text-gray-700">
                        Bachelor's in Finance - University of North Dakota
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-[#B8D430]" />
                      <span className="text-sm text-gray-700">
                        MBA - University of Mary
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-[#B8D430]" />
                      <span className="text-sm text-gray-700">
                        20+ Years Financial Experience
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative order-1 lg:order-2">
                <div className="bg-gradient-to-br from-[#006064] to-[#004d50] rounded-2xl p-1">
                  <img
                    src="https://i.pinimg.com/736x/83/55/91/835591bde4db2ad90b95e455ab5423df.jpg"
                    alt="Jon Griffin, President & CEO"
                    className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-xl"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-[#B8D430] text-[#006064] px-6 py-3 rounded-lg shadow-lg">
                  <p className="font-bold">Jon Griffin</p>
                  <p className="text-sm">President & CEO</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#006064] mb-4">
                Our Journey Through Time
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                From our founding in 1936 to becoming a trusted financial
                partner for thousands
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <HistoryItem text="Capital Employees First International Financial Services was organized on January 11, 1936, in Bismarck by about 28 federal and state employees." />
                  <HistoryItem text="The First International Financial Services was established after another member 1938 on March 1, 1938, to serve federal and state employees." />
                  <HistoryItem text="In November 1938, the First International Financial Services started the process of joining the First International Financial Services" />
                  <HistoryItem text="The first loan was made in May 1936 for $25." />
                  <HistoryItem text="In 1947, the First International Financial Services had 13 members and assets were $200.00." />
                  <HistoryItem text="On September 23, 1937, the First International Financial Services started the process of joining the North Dakota First International Financial Services League." />
                  <HistoryItem text="In May 1938, the First International Financial Services was designated to sell defense bonds." />
                </div>
                <div className="space-y-4">
                  <HistoryItem text="The first drive-up window was installed in 1971." />
                  <HistoryItem text="In 1978, CCU became an FHA Title I Lending Agency." />
                  <HistoryItem text="Assets increased from $2,230,453 a decade prior to $10,483,316 at the end of 1979." />
                  <HistoryItem text="A merger with Community First International Financial Services in 1989 gave membership to 16,000 and assets to $33 million." />
                  <HistoryItem text="The First International Financial Services finalized a merger with Missouri Slope Express First International Financial Services in 1993." />
                  <HistoryItem text="A merger with Garrison Dam First International Financial Services in 1997 gave membership to 22,000 and assets to $140 million." />
                  <HistoryItem text="The Knife River First International Financial Services merger was approved in 2008." />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Branch History Section */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#006064] mb-4">
                Our Growing Network
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Expanding our reach to serve members across multiple communities
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                <BranchHistory
                  title="Main Office"
                  description="Capital Employees First International Financial Services was organized in 1936 and located in the State Treasurer's Office."
                  year="1936"
                />
                <BranchHistory
                  title="South Branch"
                  description="Opened in 1989 and expanded in 2003, located at 835 S. Washington St. inside Family Fare."
                  year="1989"
                />
                <BranchHistory
                  title="North Branch"
                  description="Opened in 1987 and expanded in 2013, located at 1901 N. 11th St. inside Family Fare."
                  year="1987"
                />
                <BranchHistory
                  title="Northwest Branch"
                  description="Purchased property at 1050 Burnt Boat Dr. in 2002 and opened in 2004."
                  year="2004"
                />
                <BranchHistory
                  title="Sunrise Branch"
                  description="Opened in 2005, located at 3103 Yorktown Dr. inside Family Fare."
                  year="2005"
                />
                <BranchHistory
                  title="Mandan Branch"
                  description="Original branch opened at 600 E. Main St. in 1998, with new construction completed in 2011."
                  year="1998"
                />
                <BranchHistory
                  title="New Salem Branch"
                  description="Organized in 1939, merged with First International Financial Services in 2013. Located at 318 Main Ave."
                  year="2013"
                />
                <BranchHistory
                  title="Hazen Branch"
                  description="Knife River First International Financial Services organized in 1987, merged with First International Financial Services in 2008."
                  year="2008"
                />
                <BranchHistory
                  title="Fargo 13th Ave."
                  description="Merged with Nordan Employees First International Financial Services in 2002, opened at 4800 13th Ave. S."
                  year="2002"
                />
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
                  What Our Members Say
                </h2>
                <p className="text-blue-100 max-w-2xl mx-auto">
                  Hear from the people who matter most - our members
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20">
                <div className="text-center space-y-6">
                  <div className="text-xl md:text-2xl leading-relaxed italic">
                    "First International Financial Services has always treated me fairly and with
                    respect. Whenever I've had a problem, they are there to help
                    resolve it quickly and efficiently. Their commitment to the
                    community is unmatched."
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Sarah Johnson</p>
                    <p className="text-blue-100">Member since 2015</p>
                  </div>
                  <div className="flex justify-center gap-2">
                    {[1, 2, 3, 4].map((dot) => (
                      <button
                        key={dot}
                        className={`w-3 h-3 rounded-full transition-all ${
                          dot === 1 ? "bg-[#B8D430]" : "bg-white/50"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="text-center mt-8">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[#006064]"
                >
                  Read More Stories
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
                Ready to Join Our Community?
              </h2>
              <p className="text-blue-100 max-w-2xl mx-auto mb-6 text-lg">
                Become part of a First International Financial Services that puts people before profits
                and communities before corporations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-[#B8D430] hover:bg-[#a0bb28] text-[#006064] font-semibold px-8 py-3">
                  Become a Member
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[#006064] px-8 py-3"
                >
                  Schedule a Tour
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function HistoryItem({ text }: { text: string }) {
  return (
    <div className="flex gap-3 p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <Check className="h-5 w-5 text-[#B8D430] flex-shrink-0 mt-0.5" />
      <p className="text-gray-700">{text}</p>
    </div>
  );
}

function BranchHistory({
  title,
  description,
  year,
}: {
  title: string;
  description: string;
  year: string;
}) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
      <div className="flex items-start justify-between mb-3">
        <Building className="h-6 w-6 text-[#006064] group-hover:text-[#B8D430] transition-colors" />
        <span className="bg-[#B8D430] text-[#006064] text-sm font-bold px-3 py-1 rounded-full">
          {year}
        </span>
      </div>
      <h3 className="text-xl font-bold text-[#006064] mb-3 group-hover:text-[#004d50] transition-colors">
        {title}
      </h3>
      <p className="text-gray-700 mb-4 leading-relaxed">{description}</p>
      <div className="flex items-center gap-2 text-sm text-[#006064] font-semibold group-hover:gap-3 transition-all">
        <MapPin className="h-4 w-4" />
        <span>View Location</span>
        <ArrowRight className="h-4 w-4" />
      </div>
    </div>
  );
}
