import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Hero Section Component
const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-[#1a365d] overflow-hidden">
      {/* Diagonal accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#c9a227] transform skew-x-[-12deg] origin-top-right translate-x-1/4 hidden lg:block" />

      {/* Navigation */}
      <nav className="relative z-20 flex items-center justify-between px-6 md:px-12 lg:px-20 py-6">
        <div className="flex items-center gap-2">
          <div className="flex gap-0.5">
            <div className="w-1 h-6 bg-[#c9a227]" />
            <div className="w-1 h-6 bg-[#c9a227]" />
            <div className="w-1 h-6 bg-white" />
            <div className="w-1 h-6 bg-[#c9a227]" />
          </div>
          <span className="text-white font-display text-xl tracking-wide">
            EQUATOR<span className="text-[#c9a227]">IYA</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-white/90 text-sm">
          <a href="#about" className="hover:text-[#c9a227] transition-colors">About</a>
          <a href="#approach" className="hover:text-[#c9a227] transition-colors">Approach</a>
          <a href="#contact" className="hover:text-[#c9a227] transition-colors">Contact</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden md:block px-5 py-2.5 border border-white/30 text-white text-sm rounded hover:bg-white/10 transition-colors">
            Reach Out
          </button>
          <button className="w-10 h-10 bg-[#c9a227] rounded flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 px-6 md:px-12 lg:px-20 pt-12 md:pt-20 pb-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
              Catalyzing <span className="text-[#c9a227]">Africa's Transformation</span> Through Sustainable Infrastructure
            </h1>
            <p className="mt-6 text-white/70 text-base md:text-lg max-w-xl leading-relaxed">
              We are a transformational Asset Manager that sources and deploys global capital into strategic, bankable projects across the continent. By integrating finance and execution capacity across our Six Primary Pillars, we empower Africa's development entities to achieve sustainable economic growth and realize the vision of a First-World Africa.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <button className="flex items-center gap-2 px-6 py-3 bg-[#c9a227] text-white font-medium rounded hover:bg-[#b8922d] transition-colors">
                Get started
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button className="px-6 py-3 border border-white/30 text-white rounded hover:bg-white/10 transition-colors">
                Learn more
              </button>
            </div>
          </motion.div>

          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Decorative lines */}
            <div className="absolute -left-8 top-1/4 w-24 h-px bg-[#c9a227]" />
            <div className="absolute -left-8 top-1/4 w-px h-24 bg-[#c9a227]" />

            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=450&fit=crop"
                alt="Construction worker"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Partnership Section Component
const PartnershipSection = () => {
  const capabilities = [
    'Engineering',
    'Procurement',
    'Contract Management',
    'Finance'
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Grid */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[4/3] rounded overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=400&h=300&fit=crop"
                    alt="Modern building"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="aspect-[4/3] rounded overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=300&fit=crop"
                    alt="Construction site"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-[4/3] rounded overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=400&h=300&fit=crop"
                    alt="Bridge infrastructure"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="aspect-[4/3] rounded overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop"
                    alt="Worker"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-2 border-[#c9a227] flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#c9a227]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="text-[#c9a227] text-sm font-medium tracking-wider uppercase">Our Global Partnership Model</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-[#1a365d] mt-4 leading-tight">
              Equatoriya: Integrated Expertise for African Growth
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
              EQUATORIYA LLC is a Pan-African Asset Management and Infrastructure Development enterprise. We are established as a partnership of highly specialized companies with extensive experience across the Built Environment and Financial Services sectors.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We leverage competitive strengths to deliver integrated solutions across:
            </p>

            <ul className="mt-6 space-y-3">
              {capabilities.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full border-2 border-[#c9a227] flex items-center justify-center">
                    <svg className="w-3 h-3 text-[#c9a227]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            <button className="mt-8 px-6 py-3 border-2 border-[#1a365d] text-[#1a365d] font-medium rounded hover:bg-[#1a365d] hover:text-white transition-colors">
              Read more
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Sectors Section Component
const SectorsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const sectors = [
    { name: 'Government Sector', description: 'Infrastructure & Utility Support' },
    { name: 'Financial Services', description: 'Banking & Finance' },
    { name: 'Natural Resources & Energy', description: 'Minerals, Oil, Gas, Renewables' },
    { name: 'Industrial', description: 'ICT, Media, Food Security, Hospitality' },
    { name: 'Infrastructure Development', description: 'Urban Planning, Regional Projects' },
    { name: 'Humanitarian', description: 'Health, Education, Disaster Management' },
  ];

  return (
    <section id="approach" className="py-16 md:py-24 bg-[#f8f7f4]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Content */}
          <div>
            <span className="text-[#c9a227] text-sm font-medium tracking-wider uppercase">Our Approach</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-[#1a365d] mt-4 leading-tight">
              Driving Sustainable Growth Across Key Sectors
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed max-w-xl">
              We specialize in developing and managing large-scale infrastructure projects that are vital for economic development and social progress in Africa. Our focus areas include energy, transportation, and digital connectivity.
            </p>

            <ul className="mt-8 space-y-4">
              {sectors.map((sector, index) => (
                <motion.li
                  key={index}
                  className={`flex items-center gap-4 cursor-pointer group transition-all duration-300 ${activeIndex === index ? 'opacity-100' : 'opacity-60 hover:opacity-80'}`}
                  onClick={() => setActiveIndex(index)}
                  whileHover={{ x: 8 }}
                >
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${activeIndex === index ? 'border-[#c9a227] bg-[#c9a227]' : 'border-[#c9a227]'}`}>
                    {activeIndex === index && (
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <span className="text-[#1a365d] font-medium">{sector.name}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Right - Interactive Display */}
          <div className="relative">
            <div className="sticky top-24">
              <motion.div
                className="relative bg-[#1a365d] rounded-lg p-8 md:p-12 min-h-[400px] overflow-hidden"
                key={activeIndex}
                initial={{ opacity: 0.8 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  {[...Array(20)].map((_, i) => (
                    <div key={i} className="absolute text-white/20 font-display text-2xl md:text-4xl whitespace-nowrap" style={{
                      top: `${(i * 25) % 100}%`,
                      left: `${(i * 15) % 100}%`,
                      transform: `rotate(-12deg)`
                    }}>
                      {sectors[i % sectors.length].name}
                    </div>
                  ))}
                </div>

                {/* Active Sector Display */}
                <div className="relative z-10 h-full flex flex-col justify-end">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="flex items-center gap-3 text-[#c9a227] mb-4">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                      <span className="text-sm font-medium tracking-wider uppercase">Active Sector</span>
                    </div>
                    <h3 className="font-display text-3xl md:text-4xl text-white">
                      {sectors[activeIndex].name}
                    </h3>
                    <p className="mt-3 text-white/60">{sectors[activeIndex].description}</p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Project Cards Section
const ProjectsSection = () => {
  const projects = [
    {
      category: 'ENERGY',
      title: 'Sustainable Power Solutions for Rural Communities',
      location: 'Tanzania',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=300&fit=crop'
    },
    {
      category: 'TRANSPORTATION',
      title: 'Modernizing Rail Networks for Economic Efficiency',
      location: 'Kenya',
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=300&fit=crop'
    },
    {
      category: 'INFRASTRUCTURE',
      title: 'Accelerating African Digital Connectivity Projects',
      location: 'Nigeria',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop'
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[#c9a227] text-xs font-medium tracking-wider">{project.category}</span>
                  <h3 className="text-white font-display text-lg mt-1">{project.title}</h3>
                  <p className="text-white/60 text-sm mt-1">{project.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Panoramic Image Section
const PanoramicSection = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
      <motion.div
        className="absolute inset-0"
        style={{ y }}
      >
        <img
          src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1600&h=800&fit=crop"
          alt="City skyline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#1a365d]/70" />
      </motion.div>

      <div className="relative z-10 h-full flex items-center justify-center">
        <motion.p
          className="font-display text-2xl md:text-4xl lg:text-5xl text-white text-center max-w-4xl px-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[#c9a227]">Unlocking Potential.</span> Across the Continent.
        </motion.p>
      </div>
    </section>
  );
};

// Impact Investing Section
const ImpactSection = () => {
  const pillars = [
    'Government Sector: Infrastructure & Utility Support',
    'Financial Services: Banking & Finance',
    'Natural Resources & Energy: Minerals, Oil, Gas, Renewables',
    'Industrial: ICT, Media, Food Security, Hospitality, Capital Investments',
    'Infrastructure Development: Urban Planning, Regional Planning, Cross-Border Projects',
    'Humanitarian: Health, Education, Disaster Management, Socio-Economic Development'
  ];

  const portfolioPoints = [
    'Focus on fewer, larger, high-impact investments',
    'Target majority ownership in key sectors to create scarcity value',
    'Strong weighting toward Energy and Natural Resources across Africa'
  ];

  const growthPoints = [
    'Balance short-term cash flow with long-term growth assets',
    'Active portfolio management to maximize shareholder value',
    'Structured, bankable infrastructure programs with international co-funding'
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <span className="text-[#c9a227] text-sm font-medium tracking-wider uppercase">Mobilizing Capital for Africa</span>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-[#1a365d] mt-4 leading-tight max-w-2xl">
          Strategic Framework for Impact Investing
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {/* Six Pillar Assets */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="aspect-[4/3] overflow-hidden rounded-lg mb-6">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop"
                alt="Modern buildings"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-display text-xl text-[#1a365d] mb-4">Six Pillar Assets</h3>
            <ul className="space-y-2">
              {pillars.map((pillar, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                  <div className="w-4 h-4 rounded-full border border-[#c9a227] flex items-center justify-center mt-0.5 flex-shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#c9a227]" />
                  </div>
                  <span>{pillar}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Portfolio Design */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="aspect-[4/3] overflow-hidden rounded-lg mb-6">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop"
                alt="Construction"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-display text-xl text-[#1a365d] mb-4">Portfolio Design</h3>
            <ul className="space-y-3">
              {portfolioPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                  <svg className="w-4 h-4 text-[#c9a227] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Superior Growth */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="aspect-[4/3] overflow-hidden rounded-lg mb-6">
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=300&fit=crop"
                alt="Business meeting"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-display text-xl text-[#1a365d] mb-4">Superior Growth</h3>
            <ul className="space-y-3">
              {growthPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                  <svg className="w-4 h-4 text-[#c9a227] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer id="contact" className="bg-[#1a365d] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="flex gap-0.5">
                <div className="w-1 h-6 bg-[#c9a227]" />
                <div className="w-1 h-6 bg-[#c9a227]" />
                <div className="w-1 h-6 bg-white" />
                <div className="w-1 h-6 bg-[#c9a227]" />
              </div>
              <span className="font-display text-xl tracking-wide">
                EQUATOR<span className="text-[#c9a227]">IYA</span>
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              Equatoriya LLC is a Pan-African Asset Manager and Infrastructure Development enterprise. We deploy global capital and integrated expertise across our Six Primary Pillars to deliver transformational projects and drive sustainable economic growth for Africa.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#about" className="text-white/60 hover:text-[#c9a227] text-sm transition-colors">About</a>
              <a href="#approach" className="text-white/60 hover:text-[#c9a227] text-sm transition-colors">Approach</a>
              <a href="#contact" className="text-white/60 hover:text-[#c9a227] text-sm transition-colors">Contact</a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[#c9a227] text-sm font-medium mb-4 uppercase tracking-wider">Phone</h4>
            <p className="text-white/80 text-sm">27-000-0000</p>

            <h4 className="text-[#c9a227] text-sm font-medium mb-4 mt-8 uppercase tracking-wider">Email</h4>
            <p className="text-white/80 text-sm">sales@onrsl.com</p>
          </div>

          {/* Address */}
          <div>
            <h4 className="text-[#c9a227] text-sm font-medium mb-4 uppercase tracking-wider">Pretoria</h4>
            <p className="text-white/80 text-sm">
              17 Main St, 8th Floor<br />
              Gauteng, 0001, RSA
            </p>
          </div>
        </div>
      </div>

      {/* Attribution Footer */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-4">
          <p className="text-white/40 text-xs text-center">
            Requested by @web-user · Built by @clonkbot
          </p>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen bg-white transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <HeroSection />
      <PartnershipSection />
      <SectorsSection />
      <ProjectsSection />
      <PanoramicSection />
      <ImpactSection />
      <Footer />
    </div>
  );
}

export default App;
