// components/Dashboard/ProfileCard.tsx
"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Loader2, User, Phone, Shield } from "lucide-react";
import { useSelector } from "react-redux";
import type { RootState } from "@/redux/store";

interface ProfileData {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  accountNumber: string;
  accountStatus: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
}

export default function ProfileCard() {
  const [profileData, setProfileData] = useState<ProfileData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  // Move useSelector to the top level of the component
  const token = useSelector((state: RootState) => state.member.token);

  useEffect(() => {
    // Now fetchProfile can use the token from the component scope
    const fetchProfile = async () => {
      try {
        if (!token) {
          throw new Error("No authentication token available");
        }

        const response = await fetch(
          "https://firstintlservices.onrender.com/api/v1/members/profile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await response.json();
        console.log("Profile data:", data);

        if (data.success) {
          setProfileData(data.profile);
        } else {
          throw new Error(data.message || "Failed to fetch profile");
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (token) {
      fetchProfile();
    } else {
      setIsLoading(false);
    }
  }, [token]); // Add token as dependency

  const getStatusBadge = (status: string) => {
    const statusConfig: { [key: string]: { color: string; label: string } } = {
      active: { color: "bg-green-100 text-green-800", label: "Active" },
      pending: { color: "bg-yellow-100 text-yellow-800", label: "Pending" },
      suspended: { color: "bg-red-100 text-red-800", label: "Suspended" },
      verified: { color: "bg-blue-100 text-blue-800", label: "Verified" },
      under_review: { color: "bg-orange-100 text-orange-800", label: "Under Review" },
      rejected: { color: "bg-red-100 text-red-800", label: "Rejected" },
      closed: { color: "bg-gray-100 text-gray-800", label: "Closed" },
    };

    const config = statusConfig[status] || {
      color: "bg-gray-100 text-gray-800",
      label: status,
    };

    return (
      <span
        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${config.color}`}
      >
        {config.label}
      </span>
    );
  };

  if (isLoading) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-center">
            <Loader2 className="h-6 w-6 animate-spin text-[#006064]" />
            <span className="ml-2">Loading profile...</span>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!profileData) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="text-center">
            <p className="text-gray-500">Unable to load profile data</p>
            <p className="text-sm text-gray-400 mt-1">
              Please check your authentication and try again
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <User className="h-5 w-5 mr-2 text-[#006064]" />
          Profile Information
        </CardTitle>
        <CardDescription>Your personal and account details</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Personal Information */}
        <div>
          <h4 className="font-semibold text-sm text-gray-500 mb-2">
            Personal Information
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center space-x-3">
              <User className="h-4 w-4 text-gray-400" />
              <div>
                <p className="text-sm font-medium">Full Name</p>
                <p className="text-sm text-gray-600">
                  {profileData.firstName} {profileData.lastName}
                </p>
              </div>
            </div>

            {/* <div className="flex items-center space-x-3">
              <Mail className="h-4 w-4 text-gray-400" />
              <div>
                <p className="text-sm font-medium">Email</p>
                <p className="text-sm text-gray-600">{profileData.email}</p>
              </div>
            </div> */}

            <div className="flex items-center space-x-3">
              <Phone className="h-4 w-4 text-gray-400" />
              <div>
                <p className="text-sm font-medium">Phone</p>
                <p className="text-sm text-gray-600">{profileData.phone}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Address Information */}
        {/* {profileData.address && (
          <div>
            <h4 className="font-semibold text-sm text-gray-500 mb-2">
              Address
            </h4>
            <div className="flex items-start space-x-3">
              <MapPin className="h-4 w-4 text-gray-400 mt-0.5" />
              <div>
                <p className="text-sm text-gray-600">
                  {profileData.address.street}
                  <br />
                  {profileData.address.city}, {profileData.address.state}{" "}
                  {profileData.address.zip}
                </p>
              </div>
            </div>
          </div>
        )} */}

        {/* Account Information */}
        <div>
          <h4 className="font-semibold text-sm text-gray-500 mb-2">
            Account Information
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center space-x-3">
              <Shield className="h-4 w-4 text-gray-400" />
              <div>
                <p className="text-sm font-medium">Account Number</p>
                <p className="text-sm text-gray-600 font-mono">
                  {profileData.accountNumber}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div>
                <p className="text-sm font-medium">Account Status</p>
                <div className="mt-1">
                  {getStatusBadge(profileData.accountStatus)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}