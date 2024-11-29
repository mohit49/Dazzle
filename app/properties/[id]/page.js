"use client";
import Heroslider from "@/app/components/Heroslider";
import ElasticSearch from "@/app/components/ElasticSearch";
import SectionContainer from "@/app/components/Section";
import Heading from "@/app/components/Heading";
import Image from "next/image";
import hoteImg from "@/app/assets/images/hotel-image.jpg";
import buildings from "@/app/assets/images/building.png";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  ShareIcon,
  HeartIcon,
  HomeIcon,
  Building,
  OfficeIcon,
  VillaIcon,
  BanglowIcon,
  LocIcon,
} from "@/app/elements/icons";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Icon } from "lucide-react";
import useDeviceDetect from "@/libs/useDeviceDetect";

export default function Home() {
  const device = useDeviceDetect();
  const heroTheme = {
    type: "single",
    className: "dazzle-hero-bg",
    height: "full",
    contentAlign: "center",
    bgImage: ["home-banner.jpg"],
    container: true,
    alt: "Full size image",
    layout: "fill", // This will make the image fill the container,
    objectFit: "cover", // Ensures the image covers the full container area,
    className: "z-1",
    containerClass: "w-full relative h-[400px] md:h-screen bg-blue-500 z-0", // Optional: for rounded corners,
  };
  const cardData = [
    {
      Icon: HomeIcon,
      cardTitle: "Houses",
      cardDiscription: "35 properties",
      active: true,
    },
    {
      Icon: Building,
      cardTitle: "Apartments",
      cardDiscription: "35 properties",
    },
    {
      Icon: OfficeIcon,
      cardTitle: "Office",
      cardDiscription: "35 properties",
    },
    {
      Icon: VillaIcon,
      cardTitle: "Villa",
      cardDiscription: "35 properties",
    },
    {
      Icon: BanglowIcon,
      cardTitle: "Banglow",
      cardDiscription: "35 properties",
    },
  ];

  const propertyData = [
    {
      image: hoteImg,
      title: "Armani Beach Residences at Palm Jumeirah",
      Location: "Palm Jumeirah, Armani Beach",
      area: "1150 sqFit",
      bed: 3,
      bath: 2,
    },
    {
      image: hoteImg,
      title: "Armani Beach Residences at Palm Jumeirah",
      Location: "Palm Jumeirah, Armani Beach",
      area: "1150 sqFit",
      bed: 3,
      bath: 2,
    },
    {
      image: hoteImg,
      title: "Armani Beach Residences at Palm Jumeirah",
      Location: "Palm Jumeirah, Armani Beach",
      area: "1150 sqFit",
      bed: 3,
      bath: 2,
    },
    {
      image: hoteImg,
      title: "Armani Beach Residences at Palm Jumeirah",
      Location: "Palm Jumeirah, Armani Beach",
      area: "1150 sqFit",
      bed: 3,
      bath: 2,
    },
    {
      image: hoteImg,
      title: "Armani Beach Residences at Palm Jumeirah",
      Location: "Palm Jumeirah, Armani Beach",
      area: "1150 sqFit",
      bed: 3,
      bath: 2,
    },
    {
      image: hoteImg,
      title: "Armani Beach Residences at Palm Jumeirah",
      Location: "Palm Jumeirah, Armani Beach",
      area: "1150 sqFit",
      bed: 3,
      bath: 2,
    },
  ];
  console.log(device);
  return (
    <div className="min-h-[580px] bg-[#131313] pt-[100px]">
      <section>
        <div class="sm:container mx-auto ">
          <p className="text-[#ffffff]">
            All / Business Bay / One River Point / 378293963
          </p>
          <div className="flex justify-between flex-row items-end">
            <div>
              <h1 className="text-[50px] text-[#ffffff] font-bold">
                One River Point
              </h1>
              <p className="flex gap-1 flex-row items-center text-[#ffffff]">
                <LocIcon /> Business Bay, One River Point
              </p>
              <p className="mt-4 text-[#ffffff]">
                <span className="text-[#06cd5a]">FOR SALE &nbsp;</span> | &nbsp;
                @120000824
              </p>
            </div>

            <div className="flex justify-end flex-col items-end">
              <ul className="flex justify-between gap-4 py-2 flow-icons items-center justify-end">
                <li className="flex flex-row m-0 flex-nowrap gap-1 cursor-pointer">
                  <span className="h-[40px] w-[40px] flex bg-white rounded-[50px] items-center justify-center">
                    <ShareIcon />
                  </span>
                </li>
                <li className="h-[40px] w-[40px] flex bg-white rounded-[50px] items-center justify-center">
                  <HeartIcon />
                </li>
              </ul>
              <p className="flex gap-1 flex-row items-center text-[50px] font-bold text-[#ffffff]">
                $817616
              </p>
              <p className="mt-4 text-[#ffffff]">
                <span className="text-[#ffffff] text-[25px]">
                  1,060.25 sqft
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-4">
        <div class="sm:container mx-auto  gap-8 items-center">
          <div className=" w-[100%] overflow-hidden grid grid-home-screen">
            <div className="big relative">
              <div className="data-btn flex flex-row gap-2 absolute right-3 bottom-3">
                <span className="bg-white py-2 px-3 rounded-lg font-bold cursor-pointer">
                  SEE ALL 20 PHOTOS
                </span>
                <span className="bg-white py-2 px-3 rounded-lg font-bold cursor-pointer">
                  FLOOR PLAN
                </span>
                <span className="bg-white py-2 px-3 rounded-lg font-bold cursor-pointer">
                  QA-CODE
                </span>
              </div>
              <Image
                src={buildings}
                container={true}
                layout="" // This will make the image fill the container,
                objectFit="cover"
                className="w-full rounded-lg"
              />
            </div>
            <div className="small">
              <Image
                src={buildings}
                container={true}
                layout="" // This will make the image fill the container,
                objectFit="cover"
                className="w-full rounded-lg"
              />
            </div>
            <div className="small-two">
              <Image
                src={buildings}
                container={true}
                layout="" // This will make the image fill the container,
                objectFit="cover"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="sm:container mx-auto  gap-8 items-center">
          <div className="w-[70%] mb-[50px]">
            <h2 className="text-[#ffffff] text-[30px] my-3">
              Property Description
            </h2>
            <p className="text-[#b4b4b4]">
              A good description should be a narrative. It should tell the story
              of your property. It should focus on the emotions that the
              property and its amenities evoke. This is where you can describe
              the style of the property, the history of those who have operated
              there, and the importance of its place in the neighborhood. A good
              description should be a narrative. It should tell the story of
              your property. It should focus on the emotions that the property
              and its amenities evoke. This is where you can describe the style
              of the property, the history of those who have operated there, and
              the importance of its place in the neighborhood.
            </p>
            <h2 className="text-[#ffffff] text-[30px] my-3 mt-[40px]">
              Features & Amenities
            </h2>
            <div className=" flex flex-row justify-start text-[#ffffff] gap-24 text-[18px] mb-6">
                <ul className="flex flex-col gap-[20px]">
                    <li>Air Conditioning</li>
                    <li>Barbeque</li>
                    <li>Dryer</li>
                    <li>Gym</li>
                </ul>
                <ul className="flex flex-col gap-[20px]">
                    <li>Lawn</li>
                    <li>Microwave</li>
                    <li>Outdoor Shower</li>
                    <li>Refrigerator</li>
                </ul>
                <ul className="flex flex-col gap-[20px]">
                    <li>Swimming Pool</li>
                    <li>TV Cable</li>
                    <li>Washer</li>
                    <li>WiFi</li>
                </ul>
            </div>
            <hr/>
            
          </div>
        </div>
      </section>
    </div>
  );
}
