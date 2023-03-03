import Head from "next/head";
import Image from "next/image";

import Page from "../layouts/page";

import ContentBlock from "../components/website/ContentBlock";
import AppPreview from "../public/preview-2-01.jpg";
import { useRef, useEffect } from "react";
// import H2 from "../components/website/H2";
// import H3 from "../components/website/H3";
// import P from "../components/website/P";

export function CardHeader({ children }) {
  return (
    <div className="bg-gray-100 p-6">
      <h3 className="text-center text-3xl font-bold mb-12">{children}</h3>
    </div>
  );
}

export default function TestOldOld() {
  const screenZeroWrapperRef = useRef();
  const screenOneRef = useRef();
  const screenOneWrapperRef = useRef();
  const screenLastWrapperRef = useRef();

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
          className="h-[50vh] grid place-content-center"
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
        <div className=" " ref={screenOneWrapperRef}>
          <CardHeader>Perfect for</CardHeader>
          <h4 className="text-3xl font-bold sticky top-0">Content Creators</h4>
          <h4 className="text-3xl font-bold sticky top-0">
            Marketing Managers
          </h4>
          <h4 className="text-3xl font-bold sticky top-0">Founders</h4>
          <h4 className="text-3xl font-bold sticky top-0">Copywriters</h4>
          <div className="sticky top-[10px]">
            <CardHeader>Create</CardHeader>
            <Image
              className="
              block
              w-[85%]
              h-auto mx-auto
              shadow-[0_0_0_1px_rgba(0,0,0,0.08)] rounded-lg border-[rgba(0,0,0,0.08)] border-1
              "
              // width={1280}
              // height={1280}
              src={AppPreview}
              alt=" "
              priority="true"
              // ref={screenOneRef}
              // style={{ transform: "scale(1)" }}
            />
          </div>
          <div className="sticky top-[15px]">
            <CardHeader>Distribute</CardHeader>

            <Image
              className="
              block
              w-[85%]
              h-auto mx-auto
              shadow-[0_0_0_1px_rgba(0,0,0,0.08)] rounded-lg border-[rgba(0,0,0,0.08)] border-1
              "
              // width={1280}
              // height={1280}
              src={AppPreview}
              alt=" "
              priority="true"
              // ref={screenOneRef}
              // style={{ transform: "scale(1)" }}
            />
          </div>
          <div className="sticky top-[20px]">
            <CardHeader>Control</CardHeader>
            <Image
              className="
              block
              w-[85%]
              h-auto mx-auto
              shadow-[0_0_0_1px_rgba(0,0,0,0.08)] rounded-lg border-[rgba(0,0,0,0.08)] border-1
              "
              // width={1280}
              // height={1280}
              src={AppPreview}
              alt=" "
              priority="true"
              // ref={screenOneRef}
              // style={{ transform: "scale(1)" }}
            />
          </div>
        </div>
      </Page>
    </>
  );
}
