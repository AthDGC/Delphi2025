'use client';
import { motion } from 'framer-motion';
import { EnvelopeIcon, MapPinIcon, CalendarIcon, UserGroupIcon, AcademicCapIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import logos from '../content/logos.json';
import homeContent from '../content/home.json';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const keynotes = [
  {
    name: 'Dag Haug',
    institution: 'University of Oslo, Norway',
    title: 'Plenary Speaker'
  },
  {
    name: 'George Mikros',
    institution: 'University of Qatar, Qatar',
    title: 'Plenary Speaker'
  },
  {
    name: 'Carola Trips',
    institution: 'University of Mannheim, Germany',
    title: 'Plenary Speaker'
  },
  {
    name: 'Alexandros Tantos',
    institution: 'Aristotle University of Thessaloniki, Greece',
    title: 'Plenary Speaker'
  },
  {
    name: 'Ioanna Sitaridou',
    institution: 'University of Cambridge, UK',
    title: 'Plenary Speaker'
  }
];

const schedule = {
  day1: {
    date: 'Thursday, November 27',
    title: 'Opening & Foundations',
    sessions: [
      { time: '09:30', event: 'Registration & Welcome' },
      { time: '09:45', event: 'Workshop Opening: Organizing Committee (30 min)' },
      { time: '10:15', event: 'Project Presentation: Lavidas et al. (75 min)' },
      { time: '11:30', event: 'Coffee Break' },
      { time: '12:00', event: 'Plenary: Dag Haug (60 min)' },
      { time: '13:00', event: 'Fried (30 min)' },
      { time: '13:30', event: 'Lunch at European Cultural Centre' },
      { time: '15:00', event: 'Plenary: Carola Trips (60 min)' },
      { time: '16:00', event: 'Francesca Dell\'Oro (30 min)' },
      { time: '16:30', event: 'Coffee Break' },
      { time: '17:00', event: 'Daniel Riaño Rufilanchas (60 min)' },
      { time: '18:00', event: 'Iván Andrés-Alba (30 min)' },
      { time: '18:30', event: 'Stavroula Kefala (30 min)' },
      { time: '20:30', event: 'Dinner in Arachova Village' }
    ]
  },
  day2: {
    date: 'Friday, November 28',
    title: 'Deep Dive & Collaboration',
    sessions: [
      { time: '09:30', event: 'Plenary: George Mikros (60 min)' },
      { time: '10:30', event: 'Coffee Break' },
      { time: '11:00', event: 'Nikiforidou (30 min)' },
      { time: '11:30', event: 'Geka (30 min)' },
      { time: '12:00', event: 'Piata (30 min)' },
      { time: '12:30', event: 'Departure for Archaeological Site' },
      { time: '13:00', event: 'Guided Tour of Delphi (2.5 hrs)' },
      { time: '16:00', event: 'Lunch at European Cultural Centre' },
      { time: '17:30', event: 'Plenary: Alexandros Tantos (60 min)' },
      { time: '18:30', event: 'Coffee Break' },
      { time: '19:00', event: 'Plenary: Ioanna Sitaridou (60 min)' },
      { time: '21:00', event: 'Gala Dinner at Vakhos Tavern' }
    ]
  },
  day3: {
    date: 'Saturday, November 29',
    title: 'Technology & Future Directions',
    sessions: [
      { time: '09:30', event: 'Special Session: ARCAS Team, CHS Harvard & AthDGC (60 min)' },
      { time: '10:30', event: 'Coffee Break' },
      { time: '11:00', event: 'Final Discussion: Planning Next Project (60 min)' },
      { time: '12:00', event: 'Closing Ceremony (30 min)' },
      { time: '12:30', event: 'Lunch at European Cultural Centre' },
      { time: '14:30', event: 'Departure to Athens' }
    ]
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-primary-600">Delphi Workshop 2025</span>
            </div>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <a href="#about" className="border-transparent text-gray-700 hover:border-primary-500 hover:text-primary-600 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors">
                About
              </a>
              <a href="#keynotes" className="border-transparent text-gray-700 hover:border-primary-500 hover:text-primary-600 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors">
                Speakers
              </a>
              <a href="#program" className="border-transparent text-gray-700 hover:border-primary-500 hover:text-primary-600 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors">
                Program
              </a>
              <a href="#venue" className="border-transparent text-gray-700 hover:border-primary-500 hover:text-primary-600 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors">
                Venue
              </a>
              <a href="#contact" className="border-transparent text-gray-700 hover:border-primary-500 hover:text-primary-600 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative bg-cover bg-center text-white py-24 sm:py-32"
        style={{ backgroundImage: `url(${homeContent.hero_background})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl"
            >
              Delphi Workshop 2025
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-4 text-xl sm:text-2xl font-light"
            >
              Corpus-Based Approaches to Text Types and Language Change in Delphi
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-lg"
            >
              <div className="flex items-center">
                <CalendarIcon className="h-6 w-6 mr-2" />
                <span>November 27-29, 2025</span>
              </div>
              <div className="flex items-center">
                <MapPinIcon className="h-6 w-6 mr-2" />
                <span>Delphi, Greece</span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              About the Workshop
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              An intensive three-day workshop at the heart of ancient Delphi
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img src={homeContent.about_image} alt="Ancient Manuscript" className="rounded-lg shadow-lg" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-50 rounded-lg p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                This workshop represents the culmination of a major research project funded by the Hellenic Foundation for Research and Innovation (HFRI/ELIDEK). We developed corpus-based valency lexicons for ancient and medieval languages using innovative computational methods integrated with traditional philological expertise.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Set in the inspiring archaeological site of Delphi - ancient center of wisdom and prophecy - we explore how corpus-based methods illuminate patterns of language change across millennia.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 bg-gradient-to-r from-primary-600 to-blue-600 rounded-lg p-8 text-white text-center"
          >
            <h3 className="text-2xl font-bold mb-4">Fully Funded Workshop</h3>
            <p className="text-lg mb-4">
              All expenses are covered for participants. No registration fees. Accommodation, meals, and cultural program included.
            </p>
            <p className="text-base">
              Funded by the Hellenic Foundation for Research and Innovation (HFRI) under the "2nd Call for H.F.R.I. Research Projects to support Faculty Members & Researchers".
            </p>
            <p className="text-base mt-2">
              In cooperation with the Naxos School project on Diachronic Linguistics.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Logos Section */}
      <section className="py-16 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-lg font-semibold text-gray-600 tracking-wider uppercase">Supported By</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {logos.items.map((logo: { name: string; src: string; href: string }) => (
              <a key={logo.name} href={logo.href} target="_blank" rel="noopener noreferrer" className="flex justify-center grayscale hover:grayscale-0 transition-all duration-300">
                <img src={logo.src} alt={logo.name} className="h-16 object-contain" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* All Speakers Section */}
      <section id="keynotes" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Speakers
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Distinguished scholars in the field
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { name: 'Dag Haug', institution: 'University of Oslo, Norway', type: 'Plenary' },
              { name: 'George Mikros', institution: 'University of Qatar, Qatar', type: 'Plenary' },
              { name: 'Carola Trips', institution: 'University of Mannheim, Germany', type: 'Plenary' },
              { name: 'Alexandros Tantos', institution: 'Aristotle University of Thessaloniki, Greece', type: 'Plenary' },
              { name: 'Ioanna Sitaridou', institution: 'University of Cambridge, UK', type: 'Plenary' },
              { name: 'Anna Piata', institution: 'National and Kapodistrian University of Athens, Greece', type: 'Invited' },
              { name: 'Mirjam Fried', institution: 'Charles University, Prague, Czech Republic', type: 'Invited' },
              { name: 'Francesca Dell\'Oro', institution: 'University of Bologna, Italy', type: 'Invited' },
              { name: 'Daniel Riaño Rufilanchas', institution: 'CSIC, Spain', type: 'Invited' },
              { name: 'Iván Andrés-Alba', institution: 'Universidad de Murcia, Spain', type: 'Invited' },
              { name: 'Stavroula Kefala', institution: 'Hellenic Open University, Greece', type: 'Invited' },
              { name: 'Esteban Belmehdi', institution: 'CHS, Harvard University, USA', type: 'Invited' },
              { name: 'Ioanna Papadopoulou', institution: 'CHS, Harvard University, USA', type: 'Invited' },
              { name: 'Julien Razanajao', institution: 'CHS, Harvard University, USA', type: 'Invited' }
            ].map((speaker, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow border border-gray-200"
              >
                <div className="inline-block px-3 py-1 mb-3 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                  {speaker.type}
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">{speaker.name}</h4>
                <p className="text-lg text-gray-600">{speaker.institution}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section id="program" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Three-Day Program
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              November 27-29, 2025
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {Object.entries(schedule).map(([key, day], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="bg-gradient-to-r from-primary-600 to-blue-600 p-6 text-white">
                  <h3 className="text-xl font-bold">{day.title}</h3>
                  <p className="mt-1 text-primary-100">{day.date}</p>
                </div>
                <div className="p-6">
                  <div className="space-y-3">
                    {day.sessions.map((session, idx) => (
                      <div key={idx} className="flex items-start border-l-2 border-primary-200 pl-4 py-2">
                        <span className="text-sm font-semibold text-primary-600 min-w-[60px]">{session.time}</span>
                        <span className="text-sm text-gray-700 ml-3">{session.event}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Venue Section */}
      <section id="venue" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Venue & Travel
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              European Cultural Centre of Delphi
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img src={homeContent.venue_image} alt="European Cultural Centre of Delphi" className="rounded-lg shadow-lg" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">The Venue</h3>
              <p className="text-gray-700 mb-4">
                The workshop takes place at the European Cultural Centre of Delphi, located in the heart of the archaeological site. The Centre provides an inspiring setting for intellectual exchange, with modern facilities in a historically significant location.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  Main conference room
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  Breakout spaces for discussions
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  On-site guesthouse accommodation
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  WiFi and modern facilities
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Contact Information
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
              For inquiries about the workshop
            </p>
          </div>

          <div className="mt-10">
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:p-0">
                <dl className="sm:divide-y sm:divide-gray-200">
                  <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Organizers</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      <p>Lavidas, Nikiforidou, Geka, Symeonidis, Chionidi, Tsiropina, Plakoutsi</p>
                      <p className="mt-2 text-gray-600">National and Kapodistrian University of Athens</p>
                      <p className="mt-1">
                        <a href="mailto:nlavidas@enl.uoa.gr" className="text-primary-600 hover:text-primary-500">
                          nlavidas@enl.uoa.gr
                        </a>
                      </p>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
          <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
            <div className="px-5 py-2">
              <a href="#about" className="text-base text-gray-300 hover:text-white">
                About
              </a>
            </div>
            <div className="px-5 py-2">
              <a href="#keynotes" className="text-base text-gray-300 hover:text-white">
                Plenary
              </a>
            </div>
            <div className="px-5 py-2">
              <a href="#program" className="text-base text-gray-300 hover:text-white">
                Program
              </a>
            </div>
            <div className="px-5 py-2">
              <a href="#venue" className="text-base text-gray-300 hover:text-white">
                Venue
              </a>
            </div>
            <div className="px-5 py-2">
              <a href="#contact" className="text-base text-gray-300 hover:text-white">
                Contact
              </a>
            </div>
          </nav>
          <div className="mt-8 flex justify-center space-x-6">
            <a href="https://github.com/nlavidas" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <span className="sr-only">GitHub</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://github.com/AthDiaCorpus" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white" title="AthDiaCorpus GitHub">
              <span className="sr-only">AthDiaCorpus GitHub</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
          <p className="mt-8 text-center text-base text-gray-400">
            &copy; {new Date().getFullYear()} Nikolaos Lavidas. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
