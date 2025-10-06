import { MotionCard } from "./MotionCard";
import type { ReactElement } from "react";
import asset1 from "../assets/me/asset1.webp";
import asset2 from "../assets/me/asset2.webp";
import asset3 from "../assets/me/asset3.webp";
import asset4 from "../assets/me/asset4.webp";
import asset5 from "../assets/me/asset5.webp";
import asset6 from "../assets/me/asset6.webp";
import asset7 from "../assets/me/asset7.webp";
import asset8 from "../assets/me/asset8.webp";
// import { RiLockStarFill } from "react-icons/ri";

const data = [
  {
    src: asset1.src,
    class: "w-64",
  },
  {
    src: asset2.src,
    class: "w-64",
  },
  {
    src: asset3.src,
    class: "w-64",
  },
  {
    src: asset6.src,
    class: "w-64",
  },
  {
    src: asset5.src,
    class: "w-64",
  },
  {
    src: asset4.src,
    class: "w-64",
  },

  {
    src: asset7.src,
    class: "w-64",
  },
  {
    src: asset8.src,

    class: "w-64",
  },
];

export function MotionCardsDemo() {
  const cardsArray: ReactElement[] = [
    <Card1 src={asset1.src} className="h-20svh w-96" />,
    <Card1 src={asset2.src} className="h-20svh w-96" />,
    <Card1 src={asset3.src} className="h-20svh w-96" />,
    <Card1 src={asset6.src} className="h-20svh w-96" />,
    <Card1 src={asset5.src} className="h-20svh w-96" />,
    <Card1 src={asset4.src} className="h-20svh w-96" />,
    <Card1 src={asset7.src} className="h-20svh w-96" />,
    <Card1 src={asset8.src} className="h-20svh w-96" />,
  ];
  return (
    <div className="w-full">
      <MotionCard
        mainText={{
          text: "Born in chas 🌆 based in bokaro 📍\n I love exploring typography ✒️ sketching ideas ✏️ \n design books 📚 café brainstorming ☕\n and late night creative sprints 🌙",
          className: " text-3xl whitespace-pre-line",
        }}
        cards={cardsArray}
      />
    </div>
  );
}

//demo cards......
const Card1: React.FC<{ className?: string; src: string }> = ({
  className,
  src,
}) => {
  return (
    <div className={`overflow-hidden rounded-lg ${className}`}>
      <img src={src} alt="Man with glasses" width={1000} height={1000} />
    </div>
  );
};
