// File: components/steps/PersonalInfo.js
"use client"
import InputField from "../InputField"

export default function PersonalInfo({ formData, errors, handleChange }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      <InputField id="first_name" name="first_name" label="First Name"
        value={formData.first_name} onChange={handleChange} error={errors.first_name} required />
      <InputField id="last_name" name="last_name" label="Last Name"
        value={formData.last_name} onChange={handleChange} error={errors.last_name} required />
      <InputField id="phone" name="phone" label="Phone Number"
        value={formData.phone} onChange={handleChange} error={errors.phone} required />
      <InputField id="email" name="email" type="email" label="Email"
        value={formData.email} onChange={handleChange} error={errors.email} required />

      <InputField id="roll" name="roll" type="select" label="Role"
        value={formData.roll} onChange={handleChange} error={errors.roll} required
        options={[
          { value: "", label: "NONE" },
          { value: "admin", label: "Admin" },
          { value: "system_user", label: "System User" },
          { value: "super_admin", label: "Super Admin" }
        ]} />

      <InputField id="nid" name="nid" label="National ID Number"
        value={formData.nid} onChange={handleChange} error={errors.nid} required />
      <InputField id="password" name="password" type="password" label="Password"
        value={formData.password} onChange={handleChange} error={errors.password} required showPasswordToggle />
      <InputField id="c_password" name="c_password" type="password" label="Confirm Password"
        value={formData.c_password} onChange={handleChange} error={errors.c_password} required showPasswordToggle />
    </div>
  )
}
