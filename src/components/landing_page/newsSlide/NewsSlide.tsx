"use client";
import { useEffect } from "react";
import Style from "./newsSlide.module.css";
const NewsSlide = () => {
  const TextBox = () => {
    const newsScroll = document.querySelector(".news_scroll") as HTMLElement;

    newsScroll.addEventListener("mouseenter", () => {
      newsScroll.style.animationPlayState = "paused";
    });

    newsScroll.addEventListener("mouseleave", () => {
      newsScroll.style.animationPlayState = "running";
    });
  };

  useEffect(() => {
    TextBox();
  }, []);

  return (
    <div className={` w-full overflow-hidden text-white `}>
      <div className={`${Style.news_scroll} news_scroll  whitespace-nowrap `}>
          <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, aliquid? Fugit fugiat, at earum quis beatae voluptas cupiditate minima. Repellendus consequatur placeat perferendis vel autem odit .
          </p>
      </div>
    </div>
  );
};

export default NewsSlide;
