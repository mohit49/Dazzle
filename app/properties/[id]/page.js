"use client";
import Image from "next/image";
import mapImg from "@/app/assets/images/map.png";
import buildings from "@/app/assets/images/building.png";
import { Button } from "@/components/ui/button";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ShareIcon,
  HeartIcon,
  HomeIcon,
  Building,
  OfficeIcon,
  VillaIcon,
  BanglowIcon,
  LocIcon,
  SqFit,
  Bathroom,
  Stairs,
  Furniture,
  Bed,
  Parking,
  Chart,
  Handover,
} from "@/app/elements/icons";

import useDeviceDetect from "@/libs/useDeviceDetect";

export default function Home() {
  const device = useDeviceDetect();

  console.log(device);
  return (
    <div className="min-h-[580px] bg-[#131313] pt-[100px]">
      <section>
        <div class="sm:container mx-auto p-[10px] md:p-0">
          <p className="text-[#ffffff]">
            All / Business Bay / One River Point / 378293963
          </p>
          <div className="flex justify-between flex-col md:flex-row items-start md:items-center">
            <div className="w-[100%] md:w-[60%]">
              <h1 className="text-[30px] md:text-[50px] text-[#ffffff] font-bold">
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

            <div className="flex justify-between md:justify-end flex-row md:flex-col  items-start md:items-end mt-4 md:mt-0 w-[100%]">
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
              <div className="flex flex-col gap-0 items-start md:items-end">
              <p className="flex gap-1 flex-row items-center text-[25px] md:text-[50px]  font-bold text-[#ffffff] m-0">
                $817616
              </p>
              <p className="m-0 md:mt-4 text-[#ffffff]">
                <span className="text-[#ffffff] text-[18px] md:text-[25px]">
                  1,060.25 sqft
                </span>
              </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-4">
        <div class="sm:container mx-auto w-[100%]   gap-8 items-center">
          <div className=" md:w-[100%] md:overflow-hidden flex grid-home-screen">
            <div className="big relative w-[100%]">
              <div className="data-btn flex flex-row gap-2 absolute right-3 bottom-3 p-0  px-2 justify-center md:justify-start">
                <span className="bg-white md:py-2 md:px-3 rounded-lg font-bold cursor-pointer text-[13px] md:text-[16px] p-2">
                  SEE ALL 20 PHOTOS
                </span>
                <span className="bg-white md:py-2 md:px-3 rounded-lg font-bold cursor-pointer text-[13px] md:text-[16px] p-2">
                  FLOOR PLAN
                </span>
                <span className="bg-white md:py-2 md:px-3 rounded-lg font-bold cursor-pointer text-[13px] md:text-[16px] p-2">
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
      <section className="">
        <div class="sm:container mx-auto  gap-5 items-start flex flex-col md:flex-row">
          <div className="w-[100%] md:w-[68%] mb-[50px] p-3 md:p-0">
            <div className=" flex flex-row justify-start text-[#a5a5a5] gap-24 text-[18px] mb-6 py-3">
              <ul className="flex md:flex-row flex-wrap gap-y-[30px]">
                <li className="flex justify-start items-center gap-3 props-icon w-1/2 md:w-1/3">
                  <span className="block w-[50px] h-[50px] md:w-[60px] md:h-[60px] bg-[#4e4e4e] rounded-[50px] flex items-center justify-center">
                    <Building />
                  </span>
                  <span>
                    <p className="text-[#ffffff] text-[13px] md:text-[16px]">Property type:</p>
                    <p className="text-[#4e4e4e] text-[13px] md:text-[16px]">Apartment</p>
                  </span>
                </li>
                <li className="flex justify-start items-center gap-3 props-icon w-1/2 md:w-1/3">
                  <span className="block w-[50px] h-[50px] md:w-[60px] md:h-[60px] bg-[#4e4e4e] rounded-[50px] flex items-center justify-center">
                    <SqFit />
                  </span>
                  <span>
                  <p className="text-[#ffffff] text-[13px] md:text-[16px]">Property size:</p>
                  <p className="text-[#4e4e4e] text-[13px] md:text-[16px]">1,060.25 sqft</p>
                  </span>
                </li>
                <li className="flex justify-start items-center gap-3 props-icon w-1/2 md:w-1/3">
                  <span className="block w-[50px] h-[50px] md:w-[60px] md:h-[60px] bg-[#4e4e4e] rounded-[50px] flex items-center justify-center">
                    <Bathroom />
                  </span>
                  <span>
                  <p className="text-[#ffffff] text-[13px] md:text-[16px]">Bathroom:</p>
                  <p className="text-[#4e4e4e] text-[13px] md:text-[16px]">2</p>
                  </span>
                </li>
                <li className="flex justify-start items-center gap-3 props-icon w-1/2 md:w-1/3">
                  <span className="block w-[50px] h-[50px] md:w-[60px] md:h-[60px] bg-[#4e4e4e] rounded-[50px] flex items-center justify-center">
                    <Stairs />
                  </span>
                  <span>
                  <p className="text-[#ffffff] text-[13px] md:text-[16px]">Floor:</p>
                  <p className="text-[#4e4e4e] text-[13px] md:text-[16px]">13</p>
                  </span>
                </li>
                <li className="flex justify-start items-center gap-3 props-icon w-1/2 md:w-1/3">
                  <span className="block w-[50px] h-[50px] md:w-[60px] md:h-[60px] bg-[#4e4e4e] rounded-[50px] flex items-center justify-center">
                    <Furniture />
                  </span>
                  <span>
                  <p className="text-[#ffffff] text-[13px] md:text-[16px]">Furnishing:</p>
                  <p className="text-[#4e4e4e] text-[13px] md:text-[16px]">Fully Furnished</p>
                  </span>
                </li>
                <li className="flex justify-start items-center gap-3 props-icon w-1/2 md:w-1/3">
                  <span className="block w-[50px] h-[50px] md:w-[60px] md:h-[60px] bg-[#4e4e4e] rounded-[50px] flex items-center justify-center">
                    <Building />
                  </span>
                  <span>
                  <p className="text-[#ffffff] text-[13px] md:text-[16px]">Developer:</p>
                  <p className="text-[#4e4e4e] text-[13px] md:text-[16px]">Elington</p>
                  </span>
                </li>
                <li className="flex justify-start items-center gap-3 props-icon w-1/2 md:w-1/3">
                  <span className="block w-[50px] h-[50px] md:w-[60px] md:h-[60px] bg-[#4e4e4e] rounded-[50px] flex items-center justify-center">
                    <Bed />
                  </span>
                  <span>
                  <p className="text-[#ffffff] text-[13px] md:text-[16px]">Beds:</p>
                  <p className="text-[#4e4e4e] text-[13px] md:text-[16px]">4</p>
                  </span>
                </li>
                <li className="flex justify-start items-center gap-3 props-icon w-1/2 md:w-1/3">
                  <span className="block w-[50px] h-[50px] md:w-[60px] md:h-[60px] bg-[#4e4e4e] rounded-[50px] flex items-center justify-center">
                    <Parking />
                  </span>
                  <span>
                  <p className="text-[#ffffff] text-[13px] md:text-[16px]">Parking:</p>
                  <p className="text-[#4e4e4e] text-[13px] md:text-[16px]">2</p>
                  </span>
                </li>
                <li className="flex justify-start items-center gap-3 props-icon w-1/2 md:w-1/3">
                  <span className="block w-[50px] h-[50px] md:w-[60px] md:h-[60px] bg-[#4e4e4e] rounded-[50px] flex items-center justify-center">
                    <Chart />
                  </span>
                  <span>
                  <p className="text-[#ffffff] text-[13px] md:text-[16px]">Usage:</p>
                  <p className="text-[#4e4e4e] text-[13px] md:text-[16px]">Residential</p>
                  </span>
                </li>
                <li className="flex justify-start items-center gap-3 props-icon w-1/2 md:w-1/3">
                  <span className="block w-[50px] h-[50px] md:w-[60px] md:h-[60px] bg-[#4e4e4e] rounded-[50px] flex items-center justify-center">
                    <Handover />
                  </span>
                  <span>
                  <p className="text-[#ffffff] text-[13px] md:text-[16px]">Handover Status:</p>
                  <p className="text-[#4e4e4e] text-[13px] md:text-[16px]">
                      {" "}
                      Under Construction / 2027 / Q2
                    </p>
                  </span>
                </li>
              </ul>
            </div>
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
            <div className=" flex flex-row justify-start text-[#a5a5a5] gap-10 md:gap-24 text-[18px] mb-6">
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
            <hr />

            <div className="map w-[100%]">  <Image
                src={mapImg}
                container={true}
                layout="" // This will make the image fill the container,
                objectFit="cover"
                className="w-full rounded-lg"
              /></div>
          </div>
          <div className="w-[100%] p-3 md:p-0 md:w-[32%] mb-[50px]">
            <div className="flex bg-[white] rounded-md items-start flex-col p-5 gap-4 mt-6">
              <h3 className="text-[24px]">Schedule a tour</h3>
              <Button className="bg-[#1a1a1a] text-[#ffffff] !p-7 w-[100%] rounded-[30px]">
                SUBMIT A TOUR REQUEST
              </Button>
            </div>
            <div className="flex bg-[white] rounded-md items-start flex-col p-5 gap-4 mt-6">
              <h3 className="text-[24px] font-medium">Payment Options</h3>
              <div className="flex justify-between w-[100%] gap-3">
                <Button className="border-[#1a1a1a] border border-solid text-[#1a1a1a] md:!p-5 w-[100%] rounded-[35px]">
                  AED (Emirati Dirham)
                </Button>
                <Button className="bg-[#1a1a1a] text-[#ffffff] md:!p-5 w-[100%] rounded-[35px]">
                  USDT (Cryptocurrency)
                </Button>
              </div>
              <hr className="bg-[#1a1a1a] h-[2px] w-[100%]" />
              <div className="flex justify-between w-[100%] gap-3">
                <p className="font-medium text-[20px]">Fixed Price</p>
                <p className="font-medium text-[20px]">USDT 27,76,839</p>
              </div>
              <div className="flex justify-between w-[100%] gap-3">
                <p className="font-medium text-[20px]">Registration</p>
                <p className="font-medium text-[20px]">USDT 1,362</p>
              </div>
              <hr className="bg-[#1a1a1a] h-[2px] w-[100%]" />
              <h3 className="text-[24px] font-medium">Payment Method</h3>
              <div className="flex justify-between w-[100%] gap-3">
                <Select>
                  <SelectTrigger className="w-[100%] bg-[#ffffff] !p-7 rounded-[100px] text-[#000000] text-[20px] border-[#1a1a1a] border-[2px] border-solid font-bold">
                    <SelectValue placeholder="Bank Cheque" />
                  </SelectTrigger>
                  <SelectContent className="bg-black text-[#ffffff] px-0 py-4  rounded-[10px]">
                    <SelectItem value="light">Krypto</SelectItem>
                    <SelectItem value="dark">Credit Card</SelectItem>
                    <SelectItem value="system">Bank Transfer</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex justify-between w-[100%] gap-3">
                <p className="font-medium text-[13px]">Payment Method:  <b>Bank Cheque</b></p>
                <p className="font-medium text-[13px]">Payment Time Limit:  <b>5 Mint.</b></p>
              </div>
              <Button className="bg-[#1a1a1a] text-[#ffffff] !p-7 w-[100%] rounded-[35px] ">
                PROCEED TO PAY
              </Button>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}
