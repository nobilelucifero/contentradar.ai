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
            text-xl
            font-bold
            flex
            items-center
          "
        >
          <Image width={48} height={48} src="/logo-v1.svg" alt=" "></Image>
          <span className="ml-[0.5ch]">contentradar.ai</span>
        </Link>
      </Section>
    </header>
  );
}
