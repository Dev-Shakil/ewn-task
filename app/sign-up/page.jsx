// import Link from 'next/link';
// import React from 'react'
// import { FaCircleUser } from "react-icons/fa6";
// import { MdStorefront } from "react-icons/md";

// const SignUpPage = () => {
//   return (
//     <div className="flex h-[90vh] w-full flex-col bg-gray-100 items-center justify-center">
//         <h2 className="text-black text-2xl font-medium">Choose Account Type</h2>
//         <div className="flex space-x-5 mt-5">
//           <div className="py-12 rounded-md  bg-white shadow-lg space-y-5 w-[320px] flex flex-col justify-center items-center">
//             <FaCircleUser className="font-bold text-black text-5xl" />
//             <h3 className="text-black font-bold text-xl">Individual</h3>
//             <p className="text-black text-sm font-medium">For personal use(Regular courier service).</p>
//             <Link href="sign-up/individual" className="px-4 font-medium py-2 border border-black text-black cursor-pointer text-sm rounded-sm">SIGN UP</Link>
//           </div>
//           <div className="py-12 rounded-md  bg-white border-[#688129] border shadow-lg space-y-5 w-[320px] flex flex-col justify-center items-center">
//             <MdStorefront className="font-bold text-[#688129] text-5xl" />
//             <h3 className="text-[#688129] font-bold text-xl">Business</h3>
//             <p className="text-black text-sm font-medium">For business use.</p>
//             <Link href="/sign-up/business" className="px-4 font-medium bg-[#688129] py-2 border border-[#688129] text-white cursor-pointer text-sm rounded-sm">SIGN UP</Link>
//           </div>
//         </div>
//     </div>
//   )
// }

// export default SignUpPage

import Link from 'next/link'
import React from 'react'
import { FaCircleUser } from "react-icons/fa6"
import { MdStorefront } from "react-icons/md"

const SignUpPage = () => {
  return (
    <div className="flex h-[90vh] w-full flex-col bg-gray-100 items-center justify-center px-4">
      <h2 className="text-black text-2xl font-medium text-center">
        Choose Account Type
      </h2>

      {/* Wrapper for cards */}
      <div className="flex flex-col md:flex-row gap-5 mt-5 w-full max-w-4xl items-center justify-center">
        
        {/* Individual Card */}
        <div className="py-5 md:py-12 px-6 rounded-md bg-white shadow-lg space-y-5 w-full sm:w-[250px] md:w-[320px] flex flex-col justify-center items-center text-center">
          <FaCircleUser className="font-bold text-black text-3xl md:text-5xl" />
          <h3 className="text-black font-bold text-lg md:text-xl">Individual</h3>
          <p className="text-black text-sm font-medium">
            For personal use (Regular courier service).
          </p>
          <Link
            href="/sign-up/individual"
            className="px-4 font-medium py-2 border border-black text-black cursor-pointer text-sm rounded-sm hover:bg-black hover:text-white transition"
          >
            SIGN UP
          </Link>
        </div>

        {/* Business Card */}
        <div className="py-5 md:py-12 px-6 rounded-md bg-white border-[#688129] border shadow-lg space-y-5 w-full sm:w-[250px] md:w-[320px] flex flex-col justify-center items-center text-center">
          <MdStorefront className="font-bold text-[#688129] text-3xl md:text-5xl" />
          <h3 className="text-[#688129] font-bold text-lg md:text-xl">Business</h3>
          <p className="text-black text-sm font-medium">For business use.</p>
          <Link
            href="/sign-up/business"
            className="px-4 font-medium bg-[#688129] py-2 border border-[#688129] text-white cursor-pointer text-sm rounded-sm hover:bg-[#4d611f] transition"
          >
            SIGN UP
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SignUpPage
