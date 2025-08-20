"use client"
import { useEffect, useRef, useState } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa"

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
  countries = [], // for phone codes
}) {
  const [showPassword, setShowPassword] = useState(false)
  const inputRef = useRef(null)
  const [selectedCountry, setSelectedCountry] = useState(null)

  // Initialize default country code only for phone inputs
  useEffect(() => {
    if (type !== "phone") return

    const val = typeof value === "string" ? value : ""

    if (!val && countries.length > 0) {
      const defaultCountry = countries.find((c) => c.dial_code === "+880") || countries[0]
      setSelectedCountry(defaultCountry)
      onChange({ target: { name, value: defaultCountry.dial_code + " " } })
    } else if (val) {
      const code = val.split(" ")[0]
      const country = countries.find((c) => c.dial_code === code)
      setSelectedCountry(country)
    }
  }, [countries, type])



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
        // <div className={`flex rounded focus:border-indigo-600 border ${error ? "border-red-500" : "border-gray-300"}`}>
        //   <select
        //     value={selectedCountry?.dial_code || ""}
        //     className="outline-none focus:outline-none px-2 py-2 text-sm"
        // onChange={(e) => {
        //   const code = e.target.value;
        //   const number = value?.split(" ")[1] || "";
        //   onChange({ target: { name, value: code + " " + number } });
        //   const country = countries.find((c) => c.dial_code === code);
        //   setSelectedCountry(country);

        // }}
        //   >
        //     <option value="+880" selected>BD</option>
        //     {countries.map((c) => (
        //       <option key={c.code} value={c.dial_code}>
        //         {c.flag} {c.dial_code}
        //       </option>
        //     ))}
        //   </select>

        //   <input
        //     ref={inputRef}
        //     id={id}
        //     name={name}
        //     type="tel"
        //   value={value?.split(" ")[1] || ""} // Only the number part
        // onChange={(e) =>
        //   onChange({
        //     target: { name, value: (selectedCountry?.dial_code || "+880") + " " + e.target.value },
        //   })
        // }
        //     placeholder=" "
        //     className={`peer w-full text-black rounded-r px-3 pt-2 pb-2 outline-none transition-all 
        //        `}
        //   />
        // </div>
        <div className={`flex rounded border focus-within:border-indigo-600 ${error ? "border-red-500" : "border-gray-300"}`}>
          {/* Country Code Select */}
          <select
            value={selectedCountry?.dial_code || ""}
            onChange={(e) => {
              const code = e.target.value
              const number = value?.split(" ")[1] || ""
              onChange({ target: { name, value: code + " " + number } })
              const country = countries.find((c) => c.dial_code === code)
              setSelectedCountry(country)
            }}
            className="px-2 py-2 text-sm rounded-l outline-none"
          >
            {countries.map((c) => (
              <option key={c.code} value={c.dial_code}>
                {c.flag} {c.dial_code}
              </option>
            ))}
          </select>

          {/* Phone Number Input */}
          <input
            ref={inputRef}
            id={id}
            name={name}
            type="tel"
            value={value?.split(" ")[1] || ""} // only the number part
            onChange={(e) =>
              onChange({
                target: { name, value: (selectedCountry?.dial_code || "+880") + " " + e.target.value },
              })
            }
            placeholder="123456789"
            className="w-full px-3 py-2 rounded-r outline-none text-black"
          />
        </div>
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
      {type !== "file" && (
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
