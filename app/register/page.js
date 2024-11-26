"use client";
import Image from "next/image";
import React, { useState } from "react";
import registerBg from "../assets/images/register-bg.jpg";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Heading from "../components/Heading";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
function Register() {
  const [phone, setPhone] = useState("");
  return (
    <div className="flex justify-between lg:h-[100vh] flex-col lg:flex-row ">
      <div className="w-full lg:w-1/2 overflow-hidden">
        <Image
          className="w-full h-[120px]  lg:h-[100%] object-cover"
          src={registerBg}
          alt="{settings.alt}"
          container={true}
          layout="" // This will make the image fill the container,
          objectFit="cover" // Ensures the image covers the full container area,
        />
      </div>
      <div className="w-full py-5 lg:w-1/2 flex bg-dazzle-primary items-center justify-center">
        <div className="flex flex-col px-6">
          <Heading level={1} className="mb-4">
            Register
          </Heading>
          <Tabs
            defaultValue="agent"
            className="w-[100%] justify-center flex flex-col"
          >
            <TabsList className="flex w-[100%] justify-center items-center gap-0  !m-auto   !p-0 h-auto  border border-black !rounded-[50px] overflow-hidden">
              <TabsTrigger
                className="text-black data-[state=active]:bg-black data-[state=active]:text-white w-[50%]  py-2"
                value="agent"
              >
                AGENT
              </TabsTrigger>
              <TabsTrigger
                className="text-black data-[state=active]:bg-black data-[state=active]:text-white w-[50%]  py-2"
                value="owner"
              >
                OWNER
              </TabsTrigger>
            </TabsList>

            <TabsContent value="agent" className="">
              <div className="flex flex-row gap-2 register-phone-no w-[95%]">
                <div className="grid w-[100%] sm:w-1/2  m-auto max-w-sm items-center gap-1.5 pt-4">
                  <Label htmlFor="email" className="py-3 !text-[16px]">
                    Full Name*
                  </Label>
                  <Input
                    type="text"
                    id="name"
                    placeholder="Enter Your name"
                    className="w-full !rounded-[50px] !text-[16px] border-dazzle-dark"
                  />
                </div>
                <div className="gridw-[100%]  sm:lg:w-1/2 m-auto max-w-sm items-center gap-1.5 pt-4">
                  <Label htmlFor="email" className="py-3 !text-[16px]">
                    Phone
                  </Label>
                  <PhoneInput
                    country={"kw"}
                    enableSearch={true}
                    value={phone}
                    onChange={(phone) => setPhone(phone)}
                  />
                </div>
              </div>
              <div className="grid w-[100%] sm:w-[100%] m-auto items-center gap-x-2 pt-4">
                <Label htmlFor="email" className="py-3 !text-[16px]">
                  Email*
                </Label>
                <Input
                  type="text"
                  id="email"
                  placeholder="Enter Your Email"
                  className="w-full !rounded-[50px] !text-[16px] border-dazzle-dark"
                />
              </div>
          
              <div className="flex flex-row gap-2 register-phone-no w-[95%]">
                <div className="grid w-[100%] sm:w-1/2  m-auto max-w-sm items-center gap-1.5 pt-4">
                  <Label htmlFor="email" className="py-3 !text-[16px]">
                   Password*
                  </Label>
                  <Input
                    type="text"
                    id="name"
                    placeholder="Password"
                    className="w-full !rounded-[50px] !text-[16px] border-dazzle-dark"
                  />
                </div>
                <div className="grid w-[100%] sm:w-1/2  m-auto max-w-sm items-center gap-1.5 pt-4">
                  <Label htmlFor="email" className="py-3 !text-[16px]">
                    Confirm Password*
                  </Label>
                  <Input
                    type="text"
                    id="name"
                    placeholder="Confirm Password"
                    className="w-full !rounded-[50px] !text-[16px] border-dazzle-dark"
                  />
                </div>
            
              </div>
              <div className="grid w-[100%] sm:w-[100%] m-auto items-center gap-x-2 pt-4">
                <Label htmlFor="email" className="py-3 !text-[16px]">
                  Nationality*
                </Label>
                <Input
                  type="text"
                  id="email"
                  placeholder="Enter Your Nationality"
                  className="w-full !rounded-[50px] !text-[16px] border-dazzle-dark"
                />
              </div>
         
              <div className="flex w-[300px] sm:w-full m-auto  items-center justify-between gap-0 pt-4 flex-row">
                <div className=" items-center space-x-2">
                  <Checkbox id="terms" className="border-dazzle-dark" />
                  <label
                    htmlFor="terms"
                    className=" text-sm text-[#909090] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >  I agree to the   <Link href="/login" className="text-[13px] underline text-black">
                  Terms and Conditions
               </Link>  and the <Link href="/login" className="text-[13px] underline text-black">
               Privacy Policy.
               </Link> 
                   
                  </label>
                </div>
              
              </div>
              <div className="flex w-[300px] sm:w-full m-auto  items-center justify-between gap-0 pt-4 flex-row">
              
              <Button className="bg-dazzle-dark text-white w-full !rounded-[50px]">
                Register
              </Button>
            </div>
              <div className="py-4">
                <span className="h-[1px] w-full bg-black flex justify-center">
                  <p className="mt-[-13px] h-[30px] w-[30px] bg-white text-center text-black rounded-[50px]">
                    or
                  </p>
                </span>
              </div>
           
              <div className="py-4 flex items-center justify-center">
                <p>
                Already a member? 
                  <Link
                    href="/login"
                    className="text-[13px] underline text-black font-medium"
                  >
                   Click here to login
                  </Link>
                </p>
              </div>
            </TabsContent>
            <TabsContent value="owner" className="overflow-x-auto">
              <div className="grid w-[300px] sm:w-[400px] m-auto max-w-sm items-center gap-1.5 pt-4">
                <Label htmlFor="email" className="py-3 !text-[16px]">
                  Email
                </Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="Enter Your Email"
                  className="w-full !rounded-[50px] !text-[16px] border-dazzle-dark"
                />
              </div>
              <div className="grid w-[300px] sm:w-[400px] m-auto max-w-sm items-center gap-1.5 pt-4">
                <Label htmlFor="email" className="py-3 !text-[16px]">
                  Password
                </Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="Enter Password"
                  className="w-full !rounded-[50px] !text-[16px] border-dazzle-dark"
                />
              </div>
              <div className="flex w-[300px] sm:w-[400px] m-auto max-w-sm items-center justify-between gap-0 pt-4 flex-row">
                <div className=" items-center space-x-2">
                  <Checkbox id="terms" className="border-dazzle-dark" />
                  <label
                    htmlFor="terms"
                    className=" text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Remember Me
                  </label>
                </div>
                <div>
                  <Link href="/login" className="text-[13px] underline">
                    Forget Password ?
                  </Link>
                </div>
              </div>
              <div className="flex w-[300px] sm:w-[400px] m-auto max-w-sm items-center justify-between gap-0 pt-4 flex-row">
                {" "}
                <Button className="bg-dazzle-dark text-white w-full !rounded-[50px]">
                  Login
                </Button>
              </div>
              <div className="py-4">
                <span className="h-[1px] w-full bg-black flex justify-center">
                  <p className="mt-[-13px] h-[30px] w-[30px] bg-white text-center text-black rounded-[50px]">
                    or
                  </p>
                </span>
              </div>
              <div className="py-4 flex items-center justify-center">
                <Link
                  href="/login"
                  className="text-[13px] underline text-black font-medium"
                >
                  Login With Mobile Number
                </Link>
              </div>
              <div className="py-4 flex items-center justify-center">
                <p>
                  Don't have an account?{" "}
                  <Link
                    href="/register"
                    className="text-[13px] underline text-black font-medium"
                  >
                    Click here to register
                  </Link>
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default Register;
