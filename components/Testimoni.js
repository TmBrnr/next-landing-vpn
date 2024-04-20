import React, { useState } from "react";

// import react slick
import Slider from "react-slick";
import Image from "next/image";
import ArrowBack from "../public/assets/Icon/eva_arrow-back-fill.svg";
import ArrowNext from "../public/assets/Icon/eva_arrow-next-fill.svg";

const Podcasts = ({
  listPodcast = [
    {
      name: "Out of the Box",
      image: "/assets/outOfTheBox.png",
      source: "ironSource",
      Link: "https://podcasts.apple.com/us/podcast/the-real-people-behind-your-app-community-based-apps/id1522260018?i=1000560103611",
      title:
        "The real people behind your app: community-based apps and the growth loop",
    },
    {
      name: "Business of Apps Podcast",
      image: "/assets/bofApps.png",
      source: "Business of Apps",
      Link: "https://podcasts.apple.com/ie/podcast/business-of-apps-podcast/id1494940243",
      title:
        "#117: App Subscriptions Best Practices",
    },
    {
      name: "Subscription League",
      image: "/assets/subLeague.png",
      source: "purchasely",
      Link: "https://www.purchasely.com/blog/all-about-subscription-app-onboarding-with-tobias-boerner-appic",
      title:
        "All about subscription app onboarding",
    },
    {
      name: "App Promotion Summit",
      image: "/assets/appsSummit.png",
      source: "App Promotion Summit",
      Link: "https://www.youtube.com/watch?v=UKEVHiJh9Og",
      title:
        "How to Increase Revenue with ASO & Product Onboarding",
    },
    {
      name: "Out of the Box",
      image: "/assets/outOfTheBox.png",
      source: "ironSource",
      Link: "https://www.youtube.com/watch?v=inrce1Y6ES4",
      title:
        "How to optimize communities to drive revenue",
    },
    {
      name: "The Mobile User Acquisition Show",
      image: "/assets/mobileShow.png",
      source: "The Mobile User Acquisition Show",
      Link: "https://podcasts.apple.com/us/podcast/the-real-people-behind-your-app-community-based-apps/id1522260018?i=1000560103611",
      title:
        "How to use blockchain data to run targeted ads for web 3 with Tobias Boerner, Co-Founder at Wallet Ads, Appic and Admiral Studio.",
    },
   
  ],
}) => {
  const settings = {
    dots: true,
    customPaging: function (i) {
      return (
        <a className="">
          <span className="mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all "></span>
        </a>
      );
    },
    dotsClass: "slick-dots w-full sm:w-max flex mt-10 sm:absolute sm:mt-20  ",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <>
     <Slider
  {...settings}
  arrows={false}
  ref={setSliderRef}
  className="flex items-stretch" // Adjusted for valid Tailwind CSS classes
>
  {listPodcast.map((podcast, index) => (
    <div className="px-3 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 flex flex-col items-center" key={index}>
      <div className="border-2 border-gray-500 hover:border-orange-500 transition-all rounded-lg p-4 flex flex-col items-center justify-center  sm:min-h-[450px]" style={{minHeight:"500px"}}> {/* Added min-h-[500px] */}
        <Image
          src={podcast.image}
          height={200}
          width={200}
          alt="Podcast image"
          className="rounded-lg mb-2"
        />
        <p className="text-sm mt-2">{podcast.source}</p>
        <p className="text-lg font-bold mt-1">{podcast.name}</p>
        <p className="italic mt-1">“{podcast.title}”</p>
        <a
          href={podcast.link}
          target="_blank"
          rel="noreferrer"
          className="text-orange-500 mt-2 underline"
        >
          Listen now
        </a>
      </div>
    </div>
  ))}
</Slider>

      <div className="flex flex-col w-full items-center sm:items-end justify-end">
        <div className="flex  sm:flex-none justify-between w-auto mt-5 sm:mt-14">
          <div
            className="mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-white border-orange-500 border hover:bg-orange-500 hover:text-white-500 transition-all text-orange-500 cursor-pointer"
            onClick={sliderRef?.slickPrev}
          >
            <ArrowBack className="h-6 w-6 " />
          </div>
          <div
            className="flex items-center justify-center h-14 w-14 rounded-full bg-white border-orange-500 border hover:bg-orange-500 hover:text-white-500 transition-all text-orange-500 cursor-pointer"
            onClick={sliderRef?.slickNext}
          >
            <ArrowNext className="h-6 w-6" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Podcasts;
