"use client"

import InputField from "../InputField"

export default function BusinessInfo({ formData, errors, handleChange }) {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <InputField id="business_name" name="business_name" label="Business Name"
          value={formData.business_name} onChange={handleChange} error={errors.business_name} required />
        <InputField id="url" name="url" label="Website or Social Media URL"
          value={formData.url} onChange={handleChange} error={errors.url} required />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <InputField id="district" name="district" label="District / State"
          value={formData.district} onChange={handleChange} error={errors.district} required />
        <InputField id="city" name="city" label="City / Town"
          value={formData.city} onChange={handleChange} error={errors.city} required />
        <InputField id="zip_code" name="zip_code" label="Postcode / Zipcode"
          value={formData.zip_code} onChange={handleChange} error={errors.zip_code} required />
      </div>

      <InputField id="address" name="address" label="Address"
        value={formData.address} onChange={handleChange} error={errors.address} required />
    </div>
  )
}
