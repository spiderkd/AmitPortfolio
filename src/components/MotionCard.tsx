// "use client";
// import { ReactElement, RefObject, useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(ScrollTrigger);

// interface MotionCardProps {
//   mainText: { text: string; className: string } | string;
//   cards: ReactElement[];
//   scrollerRef?: RefObject<HTMLElement>;
// }

// export function MotionCard({ mainText, cards, scrollerRef }: MotionCardProps) {
//   const masterRef = useRef<HTMLDivElement>(null);
//   const childRef = useRef<HTMLDivElement>(null);
//   const cardRefs = useRef<HTMLDivElement[]>([]);
//   const instanceIdRef = useRef(
//     `rotating-text-${Math.random().toString(36).slice(2)}`,
//   );
//   const [forceUpdate, setForceUpdate] = useState(false);

//   useEffect(() => {
//     if (scrollerRef?.current) setForceUpdate((prev) => !prev);
//   }, [scrollerRef?.current]);

//   const vars = [
//     { left: "50%", top: "5%" },
//     { left: "5%", top: "50%" },
//     { left: "95%", top: "50%" },
//     { left: "50%", top: "95%" },
//     { left: "90%", top: "90%" },
//   ];

//   useGSAP(() => {
//     if (!masterRef.current || !childRef.current) return;

//     ScrollTrigger.getById(instanceIdRef.current)?.kill();
//     ScrollTrigger.getById(instanceIdRef.current + "2")?.kill();

//     gsap.to(masterRef.current, {
//       scrollTrigger: {
//         trigger: masterRef.current,
//         start: "top top",
//         end: "bottom 40%",
//         pin: true,
//         scroller: scrollerRef?.current ?? window,
//         id: instanceIdRef.current,
//       },
//     });

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: childRef.current,
//         start: "top top",
//         end: "bottom -200%",
//         scrub: 2,
//         scroller: scrollerRef?.current ?? window,
//         id: instanceIdRef.current + "2",
//       },
//     });

//     tl.fromTo(
//       childRef.current,
//       { scale: 0 },
//       { scale: 1, duration: 0.3 },
//     ).fromTo(
//       cardRefs.current,
//       { left: "50%", top: "50%" },
//       {
//         left: (i) => vars[i]?.left || "0%",
//         top: (i) => vars[i]?.top || "0%",
//         duration: 1,
//       },
//       0,
//     );
//   }, [forceUpdate]);

//   if (cards.length < 1 || cards.length > 5)
//     return <div>Inappropriate card length</div>;

//   return (
//     <div
//       ref={masterRef}
//       className="relative flex h-screen w-full items-center justify-center overflow-hidden"
//     >
//       <div
//         ref={childRef}
//         className="flex h-full w-full items-center justify-center"
//       >
//         <h1 className="px-32 text-center text-9xl font-extrabold">
//           {typeof mainText === "string" ? mainText : mainText.text}
//         </h1>
//       </div>

//       {cards.map((Card, i) => (
//         <div
//           key={i}
//           className="absolute w-[300px] -translate-x-1/2 -translate-y-1/2"
//           ref={(el) => {
//             if (el) cardRefs.current[i] = el;
//           }}
//         >
//           {Card}
//         </div>
//       ))}
//     </div>
//   );
// }

"use client";
import { ReactElement, RefObject, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { cn } from "../lib/utils";
gsap.registerPlugin(ScrollTrigger);

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
  //ajust this value accordingly to have desired animation or you can also increase
  //  the element inside and remove the conditional check below
  const vars = [
    { left: "50%", top: "5%" }, // top-center
    { left: "5%", top: "50%" }, // left-center
    { left: "95%", top: "50%" }, // right-center
    { left: "50%", top: "95%" }, // bottom-center
    { left: "90%", top: "90%" }, // bottom-right corner
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
        start: "top top",
        end: "bottom -200",
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
      },
      {
        left: (index) => vars[index]?.left || "0%",
        top: (index) => vars[index]?.top || "0%",
        duration: 1, // cards keep going until the end
      },

      "0", // starts right after the text finishes
    );
  }, [forceUpdate]);

  if (cards.length > 5 || cards.length < 1)
    
    return <div>Inappropriate card length </div>;
  return (
    // Wrapper div for pinning
    <div
      ref={masterRef}
      className="relative flex h-screen w-full items-center justify-center overflow-hidden"
    >
      {/* This div has scrub and scale with ScrollTrigger */}
      <div
        ref={childRef}
        className="flex h-full w-full items-center justify-center"
      >
        <h1
          className={cn(
            "px-32 text-center text-9xl font-extrabold",
            typeof mainText === "string" ? "" : mainText.className,
          )}
        >
          {typeof mainText === "string" ? mainText : mainText.text}
        </h1>
      </div>

      {/* Mapping cards here with absolute positioning */}
      {cards.map((Card, i) => (
        <div
          key={i}
          className={cn(
            "absolute block w-[300px] -translate-x-1/2 -translate-y-1/2",
          )}
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
