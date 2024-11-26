"use client"
import Image from 'next/image'
import React from 'react'
import loginBg from "../assets/images/login-bg.jpg";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import Heading from '../components/Heading';
import { Checkbox } from '@/components/ui/checkbox';
import Link from 'next/link';
function Login() {
  return (
   
   <div className='flex justify-between lg:h-[100vh] flex-col lg:flex-row '>
    <div className='w-full lg:w-1/2 overflow-hidden'>
    <Image className='w-full h-[120px]  lg:h-[100%] object-cover'
                  src={loginBg}
                  alt="{settings.alt}"
                  container={true}
                  layout="" // This will make the image fill the container,
                  objectFit="cover" // Ensures the image covers the full container area,
                />
    </div>
    <div className='w-full py-5 lg:w-1/2 flex bg-dazzle-primary items-center justify-center'>
    <div className="flex flex-col">
<Heading level={1}>Login</Heading>
<div className="grid w-[300px] sm:w-[400px] m-auto max-w-sm items-center gap-1.5 pt-4">
      <Label htmlFor="email" className="py-3 !text-[16px]">Email</Label>
      <Input type="email" id="email" placeholder="Enter Your Email" className="w-full !rounded-[50px] !text-[16px] border-dazzle-dark" />
    </div>
    <div className="grid w-full max-w-sm items-center gap-1.5 py-0">
      <Label htmlFor="email" className="py-3 !text-[16px]">Password</Label>
      <Input type="email" id="email" placeholder="Enter Password" className="w-full !rounded-[50px] !text-[16px] border-dazzle-dark" />
    </div>
    <div className="flex w-full max-w-sm font-medium gap-1.5 py-4 justify-between items-center">
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" className="border-dazzle-dark" />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Remember Me
      </label>
    </div>
    <div><Link href="/login" className='text-[13px] underline'>Forget Password ?</Link></div>
    </div>
    <div className='py-4'> <Button className="bg-dazzle-dark text-white w-full !rounded-[50px]">Login</Button></div>
    <div className='py-4'> 
      <span className='h-[1px] w-full bg-black flex justify-center'><p className='mt-[-13px] h-[30px] w-[30px] bg-white text-center text-black rounded-[50px]'>or</p></span>
    </div>
    <div className='py-4 flex items-center justify-center'> 
    <Link href="/login" className='text-[13px] underline text-black font-medium'>Login With Mobile Number</Link>
    </div>
    <div className='py-4 flex items-center justify-center'> 
   <p>Don't have an account?  <Link href="/register" className='text-[13px] underline text-black font-medium'>Click here to register</Link></p>
    </div>
    </div>
   
    
    </div>
   </div>
 )

}

export default Login