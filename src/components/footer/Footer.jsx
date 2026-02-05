import React, { useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaGithub,
  FaDiscord,
  FaTiktok,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaArrowRight,
  FaChevronRight,
  FaShieldAlt,
  FaLock,
  FaGlobeAmericas,
  FaCreditCard,
  FaHeadset,
  FaQuestionCircle,
  FaFileAlt,
  FaRocket,
  FaAmazon,
  FaShoppingCart,
  FaChartLine,
  FaRobot,
  FaBoxOpen,
  FaUserFriends,
  FaAward,
  FaStar,
  FaRegHeart,
  FaRegCopyright,
  FaMoon,
  FaSun,
  FaWhatsapp,
  FaHome
} from 'react-icons/fa';
import { AppContext } from '../../appcontext/AppContext';
import { SiProgress } from 'react-icons/si';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const { darkMode, setDarkMode } = useContext(AppContext);

  // Toggle dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, [darkMode]);

  // Footer sections
  const footerSections = [
    {
      title: "Quick Links",
      links: [
        { id: 'home', href: '/', label: 'Home', icon: <FaHome /> },
            { id: 'about', href: '/about', label: 'About', icon: <SiProgress /> },
            { id: 'services', href: '/services', label: 'Services', icon: <FaRobot /> },
            { id: 'contact', href: '/contact', label: 'Contact', icon: <FaBoxOpen /> },
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Learning Center", icon: <FaQuestionCircle />, href: "#" },
        { label: "Video Tutorials", icon: <FaYoutube />, href: "#" },
        { label: "Blog & Insights", icon: <FaFileAlt />, href: "#" },
        { label: "Case Studies", icon: <FaAward />, href: "#" },
        { label: "Help Center", icon: <FaHeadset />, href: "#" },
        { label: "Community", icon: <FaUserFriends />, href: "#" }
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About Us", icon: <FaRocket />, href: "/about" },
        { label: "Careers", icon: <FaUserFriends />, href: "/contact" },
        { label: "Press & Media", icon: <FaStar />, href: "/blog" },
        { label: "Partners", icon: <FaAmazon />, href: "#" },
        { label: "Affiliate Program", icon: <FaChartLine />, href: "/services" },
        { label: "Contact Us", icon: <FaHeadset />, href: "/contact" }
      ]
    }
  ];

  // Quick links
  const quickLinks = [
    { label: "Privacy Policy", icon: <FaShieldAlt /> },
    { label: "Terms of Service", icon: <FaFileAlt /> },
    { label: "Cookie Policy", icon: <FaCookieBite /> },
    { label: "GDPR Compliance", icon: <FaLock /> },
    { label: "Security", icon: <FaShieldAlt /> },
    { label: "Sitemap", icon: <FaGlobeAmericas /> }
  ];

  // Payment methods
  const paymentMethods = [
    { name: "Visa", color: "text-blue-600" },
    { name: "Mastercard", color: "text-red-600" },
    { name: "PayPal", color: "text-blue-400" },
    { name: "Amazon Pay", color: "text-orange-500" },
    { name: "Apple Pay", color: "text-gray-800 dark:text-gray-300" },
    { name: "Google Pay", color: "text-gray-800 dark:text-gray-300" }
  ];

  // Social media
  const socialMedia = [
    { platform: "Facebook", icon: <FaFacebook />, color: "text-blue-600", href: "https://www.facebook.com/eliteantbd" },
    { platform: "LinkedIn", icon: <FaLinkedin />, color: "text-blue-700", href: "https://www.linkedin.com/company/eliteant" },
    { platform: "Instagram", icon: <FaInstagram />, color: "text-pink-600", href: "https://www.instagram.com/eliteantbd/" },
    { platform: "YouTube", icon: <FaYoutube />, color: "text-red-600", href: "https://www.youtube.com/@Eliteant-com" },
  ]

  // Contact info
  const contactInfo = [
    { icon: <FaEnvelope />, label: "Email", value: "support@eliteant.com", link: "mailto:support@eliteant.com" },
    { icon: <FaPhone />, label: "Phone", value: "+880 1768-937103", link: "tel:+880 1768-937103" },
    { icon: <FaMapMarkerAlt />, label: "Location", value: "MRF Tyers Building, Rajshahi 6100", link: "https://maps.app.goo.gl/r7L87etfHHqvrVp46" }
  ];

  // Languages
  const languages = ['English', 'Spanish', 'French', 'German', 'Chinese', 'Japanese'];

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you for subscribing to our newsletter!');
      setEmail('');
    }, 1000);
  };

  const animationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    stagger: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1
        }
      }
    },
    item: {
      hidden: { opacity: 0, x: -20 },
      visible: { opacity: 1, x: 0 }
    }
  };

  return (
    <footer className={`relative overflow-hidden ${darkMode ? 'bg-gray-900 text-gray-300' : 'bg-gray-900 text-gray-300'}`}>
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-500/20 via-transparent to-blue-500/20"></div>
      </div>

      {/* Top Footer Section */}
      <div className="relative z-10 border-b border-gray-800/50">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Newsletter Section */}
            <motion.div
              variants={animationVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500">
                  <FaEnvelope className="text-2xl text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Stay Updated</h3>
                  <p className="text-gray-400">Get the latest automation tips and success stories</p>
                </div>
              </div>

              <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  />
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-shadow disabled:opacity-70"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Subscribing...
                      </>
                    ) : (
                      <>
                        Subscribe
                        <FaArrowRight />
                      </>
                    )}
                  </motion.button>
                </div>
                <p className="text-sm text-gray-500">
                  By subscribing, you agree to our Privacy Policy and consent to receive updates.
                </p>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              variants={animationVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">
                  <FaHeadset className="text-2xl text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">24/7 Support</h3>
                  <p className="text-gray-400">We're here to help you succeed</p>
                </div>
              </div>

              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <motion.a
                    key={index}
                    href={contact.link}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-800/50 transition-colors group"
                    variants={animationVariants.item}
                    whileHover={{ x: 5 }}
                    target='_blank'
                  >
                    <div className="p-2 rounded-lg bg-gray-800 group-hover:bg-gray-700">
                      {contact.icon}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-500">{contact.label}</div>
                      <div className="font-medium text-white">{contact.value}</div>
                    </div>
                    <FaChevronRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            {/* Brand Column */}
            <motion.div
              className="lg:col-span-2"
              variants={animationVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center">
                    <FaAmazon className="text-2xl text-white" />
                  </div>
                  <div>
                    <a href={'/'}>
                      <img src="/Elite-Ant-Logo.webp" alt="Site Logo" className={`w-32 h-auto invert`} />
                    </a>
                  </div>
                </div>
                <p className="text-gray-400 mb-6">
                  We help e-commerce entrepreneurs scale their Amazon businesses with AI-powered automation tools and expert guidance.
                </p>

                {/* Social Media */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-4">Follow Us</h4>
                  <div className="flex flex-wrap gap-3">
                    {socialMedia.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        className={`w-10 h-10 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-center ${social.color} transition-colors`}
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label={social.platform}
                        target='_blank'
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Footer Sections */}
            {footerSections.map((section, index) => (
              <motion.div
                key={section.title}
                variants={animationVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-white font-bold text-lg mb-6 pb-2 border-b border-gray-800">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <motion.li
                      key={linkIndex}
                      variants={animationVariants.item}
                      whileHover={{ x: 5 }}
                    >
                      <a
                        href={link.href}
                        className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                      >
                        <span className="text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity">
                          <FaChevronRight className="text-xs" />
                        </span>
                        <span>{link.label}</span>
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Trust Badges */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"
            variants={animationVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { icon: <FaShieldAlt />, label: "Secure & Encrypted", desc: "Bank-level security" },
              { icon: <FaAward />, label: "Award Winning", desc: "Industry recognition" },
              { icon: <FaUserFriends />, label: "500+ Clients", desc: "Global community" },
              { icon: <FaChartLine />, label: "98% Success Rate", desc: "Proven results" }
            ].map((badge, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-gray-800/30 border border-gray-700/30 text-center hover:bg-gray-800/50 transition-colors"
              >
                <div className="text-3xl text-orange-500 mb-3 flex justify-center">{badge.icon}</div>
                <div className="font-bold text-white mb-1">{badge.label}</div>
                <div className="text-sm text-gray-400">{badge.desc}</div>
              </div>
            ))}
          </motion.div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-800/50 pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
              {/* Quick Links */}
              <div className="flex flex-wrap justify-center gap-4">
                {quickLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href="/"
                    className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2"
                    whileHover={{ y: -2 }}
                  >
                    {link.icon}
                    {link.label}
                  </motion.a>
                ))}
              </div>

              {/* Language Selector */}
              <div className="relative">
                <select
                  value={selectedLanguage}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                  className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white appearance-none pr-8 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  {languages.map((lang) => (
                    <option key={lang} value={lang}>{lang}</option>
                  ))}
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <FaGlobeAmericas className="text-gray-400" />
                </div>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="mt-8 text-center">
              <div className="text-gray-400 text-sm mb-3 flex items-center justify-center gap-2">
                <FaCreditCard />
                <span>Accepted Payment Methods</span>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                {paymentMethods.map((method, index) => (
                  <div
                    key={index}
                    className={`px-3 py-1 rounded-lg bg-gray-800/50 ${method.color} text-sm font-medium`}
                  >
                    {method.name}
                  </div>
                ))}
              </div>
            </div>

            {/* Copyright */}
            <div className="mt-8 text-center">
              <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-gray-500 text-sm">
                <div className="flex items-center gap-2">
                  <FaRegCopyright />
                  <span>{new Date().getFullYear()} AutoMate Amazon Automation. All rights reserved.</span>
                </div>
                <div className="hidden md:block">•</div>
                <div>Made with <FaRegHeart className="inline text-red-500" /> for e-commerce entrepreneurs</div>
              </div>

              {/* Back to Top */}
              <motion.button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="mt-6 mx-auto flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors text-sm"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaArrowRight className="rotate-270" />
                Back to Top
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Support Button */}
      {/* <motion.button
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-2xl flex items-center justify-center ${darkMode ? 'bg-gray-800' : 'bg-white'} border border-gray-700/30`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.location.href = '/contact'}
      >
        <div className="relative">
          <FaHeadset className="text-orange-500 text-xl" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
        </div>
      </motion.button> */}

      {/* Dark Mode Toggle */}
      <motion.button
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-2xl z-50 flex items-center justify-center"
        onClick={() => setDarkMode(!darkMode)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ rotate: darkMode ? 180 : 0 }}
      >
        <div className={`w-full h-full rounded-full flex items-center justify-center ${darkMode ? 'bg-gray-800 text-yellow-300' : 'bg-gray-100 text-gray-800'}`}>
          {darkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
        </div>
      </motion.button>

      {/* Scroll to Top */}
      <motion.button
        className="fixed bottom-24 right-7 w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-lg z-50 flex items-center justify-center"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        ↑
      </motion.button>

      {/* Whats App cta */}
      <motion.button
        className={`fixed bottom-40 right-6 w-14 h-14 rounded-full shadow-lg z-50 flex items-center justify-center backdrop-blur-lg ${darkMode ? 'bg-black/70' : 'bg-white/70'}`}
        onClick={() => window.open('https://wa.me/8801768937103', '_blank')}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaWhatsapp
          className={`text-3xl ${darkMode ? 'text-white' : 'text-green-700'} font-bold`}
        >

        </FaWhatsapp>
      </motion.button>
    </footer>
  );
};

// Custom Cookie icon component
const FaCookieBite = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 512 512">
    <path d="M510.52 255.82c-69.97-.85-126.47-57.69-126.47-127.86-70.17 0-127-56.49-127.86-126.45-27.26-4.14-55.13.3-79.72 12.82l-69.13 35.22a132.221 132.221 0 00-57.79 57.81l-35.1 68.88a132.645 132.645 0 00-12.82 80.95l12.08 76.27a132.521 132.521 0 0037.16 72.96l54.77 54.76a132.036 132.036 0 0072.71 37.06l76.71 12.15c27.51 4.36 55.7-.11 80.53-12.76l68.85-35.21a132.273 132.273 0 0057.79-57.81l35.1-68.88c12.56-24.64 17.01-52.58 12.91-79.91zM176 368c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm32-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm160 128c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z" />
  </svg>
);

export default Footer;