import Head from "next/head";
import Image from "next/image";

import Page from "../layouts/page";

import ContentBlock from "../components/website/ContentBlock";
import AppPreview from "../public/preview-2-01.jpg";
import { useRef, useEffect } from "react";
// import H2 from "../components/website/H2";
// import H3 from "../components/website/H3";
// import P from "../components/website/P";

export default function TestOld() {
  const screenZeroWrapperRef = useRef();
  const screenOneRef = useRef();
  const screenOneWrapperRef = useRef();
  const screenLastWrapperRef = useRef();

  useEffect(() => {
    // const zoom = document.querySelector(".zoom");
    // const minZoom = 1;
    // const maxZoom = 2;
    console.log(
      screenOneRef.current.getBoundingClientRect().top,
      window.innerHeight / 100
    );

    addEventListener("scroll", (e) => {
      const vh = window.innerHeight / 100;
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      // const start = screenOneRef.current.getBoundingClientRect().top * vh;
      const start = 90 * vh;
      // const start =
      // screenOneWrapperRef.current.getBoundingClientRect().top * vh;
      // const start =
      // screenZeroWrapperRef.current.getBoundingClientRect().top * vh;
      const stop = Math.floor(
        screenOneRef.current.getBoundingClientRect().top * vh
      );
      // const stop = 200 * vh;
      if (scrollTop > start && scrollTop < stop) {
        console.log(
          scrollTop,
          start,
          (scrollTop - start) / 500,
          Math.max(1 - (scrollTop - start) / 500, 0.85)
        );

        const scale = Math.max(1 - (scrollTop - start) / 500, 0.85);
        console.log("scale", scale);
        screenOneRef.current.style.transform = `scale(${scale})`;
      }
    });

    // return () => {
    //   second
    // }
  }, []);

  return (
    <>
      <Head>
        <title>Test - contentradar.ai</title>
        <meta name="description" content="contentradar.ai Imprint" />
        <meta name="robots" content="noindex" />
        <link
          href="favicon-light.png"
          rel="icon"
          media="(prefers-color-scheme: light)"
        />
        <link
          href="favicon-dark.png"
          rel="icon"
          media="(prefers-color-scheme: dark)"
        />
      </Head>

      <Page className="bg-gray-100">
        <div
          className="h-[50vh] bg-sky-200 grid place-content-center"
          ref={screenZeroWrapperRef}
        >
          <div className="max-w-max bg-pink-200 flex flex-col place-content-center items-center">
            <h1 className="bg-amber-200 w-[80%] text-center text-3xl font-bold mb-6">
              Make content creation a breeze with AI
            </h1>
            <p className="bg-amber-200 text-center text-2xl lg:w-[54%]">
              Boost content creation by 10x, learn more from your audience, grow
              your business.
            </p>
          </div>
        </div>
        <div className="h-[200vh] bg-orange-200" ref={screenOneWrapperRef}>
          <Image
            className="
              block
              h-auto
              shadow-[0_0_0_1px_rgba(0,0,0,0.08)] rounded-lg border-[rgba(0,0,0,0.08)] border-1
              sticky
              top-[20vh]
              "
            // width={1280}
            // height={1280}
            src={AppPreview}
            alt=" "
            priority="true"
            ref={screenOneRef}
            style={{ transform: "scale(1)" }}
          />
        </div>

        <div className="h-[100vh] bg-emerald-200" ref={screenLastWrapperRef}>
          <h2 className="text-center text-3xl font-bold mb-12">Bye bye</h2>
        </div>
      </Page>
    </>
  );
}
