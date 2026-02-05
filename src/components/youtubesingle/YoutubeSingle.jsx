import React, { useState, useEffect, useRef } from 'react';
import YouTube from 'react-youtube';
import { motion } from 'framer-motion';
import {
    FaPlay,
    FaPause,
    FaVolumeUp,
    FaVolumeMute,
    FaExpand,
    FaCompress,
    FaThumbsUp,
    FaThumbsDown,
    FaBookmark,
    FaShareAlt,
    FaClosedCaptioning,
    FaCog,
    FaStepForward,
    FaStepBackward,
    FaEye,
    FaCalendarAlt,
    FaYoutube,
    FaDownload,
    FaRegClock
} from 'react-icons/fa';

const YoutubeSingle = ({ darkMode = false }) => {
    const [player, setPlayer] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(70);
    const [isMuted, setIsMuted] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isLiked, setIsLiked] = useState(false);
    const [isDisliked, setIsDisliked] = useState(false);
    const [isSaved, setIsSaved] = useState(false);
    const [showControls, setShowControls] = useState(true);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [playbackRate, setPlaybackRate] = useState(1);
    const [showSettings, setShowSettings] = useState(false);
    const [showShareMenu, setShowShareMenu] = useState(false);
    const [captionEnabled, setCaptionEnabled] = useState(false);
    const [quality, setQuality] = useState('hd1080');
    const playerRef = useRef(null);

    // YouTube video ID - Using a verified working video
    const videoId = "d6xuS4s8OS0"; // Working YouTube video ID
    const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;

    // Video data
    const videoData = {
        title: "Start Amazon Business with US | Amazon FBA | FBM | Private Level | Eliteant-com",
        channel: "Eliteant",
        subscribers: "245K",
        views: "124,587",
        uploadDate: "Mar 15, 2024",
        likes: "8,924",
        dislikes: "124",
        description: `At Eliteant, we're not just a company; we're a team of dedicated individuals passionate about making a mark in the eCommerce world.

We specialize in providing top-notch services on giant eCommerce platforms like Amazon, Walmart, and Shopify. Our goal is to empower businesses, large and small, to thrive in the ever-evolving digital marketplace.

Whether you're an established brand or just starting out, we have the expertise to elevate your presence and maximize your potential on these platforms.

Eliteant.com isn't just a service provider; it's a hub of innovation and collaboration. We're here to revolutionize the way you approach eCommerce, offering tailored solutions to suit your unique needs.

So, if you're ready to take your eCommerce game to the next level, you're in the right place. Connect with us at Eliteant.com, where we turn your eCommerce dreams into reality.

Contact: +8801768 937103 (Whatsapp)`,
        tags: ["Amazon FBA", "Automation", "E-commerce", "AI Tools", "Dropshipping"]
    };

    // YouTube player options - CORRECTED
    const opts = {
        height: '100%',
        width: '100%',
        playerVars: {
            // Fix: Keep autoplay at 0, enable controls for debugging
            autoplay: 0,
            controls: 0, // Set to 1 initially to test if YouTube player loads
            modestbranding: 1,
            rel: 0,
            showinfo: 0,
            iv_load_policy: 3,
            fs: 1, // Enable fullscreen
            disablekb: 0, // Enable keyboard controls
            playsinline: 1,
            cc_load_policy: captionEnabled ? 1 : 0,
            hl: 'en',
            cc_lang_pref: 'en',
            enablejsapi: 1, // Important: Enable JS API
            origin: window.location.origin // Important for CORS
        },
    };

    // Format time
    const formatTime = (seconds) => {
        if (!seconds || isNaN(seconds)) return "0:00";
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };

    // Player event handlers
    const onReady = (event) => {
        console.log('YouTube Player Ready', event);
        setPlayer(event.target);
        setDuration(event.target.getDuration());
        // Set initial volume
        event.target.setVolume(volume);
        // Hide YouTube's native controls after player is ready
        setTimeout(() => {
            if (event.target.getIframe) {
                const iframe = event.target.getIframe();
                iframe.style.pointerEvents = 'auto'; // Enable interaction
            }
        }, 1000);
    };

    const onStateChange = (event) => {
        console.log('YouTube Player State:', event.data);
        const playerState = event.data;
        
        // YouTube.PlayerState constants
        const PLAYING = 1;
        const PAUSED = 2;
        const ENDED = 0;
        const BUFFERING = 3;

        switch (playerState) {
            case PLAYING:
                setIsPlaying(true);
                break;
            case PAUSED:
                setIsPlaying(false);
                break;
            case ENDED:
                setIsPlaying(false);
                setCurrentTime(0);
                break;
            case BUFFERING:
                console.log('Buffering...');
                break;
            default:
                console.log('Unknown state:', playerState);
                break;
        }
    };

    const onError = (event) => {
        console.error('YouTube Player Error:', event);
        console.log('Error data:', event.data);
    };

    // Control functions
    const togglePlay = () => {
        if (player) {
            if (isPlaying) {
                player.pauseVideo();
            } else {
                player.playVideo();
            }
            setIsPlaying(!isPlaying);
        } else {
            console.log('Player not ready');
        }
        showControlsTemporarily();
    };

    const toggleMute = () => {
        if (player) {
            if (isMuted) {
                player.unMute();
            } else {
                player.mute();
            }
            setIsMuted(!isMuted);
        }
        showControlsTemporarily();
    };

    const handleVolumeChange = (e) => {
        const newVolume = parseInt(e.target.value);
        if (player) {
            player.setVolume(newVolume);
            setVolume(newVolume);
            setIsMuted(newVolume === 0);
        }
        showControlsTemporarily();
    };

    const handleProgressClick = (e) => {
        if (player && duration > 0) {
            const rect = e.currentTarget.getBoundingClientRect();
            const pos = (e.clientX - rect.left) / rect.width;
            const newTime = pos * duration;
            player.seekTo(newTime, true);
            setCurrentTime(newTime);
        }
        showControlsTemporarily();
    };

    const skip = (seconds) => {
        if (player) {
            const newTime = Math.max(0, Math.min(duration, currentTime + seconds));
            player.seekTo(newTime, true);
            setCurrentTime(newTime);
        }
        showControlsTemporarily();
    };

    const toggleFullscreen = () => {
        const container = document.querySelector('.youtube-player-container');
        if (!container) return;

        if (!isFullscreen) {
            if (container.requestFullscreen) {
                container.requestFullscreen();
            } else if (container.webkitRequestFullscreen) { /* Safari */
                container.webkitRequestFullscreen();
            } else if (container.msRequestFullscreen) { /* IE11 */
                container.msRequestFullscreen();
            }
            setIsFullscreen(true);
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) { /* Safari */
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) { /* IE11 */
                document.msExitFullscreen();
            }
            setIsFullscreen(false);
        }
        showControlsTemporarily();
    };

    const changePlaybackRate = (rate) => {
        if (player) {
            player.setPlaybackRate(rate);
            setPlaybackRate(rate);
        }
        setShowSettings(false);
        showControlsTemporarily();
    };

    const handleShare = (platform) => {
        const url = videoUrl;
        const text = `Watch: ${videoData.title}`;

        switch (platform) {
            case 'copy':
                navigator.clipboard.writeText(url).then(() => {
                    alert('Video link copied to clipboard!');
                });
                break;
            case 'twitter':
                window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
                break;
            case 'facebook':
                window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
                break;
            default:
                break;
        }
        setShowShareMenu(false);
    };

    // Show controls temporarily
    const showControlsTemporarily = () => {
        setShowControls(true);
        clearTimeout(window.controlsTimeout);
        window.controlsTimeout = setTimeout(() => {
            if (isPlaying) {
                setShowControls(false);
            }
        }, 3000);
    };

    // Update current time
    useEffect(() => {
        let interval;
        if (player && isPlaying) {
            interval = setInterval(() => {
                if (player && player.getCurrentTime) {
                    const time = player.getCurrentTime();
                    if (!isNaN(time)) {
                        setCurrentTime(time);
                    }
                }
            }, 100);
        }
        return () => {
            if (interval) clearInterval(interval);
        };
    }, [player, isPlaying]);

    // Fullscreen change handler
    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullscreen(!!document.fullscreenElement);
        };

        document.addEventListener('fullscreenchange', handleFullscreenChange);
        document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
        document.addEventListener('msfullscreenchange', handleFullscreenChange);

        return () => {
            document.removeEventListener('fullscreenchange', handleFullscreenChange);
            document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
            document.removeEventListener('msfullscreenchange', handleFullscreenChange);
        };
    }, []);

    // Hide controls after delay
    useEffect(() => {
        if (isPlaying) {
            const timer = setTimeout(() => {
                setShowControls(false);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [isPlaying, showControls]);

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    // Calculate progress
    const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

    return (
        <section className={`py-12 md:py-16 ${darkMode ? 'bg-gradient-to-b from-gray-900 to-black' : 'bg-gradient-to-b from-gray-50 to-white'}`}>
            <div className="container mx-auto px-4">
                <motion.div
                    className="max-w-4xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Section Header */}
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-3 mb-4">
                            <div className="p-3 rounded-full bg-gradient-to-r from-red-500 to-red-600 text-white">
                                <FaYoutube className="text-2xl" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold">Short 
                                <span className={`${darkMode ? 'bg-gradient-to-r from-orange-400 to-amber-400' : 'bg-gradient-to-r from-orange-600 to-amber-600'} bg-clip-text text-transparent pl-2`}>
                                    Tour of EliteAnt
                                </span>
                            </h2>
                        </div>
                        <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
                            Learn from our expert tutorials and success stories
                        </p>
                    </div>

                    {/* YouTube Player Container */}
                    <div
                        className={`youtube-player-container rounded-2xl overflow-hidden shadow-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'} relative`}
                        onMouseMove={showControlsTemporarily}
                        onMouseEnter={showControlsTemporarily}
                        ref={playerRef}
                    >
                        {/* YouTube Player */}
                        <div className="relative aspect-video bg-black">
                            <YouTube
                                videoId={videoId}
                                opts={opts}
                                onReady={onReady}
                                onStateChange={onStateChange}
                                onError={onError}
                                className="absolute inset-0 w-full h-full"
                                iframeClassName="w-full h-full"
                                loading="lazy"
                            />

                            {/* Custom Controls Overlay */}
                            <div
                                className={`absolute inset-0 transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'} pointer-events-none`}
                            >
                                {/* Top Bar */}
                                <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/70 to-transparent p-4 pointer-events-auto">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-white font-semibold text-lg truncate pr-4">
                                            {videoData.title}
                                        </h3>
                                        <div className="flex items-center gap-2">
                                            <div className="px-2 py-1 bg-black/70 text-white text-xs rounded flex items-center gap-1">
                                                <FaEye className="text-xs" />
                                                {videoData.views}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Center Play Button */}
                                {!isPlaying && (
                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-auto">
                                        <motion.button
                                            onClick={togglePlay}
                                            className="relative"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <div className="w-24 h-24 bg-gradient-to-r from-red-600/90 to-red-700/90 rounded-full flex items-center justify-center shadow-2xl backdrop-blur-sm">
                                                <FaPlay className="text-3xl text-white ml-2" />
                                            </div>
                                            <motion.div
                                                className="absolute inset-0 border-4 border-red-500/50 rounded-full"
                                                animate={{ scale: [1, 1.2, 1] }}
                                                transition={{ duration: 2, repeat: Infinity }}
                                            />
                                        </motion.button>
                                    </div>
                                )}

                                {/* Bottom Controls */}
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 pointer-events-auto">
                                    {/* Progress Bar */}
                                    <div
                                        className="h-1.5 bg-gray-700/50 rounded-full mb-4 cursor-pointer group"
                                        onClick={handleProgressClick}
                                    >
                                        <div
                                            className="h-full bg-gradient-to-r from-red-600 to-red-500 rounded-full relative"
                                            style={{ width: `${progress}%` }}
                                        >
                                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow" />
                                        </div>
                                    </div>

                                    {/* Control Bar */}
                                    <div className="flex items-center justify-between">
                                        {/* Left Controls */}
                                        <div className="flex items-center gap-4">
                                            {/* Play/Pause */}
                                            <button
                                                onClick={togglePlay}
                                                className="text-white hover:text-red-500 transition-colors"
                                                aria-label={isPlaying ? "Pause" : "Play"}
                                            >
                                                {isPlaying ? <FaPause className="text-xl" /> : <FaPlay className="text-xl" />}
                                            </button>

                                            {/* Skip Backward */}
                                            <button
                                                onClick={() => skip(-10)}
                                                className="text-white hover:text-red-500 transition-colors"
                                                aria-label="Skip back 10 seconds"
                                            >
                                                <FaStepBackward className="text-lg" />
                                            </button>

                                            {/* Skip Forward */}
                                            <button
                                                onClick={() => skip(10)}
                                                className="text-white hover:text-red-500 transition-colors"
                                                aria-label="Skip forward 10 seconds"
                                            >
                                                <FaStepForward className="text-lg" />
                                            </button>

                                            {/* Volume Control */}
                                            <div className="flex items-center gap-2">
                                                <button
                                                    onClick={toggleMute}
                                                    className="text-white hover:text-red-500 transition-colors"
                                                    aria-label={isMuted ? "Unmute" : "Mute"}
                                                >
                                                    {isMuted ? <FaVolumeMute className="text-lg" /> : <FaVolumeUp className="text-lg" />}
                                                </button>
                                                <input
                                                    type="range"
                                                    min="0"
                                                    max="100"
                                                    value={isMuted ? 0 : volume}
                                                    onChange={handleVolumeChange}
                                                    className="w-20 h-1 bg-gray-700 rounded-full appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
                                                    aria-label="Volume"
                                                />
                                            </div>

                                            {/* Time Display */}
                                            <div className="text-white text-sm font-mono">
                                                {formatTime(currentTime)} / {formatTime(duration)}
                                            </div>
                                        </div>

                                        {/* Right Controls */}
                                        <div className="flex items-center gap-4">
                                            {/* Captions */}
                                            <button
                                                onClick={() => setCaptionEnabled(!captionEnabled)}
                                                className={`text-white hover:text-red-500 transition-colors ${captionEnabled ? 'text-red-500' : ''}`}
                                                aria-label={captionEnabled ? "Disable captions" : "Enable captions"}
                                            >
                                                <FaClosedCaptioning className="text-lg" />
                                            </button>

                                            {/* Settings */}
                                            <div className="relative">
                                                <button
                                                    onClick={() => setShowSettings(!showSettings)}
                                                    className="text-white hover:text-red-500 transition-colors"
                                                    aria-label="Settings"
                                                >
                                                    <FaCog className="text-lg" />
                                                </button>

                                                {showSettings && (
                                                    <div className={`absolute bottom-full right-0 mb-2 w-48 ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-xl border ${darkMode ? 'border-gray-700' : 'border-gray-200'} overflow-hidden z-10`}>
                                                        <div className="py-2">
                                                            <div className={`px-4 py-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Playback Speed</div>
                                                            {[0.5, 0.75, 1, 1.25, 1.5, 2].map(speed => (
                                                                <button
                                                                    key={speed}
                                                                    onClick={() => changePlaybackRate(speed)}
                                                                    className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 ${playbackRate === speed ? 'text-red-500 font-semibold' : darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                                                                >
                                                                    {speed === 1 ? 'Normal' : speed}x
                                                                </button>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Fullscreen */}
                                            <button
                                                onClick={toggleFullscreen}
                                                className="text-white hover:text-red-500 transition-colors"
                                                aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
                                            >
                                                {isFullscreen ? <FaCompress className="text-lg" /> : <FaExpand className="text-lg" />}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Video Info Section */}
                        <div className="p-6">
                            {/* Title and Stats */}
                            <div className="mb-6">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                                    <h3 className="text-2xl font-bold">{videoData.title}</h3>
                                    <div className="flex items-center gap-4">
                                        {/* Like/Dislike */}
                                        <div className="flex items-center gap-2">
                                            <button
                                                onClick={() => setIsLiked(!isLiked)}
                                                className={`flex items-center gap-2 px-3 py-2 rounded-lg ${isLiked ? 'bg-red-500/10 text-red-500' : darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} transition-colors`}
                                            >
                                                <FaThumbsUp />
                                                <span className="font-medium">{videoData.likes}</span>
                                            </button>
                                            <button
                                                onClick={() => setIsDisliked(!isDisliked)}
                                                className={`p-2 rounded-lg ${isDisliked ? 'bg-gray-700 text-red-500' : darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} transition-colors`}
                                            >
                                                <FaThumbsDown />
                                            </button>
                                        </div>

                                        {/* Save */}
                                        <button
                                            onClick={() => setIsSaved(!isSaved)}
                                            className={`p-2 rounded-lg ${isSaved ? 'text-red-500' : darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'} transition-colors`}
                                            aria-label={isSaved ? "Remove from saved" : "Save video"}
                                        >
                                            <FaBookmark />
                                        </button>

                                        {/* Share */}
                                        <div className="relative">
                                            <button
                                                onClick={() => setShowShareMenu(!showShareMenu)}
                                                className={`p-2 rounded-lg ${darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'} transition-colors`}
                                                aria-label="Share"
                                            >
                                                <FaShareAlt />
                                            </button>

                                            {showShareMenu && (
                                                <div className={`absolute bottom-full right-0 mb-2 w-48 ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-xl border ${darkMode ? 'border-gray-700' : 'border-gray-200'} overflow-hidden z-10`}>
                                                    <button
                                                        onClick={() => handleShare('copy')}
                                                        className="block w-full text-left px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm"
                                                    >
                                                        Copy Link
                                                    </button>
                                                    <button
                                                        onClick={() => handleShare('twitter')}
                                                        className="block w-full text-left px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm"
                                                    >
                                                        Share on Twitter
                                                    </button>
                                                    <button
                                                        onClick={() => handleShare('facebook')}
                                                        className="block w-full text-left px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm"
                                                    >
                                                        Share on Facebook
                                                    </button>
                                                    <button
                                                        onClick={() => window.open(videoUrl, '_blank')}
                                                        className="block w-full text-left px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm border-t border-gray-700/30"
                                                    >
                                                        Open on YouTube
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Channel Info */}
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white font-bold">
                                            EM
                                        </div>
                                        <div>
                                            <h4 className="font-bold">{videoData.channel}</h4>
                                            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                                {videoData.subscribers} subscribers
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 text-sm">
                                        <span className={`flex items-center gap-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                            <FaEye /> {videoData.views} views
                                        </span>
                                        <span className={`flex items-center gap-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                            <FaCalendarAlt /> {videoData.uploadDate}
                                        </span>
                                    </div>
                                </div>

                                {/* Video Description */}
                                <div className={`mb-6 p-4 rounded-lg ${darkMode ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
                                    <h4 className="font-bold mb-2">Description</h4>
                                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-4 whitespace-pre-line`}>
                                        {videoData.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {videoData.tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'}`}
                                            >
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Additional Info */}
                    <div className="mt-8 text-center">
                        <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            Video hosted on YouTube • Embedded on our website
                        </p>
                        <div className="mt-4 flex flex-wrap justify-center gap-4">
                            <button
                                onClick={() => window.open(videoUrl, '_blank')}
                                className="px-4 py-2 rounded-lg bg-gradient-to-r from-red-600 to-red-700 text-white flex items-center gap-2 hover:from-red-700 hover:to-red-800 transition-all"
                            >
                                <FaYoutube />
                                Watch on YouTube
                            </button>
                            <button className={`px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} flex items-center gap-2 transition-colors`}>
                                <FaDownload />
                                Download Resources
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default YoutubeSingle;