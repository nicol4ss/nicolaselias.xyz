import { useState, useEffect } from "react";
import { FaPlayCircle, FaStopCircle } from "react-icons/fa";
import music from "../assets/dancin.mp3";
import "./MusicPlayer.css";

const song = new Audio(music);

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const tooltipTimer = setTimeout(() => {
      setShowTooltip(true);
    }, 1000);

    return () => clearTimeout(tooltipTimer);
  }, []);

  const handlePlayPause = () => {
    if (!isPlaying) {
      song.play();
      setIsPlaying(true);
    } else {
      song.pause();
      setIsPlaying(false);
    }
  };

  const hideTooltip = () => {
    setShowTooltip(false);
  };

  return (
    <div
      className="music-player-container"
      onClick={handlePlayPause}
      onMouseEnter={hideTooltip}
    >
      {isPlaying ? (
        <FaStopCircle className="music-player-icon" />
      ) : (
        <FaPlayCircle className="music-player-icon" />
      )}
      {showTooltip && <div className="music-player-tooltip">Play with me</div>}
    </div>
  );
};

export default MusicPlayer;
