import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';


const VideoSection = ({
  videoUrl,
  thumbnail,
  title,
  description,
  playButtonSize = 'large',
  autoplay = false,
  loop = false,
  muted = false,
  controls = true,
  showOverlay = true,
  overlayOpacity = 0.5,
  aspectRatio = '16:9',
  className = ''
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(muted);
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  // Handle aspect ratio
  const getAspectRatioStyle = () => {
    const [width, height] = aspectRatio.split(':').map(Number);
    return { paddingBottom: `${(height / width) * 100}%` };
  };

  // Play/Pause video
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Toggle mute
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Handle volume change
  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
      if (newVolume === 0) {
        setIsMuted(true);
        videoRef.current.muted = true;
      } else {
        setIsMuted(false);
        videoRef.current.muted = false;
      }
    }
  };

  // Handle time update
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
      setDuration(videoRef.current.duration);
    }
  };

  // Handle progress bar click
  const handleProgressClick = (e) => {
    if (videoRef.current && duration) {
      const rect = e.currentTarget.getBoundingClientRect();
      const pos = (e.clientX - rect.left) / rect.width;
      videoRef.current.currentTime = pos * duration;
    }
  };

  // Toggle fullscreen
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen?.();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.();
      setIsFullscreen(false);
    }
  };

  // Format time (seconds to MM:SS)
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  // Video event handlers
  useEffect(() => {
    const video = videoRef.current;
    
    const handleLoadedMetadata = () => {
      setDuration(video.duration);
    };

    const handleEnded = () => {
      setIsPlaying(false);
    };

    if (video) {
      video.addEventListener('loadedmetadata', handleLoadedMetadata);
      video.addEventListener('ended', handleEnded);
      video.addEventListener('timeupdate', handleTimeUpdate);

      // Autoplay if enabled
      if (autoplay) {
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.then(() => {
            setIsPlaying(true);
          }).catch(() => {
            // Autoplay was prevented
            console.log('Autoplay prevented');
          });
        }
      }
    }

    return () => {
      if (video) {
        video.removeEventListener('loadedmetadata', handleLoadedMetadata);
        video.removeEventListener('ended', handleEnded);
        video.removeEventListener('timeupdate', handleTimeUpdate);
      }
    };
  }, [autoplay]);

  // Fullscreen change listener
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  const playButtonSizes = {
    small: 'video-play-btn-sm',
    medium: 'video-play-btn-md',
    large: 'video-play-btn-lg'
  };

  return (
   <div className="video-wrap">
  <a
    className="video-btn video-effect"
    data-fancybox=""
    href="https://youtu.be/NSAOrGb9orM"
  >
    <i className="isax isax-play5" />
  </a>
</div>

  );
};

VideoSection.propTypes = {
  videoUrl: PropTypes.string.isRequired,
  thumbnail: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  playButtonSize: PropTypes.oneOf(['small', 'medium', 'large']),
  autoplay: PropTypes.bool,
  loop: PropTypes.bool,
  muted: PropTypes.bool,
  controls: PropTypes.bool,
  showOverlay: PropTypes.bool,
  overlayOpacity: PropTypes.number,
  aspectRatio: PropTypes.string,
  className: PropTypes.string
};

export default VideoSection;