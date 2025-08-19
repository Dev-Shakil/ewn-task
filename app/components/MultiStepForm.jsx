"use client"
import { useState } from "react"

import Link from "next/link"
import StepIndicator from "./StepIndicator"
import DynamicForm from "./DynamicForm"
import useMultiStepForm from "../hooks/useMultiStepForm"
export default function MultiStepForm({ formSchema, initialData, title = "Form" }) {
  const { step, steps, formData, errors, handleChange, next, back, validateStep } =
    useMultiStepForm(initialData, formSchema)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateStep()) alert("Form submitted successfully ✅ (frontend only)")
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-md py-8 px-8">
        <h2 className="text-3xl font-bold text-center mb-2 text-black">Let's Get Started With</h2>
        <h3 className="font-bold text-lg text-center mb-2">{title}</h3>
        <p className="text-sm font-semibold text-gray-700 text-center mb-6">
          Please provide the following information.
        </p>

        <StepIndicator steps={steps.map(s => s.stepName)} currentStep={step} />

        <form onSubmit={handleSubmit} className="space-y-5">
          <DynamicForm stepSchema={steps[step - 1]} formData={formData} errors={errors} handleChange={handleChange} />

          <div className="flex gap-x-3">
            {step > 1 && <button type="button" onClick={back} className="w-full border border-[#688119] text-[#688119] py-3 rounded-sm hover:bg-[#688129] hover:text-white">BACK</button>}
            {step < steps.length && <button type="button" onClick={next} className="w-full bg-[#688119] text-white py-3 rounded-sm hover:bg-[#688129]">NEXT</button>}
            {step === steps.length && <button type="submit" className="w-full bg-[#688119] text-white py-3 rounded-sm hover:bg-[#688129]">SUBMIT</button>}
          </div>

          <p className="text-sm text-center mt-2">
            Already have an account? <Link href="/sign-in" className="text-[#688129] hover:underline">Sign In</Link>
          </p>
        </form>
      </div>
    </div>
  )
}
