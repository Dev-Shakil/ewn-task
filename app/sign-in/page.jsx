// "use client"
// import { useState } from "react"
// import Link from "next/link"
// import InputField from "../components/InputField"

// export default function SignInPage() {
//   const [formData, setFormData] = useState({ email: "", password: "" })
//   const [errors, setErrors] = useState({})

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value })
//     setErrors({ ...errors, [e.target.name]: "" })
//   }

//   const validate = () => {
//     const newErrors = {}
//     if (!formData.email) {
//       newErrors.email = "Email is required"
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = "Invalid email address"
//     }
//     if (!formData.password) {
//       newErrors.password = "Password is required"
//     } else if (formData.password.length < 6) {
//       newErrors.password = "Password must be at least 6 characters"
//     }

//     setErrors(newErrors)
//     return Object.keys(newErrors).length === 0
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     if (validate()) {
//       alert("Form submitted successfully ✅ (frontend only)")
//     }
//   }

//   return (
//     <div className="flex py-8 items-center justify-center bg-gray-100 px-4">
//       <div className="w-full max-w-lg bg-white shadow-lg rounded-md py-12 px-8">
//         <h2 className="text-3xl font-bold text-center mb-2 text-black">Sign In</h2>
//         <p className="text-sm font-semibold text-gray-700 text-center mb-6">
//           Fill in the fields below to sign in into your account.
//         </p>

//         <form onSubmit={handleSubmit} className="space-y-8">
//           {/* Reusable Email Input */}
//           <InputField
//             id="email"
//             name="email"
//             type="email"
//             label="Email"
//             value={formData.email}
//             onChange={handleChange}
//             error={errors.email}
//             required
//           />

//           {/* Reusable Password Input with Show/Hide */}
//           <InputField
//             id="password"
//             name="password"
//             type="password"
//             label="Password"
//             value={formData.password}
//             onChange={handleChange}
//             error={errors.password}
//             required
//             showPasswordToggle
//           />

//           {/* Remember + Forgot Password */}
//           <div className="flex items-center justify-between">
//             <div className="flex items-center">
//               <input
//                 id="remember"
//                 type="checkbox"
//                 style={{ accentColor: "#688129" }}
//                 className="w-4 h-4 border border-[#688129] rounded bg-gray-50 focus:ring-3 focus:ring-[#688129]"
//               />
//               <label htmlFor="remember" className="ml-2 text-sm text-[#688129] font-medium">
//                 Remember Me
//               </label>
//             </div>
//             <Link href="#" className="text-sm font-medium text-[#688129] hover:underline">
//               Forgot password?
//             </Link>
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full hover:bg-[#688129] cursor-pointer text-white text-sm py-3 rounded-sm bg-[#688119] transition"
//           >
//             SIGN IN
//           </button>

//           <p className="text-sm font-light text-center text-black">
//             Don’t have an account?{" "}
//             <Link href="/sign-up" className="font-medium text-[#688129] hover:underline">
//               Create An Account
//             </Link>
//           </p>
//         </form>
//       </div>
//     </div>
//   )
// }


"use client"
import { useState } from "react"
import Link from "next/link"
import { AiOutlineClose, AiOutlineLoading3Quarters } from "react-icons/ai"
import InputField from "../components/InputField"

export default function SignInPage() {
  const [formData, setFormData] = useState({ email: "", password: "" })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [timeoutError, setTimeoutError] = useState("")

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: "" })
    setTimeoutError("") // clear error if typing again
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.email) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address"
    }
    if (!formData.password) {
      newErrors.password = "Password is required"
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (validate()) {
      setLoading(true)
      setTimeoutError("") // reset old error

      // Start timeout watcher
      const timeoutId = setTimeout(() => {
        setTimeoutError("timeout of 5000ms exceeded.")
      }, 5000)

      try {
        // Simulate async request (6s for testing)
        await new Promise((resolve) => setTimeout(resolve, 6000))
        alert("Form submitted successfully ✅ (frontend only)")
      } finally {
        clearTimeout(timeoutId)
        setLoading(false)
      }
    }
  }

  return (
    <div className="flex py-8 items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-md py-12 px-8">
        <h2 className="text-3xl font-bold text-center mb-2 text-black">Sign In</h2>

        {/* Show timeout error if any */}


        <p className="text-sm font-semibold text-gray-700 text-center mb-6">
          Fill in the fields below to sign in into your account.
        </p>

        {timeoutError && (
          <div className="flex items-center justify-between bg-red-100 text-red-500 text-sm font-medium p-3 rounded mb-4">
            <p className=" flex-1">{timeoutError}</p>
            <button
              type="button"
              onClick={() => setTimeoutError("")}
              className="ml-3 text-red-600 hover:text-red-800"
            >
              <AiOutlineClose className="h-4 w-4" />
            </button>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Email Input */}
          <InputField
            id="email"
            name="email"
            type="email"
            label="Email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            required
          />

          {/* Password Input */}
          <InputField
            id="password"
            name="password"
            type="password"
            label="Password"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
            required
            showPasswordToggle
          />

          {/* Remember + Forgot Password */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember"
                type="checkbox"
                style={{ accentColor: "#688129" }}
                className="w-4 h-4 border border-[#688129] rounded bg-gray-50 focus:ring-3 focus:ring-[#688129]"
              />
              <label htmlFor="remember" className="ml-2 text-sm text-[#688129] font-medium">
                Remember Me
              </label>
            </div>
            <Link href="#" className="text-sm font-medium text-[#688129] hover:underline">
              Forgot password?
            </Link>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full flex justify-center items-center gap-2 cursor-pointer text-white text-sm py-3 rounded-sm transition ${loading ? "bg-[#688129]/90" : "bg-[#688119] hover:bg-[#688129]"
              }`}
          >
            {loading ? (
              <>
                SIGNING IN...
                <AiOutlineLoading3Quarters className="animate-spin h-4 w-4 text-white" />
              </>
            ) : (
              "SIGN IN"
            )}
          </button>

          <p className="text-sm font-light text-center text-black">
            Don’t have an account?{" "}
            <Link href="/sign-up" className="font-medium text-[#688129] hover:underline">
              Create An Account
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}
