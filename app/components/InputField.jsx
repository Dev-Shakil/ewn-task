"use client"
import { useRef, useState } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa"
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/material.css';
export default function InputField({
  id,
  name,
  type = "text",
  label,
  value,
  onChange,
  error,
  required = false,
  showPasswordToggle = false,
  options = [], // for select dropdown
}) {
  const [showPassword, setShowPassword] = useState(false)
  const inputRef = useRef(null)
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev)
    setTimeout(() => inputRef.current?.focus(), 0)
  }


  const actualType = showPasswordToggle
    ? showPassword
      ? "text"
      : "password"
    : type

  return (
    <div className="relative w-full">
      {/* Render Select */}
      {type === "select" ? (
        <select
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className={`peer w-full border text-black rounded-sm px-3 py-3 outline-none transition-all
            focus:border-indigo-600 ${error ? "border-red-500" : "border-gray-300"}`}
        >
          <option value="" hidden></option>
          {options.map((opt, idx) => (
            <option key={idx} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : type === "phone" ? (
        // Phone input with country code
        <PhoneInput
          country="bd"
          value={value || ""} // initial value
          onChange={(phone) => onChange({ target: { name, value: phone } })}
          inputClass="!w-full !py-2 !pl-14 !pr-3 !text-black !border !border-gray-300 !rounded-sm focus:!border-indigo-300"
          buttonClass="!border-gray-300 !rounded-l-sm"
          disableDropdown={false}
          countryCodeEditable={false}

        />

      ) : type === "file" ? (
        // File input
        <input
          ref={inputRef}
          id={id}
          name={name}
          type="file"
          onChange={(e) =>
            onChange({ target: { name, value: e.target.files[0] } })
          }
          required={required}
          className={`peer w-full border text-black rounded-sm px-3 pt-2 pb-2 outline-none transition-all 
            focus:border-indigo-600 ${error ? "border-red-500" : "border-gray-300"}`}
        />
      ) : (
        // Default Input
        <input
          ref={inputRef}
          id={id}
          name={name}
          type={actualType}
          value={value}
          onChange={onChange}
          placeholder=" "
          className={`peer w-full border text-black rounded-sm px-3 pt-2 pb-2 outline-none transition-all 
            focus:border-indigo-600 ${error ? "border-red-500" : "border-gray-300"}`}
        />
      )}

      {/* Floating Label */}
      {type !== "file" && type !== "phone" && (
        <label
          htmlFor={id}
          className={`absolute left-3 text-gray-500 transition-all bg-white px-1
            ${value ? "text-xs -top-2" : "top-2 peer-focus:text-xs peer-focus:-top-2"}`}
        >
          {label} {required && <span className="text-red-600">*</span>}
        </label>
      )}

      {/* Show/Hide Password Icon */}
      {showPasswordToggle && type === "password" && (
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      )}

      {/* Error */}
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  )
}
