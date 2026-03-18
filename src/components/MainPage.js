import React, { useState, useRef } from 'react';
import ServiceCard from './ServiceCard';
import ContactForm from './ContactForm';
import ProgramCard from './ProgramCard';

const MainPage = () => {
  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const missionRef = useRef(null);
  const programsRef = useRef(null);

  const [activeTab, setActiveTab] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentFirstIndex, setCurrentFirstIndex] = useState(0);
  const [currentSecondIndex, setCurrentSecondIndex] = useState(0);

  const firstHomeImages = [
    '/firsthome/h1.jpg',
    '/firsthome/h2.jpg',
    '/firsthome/h3.jpg',
    '/firsthome/IMG_0950 (1).jpg',
    '/firsthome/IMG_0951 (1).jpg',
    '/firsthome/IMG_0953 (1).jpg',
    '/firsthome/IMG_0954 (1).jpg',
    '/firsthome/IMG_7689-min.jpg',
    '/firsthome/IMG_7697-min.jpg',
    '/firsthome/IMG_7701-min.jpg'
  ];

  const secondHomeImages = [
    '/secondhome/imgi_97_genMid.2_3.jpg',
    '/secondhome/imgi_98_3_3.jpg',
    '/secondhome/imgi_99_genMid.4_3.jpg',
    '/secondhome/imgi_100_genMid.5_3.jpg',
    '/secondhome/imgi_101_6_3.jpg',
    '/secondhome/imgi_102_genMid.7_3.jpg',
    '/secondhome/imgi_104_9_3.jpg',
    '/secondhome/imgi_105_genMid.10_3.jpg',
    '/secondhome/imgi_110_15_3.jpg',
    '/secondhome/imgi_112_genMid.17_3.jpg',
    '/secondhome/imgi_113_18_3.jpg',
    '/secondhome/imgi_114_genMid.19_3.jpg'
  ];

  const scrollToSection = (ref, tabName) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    setActiveTab(tabName);
  };

  const handleFacilityPhotoRequest = () => {
    scrollToSection(contactRef, 'contact');
    setTimeout(() => {
      const messageInput = document.querySelector('#message');
      const messageEvent = new Event('input', { bubbles: true });
      if (messageInput) {
        messageInput.value = "Hi, I would like to request photos of your facility. Please send them to my email. Thank you!";
        messageInput.dispatchEvent(messageEvent);
      }
    }, 100);
  };

  const services = [
    {
      title: "24/7 Care",
      description: "Round-the-clock care and support for all residents, ensuring safety and comfort at all times.",
      image: "/supervision.jpeg",
      icon: <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    },
    {
      title: "Assistance with Daily Living (ADLs)",
      description: "Comprehensive assistance with daily living activities and personal hygiene needs.",
      image: "/pic1.jpeg",
      icon: <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    },
    {
      title: "Medication Management",
      description: "Professional oversight and administration of prescribed medications and treatments.",
      image: "/pic2.jpeg",
      icon: <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    },
    {
      title: "Dietary Support",
      description: "Nutritious, well-balanced meals tailored to individual dietary needs and preferences.",
      image: "/pic4.jpeg",
      icon: <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    },
    {
      title: "Behavioral Support",
      description: "Specialized assistance and positive behavioral interventions by trained professionals.",
      image: "/pic3.jpeg",
      icon: <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    },
    {
      title: "Transportation Services",
      description: "Safe and reliable transportation for medical appointments, shopping, and community activities.",
      image: "/last.jpeg",
      icon: <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    }
  ];

  const programs = [
    {
      title: "Day Support Program",
      items: [
        "Group games and social interaction",
        "Music, art, and recreational therapy",
        "Community outings and volunteer work",
        "Speech, occupational, and physical therapy",
        "Skill-building and social learning sessions"
      ]
    },
    {
      title: "Community Integration Activities",
      items: [
        "Grocery shopping and trips to malls or local stores",
        "Dining out at restaurants and cafes",
        "Nature walks, park visits, and beach outings",
        "Attendance at community events and festivals",
        "Gym access and group fitness opportunities"
      ]
    },
    {
      title: "Health and Wellness Supports",
      items: [
        "Gym memberships and customized fitness routines",
        "Swimming and aquatic therapy",
        "Walking, biking, and outdoor activities",
        "Staff support for nutrition and hydration"
      ]
    },
    {
      title: "Person-Centered Outings",
      items: [
        "Nature hikes and picnics",
        "Shopping trips aligned with personal hobbies",
        "Visits to beaches, museums, or parks",
        "Enjoying movies, music events, or local attractions"
      ]
    },
    {
      title: "Behavioral and Mental Health Supports",
      items: [
        "Behavior specialists who develop personalized strategies",
        "Licensed therapists for individual or group counseling",
        "Mental health mentors offering ongoing emotional support",
        "Coordination with outside professionals for continuity of care"
      ]
    },
    {
      title: "Employment and Job Coaching",
      items: [
        "Job coaching and interest-based career exploration",
        "On-the-job support and employer coordination",
        "Volunteer experiences for skill development",
        "Resume help, interview practice, and transportation planning"
      ]
    },
    {
      title: "Education and Personal Growth",
      items: [
        "Support with school enrollment and class attendance",
        "Assistance with routines to support learning",
        "Homework help and tutoring coordination",
        "Encouragement to explore subjects of personal interest"
      ]
    },
    {
      title: "Skill Building and Independence",
      items: [
        "Budgeting and shopping practice",
        "Meal preparation and healthy eating support",
        "Communication, self-advocacy, and daily living routines",
        "Travel training, hygiene, and home maintenance support"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Navigation Banner */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-slate-100 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <span className="text-2xl font-light tracking-wider text-slate-900">
                <span className="text-sky-500">LIVE</span> LIFE
              </span>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>

            {/* Desktop navigation */}
            <div className="hidden md:flex space-x-12">
              <button 
                onClick={() => scrollToSection(homeRef, 'home')}
                className={`text-sm font-light tracking-wider transition-colors duration-300 ${
                  activeTab === 'home' ? 'text-sky-500' : 'text-slate-600 hover:text-sky-500'
                }`}
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection(servicesRef, 'services')}
                className={`text-sm font-light tracking-wider transition-colors duration-300 ${
                  activeTab === 'services' ? 'text-sky-500' : 'text-slate-600 hover:text-sky-500'
                }`}
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection(aboutRef, 'about')}
                className={`text-sm font-light tracking-wider transition-colors duration-300 ${
                  activeTab === 'about' ? 'text-sky-500' : 'text-slate-600 hover:text-sky-500'
                }`}
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection(contactRef, 'contact')}
                className={`text-sm font-light tracking-wider transition-colors duration-300 ${
                  activeTab === 'contact' ? 'text-sky-500' : 'text-slate-600 hover:text-sky-500'
                }`}
              >
                Contact Us
              </button>
              <button 
                onClick={() => scrollToSection(missionRef, 'mission')}
                className={`text-sm font-light tracking-wider transition-colors duration-300 ${
                  activeTab === 'mission' ? 'text-sky-500' : 'text-slate-600 hover:text-sky-500'
                }`}
              >
                Our Mission
              </button>
              <button 
                onClick={() => scrollToSection(programsRef, 'programs')}
                className={`text-sm font-light tracking-wider transition-colors duration-300 ${
                  activeTab === 'programs' ? 'text-sky-500' : 'text-slate-600 hover:text-sky-500'
                }`}
              >
                Programs
              </button>
            </div>
          </div>

          {/* Mobile navigation menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900">
                <button
                  onClick={() => {
                    scrollToSection(homeRef, 'home');
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-md"
                >
                  Home
                </button>
                <button
                  onClick={() => {
                    scrollToSection(servicesRef, 'services');
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-md"
                >
                  Services
                </button>
                <button
                  onClick={() => {
                    scrollToSection(aboutRef, 'about');
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-md"
                >
                  About Us
                </button>
                <button
                  onClick={() => {
                    scrollToSection(contactRef, 'contact');
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-md"
                >
                  Contact Us
                </button>
                <button
                  onClick={() => {
                    scrollToSection(missionRef, 'mission');
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-md"
                >
                  Our Mission
                </button>
                <button
                  onClick={() => {
                    scrollToSection(programsRef, 'programs');
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-md"
                >
                  Programs
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      <div className="pt-20">
        {/* Hero Section */}
        <section ref={homeRef} className="relative w-full min-h-screen pt-32 pb-24 flex items-center justify-center bg-gradient-to-br from-white via-white to-sky-50">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-sky-100 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -bottom-20 left-0 w-96 h-96 bg-sky-50 rounded-full opacity-30 blur-3xl"></div>
            <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-sky-100 rounded-full opacity-15 blur-3xl"></div>
          </div>
          <div className="container mx-auto text-center px-4 max-w-7xl relative z-10">
            <div className="mb-12">
              <p className="text-sky-500 font-semibold text-2xl md:text-3xl tracking-light mb-4">Welcome to</p>
              <h2 className="text-6xl md:text-7xl lg:text-8xl font-light text-slate-900 mb-6 leading-tight">
                Live Life Adult Care Home
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-sky-500 to-sky-300 mx-auto"></div>
            </div>
            <p className="text-xl md:text-3xl text-slate-600 mb-16 font-light max-w-4xl mx-auto leading-relaxed">
              Personalized residential support and expert care for adults with intellectual and developmental disabilities.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-8">
              <button 
                onClick={() => scrollToSection(contactRef, 'contact')} 
                className="bg-sky-500 text-white px-10 py-6 text-xl font-semibold rounded-2xl transition-all duration-300 hover:bg-sky-600 shadow-lg hover:shadow-2xl hover:scale-110 transform"
              >
                Get in Touch
              </button>
              <button 
                onClick={() => scrollToSection(servicesRef, 'services')} 
                className="bg-slate-100 text-slate-900 px-10 py-6 text-xl font-semibold rounded-2xl transition-all duration-300 hover:bg-slate-200 border-2 border-slate-200 hover:shadow-lg transform hover:scale-105"
              >
                Explore Services
              </button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section ref={servicesRef} className="py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-light mb-6 text-slate-900">
                Comprehensive Care Services
              </h2>
              <p className="text-lg text-slate-600 font-light">
                We provide personalized support tailored to each resident's unique needs and goals.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group flex flex-col">
                  <div className="relative h-72 overflow-hidden bg-slate-200 flex-shrink-0">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-semibold text-slate-900 mb-4">{service.title}</h3>
                    <p className="text-slate-600 text-lg leading-relaxed">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section ref={aboutRef} className="py-24 bg-gradient-to-b from-white to-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-light mb-6 text-slate-900">About Live Life Adult Care Home</h2>
              <p className="text-lg text-slate-600 font-light">
                Founded on compassion, built on excellence. Transforming lives through personalized care.
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto mb-20">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-light mb-6 text-slate-900">Our Mission</h3>
                  <p className="text-slate-600 text-lg mb-6 leading-relaxed font-light">
                    Live Life Adult Care Home was founded with a vision to transform the lives of individuals with intellectual and developmental disabilities through personalized care and unwavering support.
                  </p>
                  <p className="text-slate-600 text-lg mb-6 leading-relaxed font-light">
                    Our dedicated team works closely with behavior specialists, service coordinators, physicians, and trained Direct Support Professionals to create an environment that fosters growth, stability, and well-being.
                  </p>
                  <p className="text-slate-600 text-lg leading-relaxed font-light">
                    We believe in treating residents with dignity and respect, allowing them to thrive in a comfortable, home-like setting where they can reach their full potential.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-light mb-6 text-slate-900">Our Values</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-sky-500 mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-600 font-light">Person-centered, individualized care</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-sky-500 mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-600 font-light">24/7 professional support & supervision</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-sky-500 mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-600 font-light">Safe, nurturing home-like environment</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-sky-500 mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-600 font-light">Comprehensive, specialized care services</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-sky-500 mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-600 font-light">Respect, dignity, and empowerment</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Leadership Section */}
            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-sky-100">
                <h3 className="text-2xl font-light mb-8 text-slate-900 text-center">Leadership</h3>
                <div className="text-center">
                  <h4 className="text-xl font-light text-slate-900 mb-2">Yohannes Demssie</h4>
                  <p className="text-sky-500 font-semibold mb-6">Executive Director</p>
                  <div className="space-y-3">
                    <div className="flex items-center justify-center gap-3">
                      <svg className="w-5 h-5 text-sky-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773c.26.559.585 1.08.969 1.538A7 7 0 108.617 2.885a1 1 0 01-.956-.669l-.5-1.5A1 1 0 105.539 2H4a1 1 0 01-1-1z" />
                      </svg>
                      <a href="tel:503-713-2151" className="text-slate-600 hover:text-sky-500 font-light transition">503-713-2151</a>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                      <svg className="w-5 h-5 text-sky-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      <a href="mailto:yohannesbante301@gmail.com" className="text-slate-600 hover:text-sky-500 font-light transition">yohannesbante301@gmail.com</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Locations Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-light mb-6 text-slate-900">
                Our Homes
              </h2>
              <p className="text-lg text-slate-600 font-light">
                Two beautiful, welcoming environments designed for comfort and community.
              </p>
            </div>

            {/* Location One Slideshow */}
            <div className="mb-24">
              <div className="relative mb-8 group">
                <div className="rounded-3xl overflow-hidden border-4 border-sky-200 shadow-2xl bg-slate-100">
                  <img 
                    src={firstHomeImages[currentFirstIndex]} 
                    alt="First Home" 
                    className="w-full h-96 object-cover transition-opacity duration-500"
                  />
                </div>
                
                {/* Navigation Buttons */}
                <button
                  onClick={() => setCurrentFirstIndex((currentFirstIndex - 1 + firstHomeImages.length) % firstHomeImages.length)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-900 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={() => setCurrentFirstIndex((currentFirstIndex + 1) % firstHomeImages.length)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-900 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-4 right-4 bg-sky-500 text-white px-4 py-2 rounded-full text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {currentFirstIndex + 1} / {firstHomeImages.length}
                </div>
              </div>

              <div className="max-w-2xl mx-auto">
                <h3 className="text-4xl font-light mb-3 text-slate-900">Location One</h3>
                <p className="text-2xl text-sky-500 font-semibold mb-6">14990 SE Pioneer Dr, Clackamas, OR</p>
                <p className="text-lg text-slate-600 leading-relaxed mb-8 font-light">
                  Our first home is located in a quiet and welcoming neighborhood in Clackamas. This location provides a comfortable and supportive environment designed to promote independence, safety, and community involvement.
                </p>
                <div className="rounded-2xl overflow-hidden shadow-md h-80 mb-8">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.123456789012!2d-122.54321!3d45.43210!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5495741234567890%3A0x1234567890abcdef!2s14990%20SE%20Pioneer%20Dr%2C%20Clackamas%2C%20OR!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Location One Map"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Location Two Slideshow */}
            <div>
              <div className="relative mb-8 group">
                <div className="rounded-3xl overflow-hidden border-4 border-sky-200 shadow-2xl bg-slate-100">
                  <img 
                    src={secondHomeImages[currentSecondIndex]} 
                    alt="Second Home" 
                    className="w-full h-96 object-cover transition-opacity duration-500"
                  />
                </div>
                
                {/* Navigation Buttons */}
                <button
                  onClick={() => setCurrentSecondIndex((currentSecondIndex - 1 + secondHomeImages.length) % secondHomeImages.length)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-900 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={() => setCurrentSecondIndex((currentSecondIndex + 1) % secondHomeImages.length)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-900 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-4 right-4 bg-sky-500 text-white px-4 py-2 rounded-full text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {currentSecondIndex + 1} / {secondHomeImages.length}
                </div>
              </div>

              <div className="max-w-2xl mx-auto">
                <h3 className="text-4xl font-light mb-3 text-slate-900">Location Two</h3>
                <p className="text-2xl text-sky-500 font-semibold mb-6">15458 SE Pioneer Dr, Clackamas, OR 97015</p>
                <p className="text-lg text-slate-600 leading-relaxed mb-6 font-light">
                  Our second home is a spacious and well-maintained 3-bedroom, 2.5-bathroom residence in a peaceful residential area.
                </p>
                <div className="bg-slate-50 rounded-2xl p-8 mb-8">
                  <p className="text-slate-600 text-lg leading-relaxed font-light mb-6">
                    Ideally located near many community resources and amenities:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-start">
                      <svg className="w-6 h-6 text-sky-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-600">Pioneer Park – walking distance</span>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-6 h-6 text-sky-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-600">Clackamas Town Center</span>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-6 h-6 text-sky-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-600">Clackamas Community College</span>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-6 h-6 text-sky-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-600">Rock Creek hiking trails</span>
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md h-80">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.123456789012!2d-122.54321!3d45.43210!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5495741234567890%3A0x1234567890abcdef!2s15458%20SE%20Pioneer%20Dr%2C%20Clackamas%2C%20OR%2097015!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Location Two Map"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Our Environment */}
            <div className="mt-24 bg-sky-50 rounded-3xl p-12 md:p-16">
              <h3 className="text-4xl font-light text-center mb-12 text-slate-900">Our Environment</h3>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="flex items-start">
                  <svg className="w-8 h-8 text-sky-500 mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-slate-900 mb-1">Safe & Structured</p>
                    <p className="text-slate-600">A secure, welcoming living environment</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-8 h-8 text-sky-500 mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-slate-900 mb-1">Independence & Choice</p>
                    <p className="text-slate-600">Opportunities for personal growth</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-8 h-8 text-sky-500 mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-slate-900 mb-1">Community Access</p>
                    <p className="text-slate-600">Connection to activities and resources</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-8 h-8 text-sky-500 mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-slate-900 mb-1">Comfort & Dignity</p>
                    <p className="text-slate-600">Respectful, home-like spaces</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section ref={programsRef} className="py-24 bg-sky-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-light mb-6 text-slate-900">
                Programs & Activities
              </h2>
              <p className="text-lg text-slate-600 font-light">
                Personalized programs designed to support growth, independence, and community engagement.
              </p>
            </div>
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {programs.map((program, index) => (
                  <ProgramCard
                    key={index}
                    title={program.title}
                    items={program.items}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Us Section */}
        <section ref={contactRef} id="contact" className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-light mb-6 text-slate-900">Get in Touch</h2>
              <p className="text-lg text-slate-600 font-light">
                Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </div>
            <div className="max-w-lg mx-auto">
              <ContactForm />
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section ref={missionRef} className="py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-5xl md:text-6xl font-light text-center mb-12 text-slate-900">Our Mission</h2>
              <p className="text-slate-600 text-xl leading-relaxed mb-8 text-center font-light">
                At Live Life Care Home, our mission is to provide exceptional, person-centered care that empowers individuals with intellectual and developmental disabilities to live their fullest lives.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="inline-block p-4 bg-sky-100 rounded-2xl mb-4">
                    <svg className="w-8 h-8 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Compassionate Care</h3>
                  <p className="text-slate-600 font-light">Delivering support with dignity and deep respect for each individual.</p>
                </div>
                <div className="text-center">
                  <div className="inline-block p-4 bg-sky-100 rounded-2xl mb-4">
                    <svg className="w-8 h-8 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Personal Growth</h3>
                  <p className="text-slate-600 font-light">Fostering independence and meaningful achievements for every resident.</p>
                </div>
                <div className="text-center">
                  <div className="inline-block p-4 bg-sky-100 rounded-2xl mb-4">
                    <svg className="w-8 h-8 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Quality of Life</h3>
                  <p className="text-slate-600 font-light">Creating safe, nurturing environments where residents thrive.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-3 gap-12 mb-12">
                <div>
                  <h3 className="text-2xl font-light mb-4">Live Life</h3>
                  <p className="text-slate-400 font-light">Compassionate adult care serving our community with excellence and dignity.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                  <div className="space-y-3">
                    <button 
                      onClick={() => scrollToSection(contactRef, 'contact')}
                      className="block text-slate-300 hover:text-sky-400 transition-colors duration-300 font-light"
                    >
                      Get in Touch
                    </button>
                    <button 
                      onClick={() => scrollToSection(servicesRef, 'services')}
                      className="block text-slate-300 hover:text-sky-400 transition-colors duration-300 font-light"
                    >
                      Our Services
                    </button>
                    <button 
                      onClick={() => scrollToSection(aboutRef, 'about')}
                      className="block text-slate-300 hover:text-sky-400 transition-colors duration-300 font-light"
                    >
                      About Us
                    </button>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
                  <p className="text-slate-300 text-sm font-light leading-relaxed">
                    14990 SE Pioneer Dr<br />
                    Clackamas, OR 97015<br />
                    <br />
                    15458 SE Pioneer Dr<br />
                    Clackamas, OR 97015
                  </p>
                </div>
              </div>
              <div className="border-t border-slate-800 pt-8 text-center text-slate-400 text-sm font-light">
                <p>© 2026 Live Life Adult Care Home. All rights reserved.</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default MainPage;
