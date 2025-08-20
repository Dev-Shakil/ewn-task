"use client"
import Link from "next/link"
import StepIndicator from "./StepIndicator"
import DynamicForm from "./DynamicForm"
import useMultiStepForm from "../hooks/useMultiStepForm"
import { AiOutlineCloseSquare, AiOutlineLoading3Quarters } from "react-icons/ai"
import { useState } from "react"
import { useRouter } from "next/navigation"
export default function MultiStepForm({ formSchema, initialData, title = "Form" }) {
    const { step, steps, formData, errors, setFormData, handleChange, next, back, validateStep } =
        useMultiStepForm(initialData, formSchema)
    const [loading, setLoading] = useState(false)
    const [timeoutError, setTimeoutError] = useState("");
    const [agree, setAgree] = useState(false);
    const router = useRouter()
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (validateStep()) {
            setLoading(true)
            setTimeoutError("")
            const timeoutId = setTimeout(() => {
                setTimeoutError("timeout of 5000ms exceeded.")
            }, 5000)

            try {
                // Simulate async request (6s for testing)
                await new Promise((resolve) => setTimeout(resolve, 6000))
                setFormData(initialData)
                router.push('/sign-in')
            } finally {
                clearTimeout(timeoutId)
                setLoading(false)
            }
        }
    }

    return (
        <div className="flex py-8 items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-4xl bg-white shadow-lg rounded-md py-8 px-8">
                <h2 className="text-3xl font-bold text-center mb-2 text-black">Let's Get Started With</h2>
                <h3 className="font-bold text-lg text-center mb-2">{title}</h3>
                <p className="text-sm font-semibold text-gray-700 text-center mb-6">
                    Please provide the following information.
                </p>
                {timeoutError && (
                    <div className="flex items-center justify-between bg-red-100 text-red-500 text-sm font-medium p-3 rounded mb-4">
                        <p className=" flex-1">{timeoutError}</p>
                        <button
                            type="button"
                            onClick={() => setTimeoutError("")}
                            className="ml-3 text-red-600 hover:text-red-800"
                        >
                            <AiOutlineCloseSquare className="h-4 w-4" />
                        </button>
                    </div>
                )}
                <StepIndicator steps={steps.map(s => s.stepName)} currentStep={step} />

                <form onSubmit={handleSubmit} className="space-y-5">
                    <DynamicForm stepSchema={steps[step - 1]} formData={formData} errors={errors} handleChange={handleChange} />

                    {step === steps.length && (
                        <div className="flex items-center gap-2">
                            <div className="flex items-center">
                                <input
                                    id="agree"
                                    type="checkbox"
                                    checked={agree}
                                    onChange={(e) => setAgree(e.target.checked)}
                                    style={{ accentColor: "#688129" }}
                                    className="w-4 h-4 border border-[#688129] rounded bg-gray-50 focus:ring-3 focus:ring-[#688129]"
                                />
                                <label htmlFor="agree" className="ml-2 text-sm text-black font-medium">
                                    I agree with DAK Express
                                </label>
                            </div>
                            <Link href="#" className="text-sm font-medium text-[#688129] hover:underline">
                                terms & condition
                            </Link>
                        </div>
                    )}

                    <div className="flex gap-x-3">
                        {step > 1 && <button type="button" onClick={back} className="w-full border border-[#688119] text-[#688119] py-3 rounded-sm hover:bg-[#688129] hover:text-white">BACK</button>}
                        {step < steps.length && <button type="button" onClick={next} className="w-full bg-[#688119] text-white py-3 rounded-sm hover:bg-[#688129]">NEXT</button>}
                        {step === steps.length && (
                            <button
                                type="submit"
                                disabled={loading || !agree}
                                className={`w-full flex justify-center items-center gap-2 py-3 rounded-sm text-white transition
                                ${loading || !agree ? "bg-[#688129]/90 cursor-not-allowed" : "bg-[#688119] hover:bg-[#688129]"}`}
                            >
                                {loading ? (
                                    <>
                                        SUBMITTING...
                                        <AiOutlineLoading3Quarters className="animate-spin h-4 w-4 text-white" />
                                    </>
                                ) : (
                                    "SUBMIT"
                                )}
                            </button>
                        )}
                    </div>

                    <p className="text-sm text-center mt-2">
                        Already have an account? <Link href="/sign-in" className="text-[#688129] hover:underline">Sign In</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}