import React, { useState, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaClock,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaHeadset,
  FaCheckCircle,
  FaRocket,
  FaChevronRight,
  FaStar,
  FaUser,
  FaBuilding,
  FaGlobe
} from 'react-icons/fa';
import { AppContext } from '../../appcontext/AppContext';

const Contact = () => {
    const {darkMode} = useContext(AppContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });

  const [selectedService, setSelectedService] = useState('General Inquiry');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Services for dropdown
  const services = [
    'General Inquiry',
    'Amazon FBA Service',
    'Walmart Dropshipping',
    'Shopify Store Setup',
    'Private Label',
    'Digital Marketing',
    'Social Media Management',
    'Website Development',
    'Graphic Design',
    'Custom Automation Solution'
  ];

  // Team members
// Leadership team
  const teamMembers = [
    {
      name: "Toufiq Elahi",
      role: "Founder & CEO",
      bio: "Amazon Seller with 8 years experience. Built and sold 3 e-commerce brands before founding EliteAnt.",
      imageColor: "from-blue-500 to-cyan-500",
      expertise: ["Amazon FBA", "Business Strategy", "Independent Automation"]
    },
    {
      name: "Hridoy Hasan",
      role: "CTO",
      bio: "Sourcing specialist with 10+ years in e-commerce automation. Built 40+ successful Seller Central.",
      imageColor: "from-purple-500 to-pink-500",
      expertise: ["Automation", "Review Analyst", "Product Q/A"]
    },
    {
      name: "Arif Mahmud",
      role: "Operation Manager",
      bio: "Amazon operations manager. Expert in Branding and Seller Central Health.",
      imageColor: "from-green-500 to-emerald-500",
      expertise: ["Supply Chain", "Logistics", "Process Optimization"]
    },
    {
      name: "Moniur Rahman",
      role: "Client Success Director",
      bio: "10+ years in customer success. 24*7 Service monitor with complex task handeling.",
      imageColor: "from-orange-500 to-red-500",
      expertise: ["Client Strategy", "Growth Consulting", "Relationship Management"]
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would connect to your backend here
    console.log('Form submitted:', { ...formData, service: selectedService });
    
    // Show success animation
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
      });
      setSelectedService('General Inquiry');
    }, 3000);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -5,
      scale: 1.02,
      transition: {
        duration: 0.2
      }
    }
  };

  // Contact info cards
  const contactInfo = [
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: "Email Address",
      details: ["support@amazonautomation.com", "sales@amazonautomation.com"],
      description: "Typically respond within 4 hours",
      color: "from-orange-500 to-amber-500",
      action: "mailto:support@amazonautomation.com"
    },
    {
      icon: <FaPhone className="text-2xl" />,
      title: "Phone Number",
      details: ["+1 (800) 123-4567", "+1 (800) 987-6543"],
      description: "Mon-Fri 9:00 AM - 6:00 PM EST",
      color: "from-blue-500 to-cyan-500",
      action: "tel:+18001234567"
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: "Office Location",
      details: ["123 Automation Avenue", "Suite 500, Seattle, WA 98101"],
      description: "Visit by appointment only",
      color: "from-purple-500 to-pink-500",
      action: "https://maps.google.com"
    },
    {
      icon: <FaHeadset className="text-2xl" />,
      title: "Live Support",
      details: ["24/7 Customer Support", "Emergency Response"],
      description: "Average wait time: 2 minutes",
      color: "from-green-500 to-emerald-500",
      action: "#"
    }
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gradient-to-b from-gray-900 to-black text-gray-100' : 'bg-gradient-to-b from-gray-50 to-white text-gray-900'}`}>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23${darkMode ? 'ffffff' : '000000'}' fill-opacity='0.1'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-6xl mx-auto text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500/10 to-amber-500/10 rounded-full px-6 py-3 mb-8 border border-orange-500/20"
              variants={itemVariants}
            >
              <FaPaperPlane className="text-orange-500 text-xl" />
              <span className="font-bold text-orange-500">Get In Touch</span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6"
              variants={itemVariants}
            >
              <span className={`${darkMode ? 'bg-gradient-to-r from-orange-400 to-amber-400' : 'bg-gradient-to-r from-orange-600 to-amber-600'} bg-clip-text text-transparent`}>
                Contact Our
              </span>
              <span className="block">Automation Experts</span>
            </motion.h1>

            <motion.p
              className={`text-xl md:text-2xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto mb-12`}
              variants={itemVariants}
            >
              Ready to transform your e-commerce business? Our team of automation specialists is here to help you scale, optimize, and maximize your online profits.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.action}
                variants={itemVariants}
                whileHover="hover"
                className={`group relative overflow-hidden rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'} shadow-lg hover:shadow-2xl transition-all duration-300 p-6`}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${info.color} transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${info.color} mb-4`}>
                    <div className="text-white">
                      {info.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2">{info.title}</h3>
                  
                  <div className="space-y-1 mb-3">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {detail}
                      </p>
                    ))}
                  </div>
                  
                  <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {info.description}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                className={`rounded-3xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-2xl p-8`}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
              >
                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-2">Send Us a Message</h2>
                  <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Fill out the form below and our team will get back to you within 24 hours
                  </p>
                </div>

                {isSubmitted ? (
                  <motion.div
                    className="text-center py-12"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                  >
                    <div className="w-24 h-24 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <FaCheckCircle className="text-white text-4xl" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">Message Sent Successfully!</h3>
                    <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-6`}>
                      Thank you for reaching out. Our team will contact you within 24 hours.
                    </p>
                    <motion.button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Send Another Message
                    </motion.button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name & Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className={`block text-sm font-semibold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          Full Name *
                        </label>
                        <div className="relative">
                          <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className={`w-full pl-10 pr-4 py-3 rounded-xl ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-50 border-gray-300'} border focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all`}
                            placeholder="John Doe"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className={`block text-sm font-semibold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          Email Address *
                        </label>
                        <div className="relative">
                          <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className={`w-full pl-10 pr-4 py-3 rounded-xl ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-50 border-gray-300'} border focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all`}
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Phone & Company */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className={`block text-sm font-semibold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          Phone Number
                        </label>
                        <div className="relative">
                          <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className={`w-full pl-10 pr-4 py-3 rounded-xl ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-50 border-gray-300'} border focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all`}
                            placeholder="+1 (555) 123-4567"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className={`block text-sm font-semibold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          Company Name
                        </label>
                        <div className="relative">
                          <FaBuilding className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className={`w-full pl-10 pr-4 py-3 rounded-xl ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-50 border-gray-300'} border focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all`}
                            placeholder="Your Company"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Service Selection */}
                    <div>
                      <label className={`block text-sm font-semibold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Service Interested In
                      </label>
                      <div className="relative">
                        <select
                          value={selectedService}
                          onChange={(e) => setSelectedService(e.target.value)}
                          className={`w-full px-4 py-3 rounded-xl appearance-none ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-50 border-gray-300'} border focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all`}
                        >
                          {services.map((service, index) => (
                            <option key={index} value={service}>{service}</option>
                          ))}
                        </select>
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                          <FaChevronRight className="text-gray-400 rotate-90" />
                        </div>
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label className={`block text-sm font-semibold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Subject *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-3 rounded-xl ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-50 border-gray-300'} border focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all`}
                        placeholder="How can we help you?"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className={`block text-sm font-semibold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="6"
                        className={`w-full px-4 py-3 rounded-xl ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-50 border-gray-300'} border focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none`}
                        placeholder="Tell us about your project, goals, and any specific requirements..."
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold text-lg shadow-lg hover:shadow-2xl transition-shadow"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="flex items-center justify-center gap-2">
                        Send Message
                        <FaPaperPlane className="text-sm" />
                      </span>
                    </motion.button>
                  </form>
                )}
              </motion.div>

              {/* Contact Information & Team */}
              <div className="space-y-8">
                {/* Our Team */}
                <div className={`rounded-3xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-2xl p-8`}>
                  <h3 className="text-2xl font-bold mb-6">Meet Our Team</h3>
                  <div className="space-y-6">
                    {teamMembers.map((member) => (
                      <div key={member.id} className={`flex items-center gap-4 p-4 rounded-xl ${darkMode ? 'bg-gray-700/50 hover:bg-gray-700' : 'bg-gray-50 hover:bg-gray-100'} transition-colors`}>
                        <div className="text-3xl">{member.image}</div>
                        <div className="flex-1">
                          <h4 className="font-bold text-lg">{member.name}</h4>
                          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-2`}>{member.role}</p>
                          <div className="flex flex-wrap gap-2">
                            {member.expertise.map((skill, idx) => (
                              <span key={idx} className="px-2 py-1 text-xs bg-gradient-to-r from-orange-500/10 to-amber-500/10 text-orange-500 rounded-full">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                        <a
                          href={`mailto:${member.email}`}
                          className={`p-2 rounded-lg ${darkMode ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-200 hover:bg-gray-300'} transition-colors`}
                        >
                          <FaEnvelope className="text-orange-500" />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Response Time */}
                <div className={`rounded-3xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-2xl p-8`}>
                  <h3 className="text-2xl font-bold mb-6">Our Response Time</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                          <FaStar className="text-green-500" />
                        </div>
                        <div>
                          <p className="font-semibold">Priority Support</p>
                          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Within 2 hours</p>
                        </div>
                      </div>
                      <span className="px-3 py-1 bg-green-500/20 text-green-500 rounded-full text-sm">
                        Fastest
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                          <FaClock className="text-blue-500" />
                        </div>
                        <div>
                          <p className="font-semibold">Standard Inquiry</p>
                          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Within 24 hours</p>
                        </div>
                      </div>
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-500 rounded-full text-sm">
                        Standard
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                          <FaHeadset className="text-purple-500" />
                        </div>
                        <div>
                          <p className="font-semibold">Live Chat</p>
                          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Available Now</p>
                        </div>
                      </div>
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-500 rounded-full text-sm">
                        Online
                      </span>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className={`rounded-3xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-2xl p-8`}>
                  <h3 className="text-2xl font-bold mb-6">Follow Us</h3>
                  <div className="flex gap-4">
                    {[
                      { icon: FaLinkedin, color: 'from-blue-600 to-blue-700', label: 'LinkedIn' },
                      { icon: FaTwitter, color: 'from-sky-500 to-blue-500', label: 'Twitter' },
                      { icon: FaFacebook, color: 'from-blue-600 to-blue-800', label: 'Facebook' },
                      { icon: FaInstagram, color: 'from-pink-500 to-purple-500', label: 'Instagram' },
                    ].map((social, index) => (
                      <motion.a
                        key={index}
                        href="#"
                        whileHover={{ y: -5 }}
                        className="flex-1"
                      >
                        <div className={`aspect-square rounded-xl bg-gradient-to-br ${social.color} flex items-center justify-center`}>
                          <social.icon className="text-white text-2xl" />
                        </div>
                        <p className="text-center text-sm mt-2 font-medium">{social.label}</p>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={`py-20 ${darkMode ? 'bg-gray-800/30' : 'bg-gray-100'}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Get quick answers to common questions about our services
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "How quickly can I expect a response?",
                  a: "We respond to all inquiries within 24 hours. Priority clients receive responses within 2 hours during business hours."
                },
                {
                  q: "Do you offer free consultations?",
                  a: "Yes! We offer a 30-minute free consultation to discuss your needs and how our services can help your business."
                },
                {
                  q: "What is your typical project timeline?",
                  a: "Timelines vary by service. Amazon FBA setup takes 2-4 weeks, while website development typically takes 4-6 weeks."
                },
                {
                  q: "Do you provide ongoing support?",
                  a: "Yes, all our packages include ongoing support. We offer 24/7 emergency support for critical issues."
                },
                {
                  q: "Can you work with international clients?",
                  a: "Absolutely! We work with clients worldwide and have experience with international e-commerce regulations."
                }
              ].map((faq, index) => (
                <div
                  key={index}
                  className={`rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 shadow-lg`}
                >
                  <h4 className="font-bold text-lg mb-2">{faq.q}</h4>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="inline-block mb-8"
              animate={{
                scale: [1, 1.05, 1],
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              <div className="p-6 rounded-full bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-orange-500/20">
                <FaRocket className="text-4xl text-orange-500" />
              </div>
            </motion.div>
            
            <h2 className="text-4xl font-bold mb-6">Ready to Automate Your Success?</h2>
            
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto mb-10`}>
              Join 500+ successful e-commerce businesses that have scaled with our automation solutions
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold text-lg shadow-xl hover:shadow-2xl transition-shadow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule a Call
              </motion.button>
              
              <motion.button
                className={`px-8 py-4 rounded-xl ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} font-bold text-lg`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Client Testimonials
              </motion.button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;