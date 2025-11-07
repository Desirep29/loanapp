import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Clock, Car, Construction } from "lucide-react"

interface BranchCardProps {
  name: string
  address: string
  city: string
  phone?: string
  lobbyHours: string
  driveUpHours?: string
  additionalInfo?: string
  isRemodeling?: boolean
  is24HourATM?: boolean
  hasDriveUp?: boolean
  hasSaturdayHours?: boolean
}

export function BranchCard({
  name,
  address,
  city,
  phone,
  lobbyHours,
  driveUpHours,
  additionalInfo,
  isRemodeling,
  is24HourATM,
  hasDriveUp,
  hasSaturdayHours,
}: BranchCardProps) {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl hover:border-[#B8D430]/20 transition-all duration-300">
      {/* Header with gradient and status indicator */}
      <div className="relative">
        <div className="h-2 bg-gradient-to-r from-[#006064] via-[#B8D430] to-[#006064]" />
        {isRemodeling && (
          <div className="absolute top-3 right-3">
            <div className="flex items-center gap-1 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
              <Construction className="h-3 w-3" />
              Remodeling
            </div>
          </div>
        )}
      </div>

      <div className="p-6">
        {/* Branch Name */}
        <h3 className="text-xl font-bold text-[#006064] mb-4 group-hover:text-[#004d50] transition-colors">
          {name}
        </h3>

        <div className="space-y-4">
          {/* Address */}
          <div className="flex items-start gap-3">
            <MapPin className="h-4 w-4 text-[#B8D430] mt-0.5 flex-shrink-0" />
            <div className="text-sm">
              <p className="font-semibold text-gray-900">{address}</p>
              <p className="text-gray-600">{city}</p>
              {phone && (
                <p className="text-[#006064] font-medium mt-1">{phone}</p>
              )}
            </div>
          </div>

          {/* Hours Section */}
          <div className="space-y-3">
            {/* Lobby Hours */}
            <div className="flex items-start gap-3">
              <Clock className="h-4 w-4 text-[#B8D430] mt-0.5 flex-shrink-0" />
              <div className="text-sm flex-1">
                <p className="font-semibold text-[#006064] mb-1">Lobby Hours</p>
                <p className="text-gray-700 whitespace-pre-line leading-relaxed">{lobbyHours}</p>
              </div>
            </div>

            {/* Drive-Up Hours */}
            {driveUpHours && (
              <div className="flex items-start gap-3">
                <Car className="h-4 w-4 text-[#B8D430] mt-0.5 flex-shrink-0" />
                <div className="text-sm flex-1">
                  <p className="font-semibold text-[#006064] mb-1">Drive-Up Hours</p>
                  <p className="text-gray-700 whitespace-pre-line leading-relaxed">{driveUpHours}</p>
                </div>
              </div>
            )}
          </div>

          {/* Features Badges */}
          <div className="flex flex-wrap gap-2 pt-2">
            {is24HourATM && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                24/7 ATM
              </span>
            )}
            {hasDriveUp && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                Drive-Up
              </span>
            )}
            {hasSaturdayHours && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                Saturday Hours
              </span>
            )}
          </div>

          {/* Additional Info */}
          {additionalInfo && (
            <div className={`pt-3 border-t border-gray-100 ${
              isRemodeling 
                ? "text-orange-600 bg-orange-50 px-3 py-2 rounded-lg border border-orange-200" 
                : "text-gray-600"
            }`}>
              <p className="text-sm font-medium">{additionalInfo}</p>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-4 mt-4 border-t border-gray-100">
          <Button 
            variant="link" 
            className="text-[#006064] p-0 h-auto font-semibold flex items-center gap-2 group-hover:gap-3 transition-all"
          >
            Get Directions
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Button>
          <Button 
            variant="link" 
            className="text-gray-600 p-0 h-auto font-medium flex items-center gap-2 ml-auto text-sm"
          >
            Call Branch
          </Button>
        </div>
      </div>
    </div>
  )
}