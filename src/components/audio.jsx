import React, { useState, useRef } from "react";
import { Sounds } from "../sounds";
import "./audio.css";
import { TbPlayerTrackPrevFilled } from "react-icons/tb";
import { TbPlayerTrackNextFilled } from "react-icons/tb";

export const Audio = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [playedAudio, setPlayedAudio] = useState(0);
  const audioRef = useRef(null);
  const { details } = Sounds;
  const { name, url } = Sounds[playedAudio];

  const playAudio = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  const stopAudio = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      stopAudio();
    } else {
      playAudio();
    }
  };

  const nextAudio = () => {
    setPlayedAudio((prev) => (prev + 1) % Sounds.length);
  };

  const previousAudio = () => {
    setPlayedAudio((prev) => (prev - 1 + Sounds.length) % Sounds.length);
  };

  return (
    <div className="audio">
      <img
        className="audio-img"
        src="https://t3.ftcdn.net/jpg/05/70/75/68/360_F_570756898_qtlfAnu9obqb2AFYZItktI1GluHqcj8W.jpg"
      />
      <h2>{name}</h2>
      <audio ref={audioRef} src={url} controls onEnded={nextAudio} />
      <button onClick={previousAudio}>
        <TbPlayerTrackPrevFilled size={40} className="prev" />
      </button>
      <button onClick={nextAudio}>
        <TbPlayerTrackNextFilled size={40} className="next" />
      </button>
    </div>
  );
};
