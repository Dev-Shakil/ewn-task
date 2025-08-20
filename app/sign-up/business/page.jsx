import {businessFormSchema} from "../../helper/FormDataSchema"
import MultiStepForm from "../../components/MultiStepForm"


const initialData = {
  // Business Info
  business_name: "",
  url: "",
  trade_licence: null, // file field, better to set null
  district: "",
  city: "",
  zip_code: "",
  address: "",

  // Contact Person Info
  first_name: "",
  last_name: "",
  phone: "",
  email: "",
  roll: "",
  nid: "",
  password: "",
  c_password: "",
}


export default function BusinessSignUpPage() {
  return <MultiStepForm formSchema={businessFormSchema} initialData={initialData} title="Business" />
}
