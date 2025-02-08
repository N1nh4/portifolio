"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    imgSrc: string;
    alt: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, [addAnimation]);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
  <div
  ref={containerRef}
  className={cn(
    "scroller relative z-20 max-w-1x1 md:max-w-2xl lg:max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
    className
  )}
  >
    <ul
      ref={scrollerRef}
      className={cn(
        "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap ",
        start && "animate-scroll",
        pauseOnHover && "hover:[animation-play-state:paused]"
      )}
    >
      {items.map((item, idx) => (
        <li
          className="w-[200px] max-w-full relative rounded-2xl flex-shrink-0  px-4 py-6 md:w-[120px]"
          style={{
            
          }}
          key={idx}
        >
          <img
            src={item.imgSrc}
            alt={`Image ${idx + 1}`}
            className="w-full h-auto object-cover rounded-md transition-transform duration-100 ease-in-out transform hover:scale-125"
          />
        </li>
      ))}
    </ul>
  </div>

  );
};
