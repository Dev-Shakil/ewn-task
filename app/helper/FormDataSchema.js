export const individualFormSchema = [
  {
    stepName: "Business Info",
    rows: [
      {
        grid: "grid-cols-1 md:grid-cols-2 gap-3",
        fields: [
          { name: "business_name", label: "Business Name", type: "text", required: true },
          { name: "url", label: "Website URL", type: "text", required: true },
        ]
      },
      {
        grid: "grid-cols-1 md:grid-cols-3 gap-3",
        fields: [
          { name: "district", label: "District / State", type: "text", required: true },
          { name: "city", label: "City / Town", type: "text", required: true },
          { name: "zip_code", label: "Postcode / Zipcode", type: "text", required: true },
        ]
      },
      {
        grid: "grid-cols-1",
        fields: [
          { name: "address", label: "Address", type: "text", required: true },
        ]
      }
    ]
  },
  {
    stepName: "Personal Info",
    rows: [
      {
        grid: "grid-cols-1 md:grid-cols-2 gap-3",
        fields: [
          { name: "first_name", label: "First Name", type: "text", required: true },
          { name: "last_name", label: "Last Name", type: "text", required: true },
          { name: "phone", label: "Phone Number", type: "phone", required: true },
          { name: "email", label: "Email", type: "email", required: true },
          { name: "roll", label: "Role", type: "select", required: true, options: [
              { value: "", label: "NONE" },
              { value: "admin", label: "Admin" },
              { value: "system_user", label: "System User" },
              { value: "super_admin", label: "Super Admin" }
          ] },
          { name: "nid", label: "National ID", type: "text", required: true },
          { name: "password", label: "Password", type: "password", required: true, showPasswordToggle: true },
          { name: "c_password", label: "Confirm Password", type: "password", required: true, showPasswordToggle: true },
        ]
      }
    ]
  }
]

export const businessFormSchema = [
  {
    stepName: "Business Info",
    rows: [
      {
        grid: "grid-cols-1 md:grid-cols-2 gap-3",
        fields: [
          { name: "business_name", label: "Business Name", type: "text", required: true },
          { name: "url", label: "Website URL", type: "text", required: true },
          { name: "trade_licence", label: "Trade Licence", type: "file", required: true },
          { name: "district", label: "District / State", type: "text", required: true },
          { name: "city", label: "City / Town", type: "text", required: true },
          { name: "zip_code", label: "Postcode / Zipcode", type: "text", required: true },
        ]
      },
      {
        grid: "grid-cols-1",
        fields: [
          { name: "address", label: "Address", type: "text", required: true },
        ]
      }
    ]
  },
  {
    stepName: "Contact Person Info",
    rows: [
      {
        grid: "grid-cols-1 md:grid-cols-2 gap-3",
        fields: [
          { name: "first_name", label: "First Name", type: "text", required: true },
          { name: "last_name", label: "Last Name", type: "text", required: true },
          { name: "phone", label: "Phone Number", type: "phone", required: true },
          { name: "email", label: "Email", type: "email", required: true },
          { name: "roll", label: "Role", type: "select", required: true, options: [
              { value: "", label: "NONE" },
              { value: "admin", label: "Admin" },
              { value: "system_user", label: "System User" },
              { value: "super_admin", label: "Super Admin" }
          ] },
          { name: "nid", label: "National ID", type: "text", required: true },
          { name: "password", label: "Password", type: "password", required: true, showPasswordToggle: true },
          { name: "c_password", label: "Confirm Password", type: "password", required: true, showPasswordToggle: true },
        ]
      }
    ]
  }
]
