'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { CheckCircle2, Info } from 'lucide-react'
import { toast } from 'react-toastify'

export default function ReferralPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    currentFirstName: '',
    currentLastName: '',
    currentPhone: '',
    newFirstName: '',
    newLastName: '',
    newCity: '',
    newContactInfo: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Validate required fields
    if (!formData.currentFirstName || !formData.currentLastName || !formData.currentPhone ||
        !formData.newFirstName || !formData.newLastName || !formData.newCity || !formData.newContactInfo) {
      toast.error('Please fill in all required fields.')
      return
    }
    setIsSubmitted(true)
    toast.success('Referral form submitted successfully! Thank you for your referral.')
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        currentFirstName: '',
        currentLastName: '',
        currentPhone: '',
        newFirstName: '',
        newLastName: '',
        newCity: '',
        newContactInfo: '',
      })
      setIsSubmitted(false)
    }, 3000)
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="bg-blue-50 py-12">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Refer a friend. Get rewarded.
              </h1>
              <p className="text-lg text-slate-700 mb-6">
                You know how much you love Capital Credit Union, so let other people know. We have a special way of saying 'thanks!'
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-lime-500" />
                  <span className="text-slate-700">Each referral earns cash rewards</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-lime-500" />
                  <span className="text-slate-700">New members need to open a checking account or consumer loan</span>
                </div>
              </div>
              <div className="flex gap-3">
                <Button className="bg-teal-700 hover:bg-teal-800 text-white">
                  Complete the Referral Form
                </Button>
                <Button variant="outline" className="text-teal-700 border-teal-700">
                  Contact Us →
                </Button>
              </div>
            </div>
            <div className="bg-gradient-to-br from-teal-700 to-teal-900 rounded-lg p-8 text-white flex flex-col justify-center items-center">
              <div className="text-center">
                <div className="text-6xl font-bold mb-2">$100</div>
                <div className="text-2xl mb-4">UNLIMITED</div>
                <div className="text-xl font-semibold">REFERRAL BONUSES!</div>
                <div className="mt-6 text-lime-400 text-lg font-bold">EARN UNLIMITED</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-8 bg-blue-100">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="flex gap-4 items-start">
            <Info className="w-6 h-6 text-teal-700 flex-shrink-0 mt-1" />
            <div className="text-slate-700">
              <p className="mb-2">
                Maybe you've talked to friends and family about important things you've accomplished using one of our loans or accounts.
                Maybe you've shared your story on our social media channels. We love that you're a champion for us! Take it a step further
                by encouraging others to join Capital Credit Union and start enjoying their own experiences. Don't be shy; let your friends
                and family know all about us! <strong>Referral bonuses are unlimited, so keep on referring!</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-8">
            Refer your friends and family by completing this form.
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Current Member Section */}
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Current Member Information</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  placeholder="First Name*"
                  name="currentFirstName"
                  value={formData.currentFirstName}
                  onChange={handleChange}
                  className="border-2 border-slate-300"
                />
                <Input
                  placeholder="Last Name*"
                  name="currentLastName"
                  value={formData.currentLastName}
                  onChange={handleChange}
                  className="border-2 border-slate-300"
                />
              </div>
              <Input
                placeholder="Phone Number*"
                name="currentPhone"
                value={formData.currentPhone}
                onChange={handleChange}
                className="border-2 border-slate-300 mt-4"
              />
            </div>

            {/* New Member Section */}
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">New Member Information</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  placeholder="First Name*"
                  name="newFirstName"
                  value={formData.newFirstName}
                  onChange={handleChange}
                  className="border-2 border-slate-300"
                />
                <Input
                  placeholder="Last Name*"
                  name="newLastName"
                  value={formData.newLastName}
                  onChange={handleChange}
                  className="border-2 border-slate-300"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <Input
                  placeholder="City*"
                  name="newCity"
                  value={formData.newCity}
                  onChange={handleChange}
                  className="border-2 border-slate-300"
                />
                <Input
                  placeholder="Phone Number or Email Address*"
                  name="newContactInfo"
                  value={formData.newContactInfo}
                  onChange={handleChange}
                  className="border-2 border-slate-300"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-4">
              <Button
                type="submit"
                className="bg-teal-700 hover:bg-teal-800 text-white px-12 py-3 text-lg"
              >
                Submit
              </Button>
            </div>
          </form>

          {isSubmitted && (
            <div className="mt-6 text-center text-green-700 font-medium">
              Thank you — your referral has been submitted.
            </div>
          )}

          {/* Terms */}
          <div className="mt-12 text-xs text-slate-600 space-y-2">
            <p>
              <sup>1</sup>Offer valid Oct. 1 - Dec. 31, 2025, or until promotion limit is reached. To qualify, referral must be from a current Capital Credit Union (CCU) member to a non-member who opens a Share Savings account and either a checking account or a consumer loan. Consumer loans include auto loans, recreational vehicle loans, personal loans, mortgage loans, home equity loans, credit lines of credit and new credit cards. Mortgage loans, business loans, credit card balance transfers and the refinancing of existing CCU loans are excluded from this offer. Members must be in good standing. $100 will be deposited into new member's CCU Share Savings account within 30-60 days of offer qualification. Earnings on loan accounts will be deposited at the same time of account opening. A referral must be authorized and the form of capcu.org/refer and without notice.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
