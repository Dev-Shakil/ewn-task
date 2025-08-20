"use client"
import { TiTick } from "react-icons/ti"

export default function StepIndicator({ steps, currentStep }) {
  return (
    <div className="flex justify-center items-center mb-4">
      <div className="flex items-center w-full max-w-xl">
        {steps.map((label, index) => {
          const stepNumber = index + 1
          return (
            <div key={index} className="flex items-center w-full">
              {/* Step Circle + Label */}
              <div className="flex flex-col items-center relative">
                <div
                  className={`w-5 h-5 flex items-center justify-center rounded-full text-sm font-medium
                  ${currentStep >= stepNumber ? "bg-[#688119] text-white" : "bg-gray-300 text-gray-600"}`}
                >
                  {currentStep > stepNumber ? <TiTick /> : stepNumber}
                </div>
                <p className="mt-2 text-sm font-medium text-gray-700">{label}</p>
              </div>

              {/* Line (except last step) */}
              {index < steps.length - 1 && (
                <div
                  className={`flex-1 h-[2px] md:w-[390px] w-[200px] ${currentStep > stepNumber ? "bg-[#688119]" : "bg-gray-300"
                    }`}
                />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
