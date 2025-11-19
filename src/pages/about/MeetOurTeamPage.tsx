'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
interface TeamMember {
  id: string
  name: string
  title: string
  office: string
  specialty?: string
  nmls?: string
  photo: string
}

interface TeamCategory {
  name: string
  description: string
  members: TeamMember[]
}

export default function MeetOurTeamPage() {
  const [activeTab, setActiveTab] = useState('financial')

  const teamData: Record<string, TeamCategory> = {
    financial: {
      name: 'Financial Services Team',
      description: "Think about all the things we all spend money on. And everything we're all saving money for. With so much riding on our financial health, it\'s good to know that the friendly members of our Financial Services Team are available to assist you with loan applications, deposit account information, online tools and all the other services that Capital Credit Union offers.",
      members: [
        {
          id: '1',
          name: 'Chris Nelson, CCUEC',
          title: 'Director of Sales & Consumer Lending',
          office: 'Bismarck Main Office',
          nmls: '74424',
          photo: '/professional-man-in-glasses-and-tie.jpg'
        },
        {
          id: '2',
          name: 'Tyler Artlip',
          title: 'Consumer Loan Manager',
          office: 'Bismarck Main Office',
          nmls: '515520',
          photo: '/professional-man-in-blue-tie.jpg'
        },
        {
          id: '3',
          name: 'Ines Rasidovic',
          title: 'Consumer Loan Specialist',
          office: 'Bismarck Main Office',
          nmls: '744429',
          photo: '/professional-woman-in-pink.jpg'
        },
        {
          id: '4',
          name: 'Andrew Nelson',
          title: 'Indirect Lending Specialist',
          office: 'Bismarck Main Office',
          nmls: '2059880',
          photo: '/professional-man-glasses.png'
        },
        {
          id: '5',
          name: 'Katie Streifel, CCUEC',
          title: 'Consumer Account Specialist',
          office: 'Bismarck Main Office',
          nmls: '911111',

          photo: '/professional-woman-smiling.png'
        },
        {
          id: '6',
          name: 'Lori Yarbrough',
          title: 'Member Relationship Manager',
          office: 'Bismarck Main Office',
          nmls: '829050',
          photo: '/professional-woman-glasses.png'
        },
        {
          id: '7',
          name: 'Loren Tollefson, CCUEC',
          title: 'Consumer Loan Manager',
          office: 'Bismarck North Branch',
          nmls: '902074',

          photo: '/professional-man-in-tie.jpg'
        },
        {
          id: '8',
          name: 'Tina Steffenson, CCUEC',
          title: 'Consumer Loan Specialist',
          office: 'Bismarck North Branch',
          nmls: '1160280',
          photo: '/professional-woman-diverse.png'
        }
      ]
    },
    mortgage: {
      name: 'Mortgage Services Team',
      description: 'Our Mortgage Services Team specializes in home loans and refinancing options. They work with you to find the right loan product and terms for your dream home.',
      members: [
        {
          id: '9',
          name: 'Sarah Johnson',
          title: 'Senior Mortgage Officer',
          office: 'Bismarck Main Office',
          nmls: '111111',

          photo: '/professional-woman-mortgage-officer.jpg'
        },
        {
          id: '10',
          name: 'Mike Thompson',
          title: 'Mortgage Loan Officer',
          office: 'Bismarck Main Office',
          nmls: '222222',
          photo: '/professional-man-suit.png'
        }
      ]
    },
    business: {
      name: 'Business Services Team',
      description: 'Our Business Services Team understands the unique needs of business owners. We provide comprehensive business lending and account solutions tailored to your company\'s growth.',
      members: [
        {
          id: '11',
          name: 'David Martinez',
          title: 'Business Lending Manager',
          office: 'Bismarck Main Office',
          nmls: '333333',

          photo: '/professional-man-business.png'
        },
        {
          id: '12',
          name: 'Jennifer Lee',
          title: 'Business Account Specialist',
          office: 'Bismarck Main Office',
          nmls: '444444',
          photo: '/professional-businesswoman.png'
        }
      ]
    }
  }

  const currentTeam = teamData[activeTab as keyof typeof teamData]

  return (
    <main className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-teal-700 to-teal-800 text-white py-12">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="mb-2 text-sm font-medium opacity-90">
            <a href="/about" className="hover:underline">ABOUT</a>
            {' / '}
            <a href="/about/about-us" className="hover:underline">ABOUT US</a>
          </div>
          <h1 className="text-5xl font-bold">Meet Our Team</h1>
        </div>
      </section>

      {/* Decorative Wave */}
      <div className="h-12 bg-gradient-to-r from-teal-700 via-lime-400 to-lime-500"></div>

      {/* Team Tabs */}
      <section className="py-8 bg-white border-b border-slate-200">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {Object.entries(teamData).map(([key, team]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-2 text-lg font-semibold transition-all ${
                  activeTab === key
                    ? 'text-teal-700 border-b-4 border-lime-500'
                    : 'text-slate-600 hover:text-teal-700'
                }`}
              >
                {team.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Team Description */}
      <section className="py-12 bg-blue-50">
        <div className="container max-w-4xl mx-auto px-4">
          <p className="text-lg text-slate-700 leading-relaxed">
            {currentTeam.description}
          </p>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-12">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentTeam.members.map((member) => (
              <div key={member.id} className="text-center">
                {/* Photo */}
                <div className="mb-4 relative h-48 w-full rounded-lg overflow-hidden shadow-md">
                  <img
                    src={member.photo || "/placeholder.svg"}
                    alt={member.name}
                    className="object-cover"
                  />
                </div>

                {/* Info */}
                <h3 className="text-lg font-bold text-slate-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-teal-700 font-semibold mb-3">
                  {member.title}
                </p>
                <p className="text-xs text-slate-600 mb-2">
                  {member.office}
                </p>
                {member.nmls && (
                  <p className="text-xs text-slate-600 mb-3">
                    NMLS# {member.nmls}
                  </p>
                )}
                {/* Schedule Button */}
                <Button className="w-full bg-teal-700 hover:bg-teal-800 text-white">
                  Schedule an Appointment
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
