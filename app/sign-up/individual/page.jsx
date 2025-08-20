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
