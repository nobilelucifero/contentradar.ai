import { Section } from "../components/Section";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

import CookieConsent from "../components/banners/CookieConsent";

export default function Page({
  children,
  className,
  showPromoMessage,
  contentOnly,
  hideNavBar,
}) {
  return (
    // <div className="grid gap-4 grid-rows-[200px_minmax(900px,_1fr)_100px]">
    // <div className="grid grid-rows-[auto_1fr_auto]">
    // <div className="h-screen grid grid-rows-[auto_minmax(320px,_1fr)_auto]">
    // <div className={`h-screen grid grid-rows-[auto_min-content_auto] ${className}`}>
    // <div className="h-screen grid grid-rows-[auto_minmax(320px,_1fr)_auto]">

    //   className={`grid ${
    //     !hideNavBar ? "grid-rows-[1fr_auto]" : "grid-rows-[auto_1fr_auto]"
    //   }  ${className}`}
    // >
    //   {!hideNavBar ? <Navbar message={showPromoMessage} /> : null}
    //   <main className="flex min-w-full items-center mx-auto">
    //     <Section className="lg:pt-24 lg:pb-12">{children}</Section>
    //   </main>
    //   <Footer />
    //   <CookieConsent />
    <div className="pb-24">
      <div
        className={`min-h-screen relative grid grid-rows-[auto_1fr_auto] ${
          className || ""
        }`}
      >
        <Navbar message={showPromoMessage} />
        <main className="flex min-w-full items-center mx-auto">
          <Section className="lg:pt-0 lg:pb-0">{children}</Section>
        </main>
        <Footer />
      </div>
      <CookieConsent />
    </div>
  );
}
