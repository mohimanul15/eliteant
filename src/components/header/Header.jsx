import React, { useState, useEffect, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaAmazon,
  FaBars,
  FaTimes,
  FaSearch,
  FaUser,
  FaShoppingCart,
  FaBell,
  FaCog,
  FaRocket,
  FaChartLine,
  FaRobot,
  FaBoxOpen,
  FaGlobeAmericas,
  FaShieldAlt,
  FaStar,
  FaChevronDown,
  FaHome,
  FaStore,
  FaTools,
  FaDollarSign,
  FaGraduationCap,
  FaPhone,
  FaEnvelope,
  FaSignInAlt,
  FaUserPlus
} from 'react-icons/fa';
import { SiProgress } from 'react-icons/si';
import { Link } from 'react-router';
import { AppContext } from '../../appcontext/AppContext';

const Header = () => {
  const { darkMode } = useContext(AppContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState('home');
  const [showSearch, setShowSearch] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  // Navigation items
  const navItems = [
    { id: 'home', link: '/', label: 'Home', icon: <FaHome /> },
    { id: 'about', link: 'about', label: 'About', icon: <SiProgress /> },
    { id: 'services', link: 'services', label: 'Services', icon: <FaRobot /> },
    { id: 'contact', link: 'contact', label: 'Contact', icon: <FaBoxOpen /> },
  ];

  // Dropdown menu items
  const dropdownItems = [
    { label: 'Store Setup', icon: <FaStore /> },
    { label: 'PPC Automation', icon: <FaChartLine /> },
    { label: 'Inventory AI', icon: <FaRobot /> },
    { label: 'Global Shipping', icon: <FaGlobeAmericas /> },
    { label: 'Brand Protection', icon: <FaShieldAlt /> },
  ];


  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation variants
  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const menuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2
      }
    }
  };

  const searchVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: {
      width: "300px",
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      {/* Glassmorphism Header */}
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}
        variants={headerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Background with blur effect */}
        <div className={`absolute inset-0 backdrop-blur-md ${darkMode ? 'bg-gray-900/70' : 'bg-white/70'} border-b ${darkMode ? 'border-gray-700/30' : 'border-gray-200/30'}`}>
          {/* Animated gradient background */}
          {/* <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-orange-500 to-amber-500"></div>
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-r from-blue-500 to-cyan-500"></div>
          </div> */}
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <div className="flex items-center gap-3">
              <button
                className={`lg:hidden w-10 h-10 rounded-xl flex items-center justify-center ${darkMode ? 'bg-gray-800/50 hover:bg-gray-700/50' : 'bg-white/50 hover:bg-gray-100/50'} backdrop-blur-sm border ${darkMode ? 'border-gray-700/30' : 'border-gray-200/30'}`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <FaTimes /> : <FaBars />}
              </button>

              <div className="flex items-center gap-3">
                {/* <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white shadow-lg`}>
                  <FaAmazon className="text-xl" />
                </div> */}
                <div>
                  <h1 className="text-xl font-bold">
                    {/* <span className="text-orange-500">Auto</span>
                    <span className={darkMode ? 'text-white' : 'text-gray-900'}>Mate</span> */}
                    <Link to={'/'}>
                      <img src="/Elite-Ant-Logo.webp" alt="Site Logo" className={`w-32 h-auto ${darkMode ? 'invert' : ''}`} />
                    </Link>
                  </h1>
                  {/* <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Amazon Automation</p> */}
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.link}
                >
                  <button
                    onClick={() => setActiveNav(item.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all ${activeNav === item.id
                      ? `bg-gradient-to-r from-orange-500/20 to-amber-500/20 ${darkMode ? 'text-white' : 'text-gray-900'} border ${darkMode ? 'border-orange-500/30' : 'border-orange-500/20'}`
                      : `${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'} hover:bg-white/10`
                      }`}
                  >
                    <span className="text-sm">{item.icon}</span>
                    <span className="font-medium">{item.label}</span>
                  </button>
                </Link>
              ))}

              {/* Dropdown Menu */}
              {/* <div className="relative">
                <button
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'} hover:bg-white/10`}
                  onMouseEnter={() => setShowSearch(false)}
                >
                  <span>More</span>
                  <FaChevronDown className="text-xs" />
                </button>
                
                <div className="absolute top-full left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className={`mt-2 rounded-xl ${darkMode ? 'bg-gray-800/90' : 'bg-white/90'} backdrop-blur-xl border ${darkMode ? 'border-gray-700/50' : 'border-gray-200/50'} shadow-2xl overflow-hidden`}>
                    {dropdownItems.map((item, index) => (
                      <button
                        key={index}
                        className={`flex items-center gap-3 w-full px-4 py-3 ${darkMode ? 'hover:bg-gray-700/50' : 'hover:bg-gray-100/50'} transition-colors`}
                      >
                        <span className={darkMode ? 'text-orange-400' : 'text-orange-500'}>{item.icon}</span>
                        <span className={darkMode ? 'text-gray-200' : 'text-gray-800'}>{item.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div> */}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-2">
              {/* Search Bar */}
              <AnimatePresence>
                {showSearch && (
                  <motion.div
                    className="hidden md:block"
                    variants={searchVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                  >
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search automation tools..."
                        className={`w-full pl-10 pr-4 py-2 rounded-xl ${darkMode ? 'bg-gray-800/50 border-gray-700/50 text-white' : 'bg-white/50 border-gray-200/50 text-gray-900'} border backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-orange-500/50`}
                      />
                      <FaSearch className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Search Button */}
              {/* <button
                className={`w-10 h-10 rounded-xl flex items-center justify-center ${darkMode ? 'bg-gray-800/50 hover:bg-gray-700/50' : 'bg-white/50 hover:bg-gray-100/50'} backdrop-blur-sm border ${darkMode ? 'border-gray-700/30' : 'border-gray-200/30'}`}
                onClick={() => setShowSearch(!showSearch)}
              >
                <FaSearch />
              </button> */}

              {/* Notifications */}
              {/* <div className="relative">
                <button
                  className={`w-10 h-10 rounded-xl flex items-center justify-center relative ${darkMode ? 'bg-gray-800/50 hover:bg-gray-700/50' : 'bg-white/50 hover:bg-gray-100/50'} backdrop-blur-sm border ${darkMode ? 'border-gray-700/30' : 'border-gray-200/30'}`}
                  onClick={() => setShowNotifications(!showNotifications)}
                >
                  <FaBell />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                </button>

                <AnimatePresence>
                  {showNotifications && (
                    <motion.div
                      className="absolute right-0 mt-2"
                      variants={menuVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      <div className={`w-80 rounded-xl ${darkMode ? 'bg-gray-800/90' : 'bg-white/90'} backdrop-blur-xl border ${darkMode ? 'border-gray-700/50' : 'border-gray-200/50'} shadow-2xl overflow-hidden`}>
                        <div className={`p-4 border-b ${darkMode ? 'border-gray-700/50' : 'border-gray-200/50'}`}>
                          <h3 className="font-bold">Notifications</h3>
                          <span className="text-xs text-orange-500">3 new</span>
                        </div>
                        <div className="max-h-96 overflow-y-auto">
                          {[
                            { title: 'Store Optimization Complete', time: '2 min ago', unread: true },
                            { title: 'New Order Received', time: '15 min ago', unread: true },
                            { title: 'PPC Campaign Updated', time: '1 hour ago', unread: true },
                            { title: 'Weekly Report Ready', time: '2 days ago', unread: false },
                            { title: 'System Update Available', time: '3 days ago', unread: false },
                          ].map((notif, index) => (
                            <div
                              key={index}
                              className={`p-4 border-b ${darkMode ? 'border-gray-700/30 hover:bg-gray-700/50' : 'border-gray-200/30 hover:bg-gray-100/50'} transition-colors ${notif.unread ? darkMode ? 'bg-blue-900/20' : 'bg-blue-50/50' : ''}`}
                            >
                              <div className="flex items-start gap-3">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${darkMode ? 'bg-gray-700/50' : 'bg-gray-100/50'}`}>
                                  <FaBell className="text-xs" />
                                </div>
                                <div className="flex-1">
                                  <p className={`text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                                    {notif.title}
                                  </p>
                                  <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                    {notif.time}
                                  </p>
                                </div>
                                {notif.unread && (
                                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-1"></div>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className={`p-3 ${darkMode ? 'bg-gray-800/50' : 'bg-gray-50/50'} text-center`}>
                          <button className={`text-sm ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'}`}>
                            View All Notifications
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div> */}

              {/* Cart */}
              {/* <button className={`w-10 h-10 rounded-xl flex items-center justify-center relative ${darkMode ? 'bg-gray-800/50 hover:bg-gray-700/50' : 'bg-white/50 hover:bg-gray-100/50'} backdrop-blur-sm border ${darkMode ? 'border-gray-700/30' : 'border-gray-200/30'}`}>
                <FaShoppingCart />
                <span className="absolute top-1 right-1 w-4 h-4 bg-orange-500 text-white text-xs rounded-full flex items-center justify-center">
                  3
                </span>
              </button> */}

              {/* User Menu */}
              <div className="relative">
                {/* <button
                  className={`w-10 h-10 rounded-xl flex items-center justify-center ${darkMode ? 'bg-gray-800/50 hover:bg-gray-700/50' : 'bg-white/50 hover:bg-gray-100/50'} backdrop-blur-sm border ${darkMode ? 'border-gray-700/30' : 'border-gray-200/30'}`}
                  onClick={() => setShowUserMenu(!showUserMenu)}
                >
                  <FaUser />
                </button> */}

                <AnimatePresence>
                  {showUserMenu && (
                    <motion.div
                      className="absolute right-0 mt-2"
                      variants={menuVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      <div className={`w-64 rounded-xl ${darkMode ? 'bg-gray-800/90' : 'bg-white/90'} backdrop-blur-xl border ${darkMode ? 'border-gray-700/50' : 'border-gray-200/50'} shadow-2xl overflow-hidden`}>
                        {/* User Info */}
                        <div className={`p-4 border-b ${darkMode ? 'border-gray-700/50' : 'border-gray-200/50'}`}>
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white">
                              <FaUser className="text-lg" />
                            </div>
                            <div>
                              <h4 className="font-bold">John Doe</h4>
                              <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Pro Plan</p>
                            </div>
                          </div>
                        </div>

                        {/* User Menu Items */}
                        {/* <div className="py-2">
                          {userMenuItems.map((item, index) => (
                            <button
                              key={index}
                              className={`flex items-center gap-3 w-full px-4 py-3 ${darkMode ? 'hover:bg-gray-700/50' : 'hover:bg-gray-100/50'} transition-colors`}
                            >
                              <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>{item.icon}</span>
                              <span className={darkMode ? 'text-gray-200' : 'text-gray-800'}>{item.label}</span>
                            </button>
                          ))}
                        </div> */}

                        {/* Footer Actions */}
                        <div className={`p-3 border-t ${darkMode ? 'border-gray-700/50' : 'border-gray-200/50'}`}>
                          {/* <div className="flex gap-2">
                            <button className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg ${darkMode ? 'bg-gray-700/50 hover:bg-gray-600/50' : 'bg-gray-100/50 hover:bg-gray-200/50'} transition-colors`}>
                              <FaSignInAlt className="text-sm" />
                              <span className="text-sm">Sign Out</span>
                            </button>
                            <button className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 text-white`}>
                              <FaUserPlus className="text-sm" />
                              <span className="text-sm">Upgrade</span>
                            </button>
                          </div> */}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* CTA Button */}
              <button className={`hidden md:flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg hover:shadow-xl transition-shadow ml-2`}>
                <FaRocket />
                <span className="font-medium">Get Started</span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="lg:hidden absolute top-full left-0 right-0"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className={`mt-2 mx-4 rounded-xl ${darkMode ? 'bg-gray-800/90' : 'bg-white/90'} backdrop-blur-xl border ${darkMode ? 'border-gray-700/50' : 'border-gray-200/50'} shadow-2xl overflow-hidden`}>
                <div className="p-4">
                  {/* Mobile Navigation */}
                  <div className="space-y-1">
                    {navItems.map((item) => (
                      <Link
                        key={item.id}
                        to={item.link}
                      >
                        <button
                          key={item.id}
                          onClick={() => {
                            setActiveNav(item.id);
                            setIsMenuOpen(false);
                          }}
                          className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg ${activeNav === item.id
                            ? `bg-gradient-to-r from-orange-500/20 to-amber-500/20 ${darkMode ? 'text-white' : 'text-gray-900'}`
                            : `${darkMode ? 'text-gray-300 hover:text-white hover:bg-gray-700/50' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100/50'}`
                            }`}
                        >
                          <span>{item.icon}</span>
                          <span className="font-medium">{item.label}</span>
                        </button>
                      </Link>
                    ))}
                  </div>

                  {/* Mobile Dropdown Items */}
                  <div className="mt-4 pt-4 border-t border-gray-200/30 dark:border-gray-700/30">
                    <h4 className="px-4 text-sm font-semibold mb-2">More Features</h4>
                    <div className="space-y-1">
                      {dropdownItems.map((item, index) => (
                        <button
                          key={index}
                          className="flex items-center gap-3 w-full px-4 py-2 rounded-lg hover:bg-gray-100/50 dark:hover:bg-gray-700/50"
                        >
                          <span className="text-orange-500">{item.icon}</span>
                          <span>{item.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Mobile CTA */}
                  <div className="mt-6 flex gap-3">
                    <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 text-white">
                      <FaSignInAlt />
                      <span>Sign In</span>
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-orange-500 text-orange-500">
                      <FaUserPlus />
                      <span>Sign Up</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Spacer for fixed header */}
      <div className="h-20"></div>

      {/* Floating Action Button */}
      <motion.button
        className={`fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full shadow-2xl flex items-center justify-center ${darkMode ? 'bg-gray-800/80' : 'bg-white/80'} backdrop-blur-md border ${darkMode ? 'border-gray-700/50' : 'border-gray-200/50'}`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <FaRocket className="text-orange-500" />
      </motion.button>

      {/* Live Stats Indicator */}
      <motion.div
        className={`fixed top-24 right-6 z-40 px-4 py-2 rounded-xl ${darkMode ? 'bg-gray-800/80' : 'bg-white/80'} backdrop-blur-md border ${darkMode ? 'border-gray-700/50' : 'border-gray-200/50'} shadow-lg hidden lg:block`}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7 }}
      >
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Live</span>
          </div>
          <div className="text-sm">
            <span className={darkMode ? 'text-orange-400' : 'text-orange-600'}>$12,847</span>
            <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}> today</span>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Header;