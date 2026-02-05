import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from 'framer-motion';
import { 
  FaPlay, 
  FaClock, 
  FaEye, 
  FaThumbsUp, 
  FaCalendarAlt,
  FaChevronLeft,
  FaChevronRight,
  FaYoutube,
  FaShare,
  FaBookmark,
  FaExternalLinkAlt,
  FaRegClock
} from 'react-icons/fa';

const Youtube = ({ darkMode = false }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const carouselRef = useRef(null);
  const autoPlayRef = useRef(null);

  // YouTube video data
  const videos = [
    {
      id: 1,
      title: "Amazon Automation: From $0 to $50k/Month",
      channel: "E-Commerce Masters",
      views: "245K",
      likes: "12K",
      duration: "15:42",
      uploadDate: "2 weeks ago",
      thumbnail: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      category: "Success Story",
      description: "How we automated an Amazon store to generate $50k monthly revenue using AI tools."
    },
    {
      id: 2,
      title: "AI Product Research Secrets Revealed",
      channel: "Automation Pro",
      views: "189K",
      likes: "9.5K",
      duration: "22:18",
      uploadDate: "1 month ago",
      thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      category: "Tutorial",
      description: "Discover how AI finds winning products with 90% accuracy before they go viral."
    },
    {
      id: 3,
      title: "PPC Automation That Actually Works",
      channel: "Amazon Ad Experts",
      views: "312K",
      likes: "18K",
      duration: "18:35",
      uploadDate: "3 days ago",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      category: "Strategy",
      description: "Cut your ACOS by 45% with our automated PPC management system."
    },
    {
      id: 4,
      title: "Inventory Management Made Simple",
      channel: "FBA Masters",
      views: "156K",
      likes: "7.8K",
      duration: "12:47",
      uploadDate: "2 months ago",
      thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      category: "How-to",
      description: "Never run out of stock again with predictive inventory automation."
    },
    {
      id: 5,
      title: "Scaling to 7 Figures: Amazon Automation Case Study",
      channel: "Scale Lab",
      views: "428K",
      likes: "24K",
      duration: "28:12",
      uploadDate: "1 week ago",
      thumbnail: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      category: "Case Study",
      description: "From startup to 7-figure Amazon business in 12 months."
    },
    {
      id: 6,
      title: "Review Automation: Build Trust Fast",
      channel: "Brand Builders",
      views: "198K",
      likes: "10.2K",
      duration: "16:33",
      uploadDate: "3 weeks ago",
      thumbnail: "https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      category: "Branding",
      description: "Automated systems to generate authentic reviews and build credibility."
    },
    {
      id: 7,
      title: "Amazon SEO Automation 2024",
      channel: "SEO Wizards",
      views: "275K",
      likes: "14.5K",
      duration: "20:45",
      uploadDate: "4 days ago",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      category: "SEO",
      description: "Rank #1 on Amazon with our automated SEO optimization system."
    },
    {
      id: 8,
      title: "Competitor Analysis Automation",
      channel: "Market Intelligence",
      views: "142K",
      likes: "6.9K",
      duration: "14:22",
      uploadDate: "1 month ago",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      category: "Analytics",
      description: "Automatically track and outrank your Amazon competitors."
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, activeIndex]);

  // Progress bar animation
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            return 0;
          }
          return prev + 0.2;
        });
      }, 100);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % videos.length);
    setProgress(0);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + videos.length) % videos.length);
    setProgress(0);
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
    setProgress(0);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
    if (!isAutoPlaying) {
      setProgress(0);
    }
  };

  const handlePlayVideo = () => {
    setIsPlaying(true);
    // In a real app, this would open the video modal or redirect to YouTube
    window.open(`https://youtube.com/watch?v=demo${videos[activeIndex].id}`, '_blank');
  };

  // Animation variants
  const mainVideoVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3
      }
    })
  };

  const sideVideoVariants = {
    hidden: { 
      x: -50, 
      opacity: 0,
      scale: 0.9 
    },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: "easeOut"
      }
    }),
    exit: { 
      x: 50, 
      opacity: 0,
      transition: { duration: 0.3 } 
    }
  };

  // Get side videos (excluding current active)
  const sideVideos = [...videos.slice(activeIndex + 1), ...videos.slice(0, activeIndex)].slice(0, 3);

  return (
    <section className={`py-16 md:py-24 ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-b from-gray-50 to-white'}`}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 rounded-full bg-gradient-to-r from-red-500 to-red-600 text-white">
              <FaYoutube className="text-2xl" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Amazon Automation Tutorials</h2>
          </div>
          <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Learn from our expert tutorials and success stories
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Video Section (Left) */}
          <div className="lg:w-2/3">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              {/* Main Video Player */}
              <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-black">
                <AnimatePresence mode='wait' custom={1}>
                  <motion.div
                    key={videos[activeIndex].id}
                    custom={1}
                    variants={mainVideoVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="absolute inset-0"
                  >
                    {/* Video Thumbnail */}
                    <div className="relative w-full h-full">
                      <img 
                        src={videos[activeIndex].thumbnail} 
                        alt={videos[activeIndex].title}
                        className="w-full h-full object-cover opacity-80"
                      />
                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                      
                      {/* Play Button */}
                      <motion.button
                        className="absolute inset-0 flex items-center justify-center"
                        onClick={handlePlayVideo}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className="relative">
                          <div className="w-24 h-24 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center shadow-2xl">
                            <FaPlay className="text-3xl text-white ml-1" />
                          </div>
                          <motion.div
                            className="absolute inset-0 border-4 border-red-500/30 rounded-full"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          ></motion.div>
                        </div>
                      </motion.button>

                      {/* Video Info Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="px-3 py-1 bg-red-600 text-white text-sm font-semibold rounded-full">
                            {videos[activeIndex].category}
                          </span>
                          <span className="px-3 py-1 bg-gray-800/80 text-white text-sm rounded-full backdrop-blur-sm">
                            {videos[activeIndex].duration}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {videos[activeIndex].title}
                        </h3>
                        <div className="flex items-center gap-4 text-gray-300 text-sm">
                          <span className="flex items-center gap-1">
                            <FaEye /> {videos[activeIndex].views} views
                          </span>
                          <span className="flex items-center gap-1">
                            <FaThumbsUp /> {videos[activeIndex].likes}
                          </span>
                          <span className="flex items-center gap-1">
                            <FaCalendarAlt /> {videos[activeIndex].uploadDate}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Progress Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700/50">
                  <motion.div
                    className="h-full bg-gradient-to-r from-red-500 to-red-600"
                    initial={{ width: "0%" }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.1 }}
                  ></motion.div>
                </div>

                {/* Navigation Arrows */}
                <motion.button
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/80 transition-colors"
                  onClick={prevSlide}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaChevronLeft />
                </motion.button>
                <motion.button
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/80 transition-colors"
                  onClick={nextSlide}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaChevronRight />
                </motion.button>
              </div>

              {/* Video Description */}
              <div className={`p-6 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold">
                      {videos[activeIndex].channel.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold">{videos[activeIndex].channel}</div>
                      <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>245K subscribers</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <motion.button
                      className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaBookmark />
                    </motion.button>
                    <motion.button
                      className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaShare />
                    </motion.button>
                    <motion.button
                      className="p-2 rounded-lg bg-gradient-to-r from-red-500 to-red-600 text-white flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handlePlayVideo}
                    >
                      <FaExternalLinkAlt />
                      Watch on YouTube
                    </motion.button>
                  </div>
                </div>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {videos[activeIndex].description}
                </p>
              </div>
            </div>

            {/* Video Controls */}
            <div className="flex items-center justify-between mt-6 px-4">
              <div className="flex items-center gap-4">
                <button 
                  onClick={toggleAutoPlay}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full ${isAutoPlaying ? 'bg-green-500/20 text-green-500' : 'bg-gray-200 text-gray-700'} ${darkMode && !isAutoPlaying ? 'bg-gray-800 text-gray-300' : ''}`}
                >
                  <FaRegClock />
                  {isAutoPlaying ? 'Auto-play On' : 'Auto-play Off'}
                </button>
                
                {/* Dots Indicator */}
                <div className="flex items-center gap-2">
                  {videos.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all ${index === activeIndex ? 'bg-red-600 w-8' : darkMode ? 'bg-gray-700' : 'bg-gray-300'}`}
                    />
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {activeIndex + 1} of {videos.length} videos
                </span>
              </div>
            </div>
          </div>

          {/* Side Videos Carousel (Right) */}
          <div className="lg:w-1/3">
            <div className="sticky top-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold">Up Next</h3>
                <div className="flex items-center gap-2">
                  <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Auto-play in</span>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center text-white font-bold">
                    {Math.floor((5000 - progress * 50) / 1000)}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <AnimatePresence>
                  {sideVideos.map((video, index) => (
                    <motion.div
                      key={video.id}
                      custom={index}
                      variants={sideVideoVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      whileHover={{ x: 10 }}
                      className={`group cursor-pointer ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} rounded-xl overflow-hidden shadow-lg border ${darkMode ? 'border-gray-700' : 'border-gray-200'} transition-all duration-300`}
                      onClick={() => goToSlide(videos.findIndex(v => v.id === video.id))}
                    >
                      <div className="flex">
                        {/* Thumbnail */}
                        <div className="relative w-32 flex-shrink-0">
                          <img 
                            src={video.thumbnail} 
                            alt={video.title}
                            className="w-full h-24 object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
                          <div className="absolute bottom-2 right-2 px-1 py-0.5 bg-black/80 text-white text-xs rounded">
                            {video.duration}
                          </div>
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                              <FaPlay className="text-white text-sm ml-0.5" />
                            </div>
                          </div>
                        </div>

                        {/* Video Info */}
                        <div className="p-3 flex-1">
                          <h4 className="font-semibold line-clamp-2 text-sm mb-1 group-hover:text-red-600 transition-colors">
                            {video.title}
                          </h4>
                          <div className="flex items-center gap-4 text-xs opacity-70 mb-1">
                            <span className="flex items-center gap-1">
                              <FaEye /> {video.views}
                            </span>
                            <span className="flex items-center gap-1">
                              <FaThumbsUp /> {video.likes}
                            </span>
                          </div>
                          <div className="text-xs opacity-70 flex items-center gap-2">
                            <span className="px-2 py-0.5 bg-gray-200 dark:bg-gray-700 rounded-full">
                              {video.category}
                            </span>
                            <span>{video.uploadDate}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {/* View All Button */}
                <motion.button
                  className={`w-full py-3 rounded-xl border-2 border-dashed ${darkMode ? 'border-gray-700 hover:border-red-500 text-gray-400' : 'border-gray-300 hover:border-red-500 text-gray-600'} transition-all duration-300 flex items-center justify-center gap-2`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaYoutube className="text-red-600" />
                  View All Videos on YouTube
                </motion.button>
              </div>

              {/* Stats */}
              <div className={`mt-8 p-6 rounded-xl ${darkMode ? 'bg-gray-800/50' : 'bg-gray-50'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                <h4 className="font-bold mb-4">Channel Stats</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600">428K</div>
                    <div className="text-sm opacity-70">Total Views</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600">24.5K</div>
                    <div className="text-sm opacity-70">Subscribers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600">98%</div>
                    <div className="text-sm opacity-70">Positive Ratings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600">156</div>
                    <div className="text-sm opacity-70">Videos</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Playlist Categories */}
        {/* <div className="mt-12">
          <h3 className="text-2xl font-bold mb-6">Video Categories</h3>
          <div className="flex flex-wrap gap-3">
            {['All Videos', 'Tutorials', 'Case Studies', 'Success Stories', 'Strategy Sessions', 'Product Research', 'PPC Automation', 'SEO'].map((category, index) => (
              <motion.button
                key={category}
                className={`px-4 py-2 rounded-full ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div> */}

      </div>
    </section>
  );
};

export default Youtube;