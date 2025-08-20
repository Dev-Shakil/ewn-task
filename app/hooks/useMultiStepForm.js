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
