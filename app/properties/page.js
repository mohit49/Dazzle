"use client"
import Heroslider from "@/app/components/Heroslider";
import ElasticSearch from "@/app/components/ElasticSearch";
import SectionContainer from "@/app/components/Section";
import Heading from "@/app/components/Heading";
import Image from "next/image";
import hoteImg from "@/app/assets/images/hotel-image.jpg";
import cardImg from "@/app/assets/images/card-img.jpg";
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
  HomeIcon,
  Building,
  OfficeIcon,
  VillaIcon,
  BanglowIcon,
  BedIcon,
  BathTubIcon,
  SqFit,
  ShareIcon,
  HeartIcon,
  BuyPropertyIcon,
  TradeIcon,
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
console.log(device)
  return (
    <>
      <Heroslider settings={heroTheme}>
        <div className="relative flex flex-col items-center justify-center w-full m-auto  md:w-[900px] h-full z-10">
          <div class="text-center p-6 text-pink-25">
            <p className="text-[10px] md:text-[14px] font-dazzlemid text-white">
              THE BEST WAY TO
            </p>
            <h1 className="text-[30px] md:text-[40px] lg:text-[60px] leading-[100%] font-dazzleBold font-bold tracking-[1.5px] text-white">
              Buy, or sell
              <br />
              your property easily
            </h1>
            <p className="text-[10px] md:text-[14px] mt-[5px] md:mt-[20px]  font-dazzlemid text-white">
              The best platform to buy, sell your properties using crypto
            </p>
          </div>
         
          {device.isDesktop && <ElasticSearch className="w-full" />}
        </div>
        <div className="w-full bg-black border-t border-b border-t-zinc-50 border-b-zinc-50 absolute bottom-0 bg-opacity-[80%]">
        <marquee>
          <div className="container flex flex-row align-middle justify-between m-auto py-3">
           
            <div className="text-white">List Your Property For 39,999AED</div>
            <div className="text-white">List Your Property For 39,999AED</div>
            <div className="text-white">List Your Property For 39,999AED</div>
         
          </div>
          </marquee>
        </div>
      </Heroslider>
      <SectionContainer className="first-section bg-dazzle-dark py-10">
        <div class="sm:container mx-auto ">
          <Heading
            level={2}
            className="text-white text-center font-dazzleBold font-bold text-[20px] md:text-[35px]"
          >
            Explore Apartment Types
          </Heading>
          <div className="flex py-10 md:py-20 gap-5 flex-nowrap overflow-auto px-2 md:px-0 justify-start md:justify-center ">
            {cardData.map((ele, index) => {
              return (
                <Card
                  key={index}
                  className={`flex-none md:w-[200px] items-center   group w-[150px] ${
                    ele.active ? "bg-white" : "bg-dazzle-dark"
                  }  py-4 cursor-pointer hover:bg-white`}
                >
                  <CardHeader>
                    <div
                      className={`icon-cir mb-8 w-[200px]  ${
                        ele.active ? " bg-dazzle-dark" : "bg-dazzle-gray"
                      } group-hover:bg-dazzle-dark`}
                    >
                      <ele.Icon />
                    </div>
                    <CardTitle
                      className={`font-dazzleBold mt-[30px] text-[20px]  ${
                        ele.active ? " text-dazzle-dark" : "text-white"
                      } group-hover:text-dazzle-dark`}
                    >
                      {ele.cardTitle}
                    </CardTitle>
                    <CardDescription
                      className={`font-dazzleBold mt-[30px]  ${
                        ele.active ? " text-dazzle-dark" : "text-white"
                      } group-hover:text-dazzle-dark`}
                    >
                      {ele.cardDiscription}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </SectionContainer>

      <SectionContainer className="first-section bg-dazzle-dark py-10">
        <div class="md:container mx-auto">
          <Heading
            level={2}
            className="text-white text-center font-dazzleBold font-bold text-[20px] md:text-[35px]"
          >
            Discover Our Featured listings
          </Heading>
          <Heading
            level={5}
            className="text-dazzle-gray text-center font-dazzleMid font-semibold  text-[12px] md:text-[16px]"
          >
            Thousands of luxury home enthusiasts just like you visit our
            website.
          </Heading>
          <div className="flex px-3 md:flex-wrap gap-5 overflow-x-scroll justify-between sm:overflow-x-auto py-8">
            {propertyData.map((ele, index) => (
              <Card
                key={index}
                className="min-w-[90%] sm:min-w-0 sm:w-[31%] rounded-lg shadow-lg bg-white overflow-hidden"
              >
                <Image
                  src={ele.image}
                  alt="{settings.alt}"
                  container={true}
                  layout="" // This will make the image fill the container,
                  objectFit="cover" // Ensures the image covers the full container area,
                />
                <CardHeader className="text-dazzle-dark font-semibold px-3 text-[18px] py-3">
                  <CardTitle className="text-[18px]">{ele.title}</CardTitle>
                  <CardDescription className="font-light">
                    Palm Jumeirah, Armani Beach
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-3 py-2">
                  <ul className="flex justify-between gap-2 py-2 flow-icons items-center">
                    <li className="flex flex-row m-0 flex-nowrap gap-1">
                      <BedIcon />
                      <p className="flex text-[12px]">
                        Beds : <strong>{ele.bed}</strong>
                      </p>
                    </li>
                    <li className="flex flex-row m-0 flex-nowrap gap-1">
                      <BathTubIcon />
                      <p className="flex text-[12px]">
                        Baths : <strong>{ele.bath}</strong>
                      </p>
                    </li>
                    <li className="flex flex-row m-0 flex-nowrap gap-1">
                      <SqFit />
                      <p className="flex text-[12px]">
                        SqFt : <strong>{ele.area}</strong>
                      </p>
                    </li>
                  </ul>
                  <hr />
                  <div className="flex justify-between mt-4">
                    <div>
                      <Button className="bg-dazzle-dark !py-3 !px-14 !rounded-full text-white shadow-md hover:shadow-lg hover:translate-y-[-2px] transition-all duration-300 ease-in-out">
                        Buy
                      </Button>
                    </div>
                    <div>
                      <ul className="flex justify-between gap-4 py-2 flow-icons items-center">
                        <li className="flex flex-row m-0 flex-nowrap gap-1 cursor-pointer">
                          <ShareIcon />
                        </li>
                        <li className="flex flex-row m-0 flex-nowrap gap-1 cursor-pointer">
                          <HeartIcon />
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </SectionContainer>
      <SectionContainer className="first-section bg-dazzle-dark py-10">
        <div class="md:container mx-auto">
          <Heading
            level={2}
            className="text-white text-center font-dazzleBold font-bold text-[20px] md:text-[35px]"
          >
            See How Dazzle Can Help
          </Heading>
          <Heading
            level={5}
           className="text-dazzle-gray text-center font-dazzleMid font-semibold  text-[12px] md:text-[16px]"
          >
            Thousands of luxury home enthusiasts just like you visit our
            website.
          </Heading>
          <div className="flex py-10 gap-3 md:gap-24 justify-center overflow-x-auto">
            <Card
              className={` flex-none group w-[180px] md:w-[35%] bg-white overflow-x-auto  py-4 cursor-pointer hover:bg-white flex-col justify-center text-center`}
            >
              <CardHeader>
                <div
                  className={`w-[100px] mb-8 text-center flex justify-center mx-auto`}
                >
                  <BuyPropertyIcon />
                </div>
                <CardTitle
                  className={`font-dazzleBold mt-[30px] align-middle text-center !text-[20px] !md:text-[25px]`}
                >
                  Buy a property
                </CardTitle>
                <CardDescription
                  className={`font-dazzleBold mt-[30px] align-middle text-center  !text-[12px] !md:text-[16px]`}
                >
                  Lorem Ipsum has been the industry's standard dummy text
                </CardDescription>
              </CardHeader>{" "}
              <CardContent>
                <Button className="bg-dazzle-dark py-3 px-6 !rounded-full text-white shadow-md hover:shadow-lg hover:translate-y-[-2px] transition-all duration-300 ease-in-out">
                  Find A Home
                </Button>
              </CardContent>
            </Card>

            <Card
              className={`flex-none group  w-[180px] md:w-[35%] bg-white  py-4 cursor-pointer hover:bg-white  flex-col justify-center text-center`}
            >
              <CardHeader>
                <div
                  className={`w-[100px] mb-8 text-center flex justify-center mx-auto`}
                >
                  <BuyPropertyIcon />
                </div>
                <CardTitle
                  className={`font-dazzleBold mt-[30px] align-middle text-center !text-[20px] !md:text-[25px]`}
                >
                  Sell a property
                </CardTitle>
                <CardDescription
                  className={`font-dazzleBold mt-[30px] align-middle text-center  !text-[12px] !md:text-[16px]`}
                >
                  Lorem Ipsum has been the industry's standard dummy text
                </CardDescription>
              </CardHeader>{" "}
              <CardContent>
                <Button className="border border-gray-800 text-gray-800 font-bold py-2 px-6 !rounded-full hover:bg-gray-800 hover:text-white transition-colors duration-300">
                  Place An Add
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </SectionContainer>
      <SectionContainer className="first-section bg-dazzle-dark py-10">
        <div class="md:container mx-auto">
          <Heading
            level={2}
            className="text-white text-center font-dazzleBold font-bold text-[20px] md:text-[35px]"
          >
            Explore All the Projects in the UAE
          </Heading>

          <div className="flex py-10 pb-0 gap-20 justify-center">
            <Tabs defaultValue="any" className="w-[100%]">
              <TabsList className="grid md:w-[400px] w-[90%] m-auto grid-cols-3  !p-0 h-auto  border border-white !rounded-[50px] overflow-hidden">
                <TabsTrigger
                  value="any"
                  className="text-white data-[state=active]:bg-white data-[state=active]:text-black py-2 "
                >
                  ANY
                </TabsTrigger>
                <TabsTrigger
                  className="text-white data-[state=active]:bg-white data-[state=active]:text-black  py-2"
                  value="off-plan"
                >
                  OFF-PLAN
                </TabsTrigger>
                <TabsTrigger
                  className="text-white data-[state=active]:bg-white data-[state=active]:text-black  py-2"
                  value="ready"
                >
                  READY
                </TabsTrigger>
              </TabsList>
              <TabsContent value="any" className="overflow-x-auto">
                <div className="w-[600px] md:w-[100%]  flex justify-between mt-6 overflow-x-auto">
                  <div className="w-[100%] grid grid-cols-5 gap-4 py-3 px-3 bg-dazzle-gray text-white border-t-2 border-b-2">
                    <div>Location</div>
                    <div>Price/Sq ft</div>
                    <div>24Hr Change</div>
                    <div>Transactions</div>
                    <div>Action</div>
                  </div>
                </div>
                <div className="w-[600px] md:w-[100%] flex justify-between mt-0">
                  <div className="w-[100%] grid grid-cols-5 gap-4 py-3 px-3  text-white border-t-0 border-b-[1px] border-b-0 align-middle items-center">
                    <div>Damac Hills 2</div>
                    <div>AED 2,020 per sqft</div>
                    <div className="flex gap-1">
                      <TradeIcon className="tradeIcon up" />
                      -16.78%
                    </div>
                    <div> 32 Sales</div>
                    <div>
                      <Button className="bg-white text-dazzle-gray !px-10  !rounded-[30px] ">
                        Buy
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="w-[600px] md:w-[100%] grid grid-cols-5 gap-4 py-3 px-3  text-white border-t-0 border-b-[1px] align-middle items-center">
                  <div>Damac Hills 2</div>
                  <div>AED 2,020 per sqft</div>
                  <div className="flex gap-1">
                    <TradeIcon className="tradeIcon down" />
                    -16.78%
                  </div>
                  <div> 32 Sales</div>
                  <div>
                    <Button className="bg-white text-dazzle-gray !px-10  !rounded-[30px] ">
                      Buy
                    </Button>
                  </div>
                </div>
                <div className="w-[600px] md:w-[100%] grid grid-cols-5 gap-4 py-3 px-3  text-white border-t-0 border-b-[1px] align-middle items-center">
                  <div>Damac Hills 2</div>
                  <div>AED 2,020 per sqft</div>
                  <div className="flex gap-1">
                    <TradeIcon className="tradeIcon down" />
                    -16.78%
                  </div>
                  <div> 32 Sales</div>
                  <div>
                    <Button className="bg-white text-dazzle-gray !px-10  !rounded-[30px] ">
                      Buy
                    </Button>
                  </div>
                </div>
                <div className="w-[600px] md:w-[100%] grid grid-cols-5 gap-4 py-3 px-3  text-white border-t-0 border-b-[1px] align-middle items-center">
                  <div>Damac Hills 2</div>
                  <div>AED 2,020 per sqft</div>
                  <div className="flex gap-1">
                    <TradeIcon className="tradeIcon down" />
                    -16.78%
                  </div>
                  <div> 32 Sales</div>
                  <div>
                    <Button className="bg-white text-dazzle-gray !px-10  !rounded-[30px] ">
                      Buy
                    </Button>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="off-plan" className="overflow-x-auto">
                <div className="w-[600px] md:w-[100%]  flex justify-between mt-6 overflow-x-auto">
                  <div className="w-[100%] grid grid-cols-5 gap-4 py-3 px-3 bg-dazzle-gray text-white border-t-2 border-b-2">
                    <div>Location</div>
                    <div>Price/Sq ft</div>
                    <div>24Hr Change</div>
                    <div>Transactions</div>
                    <div>Action</div>
                  </div>
                </div>
                <div className="w-[600px] md:w-[100%] flex justify-between mt-0">
                  <div className="w-[100%] grid grid-cols-5 gap-4 py-3 px-3  text-white border-t-0 border-b-[1px] border-b-0 align-middle items-center">
                    <div>Damac Hills 2</div>
                    <div>AED 2,020 per sqft</div>
                    <div className="flex gap-1">
                      <TradeIcon className="tradeIcon up" />
                      -16.78%
                    </div>
                    <div> 32 Sales</div>
                    <div>
                      <Button className="bg-white text-dazzle-gray !px-10  !rounded-[30px] ">
                        Buy
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="w-[600px] md:w-[100%] grid grid-cols-5 gap-4 py-3 px-3  text-white border-t-0 border-b-[1px] align-middle items-center">
                  <div>Damac Hills 2</div>
                  <div>AED 2,020 per sqft</div>
                  <div className="flex gap-1">
                    <TradeIcon className="tradeIcon down" />
                    -16.78%
                  </div>
                  <div> 32 Sales</div>
                  <div>
                    <Button className="bg-white text-dazzle-gray !px-10  !rounded-[30px] ">
                      Buy
                    </Button>
                  </div>
                </div>
                <div className="w-[600px] md:w-[100%] grid grid-cols-5 gap-4 py-3 px-3  text-white border-t-0 border-b-[1px] align-middle items-center">
                  <div>Damac Hills 2</div>
                  <div>AED 2,020 per sqft</div>
                  <div className="flex gap-1">
                    <TradeIcon className="tradeIcon down" />
                    -16.78%
                  </div>
                  <div> 32 Sales</div>
                  <div>
                    <Button className="bg-white text-dazzle-gray !px-10  !rounded-[30px] ">
                      Buy
                    </Button>
                  </div>
                </div>
                <div className="w-[600px] md:w-[100%] grid grid-cols-5 gap-4 py-3 px-3  text-white border-t-0 border-b-[1px] align-middle items-center">
                  <div>Damac Hills 2</div>
                  <div>AED 2,020 per sqft</div>
                  <div className="flex gap-1">
                    <TradeIcon className="tradeIcon down" />
                    -16.78%
                  </div>
                  <div> 32 Sales</div>
                  <div>
                    <Button className="bg-white text-dazzle-gray !px-10  !rounded-[30px] ">
                      Buy
                    </Button>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="ready" className="overflow-x-auto">
              <div className="w-[600px] md:w-[100%]  flex justify-between mt-6 overflow-x-auto">
                  <div className="w-[100%] grid grid-cols-5 gap-4 py-3 px-3 bg-dazzle-gray text-white border-t-2 border-b-2">
                    <div>Location</div>
                    <div>Price/Sq ft</div>
                    <div>24Hr Change</div>
                    <div>Transactions</div>
                    <div>Action</div>
                  </div>
                </div>
                <div className="w-[600px] md:w-[100%] flex justify-between mt-0">
                  <div className="w-[100%] grid grid-cols-5 gap-4 py-3 px-3  text-white border-t-0 border-b-[1px] border-b-0 align-middle items-center">
                    <div>Damac Hills 2</div>
                    <div>AED 2,020 per sqft</div>
                    <div className="flex gap-1">
                      <TradeIcon className="tradeIcon up" />
                      -16.78%
                    </div>
                    <div> 32 Sales</div>
                    <div>
                      <Button className="bg-white text-dazzle-gray !px-10  !rounded-[30px] ">
                        Buy
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="w-[600px] md:w-[100%] grid grid-cols-5 gap-4 py-3 px-3  text-white border-t-0 border-b-[1px] align-middle items-center">
                  <div>Damac Hills 2</div>
                  <div>AED 2,020 per sqft</div>
                  <div className="flex gap-1">
                    <TradeIcon className="tradeIcon down" />
                    -16.78%
                  </div>
                  <div> 32 Sales</div>
                  <div>
                    <Button className="bg-white text-dazzle-gray !px-10  !rounded-[30px] ">
                      Buy
                    </Button>
                  </div>
                </div>
                <div className="w-[600px] md:w-[100%] grid grid-cols-5 gap-4 py-3 px-3  text-white border-t-0 border-b-[1px] align-middle items-center">
                  <div>Damac Hills 2</div>
                  <div>AED 2,020 per sqft</div>
                  <div className="flex gap-1">
                    <TradeIcon className="tradeIcon down" />
                    -16.78%
                  </div>
                  <div> 32 Sales</div>
                  <div>
                    <Button className="bg-white text-dazzle-gray !px-10  !rounded-[30px] ">
                      Buy
                    </Button>
                  </div>
                </div>
                <div className="w-[600px] md:w-[100%] grid grid-cols-5 gap-4 py-3 px-3  text-white border-t-0 border-b-[1px] align-middle items-center">
                  <div>Damac Hills 2</div>
                  <div>AED 2,020 per sqft</div>
                  <div className="flex gap-1">
                    <TradeIcon className="tradeIcon down" />
                    -16.78%
                  </div>
                  <div> 32 Sales</div>
                  <div>
                    <Button className="bg-white text-dazzle-gray !px-10  !rounded-[30px] ">
                      Buy
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </SectionContainer>
      <SectionContainer className="first-section bg-dazzle-dark py-10">
        <div class="container mx-auto">
          <Heading
            level={2}
            className="text-white text-center font-dazzleBold font-bold text-[20px] md:text-[35px]"
          >
            Properties By Cities
          </Heading>
          <Heading
            level={5}
            className="text-dazzle-gray text-center font-dazzleMid font-semibold mt-3  text-[12px] md:text-[16px] leading-[100%]"
          >
            Thousands of luxury home enthusiasts just like you visit our
            website.
          </Heading>
          <div className="flex py-10 gap-20 justify-center w-full">
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full text-white"
            >
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/4"
                  >
                    <div className="p-1">
                      <Card className="p-0 overflow-hidden border-0 relative">
                        <div className="absolute bottom-0 w-[100%] p-3">
                          <CardTitle className="text-[20px]">
                            Abu Dhabi
                          </CardTitle>
                          <CardDescription>12 Properties</CardDescription>
                        </div>
                        <CardContent className="flex aspect-square items-center justify-center !p-0 w-full">
                          <Image
                            src={cardImg}
                            container={true}
                            layout="" // This will make the image fill the container,
                            objectFit="cover"
                            className="w-full"
                          />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="bg-white !rounded-[50px] !h-[50px] !w-[50px] text-black shadow-sm ml-[50px] md:ml-[20px]" />
              <CarouselNext className="bg-white !rounded-[50px] !h-[50px] !w-[50px] text-black shadow-sm mr-[50px] md:mr-[20px]" />
            </Carousel>
          </div>
        </div>
      </SectionContainer>
      <SectionContainer className="first-section bg-dazzle-dark py-10 pb-40">
        <div class="container flex flex-col md:flex-row mx-auto items-center">
          <div className="mega-text">
            <Heading
              level={2}
              className="text-white text-[30px] md:text-[120px] text-center font-dazzleBold font-bold md:rotate-[-90deg]"
            >
              FAQ
            </Heading>
          </div>
          <div className="acc-con w-full text-white">
            <Accordion type="single" collapsible className="w-full px-2">
              <AccordionItem value="item-1">
                <AccordionTrigger className="items-start text-left">What is Dazzle?</AccordionTrigger>
                <AccordionContent>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries,
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="items-start text-left">Who can register on Dazzle?</AccordionTrigger>
                <AccordionContent>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries,
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="items-start text-left">
                  Can I buy properties online?
                </AccordionTrigger>
                <AccordionContent>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries,
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="items-start text-left">
                  What makes DAZZLE different from other property platforms?
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It&apos;s animated by default, but you can disable it if
                  you prefer.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="items-start text-left">
                  How does Dazzle sell online?
                </AccordionTrigger>
                <AccordionContent>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries,
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </SectionContainer>
    </>
  );
}
