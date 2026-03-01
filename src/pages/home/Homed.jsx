import React, { useState, useEffect, useContext } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
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
  FaBrain,
  FaQuoteLeft,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaSun,
  FaMoon,
  FaShoppingCart,
  FaBox,
  FaChartBar,
  FaRocket,
  FaHandshake,
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaInstagram
} from 'react-icons/fa';
import { FiArrowRight, FiCheck, FiPlay, FiPause } from 'react-icons/fi';
import Gallery from '../../components/gallery/Gallery';
import YoutubeSingle from '../../components/youtubesingle/YoutubeSingle';
import { AppContext } from '../../appcontext/AppContext';

const Homed = () => {
  const { darkMode, setDarkMode } = useContext(AppContext);
  const [activeFaq, setActiveFaq] = useState(null);
  const [email, setEmail] = useState('');
  
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      offset: 50,
    });
  }, []);

  // Simplified data structure
  const stats = [
    { value: '245+', label: 'Active Stores', icon: FaShoppingCart },
    { value: '157%', label: 'Avg. ROI Increase', icon: FaChartBar },
    { value: '99.9%', label: 'Uptime', icon: FaShieldAlt },
    { value: '24/7', label: 'Support', icon: FaClock },
  ];

  const services = [
    {
      title: 'Store Automation',
      description: 'Fully automated store management with AI-powered optimization',
      features: ['Inventory management', 'Price optimization', 'Order processing'],
      icon: FaRobot,
      color: 'orange'
    },
    {
      title: 'PPC Management',
      description: 'Smart advertising campaigns that maximize ROI',
      features: ['Automated bidding', 'Keyword optimization', 'Performance tracking'],
      icon: FaChartLine,
      color: 'blue'
    },
    {
      title: 'Product Research',
      description: 'Data-driven product discovery and validation',
      features: ['Market analysis', 'Competitor tracking', 'Profit forecasting'],
      icon: FaSearch,
      color: 'green'
    }
  ];

  const testimonials = [
    {
      name: 'Marcus Thompson',
      role: 'Amazon Seller',
      content: 'Increased revenue by 300% in 6 months. The automation is seamless.',
      rating: 5,
      image: 'https://i.pravatar.cc/100?img=1'
    },
    {
      name: 'Sophia Chen',
      role: 'E-commerce Owner',
      content: 'Saved 30 hours weekly. Best investment for my Amazon business.',
      rating: 5,
      image: 'https://i.pravatar.cc/100?img=2'
    },
    {
      name: 'David Rodriguez',
      role: 'Brand Owner',
      content: 'From $10k to $50k monthly. The AI optimization is incredible.',
      rating: 5,
      image: 'https://i.pravatar.cc/100?img=3'
    }
  ];

  const faqs = [
    {
      q: 'How quickly can I start?',
      a: 'Most stores are fully automated within 48 hours of onboarding.'
    },
    {
      q: 'Do I need technical experience?',
      a: 'No, our team handles everything. You just need an Amazon seller account.'
    },
    {
      q: 'What happens if I want to cancel?',
      a: 'You can cancel anytime with no penalties. We offer a 30-day money-back guarantee.'
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
    }`}>
      
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        darkMode ? 'bg-gray-900/80 backdrop-blur-md border-gray-800' : 'bg-white/80 backdrop-blur-md border-gray-200'
      } border-b`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center">
                <FaAmazon className="text-white text-sm" />
              </div>
              <span className="font-bold text-xl">AutoStore</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm hover:text-orange-500 transition-colors">Features</a>
              <a href="#services" className="text-sm hover:text-orange-500 transition-colors">Services</a>
              <a href="#testimonials" className="text-sm hover:text-orange-500 transition-colors">Testimonials</a>
              <a href="#pricing" className="text-sm hover:text-orange-500 transition-colors">Pricing</a>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg transition-colors ${
                  darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {darkMode ? <FaSun className="text-yellow-500" /> : <FaMoon />}
              </button>
              <button className="hidden md:block px-4 py-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg text-sm font-medium hover:shadow-lg transition-shadow">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 overflow-hidden">
        <div className="container mx-auto">
          <motion.div 
            style={{ opacity: heroOpacity, scale: heroScale }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
                  <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
                  <span className="text-sm font-medium text-orange-500">AI-POWERED AUTOMATION</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Automate Your{' '}
                  <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
                    Amazon Business
                  </span>
                </h1>

                <p className={`text-lg mb-8 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Let AI handle your store operations while you focus on growth. 
                  From product research to customer service — fully automated.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <button className="group px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg font-medium flex items-center justify-center gap-2 hover:shadow-lg transition-shadow">
                    Start Free Trial
                    <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    <FiPlay className="text-orange-500" />
                    Watch Demo
                  </button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index}>
                      <div className="text-2xl font-bold text-orange-500">{stat.value}</div>
                      <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Content - Dashboard Preview */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className={`relative rounded-2xl shadow-2xl overflow-hidden ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              } border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                <div className="p-6">
                  {/* Dashboard Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center">
                        <FaAmazon className="text-white text-sm" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Store Dashboard</h3>
                        <p className="text-xs text-gray-500">Premium Store</p>
                      </div>
                    </div>
                    <div className="px-2 py-1 bg-green-500/10 rounded-full">
                      <span className="text-xs font-medium text-green-500">AI Active</span>
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'}`}>
                      <div className="text-xs text-gray-500 mb-1">Today's Sales</div>
                      <div className="text-lg font-bold text-green-500">$4,827</div>
                    </div>
                    <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'}`}>
                      <div className="text-xs text-gray-500 mb-1">Orders</div>
                      <div className="text-lg font-bold text-blue-500">42</div>
                    </div>
                    <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'}`}>
                      <div className="text-xs text-gray-500 mb-1">Rating</div>
                      <div className="text-lg font-bold text-purple-500">4.8★</div>
                    </div>
                  </div>

                  {/* AI Actions */}
                  <div className={`p-4 rounded-lg mb-6 ${
                    darkMode ? 'bg-orange-500/5' : 'bg-orange-50'
                  }`}>
                    <div className="flex items-center gap-2 mb-3">
                      <FaBrain className="text-orange-500" />
                      <span className="text-sm font-medium">AI Optimization</span>
                    </div>
                    <div className="space-y-2">
                      {['Prices optimized (6 items)', 'PPC bids adjusted', 'Inventory reordered'].map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                          <FiCheck className="text-green-500" />
                          <span className="text-gray-600 dark:text-gray-400">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Mini Chart */}
                  <div>
                    <div className="flex justify-between text-sm mb-3">
                      <span className="font-medium">Revenue Trend</span>
                      <span className="text-green-500">+47%</span>
                    </div>
                    <div className="flex items-end gap-1 h-12">
                      {[40, 55, 65, 75, 85, 95, 100].map((height, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-gradient-to-t from-orange-500 to-yellow-500 rounded-t"
                          style={{ height: `${height}%` }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-6 -left-6 p-4 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl shadow-xl hidden lg:block"
              >
                <div className="text-white text-center">
                  <div className="text-2xl font-bold">157%</div>
                  <div className="text-xs opacity-90">Average ROI</div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className={`py-20 px-4 ${
        darkMode ? 'bg-gray-800/30' : 'bg-gray-50'
      }`}>
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need to{' '}
              <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
                Scale
              </span>
            </h2>
            <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
              Complete automation suite for your Amazon business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className={`p-6 rounded-xl ${
                  darkMode ? 'bg-gray-800' : 'bg-white'
                } shadow-lg border ${darkMode ? 'border-gray-700' : 'border-gray-100'}`}
              >
                <div className={`w-12 h-12 rounded-lg bg-${service.color}-500/10 flex items-center justify-center mb-4`}>
                  <service.icon className={`text-${service.color}-500 text-xl`} />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className={`mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <FiCheck className="text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by{' '}
              <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
                Successful Sellers
              </span>
            </h2>
            <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
              Join hundreds of sellers who automated their stores
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-xl ${
                  darkMode ? 'bg-gray-800' : 'bg-white'
                } shadow-lg border ${darkMode ? 'border-gray-700' : 'border-gray-100'}`}
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500" />
                  ))}
                </div>
                <p className={`mb-6 italic ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <div className="font-medium">{testimonial.name}</div>
                    <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube Section */}
      <YoutubeSingle darkMode={darkMode} />

      {/* Gallery */}
      <Gallery darkMode={darkMode} />

      {/* FAQ Section */}
      <section className={`py-20 px-4 ${
        darkMode ? 'bg-gray-800/30' : 'bg-gray-50'
      }`}>
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked{' '}
              <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`border ${darkMode ? 'border-gray-700' : 'border-gray-200'} rounded-lg overflow-hidden`}
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className={`w-full text-left p-4 flex justify-between items-center ${
                    darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'
                  } transition-colors`}
                >
                  <span className="font-medium">{faq.q}</span>
                  <FiArrowRight className={`transform transition-transform ${
                    activeFaq === index ? 'rotate-90' : ''
                  }`} />
                </button>
                {activeFaq === index && (
                  <div className={`p-4 border-t ${darkMode ? 'border-gray-700 bg-gray-700/30' : 'border-gray-200 bg-gray-50'}`}>
                    <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className={`max-w-4xl mx-auto p-8 md:p-12 rounded-2xl ${
            darkMode 
              ? 'bg-gradient-to-br from-gray-800 to-gray-900' 
              : 'bg-gradient-to-br from-orange-500 to-yellow-500'
          }`}>
            <div className="text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Automate Your Store?
              </h2>
              <p className="text-lg opacity-90 mb-8">
                Join 245+ sellers who increased their revenue by 157% on average
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-white text-orange-500 rounded-lg font-medium hover:shadow-lg transition-shadow">
                  Start Free Trial
                </button>
                <button className="px-8 py-3 border-2 border-white text-white rounded-lg font-medium hover:bg-white/10 transition-colors">
                  Schedule Demo
                </button>
              </div>
              <p className="text-sm opacity-75 mt-6">
                30-day money-back guarantee • No contracts • 24/7 support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 px-4 border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center">
                  <FaAmazon className="text-white text-sm" />
                </div>
                <span className="font-bold">AutoStore</span>
              </div>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                AI-powered automation for Amazon sellers
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className={darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}>Features</a></li>
                <li><a href="#" className={darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}>Pricing</a></li>
                <li><a href="#" className={darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}>FAQ</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className={darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}>About</a></li>
                <li><a href="#" className={darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}>Blog</a></li>
                <li><a href="#" className={darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}>Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-4">Connect</h4>
              <div className="flex gap-4">
                <a href="#" className={`p-2 rounded-lg ${
                  darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
                } transition-colors`}>
                  <FaTwitter />
                </a>
                <a href="#" className={`p-2 rounded-lg ${
                  darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
                } transition-colors`}>
                  <FaLinkedin />
                </a>
                <a href="#" className={`p-2 rounded-lg ${
                  darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
                } transition-colors`}>
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
          
          <div className={`mt-12 pt-8 border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'} text-center text-sm ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            © 2024 AutoStore. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homed;