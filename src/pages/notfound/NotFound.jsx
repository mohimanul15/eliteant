import React, { useState, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
import {
    FaHome,
    FaSearch,
    FaArrowLeft,
    FaExclamationTriangle,
    FaRocket,
    FaCompass,
    FaRobot,
    FaChartLine,
    FaShoppingCart,
    FaCog,
    FaLifeRing,
    FaEnvelope,
    FaGlobeAmericas,
    FaBolt,
    FaGhost,
    FaSatellite,
    FaSpaceShuttle,
    FaUserAstronaut,
    FaMeteor
} from 'react-icons/fa';
import { AppContext } from '../../appcontext/AppContext';

const NotFound = () => {
    const {darkMode} = useContext(AppContext);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    // Floating particles
    const particles = Array.from({ length: 15 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 1,
        speed: Math.random() * 2 + 0.5
    }));

    // Popular pages
    const popularPages = [
        { name: 'Dashboard', icon: <FaChartLine />, path: '/dashboard' },
        { name: 'Automation', icon: <FaRobot />, path: '/automation' },
        { name: 'Products', icon: <FaShoppingCart />, path: '/products' },
        { name: 'Settings', icon: <FaCog />, path: '/settings' },
        { name: 'Support', icon: <FaLifeRing />, path: '/support' },
        { name: 'Contact', icon: <FaEnvelope />, path: '/contact' },
    ];

    // Error codes for fun
    const errorCodes = ['404', 'Lost in Space', 'Page Not Found', 'Oops!'];

    // Handle mouse movement for parallax
    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth - 0.5) * 20,
                y: (e.clientY / window.innerHeight - 0.5) * 20
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

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
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const floatVariants = {
        float: {
            y: [0, -10, 0],
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    const pulseVariants = {
        pulse: {
            scale: [1, 1.05, 1],
            transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    const rotateVariants = {
        rotate: {
            rotate: 360,
            transition: {
                duration: 20,
                repeat: Infinity,
                ease: "linear"
            }
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            // In a real app, you would search your site
            window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
        }
    };

    return (
        <div className={`min-h-screen overflow-hidden relative ${darkMode ? 'bg-gradient-to-b from-gray-900 to-black text-gray-100' : 'bg-gradient-to-b from-gray-50 to-white text-gray-900'}`}>
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Animated gradient orbs */}
                <motion.div
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-orange-500/10 to-pink-500/10 rounded-full blur-3xl"
                    animate={{
                        x: [0, 30, 0],
                        y: [0, -30, 0],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-tr from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"
                    animate={{
                        x: [0, -20, 0],
                        y: [0, 20, 0],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />

                {/* Floating particles */}
                {particles.map((particle) => (
                    <motion.div
                        key={particle.id}
                        className={`absolute rounded-full ${darkMode ? 'bg-white/10' : 'bg-gray-400/20'}`}
                        style={{
                            left: `${particle.x}%`,
                            top: `${particle.y}%`,
                            width: `${particle.size}px`,
                            height: `${particle.size}px`,
                        }}
                        animate={{
                            y: [0, -20, 0],
                            x: [0, Math.random() * 10 - 5, 0],
                        }}
                        transition={{
                            duration: particle.speed * 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </div>

            {/* Parallax container */}
            <div
                className="relative z-10"
                style={{
                    transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                    transition: 'transform 0.1s ease-out'
                }}
            >
                <div className="container mx-auto px-4 py-16">
                    <motion.div
                        className="max-w-6xl mx-auto"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {/* Header */}
                        <div className="text-center mb-12">
                            <motion.div
                                className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500/10 to-amber-500/10 rounded-full px-6 py-3 mb-8 border border-orange-500/20"
                                variants={itemVariants}
                            >
                                <FaExclamationTriangle className="text-orange-500 text-xl" />
                                <span className="font-bold text-orange-500">Error Detected</span>
                            </motion.div>

                            {/* Animated 404 Text */}
                            <motion.div
                                className="relative mb-8"
                                variants={itemVariants}
                            >
                                <div className="text-9xl md:text-[12rem] font-bold mb-4">
                                    <span className={`bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 bg-clip-text text-transparent`}>
                                        404
                                    </span>
                                </div>

                                {/* Floating astronaut */}
                                <motion.div
                                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                                    variants={floatVariants}
                                    animate="float"
                                >
                                    <div className="relative">
                                        <FaUserAstronaut className="text-6xl text-white/20" />
                                        <motion.div
                                            className="absolute -top-2 -right-2"
                                            variants={rotateVariants}
                                            animate="rotate"
                                        >
                                            <FaSatellite className="text-xl text-blue-500" />
                                        </motion.div>
                                    </div>
                                </motion.div>

                                {/* Floating elements around 404 */}
                                <motion.div
                                    className="absolute top-0 left-10"
                                    variants={floatVariants}
                                    animate="float"
                                >
                                    <FaMeteor className="text-2xl text-orange-500/50" />
                                </motion.div>
                                <motion.div
                                    className="absolute top-10 right-20"
                                    variants={floatVariants}
                                    animate={{
                                        ...floatVariants.float,
                                        transition: { ...floatVariants.float.transition, delay: 0.5 }
                                    }}
                                >
                                    <FaSpaceShuttle className="text-2xl text-blue-500/50" />
                                </motion.div>
                                <motion.div
                                    className="absolute bottom-10 left-20"
                                    variants={floatVariants}
                                    animate={{
                                        ...floatVariants.float,
                                        transition: { ...floatVariants.float.transition, delay: 1 }
                                    }}
                                >
                                    <FaGhost className="text-2xl text-purple-500/50" />
                                </motion.div>
                            </motion.div>

                            <motion.h1
                                className="text-4xl md:text-5xl font-bold mb-6"
                                variants={itemVariants}
                            >
                                <span className="block">Lost in the</span>
                                <span className={`bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent`}>Digital Universe</span>
                            </motion.h1>

                            <motion.p
                                className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto mb-10`}
                                variants={itemVariants}
                            >
                                The page you're looking for has drifted into uncharted territory.
                                Don't worry, we'll help you navigate back home.
                            </motion.p>
                        </div>

                        {/* Main Content */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                            {/* Left Column - Search & Actions */}
                            <motion.div
                                className="space-y-8"
                                variants={itemVariants}
                            >
                                {/* Search Box */}
                                <div className={`rounded-2xl ${darkMode ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-lg border ${darkMode ? 'border-gray-700/50' : 'border-gray-200/50'} p-6 shadow-xl`}>
                                    <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                                        <FaSearch className="text-orange-500" />
                                        Search Our Galaxy
                                    </h3>
                                    <form onSubmit={handleSearch} className="space-y-4">
                                        <div className="relative">
                                            <input
                                                type="text"
                                                value={searchQuery}
                                                onChange={(e) => setSearchQuery(e.target.value)}
                                                placeholder="What are you looking for?"
                                                className={`w-full pl-12 pr-4 py-3 rounded-xl ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-200 text-gray-900'} border focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-transparent`}
                                            />
                                            <FaSearch className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                                        </div>
                                        <button
                                            type="submit"
                                            className="w-full py-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold hover:shadow-lg transition-shadow"
                                        >
                                            Search the Site
                                        </button>
                                    </form>
                                </div>

                                {/* Quick Actions */}
                                <div className={`rounded-2xl ${darkMode ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-lg border ${darkMode ? 'border-gray-700/50' : 'border-gray-200/50'} p-6 shadow-xl`}>
                                    <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                                        <FaBolt className="text-amber-500" />
                                        Quick Actions
                                    </h3>
                                    <div className="grid grid-cols-2 gap-4">
                                        <motion.button
                                            onClick={() => window.history.back()}
                                            className={`flex flex-col items-center justify-center p-4 rounded-xl ${darkMode ? 'bg-gray-700/50 hover:bg-gray-600/50' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <FaArrowLeft className="text-2xl mb-2 text-orange-500" />
                                            <span className="font-medium">Go Back</span>
                                        </motion.button>

                                        <motion.button
                                            onClick={() => window.location.href = '/'}
                                            className={`flex flex-col items-center justify-center p-4 rounded-xl ${darkMode ? 'bg-gray-700/50 hover:bg-gray-600/50' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <FaHome className="text-2xl mb-2 text-blue-500" />
                                            <span className="font-medium">Home</span>
                                        </motion.button>

                                        <motion.button
                                            onClick={() => window.location.href = '/dashboard'}
                                            className={`flex flex-col items-center justify-center p-4 rounded-xl ${darkMode ? 'bg-gray-700/50 hover:bg-gray-600/50' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <FaChartLine className="text-2xl mb-2 text-green-500" />
                                            <span className="font-medium">Dashboard</span>
                                        </motion.button>

                                        <motion.button
                                            onClick={() => window.location.href = '/support'}
                                            className={`flex flex-col items-center justify-center p-4 rounded-xl ${darkMode ? 'bg-gray-700/50 hover:bg-gray-600/50' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <FaLifeRing className="text-2xl mb-2 text-purple-500" />
                                            <span className="font-medium">Support</span>
                                        </motion.button>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Right Column - Popular Pages */}
                            <motion.div
                                variants={itemVariants}
                            >
                                <div className={`rounded-2xl ${darkMode ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-lg border ${darkMode ? 'border-gray-700/50' : 'border-gray-200/50'} p-6 shadow-xl h-full`}>
                                    <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                                        <FaCompass className="text-blue-500" />
                                        Popular Destinations
                                    </h3>

                                    <div className="space-y-3">
                                        {popularPages.map((page, index) => (
                                            <motion.a
                                                key={index}
                                                href={page.path}
                                                className={`flex items-center gap-4 p-4 rounded-xl ${darkMode ? 'hover:bg-gray-700/50' : 'hover:bg-gray-100/50'} transition-colors group`}
                                                whileHover={{ x: 5 }}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                <div className={`w-12 h-12 rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                                    <div className="text-xl text-orange-500">
                                                        {page.icon}
                                                    </div>
                                                </div>
                                                <div className="flex-1">
                                                    <div className="font-semibold">{page.name}</div>
                                                    <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                                        Click to navigate
                                                    </div>
                                                </div>
                                                <div className={`opacity-0 group-hover:opacity-100 transition-opacity ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                                    →
                                                </div>
                                            </motion.a>
                                        ))}
                                    </div>

                                    {/* Stats */}
                                    <div className={`mt-8 p-4 rounded-xl ${darkMode ? 'bg-gray-700/30' : 'bg-gray-100/50'} border ${darkMode ? 'border-gray-700/30' : 'border-gray-200/30'}`}>
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-orange-500 mb-1">99.9%</div>
                                            <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Pages successfully found</div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Error Debug Info (Fun) */}
                        <motion.div
                            className={`rounded-2xl ${darkMode ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-lg border ${darkMode ? 'border-gray-700/50' : 'border-gray-200/50'} p-6 shadow-xl mb-12`}
                            variants={itemVariants}
                        >
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                                <FaRobot className="text-green-500" />
                                Technical Analysis
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div>
                                    <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-2`}>Error Type</div>
                                    <div className="font-mono font-bold text-orange-500">HTTP 404</div>
                                </div>
                                <div>
                                    <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-2`}>Status</div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                                        <span className="font-semibold">Page Not Found</span>
                                    </div>
                                </div>
                                <div>
                                    <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-2`}>Recommendation</div>
                                    <div className="font-semibold">Navigate to known location</div>
                                </div>
                            </div>

                            {/* Progress bar */}
                            <div className="mt-6">
                                <div className="flex justify-between text-sm mb-2">
                                    <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Searching universe...</span>
                                    <span className="font-semibold">0%</span>
                                </div>
                                <div className="h-2 rounded-full bg-gray-700/30 overflow-hidden">
                                    <motion.div
                                        className="h-full bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"
                                        initial={{ width: "0%" }}
                                        animate={{ width: "100%" }}
                                        transition={{ duration: 3, ease: "easeInOut" }}
                                    />
                                </div>
                            </div>
                        </motion.div>

                        {/* CTA Section */}
                        <motion.div
                            className="text-center"
                            variants={itemVariants}
                        >
                            <div className="inline-flex flex-col items-center">
                                <motion.button
                                    onClick={() => window.location.href = '/'}
                                    className="group flex items-center gap-4 px-8 py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    variants={pulseVariants}
                                    animate="pulse"
                                    onMouseEnter={() => setIsHovering(true)}
                                    onMouseLeave={() => setIsHovering(false)}
                                >
                                    <span>Beam Me Home, Scotty!</span>
                                    <FaRocket className={`transform ${isHovering ? 'translate-x-2' : ''} transition-transform`} />
                                </motion.button>

                                <p className={`mt-4 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                    Need help?{' '}
                                    <a href="/contact" className="text-orange-500 hover:underline">
                                        Contact our support team
                                    </a>
                                </p>
                            </div>
                        </motion.div>

                        {/* Footer Note */}
                        <motion.div
                            className="text-center mt-12 pt-8 border-t border-gray-700/30"
                            variants={itemVariants}
                        >
                            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                                <div className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-600'}`}>
                                    © {new Date().getFullYear()} AutoMate Amazon Automation
                                </div>
                                <div className="flex items-center gap-4">
                                    {['Privacy', 'Terms', 'Sitemap', 'Status'].map((item) => (
                                        <a
                                            key={item}
                                            href={`/${item.toLowerCase()}`}
                                            className={`text-sm ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
                                        >
                                            {item}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Floating astronaut animation */}
            <motion.div
                className="fixed bottom-10 left-10 z-20"
                variants={floatVariants}
                animate="float"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 0.3, x: 0 }}
                transition={{ delay: 1 }}
            >
                <FaUserAstronaut className="text-4xl text-blue-500/30" />
            </motion.div>

            <motion.div
                className="fixed top-10 right-10 z-20"
                variants={floatVariants}
                animate={{
                    ...floatVariants.float,
                    transition: { ...floatVariants.float.transition, delay: 0.7 }
                }}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 0.3, x: 0 }}
                transition={{ delay: 1.2 }}
            >
                <FaGlobeAmericas className="text-4xl text-green-500/30" />
            </motion.div>
        </div>
    );
};

export default NotFound;