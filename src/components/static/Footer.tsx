
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"
import { Link } from "react-router-dom"
import Icon1 from "@/assets/image/visa.png"
import Icon2 from "@/assets/image/Equal.png"
import Icon3 from "@/assets/image/ncua.png"

export function Footer() {
  return (
    <footer className="bg-gray-100 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Routing */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#006064] rounded-sm flex items-center justify-center">
                <div className="w-8 h-8 bg-[#B8D430] rounded-sm" />
              </div>
              <div>
                <div className="text-xl font-bold text-[#006064]">First International</div>
                <div className="text-xs text-gray-600">Financial Services</div>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-semibold text-gray-700">Routing Number:</p>
              <p className="text-lg font-bold text-[#006064]">255078152</p>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              First International Financial Services is North Dakota's first federally insured credit union. With over 100 years of
              service, we provide banking solutions to members across the state.
            </p>
          </div>

          {/* Connect With Us */}
          <div className="space-y-4">
            <h3 className="font-bold text-gray-900">Connect With Us</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-[#006064]">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/chat" className="text-gray-600 hover:text-[#006064]">
                  Chat
                </Link>
              </li>
              <li>
                <Link to="tel:3012497900" className="text-gray-600 hover:text-[#006064]">
                  (301) 249-7900
                </Link>
              </li>
              <li>
                <Link to="tel:8002357328" className="text-gray-600 hover:text-[#006064]">
                  800.235.7328
                </Link>
              </li>
            </ul>
            <div className="flex gap-3">
              <Link to="#" className="text-gray-600 hover:text-[#006064]">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link to="#" className="text-gray-600 hover:text-[#006064]">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link to="#" className="text-gray-600 hover:text-[#006064]">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link to="#" className="text-gray-600 hover:text-[#006064]">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link to="#" className="text-gray-600 hover:text-[#006064]">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Grow With Us */}
          <div className="space-y-4">
            <h3 className="font-bold text-gray-900">Grow With Us</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/refer" className="text-gray-600 hover:text-[#006064]">
                  Become a Member
                </Link>
              </li>
              <li>
                <Link to="/apply" className="text-gray-600 hover:text-[#006064]">
                  Apply for a Loan
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-600 hover:text-[#006064]">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Disclaimer */}
          <div className="space-y-4">
            <p className="text-xs text-gray-600 leading-relaxed">*Annual Percentage Rate</p>
            <p className="text-xs text-gray-600 leading-relaxed">
              Rates accurate as of July 1, 2025, and subject to change without notice. Annual Percentage Rate of 5.29%
              is available on up to 60 months at 100% or $50,000 maximum per month for qualified borrowers.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t pt-6 space-y-4">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <Link to="/sitemap" className="hover:text-[#006064]">
              Sitemap
            </Link>
            <Link to="/accessibility" className="hover:text-[#006064]">
              Website Accessibility
            </Link>
            <Link to="/privacy" className="hover:text-[#006064]">
              Privacy
            </Link>
            <Link to="/disclosures" className="hover:text-[#006064]">
              Disclosures
            </Link>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-6">
            <p className="text-xs text-gray-600">
              © 2025 Capital Credit Union | Member{" "}
              <Link to="#" className="underline">
                ZAC Interactive
              </Link>
            </p>
            <div className="flex gap-4 items-center">
              <img src={Icon1} alt="Verified by Visa" className="h-8" />
              <img src={Icon2} alt="Equal Housing Lender" className="h-8" />
              <img src={Icon3} alt="NCUA" className="h-8" />
            </div>
          </div>
          <p className="text-xs text-gray-500 text-center max-w-3xl mx-auto">
            Your savings federally insured to at least $250,000 and backed by the full faith and credit of the United
            States Government. National Credit Union Administration, a U.S. Government Agency.
          </p>
        </div>
      </div>
    </footer>
  )
}
