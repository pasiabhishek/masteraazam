import React, { useRef, useState } from "react";
import "./css/Music.css";
import Songs from "./data/Songs.json";

export default function Music() {
    const [currentSong, setCurrentSong] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);
    const song = Songs[currentSong];

    const play = () => {
        audioRef.current.play();
        setIsPlaying(true);
    };

    const pause = () => {
        audioRef.current.pause();
        setIsPlaying(false);
    };

    const previous = () => {
        const index =
            currentSong === 0 ? Songs.length - 1 : currentSong - 1;

        setCurrentSong(index);
        setIsPlaying(true);

        setTimeout(() => {
            audioRef.current.play();
        }, 0);
    };

    const next = () => {
        const index = currentSong === Songs.length - 1 ? 0 : currentSong + 1;

        setCurrentSong(index);
        setIsPlaying(true);

        setTimeout(() => {
            audioRef.current.play();
        }, 0);
    };

    const selectSong = (index) => {
        setCurrentSong(index);
        setIsPlaying(true);

        setTimeout(() => {
            audioRef.current.play();
        }, 0);
    };

    return (
        <div className="Music" id="Music">
            <div className="section">
                <h1>Music</h1>
                <p>Melodies that tells stories.</p>
                <div className="music_player">
                    <div className="player">
                        <img  src={song.cover_art} width="250" alt={song.title}/>

                        <div className="controls">
                            <h3 className="Song_name">
                                {song.title}
                            </h3>
                            <p className="Song_Artist">
                                {song.artist}
                            </p>
                            <audio ref={audioRef} src={song.audio} onEnded={next } />
                            <input type="range" name="play_bar" id="Play_bar" min="0" max="100" defaultValue="0"  />

                            <div className="control_button">
                                <div className="song_controls">
                                    <ul>
                                        <li onClick={previous}>
                                            <i className="fa-solid fa-backward-step"></i>
                                        </li>
                                        <li onClick={isPlaying ? pause: play}>
                                            <i className={isPlaying? "fa-solid fa-pause": "fa-solid fa-play"}></i>
                                        </li>

                                        {/* Next */}
                                        <li onClick={next}>
                                            <i className="fa-solid fa-forward-step"></i>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* PLAYLIST */}
                    <div className="playlist">

                        {Songs.map((song, index) => (
                            <div className={
                                currentSong === index
                                        ? "playlist-row active"
                                        : "playlist-row"
                                }
                                key={song.id}
                                onClick={() => selectSong(index)}
                            >

                                <span className="song_id">
                                    {song.id}
                                </span>

                                <span className="song_title">
                                    {song.title}
                                </span>

                                <span className="song_duration">
                                    {song.duration}
                                </span>

                            </div>
                        ))}

                    </div>

                </div>

            </div>

        </div>
    );
}