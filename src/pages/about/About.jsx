import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import {
  FaRocket,
  FaUsers,
  FaChartLine,
  FaShieldAlt,
  FaLightbulb,
  FaGlobeAmericas,
  FaAward,
  FaHandshake,
  FaBrain,
  FaCogs,
  FaHeart,
  FaStar,
  FaTrophy,
  FaSeedling,
  FaTree,
  FaMountain,
  FaFire,
  FaBolt,
  FaGem,
  FaCrown,
  FaMedal,
  FaRegCompass,
  FaRegClock,
  FaRegChartBar,
  FaRegSmile,
  FaRegHandPeace,
  FaRegLightbulb,
  FaRegStar,
  FaTable
} from 'react-icons/fa';
import { AppContext } from '../../appcontext/AppContext';
import { FiTarget } from 'react-icons/fi';

const About = () => {
    const {darkMode} = useContext(AppContext);
  // Company stats
  const companyStats = [
    { value: "2018", label: "Founded", icon: <FaRegClock />, suffix: "" },
    { value: "500+", label: "Seller Centrals", icon: <FaUsers />, suffix: "" },
    { value: "$8.7M+", label: "Revenue Generated", icon: <FaChartLine />, suffix: "" },
    { value: "98%", label: "Success Rate", icon: <FaTrophy />, suffix: "" },
    { value: "24/7", label: "Support", icon: <FaShieldAlt />, suffix: "" },
    { value: "7+", label: "Countries", icon: <FaGlobeAmericas />, suffix: "" },
  ];

  // Core values
  const coreValues = [
    {
      icon: <FaBrain />,
      title: "Innovation First",
      description: "We continuously evolve our AI algorithms to stay ahead of Amazon's ever-changing marketplace.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <FaHandshake />,
      title: "Client Partnership",
      description: "Your success is our success. We work as an extension of your team, not just a service provider.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <FaCogs />,
      title: "Operational Excellence",
      description: "Precision and reliability in every automated process, ensuring flawless execution 24/7.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <FaTable />,
      title: "Results Driven",
      description: "We measure success by your growth, profits, and scalability - not just features delivered.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <FaHeart />,
      title: "Passion for E-commerce",
      description: "We live and breathe Amazon automation. Our team consists of former top Amazon sellers.",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: <FaStar />,
      title: "Elite Quality",
      description: "Only the highest standards. From code quality to client support, we deliver excellence.",
      color: "from-amber-500 to-yellow-500"
    }
  ];

  // Leadership team
  const leadershipTeam = [
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

  // Milestones timeline
  const milestones = [
    { year: "2018", event: "EliteAnt Founded", description: "Started with 3 team members and a vision for Amazon automation" },
    { year: "2019", event: "Build Independent Business Structure", description: "Developed proprietary product research" },
    { year: "2020", event: "100 Clients Milestone", description: "Reached 100 successful Amazon store automations" },
    { year: "2021", event: "$5M Revenue", description: "Clients collectively generated $10M in revenue" },
    { year: "2022", event: "Global Expansion", description: "Expanded services to 50+ countries worldwide" },
    { year: "2023", event: "Launch Proven Suite", description: "Launched complete automation platform" },
    { year: "2024", event: "Industry Leader", description: "Recognized as top Amazon automation service provider" },
  ];

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
    <div className={`min-h-screen ${darkMode ? 'bg-gradient-to-b from-gray-900 to-black text-gray-100' : 'bg-gradient-to-b from-gray-50 to-white text-gray-900'}`}>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23${darkMode ? 'ffffff' : '000000'}' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            }}></div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-6xl mx-auto text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500/10 to-yellow-500/10 rounded-full px-6 py-3 mb-8 border border-amber-500/20"
              variants={itemVariants}
            >
              <FaGem className="text-amber-500 text-xl" />
              <span className="font-bold text-amber-500">Elite Amazon Automation</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8"
              variants={itemVariants}
            >
              <span className={`${darkMode ? 'bg-gradient-to-r from-amber-400 to-yellow-400' : 'bg-gradient-to-r from-amber-600 to-yellow-600'} bg-clip-text text-transparent`}>
                EliteAnt
              </span>
            </motion.h1>

            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-8"
              variants={itemVariants}
            >
              Redefining Amazon Automation Excellence
            </motion.h2>

            <motion.p
              className={`text-xl md:text-2xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto mb-12`}
              variants={itemVariants}
            >
              We're not just another automation service. We're the elite force transforming how Amazon businesses scale through AI-powered precision and strategic expertise.
            </motion.p>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12"
              variants={containerVariants}
            >
              {companyStats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  variants={itemVariants}
                >
                  <div className={`flex justify-center text-3xl md:text-4xl font-bold mb-2 ${darkMode ? 'text-amber-400' : 'text-amber-600'}`}>
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold mb-1">{stat.value}{stat.suffix}</div>
                  <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className={`py-20 ${darkMode ? 'bg-gray-800/30' : 'bg-gray-100'}`}>
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={itemVariants}>
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-yellow-500 flex items-center justify-center">
                    <FaRegCompass className="text-white text-xl" />
                  </div>
                  <h3 className="text-2xl font-bold">Our Origin Story</h3>
                </div>
                
                <h2 className="text-4xl font-bold mb-6">From Amazon Sellers to Automation Architects</h2>
                
                <div className="space-y-4">
                  <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    EliteAnt was born from frustration. As former top Amazon sellers, we experienced firsthand the limitations of existing automation tools. We were tired of generic solutions that promised the world but delivered mediocrity.
                  </p>
                  
                  <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    In 2018, we decided to build what didn't exist: a truly elite automation platform built by sellers, for sellers. We combined deep Amazon marketplace knowledge with cutting-edge AI to create solutions that actually move the needle.
                  </p>
                  
                  <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Today, we're the trusted partner for ambitious Amazon entrepreneurs who refuse to settle for average results. We don't just automate tasks—we architect growth.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="relative"
                variants={itemVariants}
              >
                <div className="relative">
                  {/* Floating elements */}
                  <motion.div
                    className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-amber-500/20 to-yellow-500/20 rounded-full blur-2xl"
                    animate={floatAnimation}
                  />
                  <motion.div
                    className="absolute -bottom-6 -right-6 w-40 h-40 bg-gradient-to-tr from-amber-500/10 to-yellow-500/10 rounded-full blur-2xl"
                    animate={{
                      ...floatAnimation,
                      transition: { ...floatAnimation.transition, delay: 1 }
                    }}
                  />
                  
                  {/* Stats Card */}
                  <div className={`relative rounded-2xl overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'} shadow-2xl`}>
                    <div className="p-8">
                      <div className="text-center mb-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500 to-yellow-500 text-white rounded-full text-sm font-bold mb-4">
                          <FaFire />
                          Elite Performance
                        </div>
                        <h4 className="text-2xl font-bold mb-2">Why We're Different</h4>
                      </div>
                      
                      <div className="space-y-6">
                        {[
                          { icon: <FaBrain />, text: "Built by former Amazon Top Sellers", color: "text-blue-500" },
                          { icon: <FaBolt />, text: "Proprietary AI algorithms", color: "text-amber-500" },
                          { icon: <FaCrown />, text: "Elite client success rate", color: "text-yellow-500" },
                          { icon: <FaShieldAlt />, text: "24/7 monitoring & support", color: "text-green-500" },
                          { icon: <FaMedal />, text: "Industry-leading results", color: "text-purple-500" },
                        ].map((item, index) => (
                          <div key={index} className="flex items-center gap-4">
                            <div className={`text-xl ${item.color}`}>
                              {item.icon}
                            </div>
                            <span className="font-medium">{item.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Purpose & Promise</h2>
              <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
                We exist to empower Amazon entrepreneurs with elite automation that drives real results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Mission */}
              <motion.div
                className={`rounded-2xl ${darkMode ? 'bg-gray-800/50' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'} p-8 shadow-xl`}
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    <FiTarget className="text-white text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Our Mission</h3>
                    <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>What drives us every day</div>
                  </div>
                </div>
                <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  To democratize elite Amazon automation, making sophisticated AI tools and expert strategies accessible to every serious seller. We're committed to transforming how e-commerce businesses operate, scale, and thrive in the competitive Amazon ecosystem.
                </p>
              </motion.div>

              {/* Vision */}
              <motion.div
                className={`rounded-2xl ${darkMode ? 'bg-gray-800/50' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'} p-8 shadow-xl`}
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <FaLightbulb className="text-white text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Our Vision</h3>
                    <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Where we're heading</div>
                  </div>
                </div>
                <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  To become the indispensable growth partner for every Amazon entrepreneur worldwide. We envision a future where EliteAnt's AI-driven insights and automation empower millions of sellers to achieve unprecedented success, freedom, and impact through e-commerce.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className={`py-20 ${darkMode ? 'bg-gray-800/30' : 'bg-gray-100'}`}>
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Core Values</h2>
              <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
                The principles that guide every decision, action, and innovation at EliteAnt
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreValues.map((value, index) => (
                <motion.div
                  key={index}
                  className={`rounded-2xl ${darkMode ? 'bg-gray-800/50' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'} p-6 shadow-xl group hover:shadow-2xl transition-all duration-300`}
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform`}>
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Elite Leadership</h2>
              <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
                Meet the visionary team driving Amazon automation innovation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {leadershipTeam.map((member, index) => (
                <motion.div
                  key={index}
                  className="text-center group"
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                >
                  <div className="relative mb-6">
                    <div className={`w-32 h-32 rounded-full mx-auto bg-gradient-to-br ${member.imageColor} flex items-center justify-center text-white text-4xl font-bold mb-4`}>
                      {member.name.charAt(0)}
                    </div>
                    <motion.div
                      className="absolute inset-0 rounded-full border-4 border-amber-500/30 opacity-0 group-hover:opacity-100 transition-opacity"
                      animate={pulseAnimation}
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <div className={`text-amber-500 font-semibold mb-3`}>{member.role}</div>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-4`}>{member.bio}</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {member.expertise.map((skill, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 rounded-full text-xs ${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-700'}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className={`py-20 ${darkMode ? 'bg-gray-800/30' : 'bg-gray-100'}`}>
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Journey</h2>
              <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
                Key milestones in our pursuit of Amazon automation excellence
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-amber-500/20 via-amber-500/40 to-yellow-500/20"></div>

              {/* Timeline items */}
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  variants={itemVariants}
                >
                  <div className="w-1/2">
                    <div className={`p-6 rounded-2xl ${index % 2 === 0 ? 'text-right mr-8' : 'text-left ml-8'} ${darkMode ? 'bg-gray-800' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'} shadow-lg`}>
                      <div className="text-2xl font-bold text-amber-500 mb-2">{milestone.year}</div>
                      <h4 className="text-xl font-bold mb-2">{milestone.event}</h4>
                      <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{milestone.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 flex items-center justify-center text-white font-bold shadow-lg">
                      {index + 1}
                    </div>
                  </div>
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-block mb-8"
              animate={pulseAnimation}
            >
              <div className="p-6 rounded-full bg-gradient-to-r from-amber-500/10 to-yellow-500/10 border border-amber-500/20">
                <FaRocket className="text-4xl text-amber-500" />
              </div>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join the <span className="text-amber-500">Elite</span> Movement
            </h2>
            
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto mb-10`}>
              Ready to transform your Amazon business with elite automation? Partner with the team that understands your goals and has the expertise to achieve them.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 text-white font-bold text-lg shadow-xl hover:shadow-2xl transition-shadow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Elite Journey
              </motion.button>
              
              <motion.button
                className={`px-8 py-4 rounded-xl ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} font-bold text-lg`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Meet Our Team
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;