import Image from "next/image";
import Link from "next/link";

import { Section } from "../components/Section";
// import PromoBanner from "../components/predict2023/PromoBanner";

export function Navbar({ children, message }) {
  return (
    <header>
      {/* {message && <PromoBanner />} */}
      <Section>
        <div className="flex gap-12">
          <div className="grow">Logo</div>
          <div className="flex gap-6 grow justify-end ">
            <div className="">
              <Link
                href="https://join.com/companies/contentradar/7238488-cto-founding-engineer"
                target="_blank"
              >
                Jobs{" "}
                <span className="ml-[0.25ch] inline-block rounded-full min-w-[1.5em] px-2 text-center bg-gray-700 text-gray-100">
                  1
                </span>
              </Link>
            </div>
            <div className="">
              <Link
                href="https://twitter.com/contentradar_ai"
                target="_blank"
                title="Twitter"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.46 6C21.69 6.35 20.86 6.58 20 6.69C20.88 6.16 21.56 5.32 21.88 4.31C21.05 4.81 20.13 5.16 19.16 5.36C18.37 4.5 17.26 4 16 4C13.65 4 11.73 5.92 11.73 8.29C11.73 8.63 11.77 8.96 11.84 9.27C8.28004 9.09 5.11004 7.38 3.00004 4.79C2.63004 5.42 2.42004 6.16 2.42004 6.94C2.42004 8.43 3.17004 9.75 4.33004 10.5C3.62004 10.5 2.96004 10.3 2.38004 10C2.38004 10 2.38004 10 2.38004 10.03C2.38004 12.11 3.86004 13.85 5.82004 14.24C5.46004 14.34 5.08004 14.39 4.69004 14.39C4.42004 14.39 4.15004 14.36 3.89004 14.31C4.43004 16 6.00004 17.26 7.89004 17.29C6.43004 18.45 4.58004 19.13 2.56004 19.13C2.22004 19.13 1.88004 19.11 1.54004 19.07C3.44004 20.29 5.70004 21 8.12004 21C16 21 20.33 14.46 20.33 8.79C20.33 8.6 20.33 8.42 20.32 8.23C21.16 7.63 21.88 6.87 22.46 6Z"
                    fill="#374151"
                  />
                </svg>

                <span className="sr-only">Twitter</span>
              </Link>
            </div>
            <div className="">
              <Link
                href="https://www.linkedin.com/company/contentradar/"
                target="_blank"
                title="LinkedIn"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.6676 3H4.32891C3.59414 3 3 3.58008 3 4.29727V19.6992C3 20.4164 3.59414 21 4.32891 21H19.6676C20.4023 21 21 20.4164 21 19.7027V4.29727C21 3.58008 20.4023 3 19.6676 3ZM8.34023 18.3387H5.66836V9.74648H8.34023V18.3387ZM7.0043 8.57578C6.14648 8.57578 5.45391 7.8832 5.45391 7.02891C5.45391 6.17461 6.14648 5.48203 7.0043 5.48203C7.85859 5.48203 8.55117 6.17461 8.55117 7.02891C8.55117 7.87969 7.85859 8.57578 7.0043 8.57578ZM18.3387 18.3387H15.6703V14.1621C15.6703 13.1672 15.6527 11.884 14.2816 11.884C12.893 11.884 12.682 12.9703 12.682 14.0918V18.3387H10.0172V9.74648H12.5766V10.9207H12.6117C12.9668 10.2457 13.8387 9.53203 15.1359 9.53203C17.8395 9.53203 18.3387 11.3109 18.3387 13.6242V18.3387Z"
                    fill="#374151"
                  />
                </svg>

                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
            <div className="">
              <Link
                href="https://www.linkedin.com/company/contentradar/"
                target="_blank"
                title="Instagram"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.0059 3.80184C14.6793 3.80184 14.9959 3.81357 16.0473 3.86047C17.0244 3.90346 17.5521 4.06762 17.9038 4.20442C18.369 4.38421 18.7051 4.60309 19.053 4.95095C19.4047 5.30272 19.6197 5.63495 19.7995 6.10007C19.9363 6.45184 20.1004 6.9834 20.1434 7.95663C20.1903 9.01193 20.2021 9.32853 20.2021 11.9981C20.2021 14.6715 20.1903 14.9881 20.1434 16.0395C20.1004 17.0166 19.9363 17.5443 19.7995 17.8961C19.6197 18.3612 19.4008 18.6973 19.053 19.0452C18.7012 19.3969 18.369 19.6119 17.9038 19.7917C17.5521 19.9285 17.0205 20.0927 16.0473 20.1357C14.992 20.1826 14.6754 20.1943 12.0059 20.1943C9.33242 20.1943 9.01583 20.1826 7.96443 20.1357C6.9873 20.0927 6.45964 19.9285 6.10788 19.7917C5.64276 19.6119 5.30662 19.393 4.95876 19.0452C4.607 18.6934 4.39203 18.3612 4.21223 17.8961C4.07543 17.5443 3.91128 17.0127 3.86828 16.0395C3.82138 14.9842 3.80965 14.6676 3.80965 11.9981C3.80965 9.32462 3.82138 9.00803 3.86828 7.95663C3.91128 6.97949 4.07543 6.45184 4.21223 6.10007C4.39203 5.63495 4.6109 5.29881 4.95876 4.95095C5.31053 4.59918 5.64276 4.38421 6.10788 4.20442C6.45964 4.06762 6.99121 3.90346 7.96443 3.86047C9.01583 3.81357 9.33242 3.80184 12.0059 3.80184ZM12.0059 2C9.28943 2 8.94938 2.01173 7.88235 2.05863C6.81923 2.10553 6.08833 2.27751 5.45515 2.52375C4.79461 2.78171 4.23569 3.12175 3.68067 3.68068C3.12175 4.23569 2.78171 4.79461 2.52374 5.45125C2.27751 6.08834 2.10553 6.81533 2.05863 7.87846C2.01173 8.9494 2 9.28944 2 12.0059C2 14.7223 2.01173 15.0624 2.05863 16.1294C2.10553 17.1925 2.27751 17.9234 2.52374 18.5566C2.78171 19.2172 3.12175 19.7761 3.68067 20.3311C4.23569 20.8861 4.79461 21.2301 5.45124 21.4841C6.08833 21.7304 6.81532 21.9023 7.87844 21.9492C8.94548 21.9961 9.28552 22.0079 12.002 22.0079C14.7184 22.0079 15.0584 21.9961 16.1255 21.9492C17.1886 21.9023 17.9195 21.7304 18.5527 21.4841C19.2093 21.2301 19.7682 20.8861 20.3232 20.3311C20.8782 19.7761 21.2222 19.2172 21.4763 18.5605C21.7225 17.9234 21.8945 17.1964 21.9414 16.1333C21.9883 15.0663 22 14.7262 22 12.0098C22 9.29335 21.9883 8.95331 21.9414 7.88627C21.8945 6.82315 21.7225 6.09225 21.4763 5.45906C21.23 4.79461 20.89 4.23569 20.3311 3.68068C19.776 3.12566 19.2171 2.78171 18.5605 2.52765C17.9234 2.28142 17.1964 2.10944 16.1333 2.06254C15.0623 2.01173 14.7223 2 12.0059 2ZM12.0059 6.86609C9.16826 6.86609 6.86613 9.16822 6.86613 12.0058C6.86613 14.8434 9.16826 17.1456 12.0059 17.1456C14.8435 17.1456 17.1456 14.8434 17.1456 12.0058C17.1456 9.16822 14.8435 6.86609 12.0059 6.86609ZM12.0059 15.3398C10.1649 15.3398 8.67188 13.8468 8.67188 12.0058C8.67188 10.1649 10.1649 8.67184 12.0059 8.67184C13.8468 8.67184 15.3398 10.1649 15.3398 12.0058C15.3398 13.8468 13.8468 15.3398 12.0059 15.3398ZM17.3488 7.86287C18.0094 7.86287 18.5488 7.32739 18.5488 6.66294C18.5488 6.00239 18.0094 5.46301 17.3488 5.46301C16.6883 5.46301 16.1489 5.99848 16.1489 6.66294C16.1489 7.32348 16.6844 7.86287 17.3488 7.86287Z"
                    fill="#374151"
                  />
                </svg>

                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
        </div>
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
