import React, { useState, useEffect, useRef } from "react";
import ReactPlayer from "react-player";
import ProductTag from "./ProductTag";

const VideoReel = ({ videoSrc, productTags }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const playerRef = useRef(null);  

  
  const handleVisibilityChange = () => {
    if (playerRef.current) {
      
      const internalPlayer = playerRef.current.getInternalPlayer();
      if (internalPlayer) {
        const rect = internalPlayer.getBoundingClientRect();  
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setIsPlaying(true);  
        } else {
          setIsPlaying(false);  
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleVisibilityChange);
    handleVisibilityChange(); 

    return () => {
      window.removeEventListener("scroll", handleVisibilityChange);
    };
  }, []);

  return (
    <div className="video-reel">
      <ReactPlayer
        ref={playerRef}
        url={videoSrc}
        playing={isPlaying}
        muted={isMuted}
        width="100%"
        height="100%"
        controls={false}
      />
      <div className="video-controls">
        <button onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? "Pause" : "Play"}
        </button>
        <button onClick={() => setIsMuted(!isMuted)}>
          {isMuted ? "Unmute" : "Mute"}
        </button>
      </div>
      <div className="product-tags">
        {productTags.map((tag, index) => (
          <ProductTag key={index} tag={tag} />
        ))}
      </div>
    </div>
  );
};

export default VideoReel;
