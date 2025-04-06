"use client";

import { useState, useRef, useEffect } from "react";

export default function ImageBanner() {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    if (imgRef.current.complete) {
      setIsLoaded(true);
    }
  }, []);

  const scrollToSection = (sectionId) => {
    // Use setTimeout to ensure the DOM is fully rendered
    setTimeout(() => {
      if (sectionId === "stickers-section") {
        // For stickers, scroll to the "Or Collect Your Favorite Tech" section header
        const sectionHeaders = document.querySelectorAll(
          ".section-container .section-header"
        );
        const secondSectionHeader = sectionHeaders[1]; // Get the second section header

        if (secondSectionHeader) {
          const headerHeight =
            document.querySelector("header")?.offsetHeight || 0;
          const elementPosition =
            secondSectionHeader.getBoundingClientRect().top + window.scrollY;
          // Adjust offset to position the heading at the top of the viewport
          const scrollPosition = elementPosition - headerHeight - 100;

          window.scrollTo({
            top: scrollPosition,
            behavior: "smooth",
          });
        }
      } else if (sectionId === "planner-section") {
        // For planner, scroll to the "Shop Our Selection" section header
        const sectionHeaders = document.querySelectorAll(
          ".section-container .section-header"
        );
        const firstSectionHeader = sectionHeaders[0]; // Get the first section header

        if (firstSectionHeader) {
          const headerHeight =
            document.querySelector("header")?.offsetHeight || 0;
          const elementPosition =
            firstSectionHeader.getBoundingClientRect().top + window.scrollY;
          const scrollPosition = elementPosition - headerHeight - 100;

          window.scrollTo({
            top: scrollPosition,
            behavior: "smooth",
          });
        }
      }
    }, 100);
  };

  return (
    <div className="banner-images">
      <img
        className="low-res-img"
        src="low_res/banner.jpeg"
        alt="banner-low-res"
      />
      <img
        ref={imgRef}
        className="high-res-img"
        src="med_res/banner.png"
        alt="banner-high-res"
        style={{ opacity: isLoaded ? 1 : 0 }}
        onLoad={() => {
          //when the  high resolution image is completely loaded, this callback function will be executed and the intention is to get it to take this initally invisible image, and now make it visible.
          setIsLoaded(true);
        }}
      />
      <div className="cta-btns-container">
        <div>
          <div>
            <h3>Welcome to</h3>
            <h1>The Digital Dragon Market</h1>
          </div>
          <div>
            <button onClick={() => scrollToSection("stickers-section")}>
              Shop Stickers
            </button>
            <button onClick={() => scrollToSection("planner-section")}>
              Shop Planner
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
