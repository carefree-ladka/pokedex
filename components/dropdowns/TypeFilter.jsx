import React from "react"
import Select from "./Select"

export default function TypeFilter({
  options,
  handleChange,
  typesForSmallDevices,
}) {
  return (
    <div>
      <Select
        placeholder="Type"
        options={options}
        handleChange={handleChange}
        typesForSmallDevices={typesForSmallDevices}
      />
    </div>
  )
}
