"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import registerBg from "../assets/images/register-bg.jpg";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Heading from "../components/Heading";
import Link from "next/link";
import { useToast } from "@/hooks/use-toast"
import { postData } from "@/app/api/main"; // Reusable API utility
function Register() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    nationality: "",
    userType:"agent"
    
  });
const [check, setCheckbox] = useState(true);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  // Validate form data
  const validateForm = () => {
    const errors = {};
    if (!formData.fullName.trim()) errors.fullName = "Full name is required.";
    if (!formData.mobileNumber) errors.phone = "Phone number is required.";
    if (!formData.email) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid.";
    }
    if (!formData.password) {
      errors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters.";
    }
    if (formData.confirmPassword !== formData.password) {
      errors.confirmPassword = "Passwords do not match.";
    }
    if (!formData.nationality.trim()) {
      errors.nationality = "Nationality is required.";
    }
    if (!formData.termsAgreed) {
    //  errors.termsAgreed = "You must agree to the terms.";
    }
    return errors;
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle phone input changes
  const handlePhoneChange = (mobileNumber) => {
    setFormData({ ...formData, mobileNumber });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);
    delete formData.termsAgreed;
    if (Object.keys(validationErrors).length === 0) {
    

   //setIsSubmitting(true);
      try {
        const response = await postData("/auth/signup", formData); // API endpoint
        console.log("API Response:", response);
        toast({
          description:  `Hi ${formData.fullName}, Your Account is created sucessfully`,
          variant: "sucess",
          title: "congratulations!",
      
      
        }) 
      } catch (error) {
        toast({
          description:  error.response.data.message,
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
      
      
        }) 
      } finally {
       // setIsSubmitting(false);
      }
    }
  };

  // useEffect to handle side effects after form submission
  useEffect(() => {
    if (formSubmitted) {
      console.log("Form Data Submitted:", formData);

      // Simulate API call
      setTimeout(() => {
        alert("Form submitted successfully!");
        setFormSubmitted(false);
      }, 1000);
    }
  }, [formSubmitted]);
function handleCheckbox() {
  setCheckbox(!check)
}
  return (
    <div className="flex justify-between lg:h-[100vh] flex-col lg:flex-row ">
      <div className="w-full lg:w-1/2 overflow-hidden">
        <Image
          className="w-full h-[120px]  lg:h-[100%] object-cover"
          src={registerBg}
          alt="Register Background"
        />
      </div>
      <div className="w-full py-5 lg:w-1/2 flex bg-dazzle-primary items-center justify-center">
        <form className="flex flex-col px-6" onSubmit={handleSubmit}>
          <Heading level={1} className="mb-4">
            Register
          </Heading>
    
          <div className="flex flex-row gap-2 register-phone-no w-[95%]">
                <div className="grid w-[100%] sm:w-1/2 m-auto max-w-sm items-center gap-1.5 pt-4 relative">
                  <Label htmlFor="fullName" className="py-3 !text-[16px]">
                    Full Name*
                  </Label>
                  <Input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter Your Name"
                    className="w-full !rounded-[50px] !text-[16px] !border-dazzle-dark"
                  />
                  {errors.fullName && <p className="text-red-500 text-sm absolute left-0 bottom-[-20px]">{errors.fullName}</p>}
                </div>
                <div className="grid w-[100%] sm:w-1/2 m-auto max-w-sm items-center gap-1.5 pt-4 relative">
                  <Label htmlFor="phone" className="py-3 !text-[16px]">
                    Phone
                  </Label>
                  <PhoneInput className="mt-[-10px]"
                    country={"kw"}
                    enableSearch={true}
                    value={formData.mobileNumber}
                    onChange={handlePhoneChange}
                  />
                  {errors.phone && <p className="text-red-500 text-sm absolute left-0 bottom-[-20px]">{errors.phone}</p>}
                </div>
              </div>
              <div className="grid w-[100%] m-auto items-center gap-x-2 pt-4 relative">
                <Label htmlFor="email" className="py-3 !text-[16px]">
                  Email*
                </Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter Your Email"
                  className="w-full !rounded-[50px] !text-[16px] !border-dazzle-dark"
                />
                {errors.email && <p className="text-red-500 text-sm absolute left-0 bottom-[-20px]">{errors.email}</p>}
              </div>
              <div className="flex flex-row gap-2 register-phone-no w-[95%]">
                <div className="grid w-[100%] sm:w-1/2 m-auto max-w-sm items-center gap-1.5 pt-4 relative">
                  <Label htmlFor="password" className="py-3 !text-[16px]">
                    Password*
                  </Label>
                  <Input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter Password"
                    className="w-full !rounded-[50px] !text-[16px] !border-dazzle-dark"
                  />
                  {errors.password && <p className="text-red-500 text-sm absolute left-0 bottom-[-20px]">{errors.password}</p>}
                </div>
                <div className="grid w-[100%] sm:w-1/2 m-auto max-w-sm items-center gap-1.5 pt-4 relative">
                  <Label
                    htmlFor="confirmPassword"
                    className="py-3 !text-[16px]"
                  >
                    Confirm Password*
                  </Label>
                  <Input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm Password"
                    className="w-full !rounded-[50px] !text-[16px] !border-dazzle-dark"
                  />
                  {errors.confirmPassword && <p className="text-red-500 text-sm absolute left-0 bottom-[-20px]">{errors.confirmPassword}</p>}
                </div>
              </div>
              <div className="grid w-[100%] m-auto items-center gap-x-2 pt-4 mb-4 relative">
                <Label htmlFor="nationality" className="py-3 !text-[16px]">
                  Nationality*
                </Label>
                <Input
                  type="text"
                  id="nationality"
                  name="nationality"
                  value={formData.nationality}
                  onChange={handleChange}
                  placeholder="Enter Your Nationality"
                  className="w-full !rounded-[50px] !text-[16px] !border-dazzle-dark"
                />
                {errors.nationality && <p className="text-red-500 text-sm absolute left-0 bottom-[-20px]">{errors.nationality}</p>}
              </div>
              <div className="flex w-[300px] sm:w-full m-auto items-center justify-between gap-0 pt-4 flex-row relative">
                <div className="items-center space-x-2 relative mb-4">
                  <input
                    type="checkbox"
                    id="terms"
                    name="termsAgreed"
                    checked={!check}
                    onChange={handleCheckbox}
                    className="border-dazzle-dark"
                  />
                  <label
                    htmlFor="terms"
                    className="text-sm text-[#909090] font-medium"
                  >
                    I agree to the{" "}
                    <Link href="/terms" className="underline text-black">
                      Terms and Conditions
                    </Link>{" "}
                    and the{" "}
                    <Link href="/privacy" className="underline text-black">
                      Privacy Policy.
                    </Link>
                  </label>
                  
                </div>
              </div>
              <div className="flex w-[300px] sm:w-full m-auto items-center justify-between gap-0 pt-4 flex-row">
                <Button type="submit" disabled={check}  className="bg-dazzle-dark text-white w-full !rounded-[50px]">
                  Register
                </Button>
              </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
