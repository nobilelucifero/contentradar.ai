import React, { useEffect, useState } from "react";

import { setCookie, hasCookie } from "cookies-next";
import { Wrapper } from "../Wrapper";

export default function CookieConsent() {
  const [consent, setConsent] = useState(true);
  useEffect(() => {
    setConsent(hasCookie("localConsent"));
  }, []);

  const acceptCookie = () => {
    setConsent(true);
    setCookie("localConsent", "true", { maxAge: 60 * 60 * 24 * 365 });
    gtag("consent", "update", {
      ad_storage: "granted",
      analytics_storage: "granted",
    });
    // console.log("accepting cookies");
  };
  const closeP = () => {
    setConsent(true);
    // console.log("closing");
  };
  const denyCookie = () => {
    setConsent(true);
    setCookie("localConsent", "false", { maxAge: 60 * 60 * 24 * 365 });
    // console.log("denying cookie");
  };
  if (consent === true) {
    return null;
  }
  return (
    <div
      className={`
        sticky
        w-full
        p-4
        bottom-0
        left-0
        bg-white
        ${consent ? "hidden" : ""}
        `}
    >
      <Wrapper className="flex flex-col md:flex-row items-center gap-2">
        {/* <p>This Site use cookie, please accept them if you want.</p> */}
        <p className="0text-sm grow">
          We use cookies to analyze site performance and deliver personalized
          content.
          <br /> By clicking “Agree”, you consent to our Cookie Policy.
        </p>

        <div className="flex gap-2">
          <button
            onClick={(e) => denyCookie()}
            className="
          text-gray-900
          font-bold
          tracking-wide
          rounded-lg
          px-4 py-3
          border-2
          border-gray-300
          hover:bg-gray-100
          0dark:bg-gray-50
          0dark:hover:bg-gray-100
          focus:outline-transparent
          focus:ring-4
          focus:ring-blue-300
          0dark:focus:ring-blue-500
          "
          >
            Deny
          </button>
          <button
            onClick={() => {
              acceptCookie();
            }}
            className="
          block px-4 py-3
          whitespace-nowrap
          text-white
          font-bold
          tracking-wide
          rounded-lg
          bg-gray-900
          hover:bg-gray-800
          focus:outline-transparent
          focus:ring-4
          focus:ring-blue-300
          "
          >
            Agree
          </button>
        </div>

        {/* <div className="w-full grid grid-cols-1">
        <button
          onClick={(e) => {
            closeP();
          }}
          className="
          text-gray-900
          font-bold
          tracking-wide
          rounded-lg
          px-4 py-4 mt-2
          border-0
          border-gray-300
          hover:bg-gray-100
          0dark:bg-gray-50
          0dark:hover:bg-gray-100
          focus:outline-none
          focus:ring-4
          focus:ring-blue-300
          0dark:focus:ring-blue-500
          "
        >
          Close
        </button>
      </div> */}
      </Wrapper>
    </div>
  );
}

// credit https://javascript.plainenglish.io/manage-cookie-consent-in-next-js-with-google-tag-manager-4d58818266ea
