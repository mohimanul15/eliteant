import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaSearch,
  FaFilter,
  FaTimes,
  FaExpand,
  FaDownload,
  FaHeart,
  FaShare,
  FaEye,
  FaCalendarAlt,
  FaTag,
  FaArrowLeft,
  FaArrowRight,
  FaPlay,
  FaPause,
  FaShoppingCart,
  FaAmazon,
  FaStar,
  FaChartLine,
  FaRobot,
  FaBoxOpen,
  FaGlobeAmericas,
  FaAward,
  FaBolt
} from 'react-icons/fa';

const Gallery = ({ darkMode = false }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [favorites, setFavorites] = useState([1, 4, 7]);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isSlideshowPlaying, setIsSlideshowPlaying] = useState(false);

  const location = window.location;

  // Gallery categories
  const categories = [
    { id: 'all', name: 'All', icon: <FaFilter /> },
    { id: 'dashboard', name: 'Dashboard', icon: <FaChartLine /> },
    { id: 'automation', name: 'Automation', icon: <FaRobot /> },
    { id: 'results', name: 'Results', icon: <FaStar /> },
  ];

  // Gallery images data - Exactly 9 images
  const galleryImages = [
    {
      id: 1,
      title: "Amazon Automation Dashboard",
      description: "Real-time analytics dashboard showing revenue tracking, order processing, and performance metrics for automated Amazon stores.",
      category: "dashboard",
      tags: ["Dashboard", "Analytics", "Real-time"],
      date: "2024-03-15",
      views: 1245,
      likes: 89,
      image: location+'gallery/amazon0.avif',
      featured: true,
      stats: { revenue: "$12,847", growth: "+24%", orders: 156 }
    },
    {
      id: 2,
      title: "AI Product Research",
      description: "AI-powered product discovery interface showing trending products and market analysis for Amazon FBA.",
      category: "automation",
      tags: ["AI", "Research", "Trending"],
      date: "2024-03-10",
      views: 987,
      likes: 64,
      image: location+'gallery/amazon1.avif',
      featured: false
    },
    {
      id: 3,
      title: "FBA Warehouse Automation",
      description: "Amazon FBA warehouse automation system showing inventory management and order fulfillment processes.",
      category: "automation",
      tags: ["FBA", "Warehouse", "Inventory"],
      date: "2024-03-05",
      views: 1542,
      likes: 102,
      image: location+'gallery/amazon2.avif',
      featured: true
    },
    {
      id: 4,
      title: "PPC Campaign Manager",
      description: "Automated PPC campaign dashboard with optimization suggestions and performance tracking for Amazon ads.",
      category: "dashboard",
      tags: ["PPC", "Advertising", "Automation"],
      date: "2024-03-01",
      views: 876,
      likes: 57,
      image: location+'gallery/amazon3.avif',
      featured: false
    },
    {
      id: 5,
      title: "$50K Monthly Revenue",
      description: "Success story visualization showing growth from $0 to $50K monthly revenue with Amazon automation.",
      category: "results",
      tags: ["Success", "Revenue", "Growth"],
      date: "2024-02-28",
      views: 2134,
      likes: 145,
      image: location+'gallery/amazon4.avif',
      featured: true,
      stats: { revenue: "$50,000", timeline: "6 months", growth: "+450%" }
    },
    {
      id: 6,
      title: "Global Shipping Network",
      description: "Visualization of worldwide fulfillment centers and optimized shipping routes for international Amazon sales.",
      category: "automation",
      tags: ["Shipping", "Global", "Logistics"],
      date: "2024-02-25",
      views: 765,
      likes: 48,
      image: location+'gallery/amazon5.avif',
      featured: false
    },
    {
      id: 7,
      title: "Brand Store Design",
      description: "Premium Amazon storefront design with custom branding and high-converting layout templates.",
      category: "results",
      tags: ["Design", "Branding", "Premium"],
      date: "2024-02-20",
      views: 1321,
      likes: 93,
      image: location+'gallery/amazon6.avif',
      featured: true
    },
    {
      id: 8,
      title: "Review Automation System",
      description: "Automated review generation and reputation management interface for Amazon sellers.",
      category: "automation",
      tags: ["Reviews", "Automation", "Reputation"],
      date: "2024-02-15",
      views: 654,
      likes: 42,
      image: location+'gallery/amazon7.avif',
      featured: false
    },
    {
      id: 9,
      title: "Competitor Analysis Dashboard",
      description: "Real-time competitor monitoring and market analysis dashboard for strategic Amazon selling.",
      category: "dashboard",
      tags: ["Competitors", "Analysis", "Market"],
      date: "2024-02-10",
      views: 912,
      likes: 67,
      image: location+'gallery/amazon8.avif',
      featured: false
    },
  ];

  // Filter images based on active filter
  const filteredImages = activeFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === activeFilter);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    hover: {
      y: -5,
      scale: 1.03,
      transition: {
        duration: 0.2
      }
    },
    tap: {
      scale: 0.98
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

  // Handle image click
  const handleImageClick = (image, index) => {
    setSelectedImage(image);
    setLightboxIndex(index);
  };

  // Close lightbox
  const closeLightbox = () => {
    setSelectedImage(null);
    setIsSlideshowPlaying(false);
  };

  // Navigate lightbox
  const navigateLightbox = (direction) => {
    const newIndex = direction === 'next' 
      ? (lightboxIndex + 1) % galleryImages.length
      : (lightboxIndex - 1 + galleryImages.length) % galleryImages.length;
    
    setSelectedImage(galleryImages[newIndex]);
    setLightboxIndex(newIndex);
  };

  // Toggle favorite
  const toggleFavorite = (id, e) => {
    e.stopPropagation();
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(favId => favId !== id)
        : [...prev, id]
    );
  };

  // Toggle slideshow
  const toggleSlideshow = () => {
    setIsSlideshowPlaying(!isSlideshowPlaying);
  };

  // Slideshow effect
  useEffect(() => {
    let interval;
    if (isSlideshowPlaying && selectedImage) {
      interval = setInterval(() => {
        navigateLightbox('next');
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isSlideshowPlaying, selectedImage, lightboxIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      
      switch(e.key) {
        case 'Escape':
          closeLightbox();
          break;
        case 'ArrowLeft':
          navigateLightbox('prev');
          break;
        case 'ArrowRight':
          navigateLightbox('next');
          break;
        case ' ':
          e.preventDefault();
          toggleSlideshow();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, lightboxIndex]);

  // Format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  // Get category icon
  const getCategoryIcon = (categoryId) => {
    const category = categories.find(c => c.id === categoryId);
    return category ? category.icon : <FaTag />;
  };

  return (
    <section className={`py-16 md:py-20 relative overflow-hidden ${darkMode ? 'bg-gradient-to-b from-gray-900 to-black' : 'bg-gradient-to-b from-gray-50 to-white'}`}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-orange-500/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-gradient-to-tr from-blue-500/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.div
            className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500/10 to-amber-500/10 rounded-full px-5 py-2 mb-4 border border-orange-500/20"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FaAmazon className="text-orange-500" />
            <span className="font-bold text-orange-500 text-sm">Gallery Showcase</span>
          </motion.div>
          
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className={`${darkMode ? 'bg-gradient-to-r from-white/80 to-slate-400' : 'bg-black'} bg-clip-text text-transparent pr-2`}>
              Amazon 
            </span>

            <span className={`${darkMode ? 'bg-gradient-to-r from-orange-400 to-amber-400' : 'bg-gradient-to-r from-orange-600 to-amber-600'} bg-clip-text text-transparent`}>
              Automation Gallery
            </span>
          </motion.h2>
          
          <motion.p
            className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-xl mx-auto`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Explore our automation success metrics
          </motion.p>
        </div>

        {/* Filter Controls */}
        {/* <motion.div
          className="flex flex-wrap justify-center gap-3 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all ${activeFilter === category.id
                ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg'
                : darkMode
                  ? 'bg-gray-800 hover:bg-gray-700 text-gray-300 border border-gray-700'
                  : 'bg-white hover:bg-gray-100 text-gray-700 border border-gray-200'
                }`}
            >
              <span className="text-sm">{category.icon}</span>
              <span className="font-medium text-sm">{category.name}</span>
              <span className={`text-xs px-1.5 py-0.5 rounded-full ${activeFilter === category.id ? 'bg-white/20' : darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                {galleryImages.filter(img => category.id === 'all' || img.category === category.id).length}
              </span>
            </button>
          ))}
        </motion.div> */}

        {/* Stats Bar */}
        {/* <motion.div
          className="grid grid-cols-4 gap-3 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {[
            { icon: <FaEye />, value: "9.8K", label: "Views" },
            { icon: <FaHeart />, value: favorites.length, label: "Favorites" },
            { icon: <FaBolt />, value: "9", label: "Images" },
            { icon: <FaCalendarAlt />, value: "2024", label: "Latest" },
          ].map((stat, index) => (
            <div key={index} className={`text-center p-3 rounded-xl ${darkMode ? 'bg-gray-800/50' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <div className={`text-lg mb-1 ${darkMode ? 'text-orange-400' : 'text-orange-600'}`}>
                {stat.icon}
              </div>
              <div className="font-bold text-sm mb-0.5">{stat.value}</div>
              <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div> */}

        {/* 3x3 Image Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence mode="wait">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                variants={itemVariants}
                layoutId={`image-${image.id}`}
                className={`relative group rounded-xl overflow-hidden cursor-pointer ${darkMode ? 'bg-gray-800' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'} shadow-lg`}
                whileHover="hover"
                whileTap="tap"
                onClick={() => handleImageClick(image, index)}
              >
                {/* Image Container */}
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={image.image}
                    alt={image.title}
                    className={`${darkMode ? 'invert' : ''} w-full h-full object-cover group-hover:scale-105 transition-transform duration-500`}
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Featured Badge */}
                  {image.featured && (
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-1 bg-gradient-to-r from-amber-500 to-yellow-500 text-white text-xs font-bold rounded-full">
                        FEATURED
                      </span>
                    </div>
                  )}
                  
                  {/* Stats Badge */}
                  {image.stats && (
                    <div className="absolute top-3 right-3">
                      <div className={`px-2 py-1 ${darkMode ? 'bg-black/60' : 'bg-white/90'} backdrop-blur-sm rounded-lg`}>
                        <div className="text-xs font-bold">{image.stats.revenue}</div>
                        <div className="text-[10px] text-green-500">{image.stats.growth}</div>
                      </div>
                    </div>
                  )}
                  
                  {/* Category Badge */}
                  <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className={`px-2 py-1 ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg flex items-center gap-1 text-xs`}>
                      {getCategoryIcon(image.category)}
                      <span>{categories.find(c => c.id === image.category)?.name}</span>
                    </div>
                  </div>
                  
                  {/* Quick Actions */}
                  <div className="absolute bottom-3 right-3 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={(e) => toggleFavorite(image.id, e)}
                      className={`w-8 h-8 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-white'} flex items-center justify-center shadow-md`}
                    >
                      <FaHeart className={`text-xs ${favorites.includes(image.id) ? 'text-red-500' : darkMode ? 'text-gray-300' : 'text-gray-600'}`} />
                    </button>
                    <button className={`w-8 h-8 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-white'} flex items-center justify-center shadow-md`}>
                      <FaExpand className={`text-xs ${darkMode ? 'text-gray-300' : 'text-gray-600'}`} />
                    </button>
                  </div>
                </div>
                
                {/* Image Info */}
                <div className="p-3">
                  <h3 className="font-bold text-sm mb-1 truncate">{image.title}</h3>
                  
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <FaEye className={darkMode ? 'text-gray-400' : 'text-gray-500'} />
                        {image.views.toLocaleString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaHeart className={darkMode ? 'text-gray-400' : 'text-gray-500'} />
                        {image.likes}
                      </span>
                    </div>
                    <span className={darkMode ? 'text-gray-400' : 'text-gray-500'}>
                      {formatDate(image.date)}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="text-4xl mb-4">📷</div>
            <h3 className="text-xl font-bold mb-2">No images in this category</h3>
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Try selecting a different filter
            </p>
          </motion.div>
        )}

        {/* Grid Info */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Click any image to view details • {filteredImages.length} of 9 images shown
          </p>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
            />
            
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
              <motion.div
                className="relative w-full max-w-4xl"
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Lightbox Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={closeLightbox}
                      className={`w-10 h-10 rounded-full ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'} flex items-center justify-center shadow-lg`}
                    >
                      <FaTimes />
                    </button>
                    <div>
                      <h2 className="text-xl font-bold text-white">{selectedImage.title}</h2>
                      <p className="text-white/70 text-sm">
                        {lightboxIndex + 1} of 9 • {formatDate(selectedImage.date)}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <button
                      onClick={toggleSlideshow}
                      className={`w-10 h-10 rounded-full ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'} flex items-center justify-center shadow-lg`}
                    >
                      {isSlideshowPlaying ? <FaPause className="text-xs" /> : <FaPlay className="text-xs" />}
                    </button>
                    <button
                      onClick={(e) => toggleFavorite(selectedImage.id, e)}
                      className={`w-10 h-10 rounded-full ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'} flex items-center justify-center shadow-lg`}
                    >
                      <FaHeart className={`text-xs ${favorites.includes(selectedImage.id) ? 'text-red-500' : 'text-current'}`} />
                    </button>
                  </div>
                </div>
                
                {/* Lightbox Content */}
                <div className="relative">
                  {/* Main Image */}
                  <div className="relative rounded-xl overflow-hidden bg-black">
                    <img
                      src={selectedImage.image}
                      alt={selectedImage.title}
                      className="w-full max-h-[60vh] object-contain"
                    />
                    
                    {/* Navigation Arrows */}
                    <button
                      onClick={() => navigateLightbox('prev')}
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                    >
                      <FaArrowLeft className="text-sm" />
                    </button>
                    <button
                      onClick={() => navigateLightbox('next')}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                    >
                      <FaArrowRight className="text-sm" />
                    </button>
                  </div>
                  
                  {/* Image Info */}
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">Description</h3>
                      <p className="text-white/80 text-sm">{selectedImage.description}</p>
                      
                      {/* Tags */}
                      <div className="mt-3">
                        <div className="text-sm text-white/70 mb-1">Tags</div>
                        <div className="flex flex-wrap gap-1">
                          {selectedImage.tags.map((tag, index) => (
                            <span key={index} className="px-2 py-1 bg-white/10 rounded text-xs text-white">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">Details</h3>
                      <div className="space-y-3">
                        {/* Stats */}
                        {selectedImage.stats && (
                          <div className="grid grid-cols-3 gap-2">
                            {Object.entries(selectedImage.stats).map(([key, value]) => (
                              <div key={key} className="text-center p-2 rounded-lg bg-white/10 backdrop-blur-sm">
                                <div className="font-bold text-white text-sm">{value}</div>
                                <div className="text-xs text-white/70 capitalize">{key}</div>
                              </div>
                            ))}
                          </div>
                        )}
                        
                        {/* Views & Likes */}
                        <div className="flex items-center gap-6">
                          <div className="text-center">
                            <div className="text-lg font-bold text-white">{selectedImage.views.toLocaleString()}</div>
                            <div className="text-xs text-white/70">Views</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold text-white">{selectedImage.likes}</div>
                            <div className="text-xs text-white/70">Likes</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold text-white">
                              {getCategoryIcon(selectedImage.category)}
                            </div>
                            <div className="text-xs text-white/70">
                              {categories.find(c => c.id === selectedImage.category)?.name}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Thumbnail Strip */}
                  <div className="mt-6">
                    <div className="flex gap-2 overflow-x-auto pb-2">
                      {galleryImages.map((image, index) => (
                        <button
                          key={image.id}
                          onClick={() => {
                            setSelectedImage(image);
                            setLightboxIndex(index);
                          }}
                          className={`flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 ${index === lightboxIndex ? 'border-orange-500' : 'border-transparent'}`}
                        >
                          <img
                            src={image.image}
                            alt={image.title}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;