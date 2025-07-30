import React, { useEffect, useRef, useState } from "react";

// Example logo imports (replace with your actual logo paths)
import logo1 from "../assert/logos/logo1.png";
import logo2 from "../assert/logos/logo2.png";
import logo3 from "../assert/logos/logo3.png";
import logo4 from "../assert/logos/logo4.png";
import logo5 from "../assert/logos/logo5.png";
import logo6 from "../assert/logos/logo6.png";
import logo7 from "../assert/logos/logo7.png";
import logo8 from "../assert/logos/logo8.png";
import logo9 from "../assert/logos/logo9.png";
import logo10 from "../assert/logos/logo10.png";
import logo12 from "../assert/logos/logo11.png";
import logo11 from "../assert/logos/logo12.png";
import logobbackground from "../assert/career.jpg";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11, logo12];
const CARD_WIDTH = 224; // w-56 = 224px
const CARD_GAP = 64;    // gap-16 = 64px
const VISIBLE_COUNT = 5;
const SLIDE_INTERVAL = 2500; // ms (pause before sliding)
const ANIMATION_DURATION = 700; // ms (slide animation duration)

const TrustedByLogos = () => {
  const [logoList, setLogoList] = useState([...logos]);
  const [isSliding, setIsSliding] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isPaused) return;

    let slideTimeout: NodeJS.Timeout;
    let pauseTimeout: NodeJS.Timeout;

    const slide = () => {
      setIsSliding(true);
      slideTimeout = setTimeout(() => {
        setLogoList((prev) => {
          const [first, ...rest] = prev;
          return [...rest, first];
        });
        setIsSliding(false);
        pauseTimeout = setTimeout(slide, SLIDE_INTERVAL);
      }, ANIMATION_DURATION);
    };

    pauseTimeout = setTimeout(slide, SLIDE_INTERVAL);

    return () => {
      clearTimeout(slideTimeout);
      clearTimeout(pauseTimeout);
    };
  }, [logoList, isPaused]);

  const visibleLogos = logoList.slice(0, VISIBLE_COUNT + 1);

  return (
    <section className="py-16 md:py-20 w-full relative overflow-hidden">
      {/* --- Video Background and Overlay --- */}
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          src="/pro.mp4"
        />
        <div className="absolute inset-0 bg-blue-900/90 z-10" />
      </div>

      <div className="w-full max-w-[2400px] mx-auto px-4 md:px-8 lg:px-16 relative z-20">
        <div
          className="rounded-2xl border border-white p-8 md:p-12 relative overflow-hidden"
          style={{
            backgroundImage: `url(${logobbackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {/* UPDATED TITLE SECTION */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-black/60">
              Our Valued Customers
            </h2>
            <div className="mt-3 h-1 w-24 bg-black/60 mx-auto rounded-full"></div>
          </div>
          {/* END OF UPDATED TITLE SECTION */}

          <div className="relative z-10">
            <div
              className="overflow-hidden"
              style={{
                width: `${VISIBLE_COUNT * (CARD_WIDTH + CARD_GAP) - CARD_GAP}px`,
                margin: "0 auto"
              }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div
                className="flex gap-16 transition-transform"
                style={{
                  transition: isSliding ? `transform ${ANIMATION_DURATION}ms cubic-bezier(.4,0,.2,1)` : "none",
                  transform: isSliding
                    ? `translate3d(-${CARD_WIDTH + CARD_GAP}px, 0, 0)`
                    : "translate3d(0, 0, 0)",
                  width: `${(VISIBLE_COUNT + 1) * (CARD_WIDTH + CARD_GAP)}px`
                }}
              >
                {visibleLogos.map((logo, idx) => (
                  <div key={idx} className="flex items-center justify-center h-32 w-56">
                    <img
                      src={logo}
                      alt={`Company logo ${((idx) % logos.length) + 1}`}
                      className="h-28 w-auto object-contain"
                      draggable={false}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedByLogos;