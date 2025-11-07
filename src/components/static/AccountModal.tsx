// src/components/AccountModal.tsx
import { X } from "lucide-react";
import { Link } from "react-router-dom";

interface AccountModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AccountModal({ isOpen, onClose }: AccountModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md rounded-lg bg-white p-6 shadow-xl
                   sm:max-w-lg md:max-w-xl lg:max-w-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 transition-colors"
          aria-label="Close"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Title */}
        <h2 className="mb-6 text-center text-2xl font-bold text-[#006064]">
          Open an Account
        </h2>

        {/* Member Section */}
        <section className="mb-8">
          <h3 className="mb-2 text-lg font-semibold text-gray-800">
            Are You a Member?
          </h3>
          <p className="mb-4 text-sm text-gray-600 leading-relaxed">
            You are considered a First International Financial Services member if you are listed as a
            primary member on a Share Savings account.
          </p>
          <Link
            to="/membership-login"
            className="block w-full rounded-md bg-[#006064] py-3 text-center font-medium text-white
                       hover:bg-[#004d50] transition-colors"
            onClick={onClose}
          >
            Login
          </Link>
        </section>

        {/* Non-Member Section */}
        <section>
          <h3 className="mb-2 text-lg font-semibold text-gray-800">
            Not a Member Yet?
          </h3>
          <p className="mb-4 text-sm text-gray-600 leading-relaxed">
            You qualify for First International Financial Services membership if you live within 75 miles
            of Bismarck, Fargo, Hazen or Flasher; 50 miles of Beulah or New
            Salem; or you have an immediate family member who lives within 50
            miles of Bismarck.
          </p>
          <Link
            to="/membership"
            className="block w-full rounded-md bg-[#B8D430] py-3 text-center font-medium text-[#006064]
                       hover:bg-[#a3c12a] transition-colors"
            onClick={onClose}
          >
            Create an Account
          </Link>
        </section>
      </div>
    </div>
  );
}