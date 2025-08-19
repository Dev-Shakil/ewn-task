"use client"
import { useState } from "react"
import Link from "next/link"
import InputField from "../components/InputField"

export default function SignInPage() {
  const [formData, setFormData] = useState({ email: "", password: "" })
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: "" })
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

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) {
      alert("Form submitted successfully ✅ (frontend only)")
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-md py-12 px-8">
        <h2 className="text-3xl font-bold text-center mb-2 text-black">Sign In</h2>
        <p className="text-sm font-semibold text-gray-700 text-center mb-6">
          Fill in the fields below to sign in into your account.
        </p>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Reusable Email Input */}
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

          {/* Reusable Password Input with Show/Hide */}
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
            className="w-full hover:bg-[#688129] cursor-pointer text-white text-sm py-3 rounded-sm bg-[#688119] transition"
          >
            SIGN IN
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
