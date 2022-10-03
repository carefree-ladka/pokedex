import React from "react"
import Select from "./Select"

export default function GenderFilter({ options, handleChange }) {
  return (
    <div className="sm:pl-2">
      <Select
        placeholder="Gender"
        options={options}
        handleChange={handleChange}
      />
    </div>
  )
}
