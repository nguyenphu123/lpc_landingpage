import { useEffect } from "react";
import "@/styles/snow.scss";
const Snowfall = ({ numberOfSnowflakes }) => {
  useEffect(() => {
    const createSnowflake = () => {
      const snowflake = document.createElement("div");
      snowflake.classList.add("snowflake");
      document.body.appendChild(snowflake);

      snowflake.style.left = `${Math.random() * window.innerWidth}px`;
      snowflake.style.animationDuration = `${5 + Math.random() * 5}s`;

      snowflake.addEventListener("animationiteration", () => {
        snowflake.style.top = `-${snowflake.clientHeight}px`;
      });
    };

    for (let i = 0; i < numberOfSnowflakes; i++) {
      createSnowflake();
    }
  }, [numberOfSnowflakes]);

  return null; // The component doesn't render any visible content
};

export default Snowfall;
