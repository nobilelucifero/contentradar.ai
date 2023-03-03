import React, { useState, useEffect } from "react";
import Image from "next/image";

const ImageSlider = ({ images }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index) => (index + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div
      className="
        relative
        w-full xl:min-w-[112.5%] 2xl:min-w-[125%]
        h-auto aspect-[1280/880]
        rounded-lg
        drop-shadow-xl shadow-[0_0_0_1px_rgba(0,0,0,0.08)] border-[rgba(0,0,0,0.08)] border-1
        overflow-hidden
      "
    >
      {images.map(({ src, width, height }, i) => (
        <Image
          key={src}
          src={src}
          width={width}
          height={height}
          className={`
            block absolute opacity-${
              index === i ? 100 : 0
            } duration-1000 transition-opacity ease-out`}
          alt=" "
          priority="true"
        />
      ))}
    </div>
  );
};

export default ImageSlider;
