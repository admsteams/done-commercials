import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Building2, TrendingUp, Users, Shield, Zap, ArrowRight, 
  Phone, Mail, MapPin, Check, Star, Menu, X, Sparkles,
  Target, Clock, Award, ChevronRight, Send, CheckCircle
} from 'lucide-react';

const PremiumCommercialSite = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', company: '', service: '', message: ''
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  const services = [
    {
      icon: Building2,
      title: "Owner-Occupied Properties",
      description: "Build equity while running your business",
      features: ["Up to 80% LTV", "25-year terms", "Flexible structures"],
      color: "from-blue-600 to-cyan-500",
      bgColor: "bg-blue-500/10"
    },
    {
      icon: TrendingUp,
      title: "Investment Real Estate",
      description: "Strategic financing for income properties",
      features: ["Value-add support", "Bridge & term loans", "Institutional rates"],
      color: "from-purple-600 to-pink-500",
      bgColor: "bg-purple-500/10"
    },
    {
      icon: Users,
      title: "Multi-Residential (5+ Units)",
      description: "CMHC-insured and conventional programs",
      features: ["CMHC programs", "100+ unit support", "Expert underwriting"],
      color: "from-emerald-600 to-teal-500",
      bgColor: "bg-emerald-500/10"
    },
    {
      icon: Shield,
      title: "CSBFL Government Loans",
      description: "Government-backed small business financing",
      features: ["Up to $1M funding", "Equipment & real estate", "Flexible terms"],
      color: "from-orange-600 to-red-500",
      bgColor: "bg-orange-500/10"
    }
  ];

  const stats = [
    { value: "$500M+", label: "Funded Annually" },
    { value: "1000+", label: "Satisfied Clients" },
    { value: "50+", label: "Lender Partners" },
    { value: "98%", label: "Success Rate" }
  ];

  const testimonials = [
    {
      name: "Michael Chen", role: "Property Developer", location: "Toronto",
      text: "Exceptional service. They secured 85% LTV on our 48-unit building when others couldn't go past 75%.",
      rating: 5
    },
    {
      name: "Sarah Johnson", role: "Business Owner", location: "Vancouver",
      text: "Professional, transparent, and incredibly efficient. Closed our deal in record time.",
      rating: 5
    },
    {
      name: "David Patel", role: "Investor", location: "Calgary",
      text: "Their lender network is unmatched. Got terms that beat our bank offer by 0.5%.",
      rating: 5
    }
  ];

  return (
    <div className="bg-slate-950 text-white overflow-hidden">
      {/* Premium Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-slate-950/80 backdrop-blur-2xl border-b border-white/5 py-3' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <motion.div 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 blur-xl opacity-50" />
              <div className="relative bg-gradient-to-br from-blue-600 via-cyan-500 to-purple-600 p-3 rounded-2xl">
                <Building2 className="w-6 h-6" />
              </div>
            </div>
            <div>
              <div className="font-bold text-xl tracking-tight">Done Commercials</div>
              <div className="text-xs text-slate-400 tracking-wide">PREMIUM FINANCING</div>
            </div>
          </motion.div>

          <div className="hidden lg:flex items-center gap-12">
            {['Services', 'Process', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <div className="text-right">
              <div className="text-xs text-slate-400">Call us</div>
              <div className="text-sm font-semibold">+1 (555) 123-4567</div>
            </div>
            <motion.a
              href="#contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 rounded-full font-semibold text-sm flex items-center gap-2 shadow-lg shadow-blue-500/25"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>

          <button 
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden bg-slate-900/95 backdrop-blur-2xl border-t border-white/5 p-6 mt-4"
          >
            {['Services', 'Process', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-3 text-slate-300 hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section - Ultra Premium */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/30 to-slate-950" />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [90, 0, 90],
            }}
            transition={{ duration: 15, repeat: Infinity }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl"
          />
        </div>

        {/* Grid Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(255 255 255 / 0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-full px-4 py-2 mb-6 backdrop-blur-sm"
              >
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span className="text-sm font-medium text-cyan-300">Canada's Elite Financing Partner</span>
              </motion.div>

              <h1 className="text-6xl lg:text-7xl font-black mb-6 leading-[1.1]">
                <span className="text-white">Financing</span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Reimagined
                </span>
              </h1>

              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Strategic commercial lending solutions for ambitious businesses and investors. 
                <span className="text-cyan-400 font-semibold"> We secure better terms</span>, 
                faster closings, and smarter structures.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <motion.a
                  href="#contact"
                  className="group bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 rounded-full font-bold flex items-center gap-3 shadow-2xl shadow-blue-500/30"
                  whileHover={{ scale: 1.05, boxShadow: "0 25px 50px rgba(59, 130, 246, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Your Application
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.a>
                <motion.a
                  href="#services"
                  className="px-8 py-4 rounded-full font-bold border-2 border-white/20 hover:border-white/40 hover:bg-white/5 transition-all flex items-center gap-2 backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Services
                </motion.a>
              </div>

              <div className="grid grid-cols-4 gap-6">
                {stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 + 0.5 }}
                  >
                    <div className="text-3xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-xs text-slate-400 font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 blur-3xl opacity-30" />
                <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center">
                        <Building2 className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-bold text-lg">Quick Quote</div>
                        <div className="text-xs text-slate-400">Get instant estimate</div>
                      </div>
                    </div>
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  </div>

                  {['Owner-Occupied', 'Investment Property', 'Multi-Unit', 'CSBFL'].map((type, i) => (
                    <motion.div
                      key={type}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 + 0.8 }}
                      className="mb-4 last:mb-0"
                    >
                      <div className="bg-gradient-to-r from-slate-800/50 to-slate-800/30 rounded-2xl p-4 border border-white/5 hover:border-cyan-500/30 transition-all cursor-pointer group">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${
                              i === 0 ? 'from-blue-600 to-cyan-500' :
                              i === 1 ? 'from-purple-600 to-pink-500' :
                              i === 2 ? 'from-emerald-600 to-teal-500' :
                              'from-orange-600 to-red-500'
                            } flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity`}>
                              <Check className="w-5 h-5" />
                            </div>
                            <div>
                              <div className="font-semibold text-sm">{type}</div>
                              <div className="text-xs text-slate-400">Up to 80% LTV</div>
                            </div>
                          </div>
                          <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                        </div>
                      </div>
                    </motion.div>
                  ))}

                  <motion.button
                    className="w-full mt-6 bg-gradient-to-r from-blue-600 to-cyan-500 py-4 rounded-2xl font-bold hover:shadow-lg hover:shadow-blue-500/30 transition-all"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Calculate My Rate
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          style={{ opacity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center p-2"
          >
            <motion.div className="w-1.5 h-3 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section - Premium Cards */}
      <section id="services" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-block bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-semibold text-cyan-300">Our Expertise</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
                Premium Financing Solutions
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Tailored commercial lending across four specialized verticals
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100" />
                <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-3xl p-8 border border-white/10 group-hover:border-white/20 transition-all">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg`}>
                    <service.icon className="w-8 h-8" />
                  </div>

                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-slate-400 mb-6">{service.description}</p>

                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, j) => (
                      <div key={j} className="flex items-center gap-3">
                        <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0`}>
                          <Check className="w-4 h-4" />
                        </div>
                        <span className="text-slate-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 group-hover:gap-3 transition-all"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-blue-950/20" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-black mb-6">
              <span className="bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent">
                Streamlined Process
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              From consultation to funding in four simple steps
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Target, title: "Discovery", desc: "Understanding your goals" },
              { icon: Award, title: "Strategy", desc: "Optimal structuring" },
              { icon: Clock, title: "Execution", desc: "Lender matching" },
              { icon: CheckCircle, title: "Funding", desc: "Deal completion" }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-xl rounded-2xl p-6 border border-white/10 text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-7 h-7" />
                  </div>
                  <div className="text-sm font-bold text-cyan-400 mb-2">Step {i + 1}</div>
                  <div className="font-bold mb-2">{step.title}</div>
                  <div className="text-sm text-slate-400">{step.desc}</div>
                </div>
                {i < 3 && (
                  <div className="hidden md:block absolute top-1/2 right-0 w-8 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 translate-x-1/2" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-black mb-6">
              <span className="bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent">
                Client Success Stories
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-xl rounded-2xl p-8 border border-white/10"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <p className="text-slate-300 mb-6 italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center font-bold">
                    {t.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-bold">{t.name}</div>
                    <div className="text-sm text-slate-400">{t.role} • {t.location}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 to-slate-950" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          {!formSubmitted ? (
            <>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-5xl font-black mb-6">
                  <span className="bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent">
                    Let's Build Something Great
                  </span>
                </h2>
                <p className="text-xl text-slate-400">
                  Get your custom financing solution in 24 hours
                </p>
              </motion.div>

              <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-3xl p-8 border border-white/10"
              >
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <input
                    type="text"
                    placeholder="Full Name *"
                    required
                    className="bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors"
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                  <input
                    type="email"
                    placeholder="Email Address *"
                    required
                    className="bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors"
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors"
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                  <input
                    type="text"
                    placeholder="Company Name"
                    className="bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors"
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                  />
                </div>

                <select
                  className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 mb-6 focus:outline-none focus:border-cyan-500 transition-colors"
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                >
                  <option value="">Select Service Interest</option>
                  <option>Owner-Occupied Property</option>
                  <option>Investment Real Estate</option>
                  <option>Multi-Unit Building</option>
                  <option>CSBFL Loan</option>
                </select>

                <textarea
                  placeholder="Tell us about your project *"
                  required
                  rows="4"
                  className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 mb-6 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />

                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-blue-500/30 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="w-5 h-5" />
                  Submit Application
                </motion.button>
              </motion.form>
            </>
          ) : (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-20"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Application Received!</h3>
              <p className="text-slate-400 mb-8">
                Our team will review your information and contact you within 24 hours.
              </p>
              <motion.button
                onClick={() => setFormSubmitted(false)}
                className="bg-slate-800 px-6 py-3 rounded-xl font-semibold hover:bg-slate-700 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                Submit Another
              </motion.button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-950" />
        
        <div className="relative z-10">
          {/* CTA Banner */}
          <div className="border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6 py-16">
              <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl p-12 border border-blue-500/30 text-center">
                <h3 className="text-4xl font-black mb-4">
                  Ready to Get Started?
                </h3>
                <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                  Join hundreds of satisfied clients who've secured optimal financing through Done Commercials
                </p>
                <motion.a
                  href="#contact"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 rounded-full font-bold shadow-lg shadow-blue-500/30"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </div>

          {/* Main Footer */}
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
              {/* Company Info */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-gradient-to-br from-blue-600 via-cyan-500 to-purple-600 p-3 rounded-2xl">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">Done Commercials</div>
                    <div className="text-xs text-slate-400">PREMIUM FINANCING</div>
                  </div>
                </div>
                <p className="text-slate-400 text-sm mb-6">
                  Elite commercial lending advisory serving businesses and investors across Canada.
                </p>
                <div className="flex gap-4">
                  {['linkedin', 'twitter', 'facebook'].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors"
                    >
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Services */}
              <div>
                <h4 className="font-bold mb-6">Services</h4>
                <div className="space-y-3">
                  {['Owner-Occupied', 'Investment Properties', 'Multi-Residential', 'CSBFL Loans'].map((item) => (
                    <a
                      key={item}
                      href="#services"
                      className="block text-slate-400 hover:text-white text-sm transition-colors"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>

              {/* Company */}
              <div>
                <h4 className="font-bold mb-6">Company</h4>
                <div className="space-y-3">
                  {['About Us', 'Our Process', 'Success Stories', 'Contact'].map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="block text-slate-400 hover:text-white text-sm transition-colors"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div>
                <h4 className="font-bold mb-6">Get in Touch</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm text-slate-400">Phone</div>
                      <div className="font-semibold text-sm">+1 (555) 123-4567</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm text-slate-400">Email</div>
                      <div className="font-semibold text-sm">info@donecommercials.com</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm text-slate-400">Location</div>
                      <div className="font-semibold text-sm">Toronto, ON</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/5 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-slate-500 text-sm">
                  © 2025 Done Commercials Inc. All rights reserved.
                </p>
                <div className="flex gap-6 text-sm text-slate-400">
                  <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                  <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                  <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
                </div>
              </div>
              <p className="text-slate-600 text-xs mt-4 text-center md:text-left italic">
                Done Commercials operates under Canadian commercial financing standards. All lending solutions subject to lender approval and credit qualification.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PremiumCommercialSite;