"use client"

import InputField from "./InputField"


export default function DynamicForm({ stepSchema, formData, errors, handleChange }) {
  return (
    <>
      {stepSchema.rows.map((row, idx) => (
        <div key={idx} className={`grid ${row.grid}`}>
          {row.fields.map((field) => (
            <InputField
              key={field.name}
              id={field.name}
              name={field.name}
              type={field.type || "text"}
              label={field.label}
              value={formData[field.name]}
              onChange={handleChange}
              error={errors[field.name]}
              required={field.required}
              options={field.options || []}
              showPasswordToggle={field.showPasswordToggle || false}
            />
          ))}
        </div>
      ))}
    </>
  )
}
