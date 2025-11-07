import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { Header } from "./components/static/Header";
import { Footer } from "./components/static/Footer";
import Home from "./pages/Home";
import AboutUsPage from "./pages/about/AboutUsPage";
import CareersPage from "./pages/about/CareersPage";
import ContactUsPage from "./pages/about/ContactUsPage";
import JoinUsPage from "./pages/about/JoinUsPage";
import BranchesPage from "./pages/about/BranchesPage";
import DisclosuresPage from "./pages/about/DisclosuresPage";
import CardsPage from "./pages/personal/CardsPage";
import CheckingPage from "./pages/personal/CheckingPage";
import FinancialEducationPage from "./pages/personal/FinancialEducationPage";
import LoansPage from "./pages/personal/LoansPage";
import SavingsPage from "./pages/personal/SavingsPage";
import ServicesToolsPage from "./pages/personal/ServicesToolsPage";
import BusinessCardsPage from "./pages/business/BusinessCardsPage";
import BusinessCheckingPage from "./pages/business/BusinessCheckingPage";
import BusinessLoansPage from "./pages/business/BusinessLoansPage";
import BusinessSavingsPage from "./pages/business/BusinessSavingsPage";
import BusinessServicesPage from "./pages/business/BusinessServicesPage";
import InsurancePage from "./pages/InsurancePage";
import InvestmentsPage from "./pages/InvestmentsPage";
import { RegistrationForm } from "./components/forms/MembershipForm";
import MembershipLogin from "./components/forms/MembershipLogin";
import EmailVerification from "./components/forms/EmailVerification";
import PaymentSuccess from "./components/payment/PaymentSuccess";
import PaymentSelection from "./components/payment/PaymentSelection";
import PaymentInstructions from "./components/payment/PaymentInstructions";
import PaymentVerification from "./components/payment/PaymentVerification";
import Dashboard from "./components/Dashboard/Dashboard";
import LoanApplicationForm from "./components/loan/LoanApplicationForm";
import LoanTypes from "./components/loan/LoanTypes";
import LoanPaymentInstructions from "./components/loan/LoanPaymentInstructions";
import LoanPaymentVerification from "./components/loan/LoanPaymentVerification";
import LoanStatus from "./components/loan/LoanStatus";
import LoanDashboard from "./components/admin/LoanDashboard";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />

      <Footer />
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          {/* About page */}
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/about/careers" element={<CareersPage />} />
          <Route path="/about/contact-us" element={<ContactUsPage />} />
          <Route path="/about/join-us" element={<JoinUsPage />} />
          <Route path="/about/locations" element={<BranchesPage />} />
          <Route path="/about/disclosures" element={<DisclosuresPage />} />

          {/* Personal Page */}
          <Route path="/personal/cards" element={<CardsPage />} />
          <Route path="/personal/checking-account" element={<CheckingPage />} />
          <Route
            path="/personal/financial-education"
            element={<FinancialEducationPage />}
          />
          <Route path="/personal/loans" element={<LoansPage />} />
          <Route path="/personal/savings" element={<SavingsPage />} />
          <Route
            path="/personal/services-tools"
            element={<ServicesToolsPage />}
          />

          {/* Business Page */}
          <Route
            path="/business/debit-credit-cards"
            element={<BusinessCardsPage />}
          />
          <Route path="/business/checking" element={<BusinessCheckingPage />} />
          <Route path="/business/loans" element={<BusinessLoansPage />} />
          <Route path="/business/savings" element={<BusinessSavingsPage />} />
          <Route path="/business/services" element={<BusinessServicesPage />} />
          <Route path="/insurance" element={<InsurancePage />} />
          <Route path="/investments" element={<InvestmentsPage />} />
          <Route path="/membership" element={<RegistrationForm />} />
          <Route path="/membership-login" element={<MembershipLogin />} />
          <Route path="/verify-email" element={<EmailVerification />} />
          <Route path="/payment" element={<PaymentSelection />} />
          <Route
            path="/payment/instructions"
            element={<PaymentInstructions />}
          />
          <Route path="/payment/verify" element={<PaymentVerification />} />
          <Route path="/payment/success" element={<PaymentSuccess />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin-dash" element={<LoanDashboard />} />
        <Route path="/loans/apply" element={<LoanApplicationForm />} />
        <Route
          path="/loans/:loanId/payment-instructions"
          element={<LoanPaymentInstructions />}
        />
        <Route
          path="/loans/payment/verify"
          element={<LoanPaymentVerification />}
        />
        <Route path="/loans/products" element={<LoanTypes />} />
        <Route path="/loans/status" element={<LoanStatus />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
