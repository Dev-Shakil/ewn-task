// "use client"
// import { useState } from "react"

// export const useMultiStepForm = (initialData, steps) => {
//   const [step, setStep] = useState(1)
//   const [formData, setFormData] = useState(initialData)
//   const [errors, setErrors] = useState({})

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value })
//     setErrors({ ...errors, [e.target.name]: "" })
//   }

//   const validateStep = () => {
//     const newErrors = {}

//     if (step === 1) {
//       if (!formData.business_name) newErrors.business_name = "Business name is required"
//       if (!formData.url) newErrors.url = "URL is required"
//       if (!formData.district) newErrors.district = "District is required"
//       if (!formData.city) newErrors.city = "City is required"
//       if (!formData.zip_code) newErrors.zip_code = "Zip Code is required"
//       if (!formData.address) newErrors.address = "Address is required"
//     }

//     if (step === 2) {
//       if (!formData.first_name) newErrors.first_name = "First name is required"
//       if (!formData.last_name) newErrors.last_name = "Last name is required"
//       if (!formData.phone) newErrors.phone = "Phone number is required"
//       if (!formData.email) newErrors.email = "Email is required"
//       if (!formData.roll) newErrors.roll = "Role is required"
//       if (!formData.nid) newErrors.nid = "National ID is required"
//       if (!formData.password) newErrors.password = "Password is required"
//       if (formData.password !== formData.c_password) newErrors.c_password = "Passwords must match"
//     }

//     setErrors(newErrors)
//     return Object.keys(newErrors).length === 0
//   }

//   const next = () => validateStep() && setStep((prev) => prev + 1)
//   const back = () => setStep((prev) => prev - 1)

//   return { step, steps, formData, errors, handleChange, next, back, validateStep }
// }

// "use client"
// import { useState } from "react"

// export default function useMultiStepForm(initialData, steps) {
//   const [step, setStep] = useState(1)
//   const [formData, setFormData] = useState(initialData)
//   const [errors, setErrors] = useState({})

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value })
//     setErrors({ ...errors, [e.target.name]: "" })
//   }

//   const validateStep = () => {
//     const newErrors = {}
//     const currentStep = steps[step - 1]

//     currentStep.rows.forEach((row) => {
//       row.fields.forEach((field) => {
//         if (field.required && !formData[field.name]) {
//           newErrors[field.name] = `${field.label} is required`
//         }
//         if (field.name === "c_password" && formData["password"] !== formData["c_password"]) {
//           newErrors["c_password"] = "Passwords must match"
//         }
//       })
//     })

//     setErrors(newErrors)
//     return Object.keys(newErrors).length === 0
//   }

//   const next = () => validateStep() && setStep((prev) => prev + 1)
//   const back = () => setStep((prev) => prev - 1)

//   return { step, steps, formData, errors, handleChange, next, back, validateStep }
// }

"use client"
import { useState } from "react"

export default function useMultiStepForm(initialData, schema) {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState(initialData)
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: "" })
  }

  const validateStep = () => {
    const newErrors = {}
    const currentStepFields = schema[step - 1].rows.flatMap(r => r.fields)

    currentStepFields.forEach(f => {
      if (f.required && !formData[f.name]) newErrors[f.name] = `${f.label} is required`
      if (f.name === "c_password" && formData.password !== formData.c_password) newErrors.c_password = "Passwords must match"
    })

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const next = () => validateStep() && setStep(prev => prev + 1)
  const back = () => setStep(prev => prev - 1)

  return { step, steps: schema, formData, errors, handleChange, next, back, validateStep }
}
