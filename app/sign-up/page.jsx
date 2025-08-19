import Link from 'next/link';
import React from 'react'
import { FaCircleUser } from "react-icons/fa6";
import { MdStorefront } from "react-icons/md";

const SignUpPage = () => {
  return (
    <div className="flex h-screen w-full flex-col bg-gray-100 items-center justify-center">
        <h2 className="text-black text-2xl font-medium">Choose Account Type</h2>
        <div className="flex space-x-5 mt-5">
          <div className="py-12 rounded-md  bg-white shadow-lg space-y-5 w-[320px] flex flex-col justify-center items-center">
            <FaCircleUser className="font-bold text-black text-5xl" />
            <h3 className="text-black font-bold text-xl">Individual</h3>
            <p className="text-black text-sm font-medium">For personal use(Regular courier service).</p>
            <Link href="sign-up/individual" className="px-4 font-medium py-2 border border-black text-black cursor-pointer text-sm rounded-sm">SIGN UP</Link>
          </div>
          <div className="py-12 rounded-md  bg-white border-[#688129] border shadow-lg space-y-5 w-[320px] flex flex-col justify-center items-center">
            <MdStorefront className="font-bold text-[#688129] text-5xl" />
            <h3 className="text-[#688129] font-bold text-xl">Business</h3>
            <p className="text-black text-sm font-medium">For business use.</p>
            <Link href="/sign-up/business" className="px-4 font-medium bg-[#688129] py-2 border border-[#688129] text-white cursor-pointer text-sm rounded-sm">SIGN UP</Link>
          </div>
        </div>
    </div>
  )
}

export default SignUpPage