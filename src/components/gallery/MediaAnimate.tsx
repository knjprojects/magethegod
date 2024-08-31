"use client";
import React, { useEffect, useState } from "react";

import Image from "next/image";

const MediaAnimate = ({
  imagePath,
  animateType,
  location,
}: {
  imagePath: string;
  animateType: string;
  location: string;
}) => {
  const [isVisible, setIsVisible]: any = useState(false);
  const animationClass = `animate-${animateType}`;
  const imageFileName: any = imagePath
    ? imagePath.split("/").pop()?.split(".").shift()
    : "";
  const uniqueId = `${imageFileName}-${animateType}`;

  useEffect(() => {
    const handleScroll = () => {
      if (imagePath) {
        /*const top = window.scrollY + window.innerHeight;
        
        const element = document.getElementById(uniqueId);
        if (element && element.offsetTop < top) {
          setIsVisible(true);
        }*/
        //above code checks only if scrolling down and element is in view
        //beloe checks if element is in view while scrolling up and down
        const top = window.scrollY;
        const bottom = top + window.innerHeight;
        const element = document.getElementById(uniqueId);
        if (element) {
          const elementTop = element.offsetTop;
          const elementBottom = elementTop + element.offsetHeight;

          // Check if the element is in the viewport
          if (elementTop < bottom && elementBottom > top) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [imagePath, animateType, uniqueId]);

  if (!imagePath) {
    return <div id={uniqueId} className="opacity-0" />;
  }

  return (
    <div
      id={uniqueId}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? animationClass : "opacity-0 translate-y-5"
      }`}
    >
      <Image
        src={`/${imagePath}`}
        alt={imageFileName}
        width={300}
        height={200}
      />
    </div>
  );
};

export default MediaAnimate;