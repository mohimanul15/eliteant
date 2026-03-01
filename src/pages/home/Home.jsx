import React, { useState, useEffect, useContext, useCallback } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  FaAmazon,
  FaRobot,
  FaChartLine,
  FaSearch,
  FaTruck,
  FaShieldAlt,
  FaArrowRight,
  FaCheckCircle,
  FaStar,
  FaUsers,
  FaPercent,
  FaClock,
  FaWallet,
  FaGlobe,
  FaCogs,
  FaBrain,
  FaSync,
  FaFilter,
  FaPlay,
  FaQuoteLeft,
  FaQuoteRight,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaSun,
  FaMoon,
  FaChevronDown,
  FaShoppingCart,
  FaBox,
  FaTag,
  FaTools,
  FaDatabase,
  FaRocket,
  FaLock,
  FaEye,
  FaHandshake,
  FaGraduationCap,
  FaMedal,
  FaAward,
  FaWhatsapp,
  FaViadeo,
  FaVideo
} from 'react-icons/fa';
import Gallery from '../../components/gallery/Gallery';
import YoutubeSingle from '../../components/youtubesingle/YoutubeSingle';
import { FaMoneyBillTrendUp, FaUsersGear } from 'react-icons/fa6';
import { AppContext } from '../../appcontext/AppContext';

const Home = () => {
  const { darkMode, setDarkMode } = useContext(AppContext);
  const [activeTab, setActiveTab] = useState('overview');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });

    // Check user's preferred color scheme
    // const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    // setDarkMode(prefersDark);
  }, []);

  // Stats data
  const stats = [
    { value: 245, label: 'Amazon Stores Managed', icon: <FaAmazon />, suffix: '+' },
    { value: 157, label: 'Average ROI Increase', icon: <FaPercent />, suffix: '%' },
    { value: 99, label: 'Uptime Guarantee', icon: <FaShieldAlt />, suffix: '%' },
    { value: 24, label: 'Hour Support', icon: <FaClock />, suffix: '/7' },
  ];

  // Services
  const services = [
    {
      title: 'Store Setup & Optimization',
      description: 'Complete Amazon store creation with SEO optimization',
      icon: <FaTools />,
      features: ['Storefront design', 'SEO optimization', 'Brand registry', 'Content optimization'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Product Research & Warehouse manage',
      description: 'Genuine product research and total warehouse management',
      icon: <FaBrain />,
      features: ['Market analysis', 'Competitor research', 'Warehouse management', 'Trend forecasting'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Review & Feedback Management',
      description: 'Automated reputation management',
      icon: <FaStar />,
      features: ['Review solicitation', 'Feedback automation', 'Issue resolution', 'Brand monitoring'],
      color: 'from-yellow-500 to-amber-500'
    },
  ];

  // Process steps
  const processSteps = [
    { icon: <FaHandshake />, title: 'Strategy Session', desc: 'We analyze your goals and create a custom plan' },
    { icon: <FaRobot />, title: 'Automation Setup', desc: 'Our AI configures your Amazon store for maximum efficiency' },
    { icon: <FaRocket />, title: 'Launch & Scale', desc: 'We launch campaigns and scale your business' },
    { icon: <FaChartLine />, title: 'Optimize & Grow', desc: 'Continuous optimization for sustained growth' },
  ];

  // Testimonials
  const testimonials = [
    {
      name: 'Marcus Thompson',
      role: 'Amazon FBA Seller',
      content: 'From $5k to $45k monthly in 6 months. The automation tools are incredible.',
      rating: 5,
      revenue: '+800%',
      avatar: 'MT'
    },
    {
      name: 'Sophia Chen',
      role: 'E-commerce Entrepreneur',
      content: 'Saved 30+ hours weekly on manual tasks. Their AI optimization doubled my conversions.',
      rating: 5,
      revenue: '+125%',
      avatar: 'SC'
    },
    {
      name: 'David Rodriguez',
      role: 'Brand Owner',
      content: 'Complete hands-off automation. I just check profits daily. Life-changing service.',
      rating: 5,
      revenue: '+350%',
      avatar: 'DR'
    },
  ];
  // Features grid
  const features = [
    {
      title: 'Complete Seller Central Manage',
      description: 'A-Z Management and optimized seller central health.',
      icon: <FaStar className="text-3xl" />,
      stats: '4.8★ avg. rating'
    },
    {
      title: 'Inventory Management',
      description: 'We manage product from sourcing to handling',
      icon: <FaBox className="text-3xl" />,
      stats: '99% stock availability'
    },
    {
      title: 'Relax and earn profit',
      description: 'Spend holidays While we manage your business',
      icon: <FaEye className="text-3xl" />,
      stats: '24/7 tracking'
    },
  ];

  // FAQ items
  const faqs = [
    {
      question: 'How quickly do you see results?',
      answer: 'Most clients see significant improvements within 30 days, with full automation implemented within 2 weeks.'
    },
    {
      question: 'Do I need Amazon experience?',
      answer: 'No, we handle everything from setup to optimization. We provide training and ongoing support.'
    },
    {
      question: 'What makes your AI different?',
      answer: 'Our AI is specifically trained on Amazon marketplace data and continuously learns from millions of data points.'
    },
    {
      question: 'Is there a contract?',
      answer: 'No long-term contracts. Month-to-month service with 30-day money-back guarantee.'
    },
    {
      question: 'Do you work with existing stores?',
      answer: 'Yes, we can optimize existing stores or build new ones from scratch.'
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const floatAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gradient-to-b from-gray-50 to-white'}`}>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="flex lg:flex-row items-center justify-center gap-8 md:gap-12">
            {/* Left Content */}
            <motion.div
              className="items-center space-y-4 mb-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <div className='flex justify-center'>
                <motion.div
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-full px-4 py-2 mb-6 border border-orange-500/20"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <FaAmazon className="text-orange-500" />
                  <span className="font-semibold text-orange-500">Amazon Automation Experts</span>
                </motion.div>
              </div>

              <motion.h1
                className="text-center text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                variants={itemVariants}
              >
                <span className={`${darkMode ? 'bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-400' : 'bg-gradient-to-r from-orange-600 to-yellow-600'} bg-clip-text text-transparent`}>
                  Your Complete Amazon
                </span>
                <span className="block">Store Automation</span>
              </motion.h1>

              <motion.p
                className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-8 leading-relaxed text-center max-w-4xl mx-auto`}
                variants={itemVariants}
              >
                Let our Automate system manage your entire Amazon business. From product research to
                customer service—<span className="font-semibold text-orange-500">fully automated</span>.
                Focus on growth while we handle the operations.
              </motion.p>

              <div className='flex justify-center'>
                <motion.div
                  className="flex flex-col sm:flex-row gap-4 mb-10"
                  variants={itemVariants}
                >
                  <motion.button
                    className="btn bg-gradient-to-r from-orange-500 to-yellow-500 text-white border-0 btn-lg gap-3 shadow-lg"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 20px 40px -10px rgba(245, 158, 11, 0.4)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Get Started</span>
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                  <button
                    className={`btn ${darkMode ? 'btn-outline btn-warning' : 'btn-outline'} btn-lg gap-2`}
                    onClick={() => window.open('https://calendly.com/eliteant/30min', '_blank')}
                  >
                    <FaVideo />
                    Take a Starategy Session
                  </button>
                </motion.div>
              </div>

              {/* Trust Indicators */}
              <div className='flex justify-center'>
                <motion.div
                  className="flex flex-wrap items-center gap-8"
                  variants={itemVariants}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
                      <FaUsersGear className="text-2xl text-yellow-500" />
                    </div>
                    <div>
                      <div className="font-bold text-xl">149 Clients</div>
                      <div className="text-sm opacity-70">Trusted by Our Service</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
                      <FaAward className="text-2xl text-orange-500/70" />
                    </div>
                    <div>
                      <div className="font-bold text-xl">4.9/5 Rating</div>
                      <div className="text-sm opacity-70">245+ Reviews</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
                      <FaMoneyBillTrendUp className="text-2xl text-orange-500" />
                    </div>
                    <div>
                      <div className="font-bold text-xl">8.7M Profit</div>
                      <div className="text-sm opacity-70">500+ Stores</div>
                    </div>
                  </div>

                </motion.div>
              </div>
            </motion.div>

            {/* Right Content - Dashboard */}

          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gradient-to-r from-orange-500/5 to-yellow-500/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-bold text-orange-500 mb-2 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  {stat.value}
                  {stat.suffix}
                </div>
                <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Complete
              <span className={`${darkMode ? 'bg-gradient-to-r from-orange-400 to-amber-400' : 'bg-gradient-to-r from-orange-600 to-amber-600'} bg-clip-text text-transparent pl-2`}>
                Amazon Automation Suite
              </span>
            </h2>
            <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Everything automated. From listing to fulfillment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className={`card ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-xl border ${darkMode ? 'border-gray-700' : 'border-gray-200'} overflow-hidden group`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="card-body p-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white text-2xl mb-6`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <FaCheckCircle className="text-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className={`py-16 md:py-24 ${darkMode ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The
              <span className={`${darkMode ? 'bg-gradient-to-r from-orange-400 to-amber-400' : 'bg-gradient-to-r from-orange-600 to-amber-600'} bg-clip-text text-transparent px-2`}>
                Automation
              </span>
              Process
            </h2>
            <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Simple 4-step process to automate your Amazon business
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-0 right-0 top-1/2 h-0.5 bg-gradient-to-r from-orange-500/20 via-orange-500/40 to-yellow-500/20 -translate-y-1/2"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto text-white text-2xl shadow-lg">
                      {step.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white text-orange-500 rounded-full flex items-center justify-center text-sm font-bold border-2 border-orange-500">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our
              <span className={`${darkMode ? 'bg-gradient-to-r from-orange-400 to-amber-400' : 'bg-gradient-to-r from-orange-600 to-amber-600'} bg-clip-text text-transparent px-2`}>
                Proven Automation
              </span>
              Features
            </h2>
            <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Our AI system handles every aspect of your Amazon business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-2xl border ${darkMode ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-white'} hover:shadow-xl transition-all duration-300`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500/10 to-yellow-500/10">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-3`}>{feature.description}</p>
                    <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-orange-500/10 to-yellow-500/10 text-orange-500 text-sm font-semibold">
                      {feature.stats}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={`py-16 md:py-24 ${darkMode ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Success
              <span className={`${darkMode ? 'bg-gradient-to-r from-orange-400 to-amber-400' : 'bg-gradient-to-r from-orange-600 to-amber-600'} bg-clip-text text-transparent pl-2`}>
                Stories
              </span>
            </h2>
            <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              See how our AI automation transformed these businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className={`card ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="card-body p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-500" />
                      ))}
                    </div>
                    <div className="text-2xl font-bold text-green-500">{testimonial.revenue}</div>
                  </div>
                  <FaQuoteLeft className="text-orange-500 text-2xl mb-4 opacity-50" />
                  <p className={`italic mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    "{testimonial.content}"
                  </p>
                  <FaQuoteRight className="text-orange-500 text-2xl ml-auto opacity-50" />
                  <div className="flex items-center gap-4 mt-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 text-white rounded-full flex items-center justify-center font-bold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-bold">{testimonial.name}</div>
                      <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Youtube Carosoul */}
      <YoutubeSingle darkMode={darkMode}></YoutubeSingle>

      {/* Pricing */}
      {/* <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Automation Plan</h2>
            <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Transparent pricing with no hidden fees
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                className={`card ${tier.popular ? 'relative transform scale-105' : ''} ${darkMode ? 'bg-gray-800' : 'bg-white'} border ${tier.color} shadow-xl`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <div className="badge bg-gradient-to-r from-orange-500 to-yellow-500 border-0 text-white badge-lg px-6 py-3">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="card-body p-8">
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>{tier.description}</p>

                  <div className="mb-8">
                    <div className="text-4xl font-bold">{tier.price}</div>
                    <div className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{tier.period}</div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <FaCheckCircle className="text-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`btn ${tier.popular ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white border-0' : darkMode ? 'btn-outline btn-neutral' : 'btn-outline'} w-full`}>
                    {tier.cta}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Normal Gallery */}
      <Gallery darkMode={darkMode}></Gallery>

      {/* FAQ */}
      <section className={`py-16 md:py-24 ${darkMode ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently
              <span className={`${darkMode ? 'bg-gradient-to-r from-orange-400 to-amber-400' : 'bg-gradient-to-r from-orange-600 to-amber-600'} bg-clip-text text-transparent pl-2`}>
                Asked Questions
              </span>
            </h2>
            <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Everything you need to know about Amazon automation
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className={`collapse collapse-arrow border ${darkMode ? 'border-gray-700' : 'border-gray-200'} ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <input type="checkbox" />
                  <div className="collapse-title text-xl font-medium">
                    {faq.question}
                  </div>
                  <div className="collapse-content">
                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{faq.answer}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-orange-500 to-yellow-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="inline-block mb-6"
              animate={pulseAnimation}
            >
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                <FaRobot className="text-4xl text-white" />
              </div>
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Automate Your Amazon Business?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join 245+ Amazon sellers who automated their stores and increased profits by 157% on average.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn btn-neutral btn-lg gap-3 shadow-lg">
                Start Free Trial <FaArrowRight />
              </button>
              <button className="btn btn-outline btn-neutral btn-lg">
                <FaGraduationCap />
                Free Strategy Session
              </button>
            </div>
            <p className="text-white/70 mt-6">30-day money-back guarantee • No long-term contracts • 24/7 support</p>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      {/* <section className={`py-16 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <FaAmazon className="text-2xl text-orange-500" />
              <h3 className="text-2xl font-bold">Amazon Automation Insights</h3>
            </div>
            <p className={`mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Get our free Amazon automation playbook + weekly tips to scale your store
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered flex-1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn bg-gradient-to-r from-orange-500 to-yellow-500 text-white border-0 gap-2" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Get Free Playbook'}
                <FaEnvelope />
              </button>
            </form>
            <p className={`text-sm mt-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section> */}

    </div>
  );
};

export default Home;