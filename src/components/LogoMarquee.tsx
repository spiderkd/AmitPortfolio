// // // <!-- <div class="flex w-full items-center justify-center py-10">
// // //   <div class="max-w-3xl overflow-hidden whitespace-nowrap">
// // //     <div class="animate-marquee inline-block">
// // //       <img src="/logos/logo1.png" alt="Logo 1" class="mx-8 inline-block h-12" />
// // //       <img src="/logos/logo2.png" alt="Logo 2" class="mx-8 inline-block h-12" />
// // //       <img src="/logos/logo3.png" alt="Logo 3" class="mx-8 inline-block h-12" />
// // //       <img src="/logos/logo4.png" alt="Logo 4" class="mx-8 inline-block h-12" />
// // //       <img src="/logos/logo5.png" alt="Logo 5" class="mx-8 inline-block h-12" />
// // //       <img src="/logos/logo6.png" alt="Logo 6" class="mx-8 inline-block h-12" />
// // //       <img src="/logos/logo7.png" alt="Logo 7" class="mx-8 inline-block h-12" />
// // //       <img src="/logos/logo8.png" alt="Logo 8" class="mx-8 inline-block h-12" />
// // //     </div>

// // //     <div class="animate-marquee inline-block">
// // //       <img src="/logos/logo1.png" alt="Logo 1" class="mx-8 inline-block h-12" />
// // //       <img src="/logos/logo2.png" alt="Logo 2" class="mx-8 inline-block h-12" />
// // //       <img src="/logos/logo3.png" alt="Logo 3" class="mx-8 inline-block h-12" />
// // //       <img src="/logos/logo4.png" alt="Logo 4" class="mx-8 inline-block h-12" />
// // //       <img src="/logos/logo5.png" alt="Logo 5" class="mx-8 inline-block h-12" />
// // //       <img src="/logos/logo6.png" alt="Logo 6" class="mx-8 inline-block h-12" />
// // //       <img src="/logos/logo7.png" alt="Logo 7" class="mx-8 inline-block h-12" />
// // //       <img src="/logos/logo8.png" alt="Logo 8" class="mx-8 inline-block h-12" />
// // //     </div>
// // //   </div>
// // // </div>
// // // <style is:global>
// // //   @keyframes marquee {
// // //     0% {
// // //       transform: translateX(0%);
// // //     }
// // //     100% {
// // //       transform: translateX(-100%);
// // //     }
// // //   }
// // //   .animate-marquee {
// // //     animation: marquee 20s linear infinite;
// // //   }
// // // </style> ```

// // import { InfiniteMovingCards } from "./infinite-moving-cards";
// // export function InfiniteMovingCardsDemo() {
// //
// //   return (
// //     <div className="dark:bg-grid-white/[0.05] relative flex h-[20rem] flex-col items-center justify-center overflow-hidden rounded-md antialiased">
// //       <InfiniteMovingCards
// //         items={testimonials}
// //         direction="left"
// //         speed="normal"
// //       />
// //     </div>
// //   );
// // }

// import {
//   Marquee,
//   MarqueeContent,
//   MarqueeFade,
//   MarqueeItem,
// } from "./infinite-moving-cards";

// const testimonials = [
//   {
//     image: "/logos/logo1.png",
//   },
//   {
//     image: "/logos/logo2.png",
//   },
//   {
//     image: "/logos/logo3.png",
//   },
//   {
//     image: "/logos/logo4.png",
//   },
//   {
//     image: "/logos/logo5.png",
//   },
//   {
//     image: "/logos/logo6.png",
//   },
//   {
//     image: "/logos/logo7.png",
//   },
//   {
//     image: "/logos/logo8.png",
//   },
// ];
// const Example = () => (
//   <div className="h-20vh mx-auto mt-10 flex w-[80vh] items-center justify-center">
//     <Marquee>
//       <MarqueeFade side="left" />
//       <MarqueeFade side="right" />
//       <MarqueeContent className="flex items-center" speed={50} direction="left">
//         {testimonials.map((item, index) => (
//           <MarqueeItem className="h-16 w-16" key={index}>
//             <img
//               alt={`Placeholder ${index}`}
//               className="h-16 w-16 overflow-hidden"
//               src={item.image}
//             />
//           </MarqueeItem>
//         ))}
//       </MarqueeContent>
//     </Marquee>
//   </div>
// );

// export default Example;
