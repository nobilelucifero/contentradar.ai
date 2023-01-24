import Image from "next/image";
import Link from "next/link";

import { Section } from "../components/Section";
// import PromoBanner from "../components/predict2023/PromoBanner";

export function Navbar({ children, message }) {
  return (
    <header>
      {/* {message && <PromoBanner />} */}
      <Section>
        <Link
          href="/"
          className="
            text-lg
            font-bold
            flex
            items-center
          "
        >
          <Image
            width={32}
            height={32}
            src="/contentradar2-logo.svg"
            alt=" "
          ></Image>
          &nbsp; contentradar.ai
        </Link>
      </Section>
    </header>
  );
}
