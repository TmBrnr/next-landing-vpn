import React, { useMemo } from "react";
import { motion } from "framer-motion";
import ScrollAnimationWrapper from "../components/Layout/ScrollAnimationWrapper";
import getScrollAnimation from "../utils/getScrollAnimation";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";

export default function Impressum() {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <>
    <SeoHead title='Impressum | Innoshare GmbH' />
    <Layout>
    <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto" id="impressum">
      <ScrollAnimationWrapper>
        <motion.div
          className="py-6 sm:py-16 w-full flex flex-col items-left justify-center"
          variants={scrollAnimation}
        >
          <motion.h3
            variants={scrollAnimation}
            className="text-2xl sm:text-3xl lg:text-4xl mb-5 font-medium text-black-600 leading-relaxed"
          >
            Impressum
          </motion.h3>
          <div className="w-full flex flex-col items-start justify-center text-left">
            <motion.div variants={scrollAnimation} className="mb-5">
            <motion.p variants={scrollAnimation} className="text-lg text-gray-700 mb-2 font-bold">Angaben gemäß § 5 TMG:</motion.p>
            <motion.p variants={scrollAnimation} className="text-lg text-gray-700 mb-2">Innoshare GmbH</motion.p>
            <motion.p variants={scrollAnimation} className="text-lg text-gray-700 mb-2">Frauenstr. 9</motion.p>
            <motion.p variants={scrollAnimation} className="text-lg text-gray-700 mb-2">01067 Dresden</motion.p>
            <motion.p variants={scrollAnimation} className="text-lg text-gray-700 mb-2">Deutschland</motion.p>
            </motion.div>
            <motion.div variants={scrollAnimation} className="mb-5">
            <motion.p variants={scrollAnimation} className="text-lg text-gray-700 mb-2">
              <strong>E-Mail:</strong> <a href="mailto:tobias@boernergroup.de" className="text-indigo-600 hover:text-indigo-800 transition duration-150 ease-in-out">tobias@boernergroup.de</a>
            </motion.p>
            <motion.p variants={scrollAnimation} className="text-lg text-gray-700 mb-2"><strong>Geschäftsführer:</strong> Tobias Börner</motion.p>
            </motion.div>
            <motion.div variants={scrollAnimation} className="mb-5">
            <motion.p variants={scrollAnimation} className="text-lg text-gray-700 mb-2"><strong>Handelsregister:</strong> HRB 33398</motion.p>
            <motion.p variants={scrollAnimation} className="text-lg text-gray-700 mb-2"><strong>Registergericht:</strong> Amtsgericht Dresden</motion.p>
            <motion.p variants={scrollAnimation} className="text-lg text-gray-700 mb-2"><strong>Umsatzsteuer-ID:</strong> DE327577748</motion.p>
            </motion.div>
            <motion.div variants={scrollAnimation} className="mb-5">
            <motion.p variants={scrollAnimation} className="text-lg text-gray-700 mb-2">
              Plattform der EU-Kommission zur Online-Streitbeilegung: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 transition duration-150 ease-in-out">https://ec.europa.eu/consumers/odr</a>
            </motion.p>
            <motion.p variants={scrollAnimation} className="text-lg text-gray-700">
              Wir sind weder verpflichtet noch bereit, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </motion.p>
            </motion.div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
    </div>
    </Layout>
    </>
  );
}
