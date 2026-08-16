import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Podcast() {
    const podcastRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(".Podcast h1", {
                x: "-200%",
                scrollTrigger: {
                    trigger: ".Podcast",
                    // markers: true,
                    start: "top top",
                    end: "top -100%",
                    scrub: true,
                    pin: true
                }
            });
        }, podcastRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={podcastRef} id="Podcast">
                <div className="Podcast">
                <div className="section" align="center">
                    <h1>Podcast</h1>
                    <h1>Talk that makes you aware.</h1>

                    <h1>Coming Soon...</h1>
                </div>
            </div>
        </div >
    );
}