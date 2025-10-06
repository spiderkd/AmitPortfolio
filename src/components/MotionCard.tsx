import { useEffect, useRef, useState } from "react";
import type { ReactElement, RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useGSAP } from "@gsap/react";
import { cn } from "../lib/utils";

interface MotionCardProps {
  mainText:
    | {
        text: string;
        className: string;
      }
    | string;
  cards: ReactElement[];
  scrollerRef?: RefObject<HTMLElement>;
}

export function MotionCard({ mainText, cards, scrollerRef }: MotionCardProps) {
  const masterRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);
  const instanceIdRef = useRef<string>(
    `rotating-text-${Math.random().toString(36).substring(2, 11)}`,
  );
  const [forceUpdate, setForceUpdate] = useState(false);

  useEffect(() => {
    if (scrollerRef?.current) {
      setForceUpdate(!forceUpdate);
    }
  }, [scrollerRef?.current]);

  const vars = [
    { left: "23%", top: "3%", scale: 0.4 }, // left-center
    { left: "9%", top: "9%", scale: 0.5 }, // top-center
    { left: "77%", top: "5%", scale: 0.5 }, // right-center
    { left: "90%", top: "12%", scale: 0.6 }, // bottom-center
    { left: "18%", top: "85%", scale: 0.6 }, // bottom-right corner
    { left: "9%", top: "72%", scale: 0.5 }, // bottom-right corner
    { left: "77%", top: "78%", scale: 0.6 }, // bottom-right corner
    { left: "90%", top: "72%", scale: 0.5 }, // bottom-right corner
  ];

  useGSAP(() => {
    if (!masterRef.current || !childRef.current) return;
    const existingTrigger = ScrollTrigger.getById(instanceIdRef.current);
    const existingTrigger2 = ScrollTrigger.getById(instanceIdRef.current + "2");
    if (existingTrigger && existingTrigger2) {
      existingTrigger.kill();
      existingTrigger2.kill();
    }

    gsap.to(masterRef.current, {
      scrollTrigger: {
        trigger: masterRef.current,
        start: "top top",
        end: "bottom 10%",
        pin: true,
        scroller: scrollerRef?.current ?? window,
        id: instanceIdRef.current,
      },
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: childRef.current,
        start: "top 50%",
        end: "bottom -100",
        scrub: 1,
        scroller: scrollerRef?.current ?? window,
        id: instanceIdRef.current + "2",
      },
    });

    tl.fromTo(
      childRef.current,
      { scale: 0 },
      { scale: 1, duration: 0.7 }, // text finishes by 30% of scroll
    ).fromTo(
      cardRefs.current,
      {
        left: "50%",
        top: "50%",
        scale: 1,
      },
      {
        left: (index) => vars[index]?.left || "0%",
        top: (index) => vars[index]?.top || "0%",
        scale: (index) => vars[index]?.scale || 0.5,
        duration: 1, // cards keep going until the end
      },

      "0", // starts right after the text finishes
    );
  }, [forceUpdate]);

  // if (cards.length > 5 || cards.length < 1)
  //   return <div>Inappropriate card length </div>;
  return (
    // Wrapper div for pinning
    <div
      ref={masterRef}
      className="relative flex h-screen w-full items-center justify-center overflow-hidden"
    >
      {/* This div has scrub and scale with ScrollTrigger */}
      <div
        ref={childRef}
        className="mb-6 flex h-full w-full flex-col items-center justify-center"
      >
        {/* Main Text */}
        <h5 className="pb-2 text-xl text-gray-600">my life beyond pixels</h5>
        <h1
          className={cn(
            "mx-auto w-[70%] px-32 text-center text-[9rem] font-extrabold",
            typeof mainText === "string" ? "" : mainText.className,
          )}
          style={{ fontFamily: "Mostical, sans-serif", fontWeight: 400 }}
        >
          {typeof mainText === "string" ? mainText : mainText.text}
        </h1>
      </div>

      {/* Mapping cards here with absolute positioning */}
      {cards.map((Card, i) => (
        <div
          key={i}
          className={cn("absolute block -translate-x-1/2 -translate-y-1/2")}
          ref={(el) => {
            if (el) cardRefs.current[i] = el; // Assign instead of push
          }}
        >
          {Card}
        </div>
      ))}
    </div>
  );
}
