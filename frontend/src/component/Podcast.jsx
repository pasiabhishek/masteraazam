import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Podcast() {
    useEffect(() => {
        gsap.to(".Podcast h1", {
            x: "-100%",
            scrollTrigger: {
                trigger: ".Podcast",
                scroller: "body",
                markers: true,
                start: "top 0%",
                end: "top -100%",
                scrub: true,
                pin: true
            }
        });
    }, []);

    return (
        <div>
            <div className="section">
                <h1>Podcast</h1>
                <p>Talk that make you aware.</p>

                <div className="Podcast">
                    <h1>COMING SOON</h1>
                </div>
            </div>
        </div>

    );
}