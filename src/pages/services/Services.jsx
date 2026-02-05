import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import {
    FaAmazon,
    FaEbay,
    FaShopify,
    FaAdversal,
    FaLaptopCode,
    FaPalette,
    FaFacebook,
    FaChartLine,
    FaSearch,
    FaTruck,
    FaBox,
    FaTag,
    FaShippingFast,
    FaWarehouse,
    FaStore,
    FaMobileAlt,
    FaPaintBrush,
    FaHashtag,
    FaUsers,
    FaBullseye,
    FaRocket,
    FaFilter,
    FaStar,
    FaCheckCircle,
    FaClock,
    FaDollarSign,
    FaHeadset,
    FaCogs,
    FaGlobe,
    FaShieldAlt,
    FaBrain,
    FaChevronRight
} from 'react-icons/fa';
import { AppContext } from '../../appcontext/AppContext';
import { TbBrandWalmart } from 'react-icons/tb';

const Services = () => {
    const { darkMode } = useContext(AppContext);
    const [activeFilter, setActiveFilter] = useState('all');
    const [activeService, setActiveService] = useState(null);

    // Service categories
    const serviceCategories = [
        { id: 'all', name: 'All Services', icon: <FaCogs />, count: 8 },
        { id: 'amazon', name: 'Amazon', icon: <FaAmazon />, count: 3 },
        { id: 'walmart', name: 'Walmart', icon: <TbBrandWalmart />, count: 2 },
        { id: 'ebay', name: 'eBay', icon: <FaEbay />, count: 1 },
        { id: 'shopify', name: 'Shopify', icon: <FaShopify />, count: 1 },
        { id: 'digital', name: 'Digital Services', icon: <FaLaptopCode />, count: 4 },
    ];

    // All services data
    const services = [
        // Amazon Services
        {
            id: 1,
            category: 'amazon',
            title: 'Amazon FBA',
            subtitle: 'Fulfillment by Amazon',
            description: 'Leverage Amazon\'s world-class fulfillment network for storage, packing, shipping, and customer service.',
            icon: <FaTruck />,
            color: 'from-orange-500 to-amber-500',
            features: [
                'Inventory storage in Amazon warehouses',
                'Prime shipping eligibility',
                'Customer service & returns handled by Amazon',
                'Multi-channel fulfillment',
                'Real-time inventory tracking'
            ],
            stats: [
                { label: 'Delivery Speed', value: '1-2 days' },
                { label: 'Success Rate', value: '98%' },
                { label: 'Prime Eligible', value: 'Yes' }
            ],
            pricing: 'Strategic session',
            popular: true
        },
        {
            id: 2,
            category: 'amazon',
            title: 'Amazon FBM',
            subtitle: 'Fulfillment by Merchant',
            description: 'Maintain control over your fulfillment process while selling on Amazon\'s marketplace.',
            icon: <FaBox />,
            color: 'from-yellow-500 to-amber-500',
            features: [
                'Complete control over inventory',
                'Custom packaging & branding',
                'Lower fulfillment costs',
                'Direct customer relationship',
                'Flexible shipping options'
            ],
            stats: [
                { label: 'Control Level', value: 'Full' },
                { label: 'Cost Savings', value: 'Up to 30%' },
                { label: 'Branding', value: 'Custom' }
            ],
            pricing: 'Strategic session',
            popular: false
        },
        {
            id: 3,
            category: 'amazon',
            title: 'Private Label',
            subtitle: 'Brand Building on Amazon',
            description: 'Create and launch your own branded products on Amazon with complete control and higher profit margins.',
            icon: <FaTag />,
            color: 'from-red-500 to-pink-500',
            features: [
                'Product research & sourcing',
                'Brand registry setup',
                'Custom packaging design',
                'Enhanced brand content',
                'Brand protection & monitoring'
            ],
            stats: [
                { label: 'Profit Margin', value: '40-60%' },
                { label: 'Brand Control', value: '100%' },
                { label: 'Market Exclusivity', value: 'Yes' }
            ],
            pricing: 'Strategic session',
            popular: true
        },
        // Walmart Services
        {
            id: 4,
            category: 'walmart',
            title: 'Two-Step Dropshipping',
            subtitle: 'Walmart Marketplace',
            description: 'Advanced dropshipping model using Walmart suppliers with higher profit margins and better control.',
            icon: <FaShippingFast />,
            color: 'from-blue-500 to-cyan-500',
            features: [
                'Supplier vetting & negotiation',
                'Automated order processing',
                'Inventory synchronization',
                'Price optimization',
                'Returns management'
            ],
            stats: [
                { label: 'Profit Margin', value: '25-40%' },
                { label: 'Automation', value: '90%' },
                { label: 'Supplier Network', value: '500+' }
            ],
            pricing: 'Strategic session',
            popular: true
        },
        {
            id: 5,
            category: 'walmart',
            title: 'WFS',
            subtitle: 'Walmart Fulfillment Services',
            description: 'Walmart\'s fulfillment service offering storage, packing, shipping, and returns handling.',
            icon: <FaWarehouse />,
            color: 'from-teal-500 to-green-500',
            features: [
                'Two-day delivery nationwide',
                'Free shipping over $35',
                'Returns processing',
                'Inventory management',
                'Customer service support'
            ],
            stats: [
                { label: 'Delivery', value: '2-Day' },
                { label: 'Free Shipping', value: '$35+' },
                { label: 'Returns', value: 'Handled' }
            ],
            pricing: 'Strategic session',
            popular: false
        },
        // eBay Service
        {
            id: 6,
            category: 'ebay',
            title: 'eBay Optimization',
            subtitle: 'Marketplace Excellence',
            description: 'Comprehensive eBay store management and optimization for maximum visibility and sales.',
            icon: <FaStore />,
            color: 'from-purple-500 to-indigo-500',
            features: [
                'Listing optimization',
                'Pricing strategy',
                'Seller rating management',
                'Promoted listings',
                'International shipping setup'
            ],
            stats: [
                { label: 'Visibility Increase', value: '300%' },
                { label: 'Sales Growth', value: '200%' },
                { label: 'Positive Feedback', value: '99%' }
            ],
            pricing: 'Strategic session',
            popular: true
        },
        // Shopify Service
        {
            id: 7,
            category: 'shopify',
            title: 'Shopify Store',
            subtitle: 'Complete E-commerce Solution',
            description: 'End-to-end Shopify store setup, customization, and management for seamless online selling.',
            icon: <FaShopify />,
            color: 'from-green-500 to-emerald-500',
            features: [
                'Store design & development',
                'App integration',
                'Payment gateway setup',
                'Mobile optimization',
                'SEO implementation'
            ],
            stats: [
                { label: 'Store Setup', value: '7-10 days' },
                { label: 'Mobile Responsive', value: '100%' },
                { label: 'Support', value: '24/7' }
            ],
            pricing: 'Strategic session',
            popular: true
        },
        // Digital Services
        {
            id: 8,
            category: 'digital',
            title: 'Online Ad Operations',
            subtitle: 'Performance Marketing',
            description: 'Complete ad campaign management from creation to optimization and performance analysis.',
            icon: <FaAdversal />,
            color: 'from-pink-500 to-rose-500',
            features: [
                'Campaign strategy & planning',
                'Ad creative development',
                'A/B testing & optimization',
                'ROI tracking & reporting',
                'Budget management'
            ],
            stats: [
                { label: 'ROI Improvement', value: '150%' },
                { label: 'Cost Reduction', value: '35%' },
                { label: 'Conversion Lift', value: '200%' }
            ],
            pricing: 'Strategic session',
            popular: true
        },
        {
            id: 9,
            category: 'digital',
            title: 'Website Development',
            subtitle: 'Custom Web Solutions',
            description: 'Bespoke website development from concept to execution with focus on user experience and conversion.',
            icon: <FaLaptopCode />,
            color: 'from-indigo-500 to-blue-500',
            features: [
                'Custom design & development',
                'Responsive mobile design',
                'E-commerce integration',
                'SEO optimization',
                'Performance optimization'
            ],
            stats: [
                { label: 'Load Time', value: '<2s' },
                { label: 'Mobile Score', value: '100/100' },
                { label: 'Support', value: 'Lifetime' }
            ],
            pricing: 'Custom Projects',
            popular: false
        },
        {
            id: 10,
            category: 'digital',
            title: 'Graphic Design',
            subtitle: 'Visual Brand Identity',
            description: 'Professional graphic design services creating compelling visual assets that resonate with your audience.',
            icon: <FaPalette />,
            color: 'from-cyan-500 to-teal-500',
            features: [
                'Logo & brand identity',
                'Marketing materials',
                'Social media graphics',
                'Packaging design',
                'UI/UX design'
            ],
            stats: [
                { label: 'Design Revisions', value: 'Unlimited' },
                { label: 'Turnaround', value: '48-72hrs' },
                { label: 'File Formats', value: 'All' }
            ],
            pricing: 'Strategic session',
            popular: false
        },
        {
            id: 11,
            category: 'digital',
            title: 'Social Media Marketing',
            subtitle: 'Digital Engagement',
            description: 'Comprehensive social media strategy and management to boost brand visibility and engagement.',
            icon: <FaHashtag />,
            color: 'from-violet-500 to-purple-500',
            features: [
                'Content strategy & creation',
                'Community management',
                'Influencer partnerships',
                'Paid social campaigns',
                'Analytics & reporting'
            ],
            stats: [
                { label: 'Engagement Rate', value: '5-8%' },
                { label: 'Follower Growth', value: '300/mo' },
                { label: 'Content Posts', value: 'Daily' }
            ],
            pricing: 'Strategic session',
            popular: true
        }
    ];

    // Filter services
    const filteredServices = activeFilter === 'all'
        ? services
        : services.filter(service => service.category === activeFilter);

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
            y: -10,
            scale: 1.02,
            transition: {
                duration: 0.2
            }
        }
    };

    const modalVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        },
        exit: {
            opacity: 0,
            scale: 0.9,
            transition: {
                duration: 0.2
            }
        }
    };

    // Handle service click
    const handleServiceClick = (service) => {
        setActiveService(service);
    };

    // Close modal
    const closeModal = () => {
        setActiveService(null);
    };

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
                            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full px-6 py-3 mb-8 border border-blue-500/20"
                            variants={itemVariants}
                        >
                            <FaCogs className="text-blue-500 text-xl" />
                            <span className="font-bold text-blue-500">Complete Service Suite</span>
                        </motion.div>

                        <motion.h1
                            className="text-5xl md:text-7xl font-bold mb-6"
                            variants={itemVariants}
                        >
                            <span className={`${darkMode ? 'bg-gradient-to-r from-blue-400 to-cyan-400' : 'bg-gradient-to-r from-blue-600 to-cyan-600'} bg-clip-text text-transparent`}>
                                Elite Services
                            </span>
                            <span className="block">For E-commerce Success</span>
                        </motion.h1>

                        <motion.p
                            className={`text-xl md:text-2xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto mb-12`}
                            variants={itemVariants}
                        >
                            Comprehensive solutions across Amazon, Walmart, eBay, Shopify, and digital services to scale your online business
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Services Filter */}
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4">Choose Your Service Category</h2>
                            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                Filter services by platform or explore all our offerings
                            </p>
                        </div>

                        <div className="flex flex-wrap justify-center gap-4 mb-12">
                            {serviceCategories.map((category) => (
                                <motion.button
                                    key={category.id}
                                    onClick={() => setActiveFilter(category.id)}
                                    className={`flex items-center gap-3 px-6 py-3 rounded-xl transition-all ${activeFilter === category.id
                                        ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
                                        : darkMode
                                            ? 'bg-gray-800 hover:bg-gray-700 text-gray-300 border border-gray-700'
                                            : 'bg-white hover:bg-gray-100 text-gray-700 border border-gray-200'
                                        }`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <span className="text-lg">{category.icon}</span>
                                    <span className="font-medium">{category.name}</span>
                                    <span className={`text-xs px-2 py-1 rounded-full ${activeFilter === category.id ? 'bg-white/20' : darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                                        {category.count}
                                    </span>
                                </motion.button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="max-w-6xl mx-auto"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredServices.map((service) => (
                                <motion.div
                                    key={service.id}
                                    variants={itemVariants}
                                    className={`group cursor-pointer rounded-2xl overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'} shadow-xl hover:shadow-2xl transition-all duration-300`}
                                    whileHover="hover"
                                    onClick={() => handleServiceClick(service)}
                                >
                                    {/* Service Header */}
                                    <div className={`relative h-48 bg-gradient-to-br ${service.color} p-6`}>
                                        {service.popular && (
                                            <div className="absolute top-4 right-4">
                                                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-bold rounded-full">
                                                    POPULAR
                                                </span>
                                            </div>
                                        )}

                                        <div className="flex items-center gap-4">
                                            <div className="w-16 h-16 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white text-2xl">
                                                {service.icon}
                                            </div>
                                            <div className="flex-1">
                                                <div className="text-white/80 text-sm font-semibold">{service.subtitle}</div>
                                                <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                                            </div>
                                        </div>

                                        {/* Stats */}
                                        <div className="absolute bottom-4 left-6 right-6">
                                            <div className="flex justify-between">
                                                {service.stats.map((stat, index) => (
                                                    <div key={index} className="text-center">
                                                        <div className="text-white font-bold text-lg">{stat.value}</div>
                                                        <div className="text-white/70 text-xs">{stat.label}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Service Body */}
                                    <div className="p-6">
                                        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-6`}>
                                            {service.description}
                                        </p>

                                        {/* Features */}
                                        <div className="space-y-2 mb-6">
                                            {service.features.slice(0, 3).map((feature, index) => (
                                                <div key={index} className="flex items-center gap-2">
                                                    <FaCheckCircle className="text-green-500 text-sm" />
                                                    <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{feature}</span>
                                                </div>
                                            ))}
                                            {service.features.length > 3 && (
                                                <div className="text-sm text-blue-500">
                                                    +{service.features.length - 3} more features
                                                </div>
                                            )}
                                        </div>

                                        {/* Pricing & CTA */}
                                        <div className="flex items-center justify-between pt-4 border-t border-gray-700/30 dark:border-gray-200/30">
                                            <div>
                                                <div className="text-sm text-gray-500 dark:text-gray-400">Starting at</div>
                                                <div className="font-bold text-lg">{service.pricing}</div>
                                            </div>
                                            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-semibold">
                                                Explore
                                                <FaChevronRight className="text-xs" />
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Empty State */}
                        {filteredServices.length === 0 && (
                            <div className="text-center py-16">
                                <div className="text-6xl mb-6">🔍</div>
                                <h3 className="text-2xl font-bold mb-2">No services found</h3>
                                <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                    Try selecting a different category
                                </p>
                            </div>
                        )}
                    </motion.div>
                </div>
            </section>

            {/* Service Comparison */}
            <section className={`py-20 ${darkMode ? 'bg-gray-800/30' : 'bg-gray-100'}`}>
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4">Service Comparison</h2>
                            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                Compare our top services to find the perfect fit for your business
                            </p>
                        </div>

                        <div className="overflow-x-auto">
                            <table className={`w-full rounded-xl overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
                                <thead>
                                    <tr className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                                        <th className="p-4 text-left">Service</th>
                                        <th className="p-4 text-center">Best For</th>
                                        <th className="p-4 text-center">Setup Time</th>
                                        <th className="p-4 text-center">Pricing</th>
                                        <th className="p-4 text-center">Support Level</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { service: 'Amazon FBA', bestFor: 'High-volume sellers', setup: '2-4 weeks', price: '$299/mo', support: '24/7' },
                                        { service: 'Walmart Dropshipping', bestFor: 'Beginner to intermediate', setup: '1-2 weeks', price: '$349/mo', support: 'Business Hours' },
                                        { service: 'Shopify Store', bestFor: 'Brand building', setup: '7-10 days', price: '$499/mo', support: '24/7' },
                                        { service: 'Private Label', bestFor: 'Brand owners', setup: '4-8 weeks', price: 'Custom', support: 'Dedicated' },
                                        { service: 'Social Media Marketing', bestFor: 'Brand awareness', setup: '1 week', price: '$299/mo', support: 'Business Hours' },
                                    ].map((row, index) => (
                                        <tr key={index} className={`border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                                            <td className="p-4 font-semibold">{row.service}</td>
                                            <td className="p-4 text-center">{row.bestFor}</td>
                                            <td className="p-4 text-center">{row.setup}</td>
                                            <td className="p-4 text-center font-bold">{row.price}</td>
                                            <td className="p-4 text-center">
                                                <span className={`px-3 py-1 rounded-full text-xs ${row.support === '24/7' ? 'bg-green-500/20 text-green-500' : row.support === 'Dedicated' ? 'bg-blue-500/20 text-blue-500' : 'bg-gray-500/20 text-gray-500'}`}>
                                                    {row.support}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
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
                            <div className="p-6 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
                                <FaRocket className="text-4xl text-blue-500" />
                            </div>
                        </motion.div>

                        <h2 className="text-4xl font-bold mb-6">Ready to Scale Your Business?</h2>

                        <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto mb-10`}>
                            Book a free consultation with our experts to discuss which services are right for your business goals
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.button
                                className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold text-lg shadow-xl hover:shadow-2xl transition-shadow"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Book Free Consultation
                            </motion.button>

                            <motion.button
                                className={`px-8 py-4 rounded-xl ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} font-bold text-lg`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                View Case Studies
                            </motion.button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Detail Modal */}
            {activeService && (
                <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <motion.div
                        className={`relative w-full max-w-4xl rounded-3xl overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-2xl`}
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        {/* Modal Header */}
                        <div className={`relative p-8 bg-gradient-to-br ${activeService.color}`}>
                            <div className="flex items-start justify-between">
                                <div className="flex items-center gap-6">
                                    <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white text-3xl">
                                        {activeService.icon}
                                    </div>
                                    <div>
                                        <div className="text-white/80 text-lg font-semibold">{activeService.subtitle}</div>
                                        <h2 className="text-3xl font-bold text-white">{activeService.title}</h2>
                                    </div>
                                </div>
                                <button
                                    onClick={closeModal}
                                    className={`w-12 h-12 rounded-full flex items-center justify-center ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white/20 hover:bg-white/30'} backdrop-blur-sm text-white transition-colors`}
                                >
                                    ×
                                </button>
                            </div>
                        </div>

                        {/* Modal Content */}
                        <div className="p-8">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                {/* Left Column */}
                                <div>
                                    <h3 className="text-2xl font-bold mb-6">Service Overview</h3>
                                    <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-8`}>
                                        {activeService.description}
                                    </p>

                                    {/* Features */}
                                    <div className="mb-8">
                                        <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                                            <FaCheckCircle className="text-green-500" />
                                            Key Features
                                        </h4>
                                        <div className="space-y-3">
                                            {activeService.features.map((feature, index) => (
                                                <div key={index} className="flex items-start gap-3">
                                                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                        <FaCheckCircle className="text-green-500 text-xs" />
                                                    </div>
                                                    <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Right Column */}
                                <div>
                                    {/* Stats */}
                                    <div className={`rounded-2xl ${darkMode ? 'bg-gray-700/50' : 'bg-gray-100'} p-6 mb-8`}>
                                        <h4 className="text-xl font-bold mb-6">Performance Metrics</h4>
                                        <div className="grid grid-cols-3 gap-4">
                                            {activeService.stats.map((stat, index) => (
                                                <div key={index} className="text-center">
                                                    <div className="text-2xl font-bold mb-1">{stat.value}</div>
                                                    <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{stat.label}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Pricing & CTA */}
                                    <div className={`rounded-2xl ${darkMode ? 'bg-gray-700/50' : 'bg-gray-100'} p-6`}>
                                        <h4 className="text-xl font-bold mb-4">Pricing & Package</h4>
                                        <div className="mb-6">
                                            <div className="text-3xl font-bold mb-2">{activeService.pricing}</div>
                                            <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                                Includes setup, training, and ongoing support
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            <button className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold">
                                                Get Started Now
                                            </button>
                                            <button className={`w-full py-3 rounded-xl ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'} border ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}>
                                                Download Service Guide
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </div>
    );
};

export default Services;