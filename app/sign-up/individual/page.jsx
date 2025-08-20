// "use client"
// import Link from "next/link"
// import BusinessInfo from "../../components/individual/BusinessInfo"
// import PersonalInfo from "../../components/individual/PersonalInfo"
// import StepIndicator from "../../components/StepIndicator"
// import { useMultiStepForm } from "../../hooks/useMultiStepForm"
// export default function IndividualPage() {
//   const steps = ["Business Info", "Personal Info"]

//   const { step, steps: stepsList, formData, errors, handleChange, next, back, validateStep } =
//     useMultiStepForm({
//       business_name: "", url: "", district: "", city: "", zip_code: "", address: "",
//       first_name: "", last_name: "", phone: "", email: "", roll: "", nid: "",
//       password: "", c_password: "",
//     }, steps)

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     if (validateStep()) {
//       alert("Form submitted successfully ✅ (frontend only)")
//       console.log(formData)
//     }
//   }

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
//       <div className="w-full max-w-3xl bg-white shadow-lg rounded-md py-8 px-8">
//         <h2 className="text-3xl font-bold text-center mb-2 text-black">Lets Get Started With</h2>
//         <h3 className="font-bold text-lg text-center mb-2">Individual</h3>
//         <p className="text-sm font-semibold text-gray-700 text-center mb-6">
//           Please provide the following information.
//         </p>

//         <StepIndicator steps={stepsList} currentStep={step} />

//         <form onSubmit={handleSubmit} className="space-y-5">
//           {step === 1 && <BusinessInfo formData={formData} errors={errors} handleChange={handleChange} />}
//           {step === 2 && <PersonalInfo formData={formData} errors={errors} handleChange={handleChange} />}

//           <div className="flex gap-x-3">
//             {step > 1 && (
//               <button type="button" onClick={back}
//                 className="w-full border border-[#688119] text-[#688119] py-3 rounded-sm hover:bg-[#688129] hover:text-white">
//                 BACK
//               </button>
//             )}
//             {step < steps.length && (
//               <button type="button" onClick={next}
//                 className="w-full bg-[#688119] text-white py-3 rounded-sm hover:bg-[#688129]">
//                 NEXT
//               </button>
//             )}
//             {step === steps.length && (
//               <button type="submit"
//                 className="w-full bg-[#688119] text-white py-3 rounded-sm hover:bg-[#688129]">
//                 SUBMIT
//               </button>
//             )}
//           </div>

//           <p className="text-sm text-center">
//             Already have an account?
//             <Link href="/sign-in" className="text-[#688129] hover:underline ml-1">Sign In</Link>
//           </p>
//         </form>
//       </div>
//     </div>
//   )
// }

import {individualFormSchema} from "../../helper/FormDataSchema"
import MultiStepForm from "../../components/MultiStepForm"


const initialData = {
  business_name: "", url: "", district: "", city: "", zip_code: "", address: "",
  first_name: "", last_name: "", phone: "", email: "", roll: "", nid: "",
  password: "", c_password: "",
}

export default function IndividualPage() {
  return <MultiStepForm formSchema={individualFormSchema} initialData={initialData} title="Individual" />
}
