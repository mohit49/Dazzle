import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SettinIcon ,BitCoin , EthIcon , UsdIcon } from "@/app/elements/icons";
function ElasticSearch() {
  return (
    <div className="search-container w-full container">
      <div className="w-64 bg-white rounded-lg  rounded-b-none shadow-md search top">
        <ul class=" flex justify-between">
          <li
            id="buy"
            class=" w-full  cursor-pointer   rounded-lg rounded-b-none hover:bg-gray-100 transition-all"
            onclick="toggleBorder('buy')"
          >
            <button className="w-full text-center px-8 py-2 text-black active">
              Buy
            </button>
          </li>
          <li
            id="sell"
            class="w-full  cursor-pointer   rounded-lg rounded-b-none hover:bg-gray-100 transition-all"
            onclick="toggleBorder('sell')"
          >
            <button class="w-full text-center px-8 py-2  text-black">
              Sell
            </button>
          </li>
        </ul>
      </div>
      <div className="w-full p-4 bg-gray-100  shadow-md mt-0  rounded-lg rounded-tl-none">
        <div className="w-full flex flex-row justify-between items-center gap-3">
          <Input
            className="w-[70%]"
            type="search"
            placeholder="Enter an address, neighborhood, city, or ZIP code"
          />{" "}
          <span className="flex advance-section gap-2 cursor-pointer">
            <SettinIcon />
            Advance
          </span>
          <Button className="bg-slate-950 px-[30px] text-white rounded-[40px]">
            Search
          </Button>
        </div>
      </div>
      <ul class="list-none text-lg flex flex-row gap-3 mt-3 justify-end">
        <li class="m-0 text-white font-dazzlemid h-[35px]">
      
          <span>We Accept</span>
        </li>
        <li class=" m-0 text-white font-dazzlemid h-[35px]">
      
          <span><BitCoin/></span>
        </li>
        <li class=" m-0 text-white font-dazzlemid h-[35px]">
       
          <span><EthIcon/></span>
        </li>
        <li class=" m-0 text-white font-dazzlemid h-[35px]">
       
       <span><UsdIcon/></span>
     </li>
      </ul>
    </div>
  );
}

export default ElasticSearch;
