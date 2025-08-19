import 'react-phone-input-2/lib/style.css'
import PhoneInput from 'react-phone-input-2'

export default function PhoneField({ value, onChange, error }) {
  return (
    <div className="flex flex-col w-full">
      <PhoneInput
        country={'bd'} // default Bangladesh 🇧🇩
        value={value}
        onChange={onChange}
        inputStyle={{
          width: "100%",
          border: error ? "1px solid red" : "1px solid #ccc",
          borderRadius: "4px",
          padding: "8px"
        }}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  )
}
