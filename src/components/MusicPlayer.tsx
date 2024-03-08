import music from "../assets/all-the-mountains-are-high.mp3";
import { useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

interface MusicPlayerProps {
  translate: boolean;
}

const song = new Audio(music);

function MusicPlayer({ translate }: MusicPlayerProps) {
  const [isPlaying, setPlaying] = useState(false);

  function play() {
    if (!isPlaying) {
      void song.play().then(() => setPlaying(true));
    } else {
      song.pause();
      setPlaying(false);
    }
  }

  return (
    <div className="flex items-center justify-center">
      <button
        className="bg-gray-600 hover:bg-gray-400 text-white font-bold py-6 px-12 rounded inline-flex items-center text-lg"
        onClick={play}
      >
        {isPlaying ? (
          <FaPause className="mr-2 text-xl" />
        ) : (
          <FaPlay className="mr-2 text-xl" />
        )}
        <span>
          {isPlaying
            ? translate
              ? "PAUSE"
              : "PAUSAR"
            : translate
            ? "PLAY ME!"
            : "DA PLAY AI!"}
        </span>
      </button>
    </div>
  );
}

export default MusicPlayer;
