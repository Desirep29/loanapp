'use client'

import { Button } from '@/components/ui/button'
import { CheckCircle2, Info } from 'lucide-react'


export default function TeacherDiscountPage() {
    const handleLinkClick=() => {
        window.location.href = '/about/our-team';
        };
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-blue-50 py-12">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Exclusive Rate Discount
              </h1>
              <p className="text-xl text-slate-700 mb-6">
                1% off one auto or recreational vehicle loan for teachers, school staff and college faculty
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-lime-500" />
                  <span className="text-slate-700 font-medium">Jan. 21 - Dec. 31, 2025</span>
                </div>
              </div>
              <Button onClick={handleLinkClick} className="bg-teal-700 hover:bg-teal-800 text-white px-6 py-3 text-lg">
                Contact Our Team Today
              </Button>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
              <img
                src="/teacher-in-classroom-with-students.jpg"
                alt="Teacher with students in classroom"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Promotion Details */}
      <section className="py-12 bg-white">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="space-y-6">
            <p className="text-lg text-slate-700">
              Now through Dec. 31, 2025, teachers, school staff and college faculty can get <strong>1% off one auto or recreational vehicle loan</strong> opened at or moved to Capital Credit Union.<sup>1</sup>
            </p>

            <p className="text-lg text-slate-700">
              Contact us today and a member of our Consumer Lending Team will verify you meet the requirements and walk you through the application process.
            </p>

            <p className="text-lg text-slate-700">
              It's our way of saying <strong>thanks for all you do!</strong>
            </p>

            {/* Info Box */}
            <div className="bg-blue-50 border-l-4 border-teal-700 p-6 mt-8">
              <div className="flex gap-4">
                <Info className="w-6 h-6 text-teal-700 flex-shrink-0 mt-1" />
                <div className="text-slate-700">
                  <p className="mb-2">
                    application. Terms, rates and conditions may vary and are subject to change without notice. Cannot be combined with other promotional rates or offers. Other restrictions may apply. All loan rates and terms are subject to credit approval. Promotion may end without notice. Fees may apply.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-gradient-to-r from-lime-400 to-lime-300">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Ready to save on your next vehicle loan?
          </h2>
          <Button className="bg-teal-700 hover:bg-teal-800 text-white px-8 py-3 text-lg">
            Apply for a Loan Today
          </Button>
        </div>
      </section>
    </main>
  )
}
