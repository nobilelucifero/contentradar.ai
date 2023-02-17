import React, { useRef, useState } from "react";

import { setCookie, hasCookie } from "cookies-next";

import Head from "next/head";
// import Link from "next/Link";
import Image from "next/image";

import Page from "../layouts/page";
import { Button } from "../components/Button";
// import BlurryBlobs from "../components/BlurryBlobs";

import AppPreview from "../public/app-preview.png";
import Bg from "../public/bg.png";

export default function Home() {
  // 1. Create a reference to the input so we can fetch/clear it's value.
  const inputEl = useRef(null);
  // 2. Hold a message in state to handle the response from our API.
  const [message, setMessage] = useState("");
  // const [hasEmail, setHasEmail] = useState(false);

  const subscribe = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    // if ((inputEl.current.value = null)) {
    //   setMessage("You need to add a valid email.");
    //   return;
    // }

    // 3. Send a request to our API with the user's email address.
    const res = await fetch("/api/subscribe", {
      body: JSON.stringify({
        email: inputEl.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();

    if (error) {
      // 4. If there was an error, update the message in state.

      // 4b. If there was already an email, but uncaught, setCookie.
      if (res.status == 400) {
        setCookie("hasEmail", "true", { maxAge: 60 * 60 * 24 * 365 });
      }

      setMessage(error);

      return;
    }

    // 5. Clear the input value and show a success message.
    setMessage("Success! 🎉 You will hear from us soon.");

    setCookie("hasEmail", "true", { maxAge: 60 * 60 * 24 * 365 });

    setTimeout(() => {
      window.open(
        `https://tally.so/r/wvXL5d?email=${inputEl.current.value}&source=contentradar`
      );
      inputEl.current.value = "";
    }, 500);
  };

  return (
    <div className="relative min-h-screen bg-gray-100 overflow-x-hidden">
      <Head>
        <title>contentradar.ai</title>
        <meta
          name="description"
          content="The AI-powered workspace for content creation"
        />
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
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Head>

      {/* <BlurryBlobs /> */}
      <Image
        className="
          block
          absolute
          top-0
          left-0
          0left-[1280px]
          object-none
          -translate-x-[1280px]
          w-[2560px_!important] h-[1098px]
          object
          opacity-0 animate-fade-in
        "
        width={2560}
        height={1098}
        src={Bg}
        alt=" "
      />

      <Page hideNavBar={true} showPromoMessage={true}>
        <div className="flex flex-col-reverse lg:flex-row items-center">
          <div className="0lr:pr-8 0lg:basis-2/4">
            <h1
              className="
                text-3xl
                leading-[125%]
                lg:text-5xl
                lg:leading-[112.5%]
                font-bold
                mb-4
                lg:w-11/12
              "
            >
              Make content creation a breeze with AI
            </h1>

            <p className="mb-8 text-2xl lg:w-[96%]">
              Boost content creation by 10x, know and learn more from your
              audience, grow your business.
            </p>

            {/* <a
              className="
             inline-block
              whitespace-nowrap
          text-white
              font-bold
              tracking-wide
              rounded-lg
            px-4 py-3 mr-2
            bg-gray-900
            hover:bg-gray-800
          focus:outline-none
                focus:ring-4
              focus:ring-blue-300"
              onClick={(e) => {
                e.preventDefault();
                gtag("event", "page_view", {
                  page_title: "survey_view-index",
                });
                window.open("https://tally.so/r/wvXL5d");
              }}
              href="https://tally.so/r/wvXL5d"
              target="_blank"
              rel="noreferrer"
            >
              Get early access
            </a> */}
            <form className="flex flex-col gap-2" onSubmit={subscribe}>
              <p>
                <strong>Want to learn more?</strong> Join our 1K+ waitlist
              </p>
              <label className="hidden font-bold mb-2" htmlFor="email-input">
                Your email address
              </label>
              <div className="flex flex-col lg:flex-row gap-2">
                <input
                  className="
                  py-2 px-4
                  border border-gray-300
                  bg-white
                  rounded-lg
                "
                  id="email-input"
                  name="email"
                  type="email"
                  ref={inputEl}
                  required
                  placeholder="email@provider.com"
                />
                <Button type="submit">Get early access</Button>
              </div>
              {message ? <p className="mt-2 text-sm">{message}</p> : ""}
            </form>
          </div>
          <div className="0lg:pl-8 0lg:basis-2/4 mb-12 lg:mb-0 lg:w-1/2">
            <Image
              className="block w-full lg:min-w-[960px] drop-shadow-xl	shadow-[0_0_0_1px_rgba(0,0,0,0.08)] rounded-lg border-[rgba(0,0,0,0.08)] border-1
              "
              // width={1280}
              // height={1280}
              src={AppPreview}
              alt=" "
              priority="true"
            />
          </div>
        </div>
      </Page>
    </div>
  );
}
