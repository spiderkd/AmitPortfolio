// import { cn } from "../lib/utils";
// import { useRef } from "react";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";

// export function InfiniteMovingCards({
//   items,
//   direction = "left",
//   speed = "fast",
//   pauseOnHover = true,
//   className,
// }: {
//   items: {
//     image: string;
//   }[];
//   direction?: "left" | "right";
//   speed?: "fast" | "normal" | "slow";
//   pauseOnHover?: boolean;
//   className?: string;
// }) {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const scrollerRef = useRef<HTMLUListElement>(null);

//   // Register GSAP with React
//   gsap.registerPlugin(useGSAP);

//   useGSAP(
//     () => {
//       if (!scrollerRef.current) return;

//       // Clone items for seamless looping
//       const scrollerContent = Array.from(scrollerRef.current.children);
//       scrollerContent.forEach((item) => {
//         const duplicatedItem = item.cloneNode(true);
//         scrollerRef.current?.appendChild(duplicatedItem);
//       });

//       // Get dimensions
//       const itemWidth = scrollerContent[0].getBoundingClientRect().width;
//       const totalItemsWidth = itemWidth * scrollerContent.length;

//       // Set animation duration based on speed
//       let duration = 40; // normal speed
//       if (speed === "fast") duration = 20;
//       else if (speed === "slow") duration = 80;

//       // Create a timeline for the continuous animation
//       const tl = gsap.timeline({
//         repeat: -1, // Infinite repeat
//         defaults: { ease: "none" },
//       });

//       if (direction === "left") {
//         // Initial position
//         gsap.set(scrollerRef.current, { x: 0 });

//         // Create the main animation
//         tl.to(scrollerRef.current, {
//           x: -totalItemsWidth,
//           duration,
//           onComplete: () => {
//             // Reset the position when the animation completes
//             gsap.set(scrollerRef.current, { x: 0 });
//           },
//         });
//       } else {
//         // Initial position for right direction
//         gsap.set(scrollerRef.current, { x: -totalItemsWidth });

//         // Create the animation for right direction
//         tl.to(scrollerRef.current, {
//           x: 0,
//           duration,
//           onComplete: () => {
//             // Reset the position when the animation completes
//             gsap.set(scrollerRef.current, { x: -totalItemsWidth });
//           },
//         });
//       }

//       // Setup hover pause functionality
//       if (pauseOnHover && containerRef.current) {
//         containerRef.current.addEventListener("mouseenter", () => tl.pause());
//         containerRef.current.addEventListener("mouseleave", () => tl.play());
//       }

//       // Cleanup is handled automatically by useGSAP
//       return () => {
//         tl.kill(); // For extra safety
//       };
//     },
//     { scope: containerRef, dependencies: [direction, speed, pauseOnHover] },
//   );

//   return (
//     <div
//       ref={containerRef}
//       className={cn(
//         "relative z-20 max-w-7xl overflow-hidden",
//         "[mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
//         className,
//       )}
//     >
//       <ul
//         ref={scrollerRef}
//         className="flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4"
//         style={{ willChange: "transform" }} // Optimization for animations
//       >
//         {items.map((item, idx) => (
//           <li className="relative w-[200px] shrink-0" key={idx}>
//             <img
//               src={item.image}
//               alt="Logo 1"
//               className="mx-8 inline-block h-12"
//             />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

import type { HTMLAttributes } from "react";
import type { MarqueeProps as FastMarqueeProps } from "react-fast-marquee";
import FastMarquee from "react-fast-marquee";
import { cn } from "../lib/utils";

export type MarqueeProps = HTMLAttributes<HTMLDivElement>;

export const Marquee = ({ className, ...props }: MarqueeProps) => (
  <div
    className={cn("relative w-full overflow-hidden", className)}
    {...props}
  />
);

export type MarqueeContentProps = FastMarqueeProps;

export const MarqueeContent = ({
  loop = 0,
  autoFill = true,
  pauseOnHover = true,
  ...props
}: MarqueeContentProps) => (
  <FastMarquee
    autoFill={autoFill}
    loop={loop}
    pauseOnHover={pauseOnHover}
    {...props}
  />
);

export type MarqueeFadeProps = HTMLAttributes<HTMLDivElement> & {
  side: "left" | "right";
};

export const MarqueeFade = ({
  className,
  side,
  ...props
}: MarqueeFadeProps) => (
  <div
    className={cn(
      "from-background absolute top-0 bottom-0 z-10 h-full w-24 to-transparent",
      side === "left" ? "left-0 bg-gradient-to-r" : "right-0 bg-gradient-to-l",
      className,
    )}
    {...props}
  />
);

export type MarqueeItemProps = HTMLAttributes<HTMLDivElement>;

export const MarqueeItem = ({ className, ...props }: MarqueeItemProps) => (
  <div
    className={cn("mx-10 flex-shrink-0 object-contain", className)}
    {...props}
  />
);
