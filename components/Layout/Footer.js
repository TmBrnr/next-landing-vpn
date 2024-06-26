import React from "react";
import Logo from "../../public/assets/Logo.png";
import Image from "next/image";
import Link from "next/link";

import Linkedin from "../../public/assets/Icon/linkedin.svg";

const Footer = () => {
  return (
    <div className="bg-white-300 pt-40 sm:pt-32 pb-24">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 flex flex-col gap-4">
        <div className="w-full flex flex-col items-center justify-center text-center ">
          <Link href={`/`} className="flex items-center px-2 mr-4">
            <Image src={Logo} alt="innoshare logo" width={100} height={53} />
          </Link>
          <p className="mb-4 mt-2">
            Enhancing business growth with expert marketing and strategy
            services.
          </p>
          <div className="flex flex-row justify-center items-center w-full mt-2 mb-8">
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Link href="https://www.linkedin.com/in/tboerner/">
                <a>
                <Linkedin className="h-6 w-6 p-1" />
                </a>
              </Link>
            </div>
          </div>
          <p className="text-gray-400 mb-2">
            ©{new Date().getFullYear()} - Innoshare GmbH
          </p>
          <Link href={`/impressum`}>
            <a className="text-gray-400 underline">Impressum</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
