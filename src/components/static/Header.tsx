import { useState, useRef } from "react";
import {
  Search,
  User,
  PenLine,
  Calendar,
  Lock,
  Menu,
  X,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Link } from "react-router-dom";
import { AccountModal } from "./AccountModal";
import { useSelector } from "react-redux";
import type { RootState } from "@/redux/store";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] =
    useState<boolean>(false);
  const [isPersonalDropdownOpen, setIsPersonalDropdownOpen] =
    useState<boolean>(false);
  const [isBusinessDropdownOpen, setIsBusinessDropdownOpen] =
    useState<boolean>(false);
  const [mobilePersonalOpen, setMobilePersonalOpen] = useState<boolean>(false);
  const [mobileBusinessOpen, setMobileBusinessOpen] = useState<boolean>(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState<boolean>(false);
  const [isAccountModalOpen, setIsAccountModalOpen] = useState<boolean>(false);

  const aboutTimeoutRef = useRef<number | null>(null);
  const personalTimeoutRef = useRef<number | null>(null);
  const businessTimeoutRef = useRef<number | null>(null);

  const openAccountModal = () => {
    setIsAccountModalOpen(true);
    setIsMobileMenuOpen(false); // close mobile menu when opening modal
  };
  const closeAccountModal = () => setIsAccountModalOpen(false);
  // About dropdown handlers
  const handleAboutMouseEnter = (): void => {
    if (aboutTimeoutRef.current) {
      clearTimeout(aboutTimeoutRef.current);
    }
    setIsAboutDropdownOpen(true);
  };

  const handleAboutMouseLeave = (): void => {
    aboutTimeoutRef.current = window.setTimeout(() => {
      setIsAboutDropdownOpen(false);
    }, 300);
  };

  const handleAboutDropdownMouseEnter = (): void => {
    if (aboutTimeoutRef.current) {
      clearTimeout(aboutTimeoutRef.current);
    }
  };

  const handleAboutDropdownMouseLeave = (): void => {
    aboutTimeoutRef.current = window.setTimeout(() => {
      setIsAboutDropdownOpen(false);
    }, 300);
  };

  // Personal dropdown handlers
  const handlePersonalMouseEnter = (): void => {
    if (personalTimeoutRef.current) {
      clearTimeout(personalTimeoutRef.current);
    }
    setIsPersonalDropdownOpen(true);
  };

  const handlePersonalMouseLeave = (): void => {
    personalTimeoutRef.current = window.setTimeout(() => {
      setIsPersonalDropdownOpen(false);
    }, 300);
  };

  const handlePersonalDropdownMouseEnter = (): void => {
    if (personalTimeoutRef.current) {
      clearTimeout(personalTimeoutRef.current);
    }
  };

  const handlePersonalDropdownMouseLeave = (): void => {
    personalTimeoutRef.current = window.setTimeout(() => {
      setIsPersonalDropdownOpen(false);
    }, 300);
  };

  // Business dropdown handlers
  const handleBusinessMouseEnter = (): void => {
    if (businessTimeoutRef.current) {
      clearTimeout(businessTimeoutRef.current);
    }
    setIsBusinessDropdownOpen(true);
  };

  const handleBusinessMouseLeave = (): void => {
    businessTimeoutRef.current = window.setTimeout(() => {
      setIsBusinessDropdownOpen(false);
    }, 300);
  };

  const handleBusinessDropdownMouseEnter = (): void => {
    if (businessTimeoutRef.current) {
      clearTimeout(businessTimeoutRef.current);
    }
  };

  const handleBusinessDropdownMouseLeave = (): void => {
    businessTimeoutRef.current = window.setTimeout(() => {
      setIsBusinessDropdownOpen(false);
    }, 300);
  };

  // Mobile dropdown toggle handlers
  const toggleMobilePersonal = (): void => {
    setMobilePersonalOpen(!mobilePersonalOpen);
  };

  const toggleMobileBusiness = (): void => {
    setMobileBusinessOpen(!mobileBusinessOpen);
  };

  const toggleMobileAbout = (): void => {
    setMobileAboutOpen(!mobileAboutOpen);
  };

  const handleLinkClick = (): void => {
    setIsAboutDropdownOpen(false);
    setIsPersonalDropdownOpen(false);
    setIsBusinessDropdownOpen(false);
    setIsMobileMenuOpen(false);
    setMobilePersonalOpen(false);
    setMobileBusinessOpen(false);
    setMobileAboutOpen(false);
  };

  const member = useSelector((state: RootState) => state.member.member) || null;
  const firstName = member?.firstName.charAt(0).toUpperCase();
  return (
    <>
      <header className="bg-white sticky top-0 z-50">
        {/* Top utility bar */}
        <div className="bg-[#B8D430] text-[#006064] py-2 px-4">
          <div className="container mx-auto flex justify-end items-center gap-6 text-sm font-medium">
            <Link to="/rates" className="hover:underline hidden sm:block">
              Rates
            </Link>
            <Link
              to="/about/locations"
              className="hover:underline hidden sm:block"
            >
              Locations
            </Link>
            <Link
              to="/about/contact-us"
              className="hover:underline hidden sm:block"
            >
              Contact Us
            </Link>
            <Link
              to="/about/careers"
              className="hover:underline hidden sm:block"
            >
              Careers
            </Link>
            <button className="hover:underline flex items-center gap-1">
              Search <Search className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Main navigation */}
        <div className="border-b">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between gap-8">
              {/* Logo */}
              <Link to="/" className="flex items-center gap-3 flex-shrink-0">
                <div className="w-12 h-12 relative">
                  <div className="absolute inset-0 bg-[#006064] rounded-sm" />
                  <div className="absolute top-1 left-1 w-10 h-10 bg-[#B8D430] rounded-sm" />
                  <div className="absolute top-2 left-2 w-8 h-8 bg-white rounded-sm" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#006064]">
                    First International
                  </div>
                  <div className="text-xs text-gray-600">
                    Financial Services
                  </div>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-6 flex-1 justify-center">
                {/* Personal Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={handlePersonalMouseEnter}
                  onMouseLeave={handlePersonalMouseLeave}
                >
                  <button className="text-gray-700 hover:text-[#006064] font-medium flex items-center gap-1">
                    Personal
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        isPersonalDropdownOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {isPersonalDropdownOpen && (
                    <div
                      className="absolute top-full left-0 mt-2 w-56 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50"
                      onMouseEnter={handlePersonalDropdownMouseEnter}
                      onMouseLeave={handlePersonalDropdownMouseLeave}
                    >
                      <Link
                        to="/personal/checking-account"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#006064]"
                        onClick={handleLinkClick}
                      >
                        Checking Account
                      </Link>
                      <Link
                        to="/personal/savings"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#006064]"
                        onClick={handleLinkClick}
                      >
                        Savings
                      </Link>
                      <Link
                        to="/personal/loans"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#006064]"
                        onClick={handleLinkClick}
                      >
                        Loans
                      </Link>
                      <Link
                        to="/personal/cards"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#006064]"
                        onClick={handleLinkClick}
                      >
                        Cards
                      </Link>
                      <Link
                        to="/personal/services-tools"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#006064]"
                        onClick={handleLinkClick}
                      >
                        Services & Tools
                      </Link>
                      <Link
                        to="/personal/financial-education"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#006064]"
                        onClick={handleLinkClick}
                      >
                        Financial Education
                      </Link>
                    </div>
                  )}
                </div>

                {/* Business Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={handleBusinessMouseEnter}
                  onMouseLeave={handleBusinessMouseLeave}
                >
                  <button className="text-gray-700 hover:text-[#006064] font-medium flex items-center gap-1">
                    Business
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        isBusinessDropdownOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {isBusinessDropdownOpen && (
                    <div
                      className="absolute top-full left-0 mt-2 w-56 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50"
                      onMouseEnter={handleBusinessDropdownMouseEnter}
                      onMouseLeave={handleBusinessDropdownMouseLeave}
                    >
                      <Link
                        to="/business/checking"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#006064]"
                        onClick={handleLinkClick}
                      >
                        Business Checking
                      </Link>
                      <Link
                        to="/business/savings"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#006064]"
                        onClick={handleLinkClick}
                      >
                        Business Savings
                      </Link>
                      <Link
                        to="/business/loans"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#006064]"
                        onClick={handleLinkClick}
                      >
                        Business Loans
                      </Link>
                      <Link
                        to="/business/debit-credit-cards"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#006064]"
                        onClick={handleLinkClick}
                      >
                        Business Debit & Credit Cards
                      </Link>
                      <Link
                        to="/business/services"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#006064]"
                        onClick={handleLinkClick}
                      >
                        Business Services
                      </Link>
                    </div>
                  )}
                </div>

                <Link
                  to="/investments"
                  className="text-gray-700 hover:text-[#006064] font-medium"
                >
                  Investments
                </Link>
                <Link
                  to="/insurance"
                  className="text-gray-700 hover:text-[#006064] font-medium"
                >
                  Insurance
                </Link>

                {/* About Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={handleAboutMouseEnter}
                  onMouseLeave={handleAboutMouseLeave}
                >
                  <button className="text-gray-700 hover:text-[#006064] font-medium border-b-2 border-[#B8D430] flex items-center gap-1">
                    About
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        isAboutDropdownOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {isAboutDropdownOpen && (
                    <div
                      className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50"
                      onMouseEnter={handleAboutDropdownMouseEnter}
                      onMouseLeave={handleAboutDropdownMouseLeave}
                    >
                      <Link
                        to="/about"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#006064]"
                        onClick={handleLinkClick}
                      >
                        About
                      </Link>
                      <Link
                        to="/about/join-us"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#006064]"
                        onClick={handleLinkClick}
                      >
                        Join Us
                      </Link>
                      <Link
                        to="/about/contact-us"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#006064]"
                        onClick={handleLinkClick}
                      >
                        Contact Us
                      </Link>
                      <Link
                        to="/about/locations"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#006064]"
                        onClick={handleLinkClick}
                      >
                        Locations
                      </Link>
                      <Link
                        to="/about/careers"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#006064]"
                        onClick={handleLinkClick}
                      >
                        Careers
                      </Link>
                      <Link
                        to="/about/disclosures"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#006064]"
                        onClick={handleLinkClick}
                      >
                        Disclosures
                      </Link>
                    </div>
                  )}
                </div>
              </nav>

              {/* Desktop Action Buttons */}
              <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
                <button
                  onClick={openAccountModal}
                  className="flex flex-col items-center gap-1 text-[#006064] hover:text-[#004d50] text-xs"
                >
                  <User className="h-5 w-5" />
                  <span className="font-medium">Open an</span>
                  <span className="font-medium -mt-1">Account</span>
                </button>

                <Link
                  to="/loans/products"
                  className="flex flex-col items-center gap-1 text-[#006064] hover:text-[#004d50] text-xs"
                >
                  <PenLine className="h-5 w-5" />
                  <span className="font-medium">Apply</span>
                  <span className="font-medium -mt-1">for a Loan</span>
                </Link>
                <Link
                  to="/appointment"
                  className="flex flex-col items-center gap-1 text-[#006064] hover:text-[#004d50] text-xs"
                >
                  <Calendar className="h-5 w-5" />
                  <span className="font-medium">Schedule an</span>
                  <span className="font-medium -mt-1">Appointment</span>
                </Link>
                {member ? (
                  <Link
                    to="/dashboard"
                    className="bg-[#006064] hover:bg-[#004d50] text-[#B8D430] font-bold text-2xl  py-4 px-6 flex flex-col items-center gap-1 rounded-md "
                  >
                    {firstName}
                  </Link>
                ) : (
                  <button className="bg-[#006064] hover:bg-[#004d50] text-white h-auto py-6 px-6 flex flex-col items-center gap-1 rounded-md">
                    <Lock className="h-5 w-5" />
                    <span className="font-medium">Login</span>
                  </button>
                )}
              </div>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
              <div className="lg:hidden mt-4 pb-4 border-t pt-4">
                <nav className="flex flex-col space-y-0">
                  {/* Mobile Personal Dropdown */}
                  <div className="border-b border-gray-200">
                    <button
                      onClick={toggleMobilePersonal}
                      className="flex items-center justify-between w-full py-4 text-gray-700 hover:text-[#006064] font-medium"
                    >
                      <span>Personal</span>
                      {mobilePersonalOpen ? (
                        <ChevronUp className="h-4 w-4" />
                      ) : (
                        <ChevronDown className="h-4 w-4" />
                      )}
                    </button>
                    {mobilePersonalOpen && (
                      <div className="flex flex-col space-y-0 pb-3">
                        <Link
                          to="/personal/checking-account"
                          className="text-gray-600 hover:text-[#006064] py-2 px-4"
                          onClick={handleLinkClick}
                        >
                          Checking Account
                        </Link>
                        <Link
                          to="/personal/savings"
                          className="text-gray-600 hover:text-[#006064] py-2 px-4"
                          onClick={handleLinkClick}
                        >
                          Savings
                        </Link>
                        <Link
                          to="/personal/loans"
                          className="text-gray-600 hover:text-[#006064] py-2 px-4"
                          onClick={handleLinkClick}
                        >
                          Loans
                        </Link>
                        <Link
                          to="/personal/cards"
                          className="text-gray-600 hover:text-[#006064] py-2 px-4"
                          onClick={handleLinkClick}
                        >
                          Cards
                        </Link>
                        <Link
                          to="/personal/services-tools"
                          className="text-gray-600 hover:text-[#006064] py-2 px-4"
                          onClick={handleLinkClick}
                        >
                          Services & Tools
                        </Link>
                        <Link
                          to="/personal/financial-education"
                          className="text-gray-600 hover:text-[#006064] py-2 px-4"
                          onClick={handleLinkClick}
                        >
                          Financial Education
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* Mobile Business Dropdown */}
                  <div className="border-b border-gray-200">
                    <button
                      onClick={toggleMobileBusiness}
                      className="flex items-center justify-between w-full py-4 text-gray-700 hover:text-[#006064] font-medium"
                    >
                      <span>Business</span>
                      {mobileBusinessOpen ? (
                        <ChevronUp className="h-4 w-4" />
                      ) : (
                        <ChevronDown className="h-4 w-4" />
                      )}
                    </button>
                    {mobileBusinessOpen && (
                      <div className="flex flex-col space-y-0 pb-3">
                        <Link
                          to="/business/checking"
                          className="text-gray-600 hover:text-[#006064] py-2 px-4"
                          onClick={handleLinkClick}
                        >
                          Business Checking
                        </Link>
                        <Link
                          to="/business/savings"
                          className="text-gray-600 hover:text-[#006064] py-2 px-4"
                          onClick={handleLinkClick}
                        >
                          Business Savings
                        </Link>
                        <Link
                          to="/business/loans"
                          className="text-gray-600 hover:text-[#006064] py-2 px-4"
                          onClick={handleLinkClick}
                        >
                          Business Loans
                        </Link>
                        <Link
                          to="/business/debit-credit-cards"
                          className="text-gray-600 hover:text-[#006064] py-2 px-4"
                          onClick={handleLinkClick}
                        >
                          Business Debit & Credit Cards
                        </Link>
                        <Link
                          to="/business/services"
                          className="text-gray-600 hover:text-[#006064] py-2 px-4"
                          onClick={handleLinkClick}
                        >
                          Business Services
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* Regular Links */}
                  <Link
                    to="/investments"
                    className="border-b border-gray-200 text-gray-700 hover:text-[#006064] font-medium py-4"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Investments
                  </Link>
                  <Link
                    to="/insurance"
                    className="border-b border-gray-200 text-gray-700 hover:text-[#006064] font-medium py-4"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Insurance
                  </Link>

                  {/* Mobile About Dropdown */}
                  <div className="border-b border-gray-200">
                    <button
                      onClick={toggleMobileAbout}
                      className="flex items-center justify-between w-full py-4 text-gray-700 hover:text-[#006064] font-medium"
                    >
                      <span>About</span>
                      {mobileAboutOpen ? (
                        <ChevronUp className="h-4 w-4" />
                      ) : (
                        <ChevronDown className="h-4 w-4" />
                      )}
                    </button>
                    {mobileAboutOpen && (
                      <div className="flex flex-col space-y-0 pb-3">
                        <Link
                          to="/about"
                          className="text-gray-600 hover:text-[#006064] py-2 px-4"
                          onClick={handleLinkClick}
                        >
                          About
                        </Link>
                        <Link
                          to="/about/join-us"
                          className="text-gray-600 hover:text-[#006064] py-2 px-4"
                          onClick={handleLinkClick}
                        >
                          Join Us
                        </Link>
                        <Link
                          to="/about/contact-us"
                          className="text-gray-600 hover:text-[#006064] py-2 px-4"
                          onClick={handleLinkClick}
                        >
                          Contact Us
                        </Link>
                        <Link
                          to="/about/locations"
                          className="text-gray-600 hover:text-[#006064] py-2 px-4"
                          onClick={handleLinkClick}
                        >
                          Locations
                        </Link>
                        <Link
                          to="/about/careers"
                          className="text-gray-600 hover:text-[#006064] py-2 px-4"
                          onClick={handleLinkClick}
                        >
                          Careers
                        </Link>
                        <Link
                          to="/about/disclosures"
                          className="text-gray-600 hover:text-[#006064] py-2 px-4"
                          onClick={handleLinkClick}
                        >
                          Disclosures
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* Mobile Action Buttons */}
                  <div className="flex flex-col space-y-3 pt-4">
                    <button
                      onClick={openAccountModal}
                      className="flex items-center gap-2 text-[#006064] hover:text-[#004d50] font-medium py-3"
                    >
                      <User className="h-5 w-5" />
                      <span>Open an Account</span>
                    </button>
                    <Link
                      to="/apply-loan"
                      className="flex items-center gap-2 text-[#006064] hover:text-[#004d50] font-medium py-3"
                      onClick={handleLinkClick}
                    >
                      <PenLine className="h-5 w-5" />
                      <span>Apply for a Loan</span>
                    </Link>
                    <Link
                      to="/appointment"
                      className="flex items-center gap-2 text-[#006064] hover:text-[#004d50] font-medium py-3"
                      onClick={handleLinkClick}
                    >
                      <Calendar className="h-5 w-5" />
                      <span>Schedule an Appointment</span>
                    </Link>
                    {member ? (
                      <Link
                        to="/dashboard"
                        className="bg-[#006064] hover:bg-[#004d50] text-[#B8D430] font-bold text-xl  py-3 px-4 flex items-center gap-2 rounded-md w-full justify-center mt-2"
                        onClick={handleLinkClick}
                      >
                        Go to Dashboard
                      </Link>
                    ) : (
                      <button
                        className="bg-[#006064] hover:bg-[#004d50] text-white py-3 px-4 flex items-center gap-2 rounded-md w-full justify-center mt-2"
                        onClick={handleLinkClick}
                      >
                        <Lock className="h-5 w-5" />
                        <span className="font-medium">Login</span>
                      </button>
                    )}
                  </div>
                </nav>
              </div>
            )}
          </div>
        </div>
      </header>
      <AccountModal isOpen={isAccountModalOpen} onClose={closeAccountModal} />
    </>
  );
}
