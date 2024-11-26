import React from 'react'
import SectionContainer from '../components/Section'
import Heading from '../components/Heading'
import Link from 'next/link';
import { AppleIcon, PlayIcon } from '../elements/icons';
function Footer({headerFoorterReq}) {
  return (
    headerFoorterReq && <footer className='bg-white py-0 pt-0'>
      <SectionContainer className="first-section bg-dazzle-white py-0 ">
        <div class="container mx-auto flex flex-col">
          <Heading
            level={2}
            className="text-dazzle-dark text-center mt-[-50px] text-[200px] font-dazzleBold font-bold leading-[100%] bottom-logo-text "
          >
            Dazzle
          </Heading>

          <ul className="flex items-center m-auto mt-5 gap-3 flex-nowrap md:flex-wrap justify-center">
            <li> <Link href="/about" className='flex flex-row bg-black text-white py-2 px-3 rounded-[8px] text-[11px] items-center'>
              <div><AppleIcon /></div><div><p>Download on the</p>
                <p className='text-[16px] leading-[100%]'>App Store</p>
              </div>
            </Link></li>
            <li> <Link href="/about" className='flex flex-row bg-black text-white py-2 px-3 rounded-[8px] text-[11px] items-center'>
              <div><PlayIcon /></div><div><p>Download on the</p>
                <p className='text-[16px] leading-[100%]'>Google Play</p>
              </div>
            </Link></li>
          </ul>

          <ul className="flex items-center m-auto mt-8 mb-7 gap-0 md:gap-3 font-medium md:flex-nowrap flex-wrap justify-center">
            <li> <Link href="/about" className='flex flex-row  text-black py-1 md:py-2 px-3 rounded-[8px] text-[16px] items-center'>
           About Dazzle   
            </Link></li>

            <li> <Link href="/about" className='flex flex-row  text-black py-1 md:py-2 px-3 rounded-[8px] text-[16px] items-center'>
          Buy Off-Plan 
            </Link></li>
            <li> <Link href="/about" className='flex flex-row text-black py-1 md:py-2 px-3 rounded-[8px] text-[16px] items-center'>
          Buy Ready
            </Link></li>
            <li> <Link href="/about" className='flex flex-row  text-black py-1 md:py-2 px-3 rounded-[8px] text-[16px] items-center'>
          Seller Buyer
            </Link></li>
          </ul>

          <hr/>
          <div className='flex w-full justify-between flex-col-reverse md:flex-row'>
          <ul className="flex items-center m-0 mt-0 gap-1 font-medium">
            <li> <Link href="/about" className='flex flex-row  text-black py-2 px-1 rounded-[8px] text-[11px] items-center'>
           FAQs
            </Link></li>

            <li> <Link href="/about" className='flex flex-row  text-black py-2 px-1 rounded-[8px] text-[11px] items-center'>
         Terma & Conditions
            </Link></li>
            <li> <Link href="/about" className='flex flex-row text-black py-2 px-1 rounded-[8px] text-[11px] items-center'>
          Privacy Policy
            </Link></li>
            <li> <Link href="/about" className='flex flex-row  text-black py-2 px-1 rounded-[8px] text-[11px] items-center'>
         Cookies Policy
            </Link></li>
          </ul>
          <p className='text-[11px] mt-3 font-medium'>© 2024 Dazzle. All Rights Reserved.</p>
          </div>
        </div>
      </SectionContainer>
    </footer>
  )
}

export default Footer