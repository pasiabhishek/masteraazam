import { useRef } from "react";
import ReelsVideo from "./data/Reel.json";
import "./css/Reels.css";

export default function Reels() {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollContainerRef.current) return;

    scrollContainerRef.current.scrollBy({
      left: direction === "left" ? -320 : 320,
      behavior: "smooth",
    });
  };

  return (
    <section className="Reel" id="Reel">

      <div className="section remove-b-mar">
        <h1>Reels</h1>
        <p>Stories in motion.</p>
      </div>
      <div className="reel_playground">
        <div className="instagram-reel">
          <ul ref={scrollContainerRef} className="reel_list">

            {ReelsVideo.map((reelClip) => (
              <li key={reelClip.id}>

                <div className="reel-frame">
                  <iframe
                    src={reelClip.src}
                    title={`${reelClip.author} ${reelClip.id}`}
                    scrolling="no"
                    allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                    allowFullScreen
                  />
                </div>

              </li>
            ))}

          </ul>
        </div>

        <div className="slider-buttons">
          <button
            className="slider-btn"
            onClick={() => scroll("left")}
            aria-label="Previous reels"
          >
            ❮
          </button>

          <button
            className="slider-btn"
            onClick={() => scroll("right")}
            aria-label="Next reels"
          >
            ❯
          </button>
        </div>

      </div>


    </section>
  );
}
