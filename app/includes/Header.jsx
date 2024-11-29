"use client";
import Link from 'next/link'
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button"
import { ArrowDown, LanguageIcon, UserIcon } from "@/app/elements/icons"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from '@/components/ui/input';
function Header({headerFoorterReq}) {
  const [isSticky, setIsSticky] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollPos, setLastScrollPos] = useState(0);

  useEffect(() => {
   
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      // Determine if scrolling up or down
      if (currentScrollPos < lastScrollPos) {
        setIsVisible(true);
      } else if (currentScrollPos > lastScrollPos) {
        setIsVisible(false);
      }

      // Apply sticky if the scroll position is past a certain threshold
      if (currentScrollPos > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }

      setLastScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollPos]);
  return (
    headerFoorterReq && <header className={`top-0 w-full z-10 py-3 md:py-2 ${isSticky ? "sticky" : ''} ${isVisible ? "show" : "hide"}`}>
      <div class="sm:container mx-auto flex flex-row items-center gap-0 md:gap-2 justify-between px-3 md:px-0">
        <div className='flex items-center'>
          <Link href="/" className='mr-3 md:mr-9'><h2 className='text-[25px] md:text-[50px] text-white font-bold font-dazzleBold'>Mazzl</h2></Link>
          <DropdownMenu className="relative" modal={false}>
            <DropdownMenuTrigger asChild>
              <Button className="menubtn text-white !text-[16px] p-0 ">Buy <span className='menubtn-data-[state="open"]:rotate-[90deg]'><ArrowDown /></span></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-white absolute left-[-20px] top-[10px]">
              <DropdownMenuItem><Link href="/properties/one-river-point">Apartment</Link></DropdownMenuItem>
              <DropdownMenuItem>Villa</DropdownMenuItem>
              <DropdownMenuItem>Townhouse</DropdownMenuItem>
              <DropdownMenuItem>Penthouse</DropdownMenuItem>
              <DropdownMenuItem>Sky Villa</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu className="relative" modal={false}>
            <DropdownMenuTrigger asChild>
              <Button className="menubtn text-white !text-[16px] p-0 ">Sell <span className='menubtn-data-[state="open"]:rotate-[90deg]'><ArrowDown /></span></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-white absolute left-[-20px] top-[10px]">
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>

            </DropdownMenuContent>
          </DropdownMenu>
        </div>
<div className='search hidden lg:block'><div className='input-bs  w-[480px] flex flex-row gap-0'><Input type="text" placeholder="Property code, developer, building or community" className="bg-transparent border border-white !outline-none !rounded-[50px] !rounded-tr-[0px] !rounded-br-[0px]"/><button className='py-2 px-10 bg-white text-black ml-[-20px] !rounded-[50px]'>Search</button></div></div>
        <div className='flex items-center gap-2 md:gap-5'>
          <span><LanguageIcon className="!w-[40px] !h-[40px] bg-dazzle-gray p-[3px] rounded-[50px] cursor-pointer"/></span>
          <Link href="/" className='mr-0'><h2 className='text-[14px] text-black py-[8px] px-[15px] font-semibold bg-white rounded-3xl hidden md:block'>ADD PROPERTY</h2></Link>
          <Link href="/login" className='mr-0 text-[14px] text-white py-[8px] px-[0px] font-semibold rounded-3xl gap-2 flex flex-row items-center'><UserIcon className="w-[25px] h-[25px]"/> <p className='hidden sm:block'>Login/Register</p></Link>
        </div>
      </div>
    </header>
  )
}

export default Header