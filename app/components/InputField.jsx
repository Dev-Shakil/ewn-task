// "use client"
// import { useRef, useState } from "react"
// import { FaEye, FaEyeSlash } from "react-icons/fa"

// export default function InputField({
//   id,
//   name,
//   type = "text",
//   label,
//   value,
//   onChange,
//   error,
//   required = false,
//   showPasswordToggle = false,
//   options = [], // for select dropdown
// }) {
//   const [showPassword, setShowPassword] = useState(false)
//   const inputRef = useRef(null)

//   const togglePasswordVisibility = () => {
//     setShowPassword((prev) => !prev)
//     setTimeout(() => inputRef.current?.focus(), 0) // re-focus input
//   }

//   const actualType = showPasswordToggle
//     ? showPassword
//       ? "text"
//       : "password"
//     : type

//   return (
//     <div className="relative w-full">
//       {/* Render Select */}
//       {type === "select" ? (
//         <select
//           id={id}
//           name={name}
//           value={value}
//           onChange={onChange}
//           required={required}
//           className={`peer w-full border text-black rounded-sm px-3 py-3 outline-none transition-all
//             focus:border-indigo-600 ${error ? "border-red-500" : "border-gray-300"}`}
//         >
//           <option value="" hidden></option> 
//           {options.map((opt, idx) => (
//             <option key={idx} value={opt.value}>
//               {opt.label}
//             </option>
//           ))}
//         </select>
//       ) : (
//         // Render Input
//         <input
//           ref={inputRef}
//           id={id}
//           name={name}
//           type={actualType}
//           value={value}
//           onChange={onChange}
//           placeholder=" "
//           className={`peer w-full border text-black rounded-sm px-3 pt-2 pb-2 outline-none transition-all 
//             focus:border-indigo-600 ${error ? "border-red-500" : "border-gray-300"}`}
//         />
//       )}

//       {/* Floating Label */}
//       <label
//         htmlFor={id}
//         className={`absolute left-3 text-gray-500 transition-all bg-white px-1
//           ${value ? "text-xs -top-2" : "top-2 peer-focus:text-xs peer-focus:-top-2"}`}
//       >
//         {label} {required && <span className="text-red-600">*</span>}
//       </label>

//       {/* Show/Hide Password Icon */}
//       {showPasswordToggle && type === "password" && (
//         <button
//           type="button"
//           onClick={togglePasswordVisibility}
//           className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
//         >
//           {showPassword ? <FaEyeSlash /> : <FaEye />}
//         </button>
//       )}

//       {/* Error */}
//       {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
//     </div>
//   )
// }

"use client"
import { useRef, useState } from "react"
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
        <div className="flex">
          <select
            value={value?.split(" ")[0] || ""}
            onChange={(e) =>
              onChange({ target: { name, value: e.target.value + " " + (value?.split(" ")[1] || "") } })
            }
            className={`border border-gray-300 rounded-l px-2 py-2 text-sm`}
          >
            <option value="" hidden></option>
            {countries.map((c) => (
              <option key={c.code} value={c.dial_code}>
                {c.flag} {c.dial_code}
              </option>
            ))}
          </select>

          <input
            ref={inputRef}
            id={id}
            name={name}
            type="tel"
            value={value?.split(" ")[1] || ""}
            onChange={(e) =>
              onChange({ target: { name, value: (value?.split(" ")[0] || "") + " " + e.target.value } })
            }
            placeholder=" "
            className={`peer w-full border text-black rounded-r px-3 pt-2 pb-2 outline-none transition-all 
              focus:border-indigo-600 ${error ? "border-red-500" : "border-gray-300"}`}
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
