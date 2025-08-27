import { useState, useRef, useEffect } from "react";
import { Play, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import videoThumbnail from "@/assets/video-thumbnail.png";

interface CustomVideoPlayerProps {
  src: string;
  poster?: string;
  className?: string;
}

const CustomVideoPlayer = ({ src, poster, className = "" }: CustomVideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasEnded, setHasEnded] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      if (hasEnded) {
        // Restart video
        videoRef.current.currentTime = 0;
        setHasEnded(false);
      }
      
      videoRef.current.play();
      setIsPlaying(true);
      setHasStarted(true);
      setShowControls(false);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    setHasEnded(true);
    setShowControls(true);
  };

  const handleVideoClick = () => {
    if (videoRef.current && isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
      setShowControls(true);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener('ended', handleVideoEnd);
      return () => video.removeEventListener('ended', handleVideoEnd);
    }
  }, []);

  return (
    <div className={`relative rounded-lg overflow-hidden w-full ${className}`}>
      {!hasStarted && (
        <img 
          src={poster || videoThumbnail} 
          alt="Video thumbnail" 
          className="w-full h-auto object-cover"
        />
      )}
      <video
        ref={videoRef}
        className={`w-full h-auto cursor-pointer ${!hasStarted ? 'hidden' : ''}`}
        poster={poster}
        preload="metadata"
        onClick={handleVideoClick}
        onContextMenu={(e) => e.preventDefault()} // Disable right-click menu
        playsInline
        webkit-playsinline="true"
      >
        <source src={src} type="video/mp4" />
        Seu navegador não suporta o elemento de vídeo.
      </video>
      
      {showControls && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[1px]">
          <Button
            onClick={handlePlay}
            size="lg"
            className="bg-white/90 hover:bg-white text-black rounded-full p-4 sm:p-6 shadow-lg animate-scale-in hover:scale-110 transition-all duration-300"
          >
            {hasEnded ? (
              <RotateCcw className="w-6 sm:w-8 h-6 sm:h-8" />
            ) : (
              <Play className="w-6 sm:w-8 h-6 sm:h-8 ml-0.5 sm:ml-1" />
            )}
          </Button>
        </div>
      )}
    </div>
  );
};

export default CustomVideoPlayer;