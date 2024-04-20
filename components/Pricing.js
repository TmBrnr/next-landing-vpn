import React, { useMemo } from "react";
import Image from "next/image";
import Podcast from "./Testimoni";
import ButtonPrimary from "./misc/ButtonPrimary";
import ButtonOutline from "./misc/ButtonOutline.";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import Link from "next/link";

const Pricing = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      id="pricing"
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed"
            >
             Our Services
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center"
            >
              Find what fit your needs and choose the best for you.
            </motion.p>
          </ScrollAnimationWrapper>
          <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center w-full items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <p className="text-lg text-black-600 font-medium capitalize mb-1">
                  Brand strategy
                </p>
                <p className="text-black-500 text-sm mb-2 sm:mb-4 ">
                  Defining & build Marketing
                </p>
                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                  <li className="relative check custom-list my-2">
                    Paid Marketing Channel-Mix & distribution
                  </li>
                  <li className="relative check custom-list my-2">
                    Competitive analysis
                  </li>
                  <li className="relative check custom-list my-2">
                    Digital Strategy
                  </li>
                  <li className="relative check custom-list my-2">
                    Marketing Planning Marketing / Omnichannel strategy
                  </li>
                  <li className="relative check custom-list my-2">
                    Pricing and profitability (especially Subscriptions
                    Products)
                  </li>
                  <li className="relative check custom-list my-2">
                    Approach & implementation brand strategy and positioning
                  </li>
                </ul>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center w-full items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >

                <p className="text-lg text-black-600 font-medium capitalize mb-1">
                  Growth operations
                </p>
                <p className="text-black-500 text-sm mb-2 sm:mb-4 ">
                  Optimizing & Enabling Marketing
                </p>
                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                  <li className="relative check custom-list my-2">
                  Performance marketing audits across all channels
                  </li>
                  <li className="relative check custom-list my-2">
                  Growth & Paid Marketing as a service on scale
                  </li>
                  <li className="relative check custom-list my-2">
                  Digital asset management / Creative Advertising / Digital production
                  </li>
                  <li className="relative check custom-list my-2">
                  Marketing planning and processes
                  </li>
                  <li className="relative check custom-list my-2">
                  Tracking, reporting & data orchestration (marketing related)
                  </li>
                  <li className="relative check custom-list my-2">
                  Agency management
                  </li>
                  <li className="relative check custom-list my-2">
                  CMO / CGO development & coaching
                  </li>
                </ul>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 w-full border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >

                <p className="text-lg text-black-600 font-medium capitalize mb-1">
                  Product Management
                </p>
                <p className="text-black-500 text-sm mb-2 sm:mb-4 ">
                  Improving Products & Services
                </p>
                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                  <li className="relative check custom-list my-2">
                  Subscription optimization
                  </li>
                  <li className="relative check custom-list my-2">
                  Integrate forward-thinking technology
                  </li>
                  <li className="relative check custom-list my-2">
                  UX / UI hacks
                  </li>
                  <li className="relative check custom-list my-2">
                  Funnel optimization
                  </li>
                  <li className="relative check custom-list my-2">
                  Mobile CRM consultation
                  </li>
                </ul>
              </motion.div>
            </ScrollAnimationWrapper>
          </div>
        </div>
        <div className="flex flex-col w-full my-16" id="testimoni">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto"
            >
              Podcasts Appearances
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12"
            >
              Tune in to hear Tobias Boerner discuss industry trends and share expert advice on recent podcasts.
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="w-full flex flex-col py-12">
            <motion.div variants={scrollAnimation}>
              <Podcast />
            </motion.div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="relative w-full mt-16">
            <motion.div variants={scrollAnimation} custom={{ duration: 3 }}>
              <div className="absolute rounded-xl  py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500">
                <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
                  <h5 className="text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
                    Want to talk about?<br /> Get in contact
                  </h5>
                  <p>Bring your business to the next level.</p>
                </div>
                <ButtonPrimary><Link href="/contact"><a href="/contact">Contact</a></Link></ButtonPrimary>
              </div>
              <div
                className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0"
                style={{ filter: "blur(114px)" }}
              ></div>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
