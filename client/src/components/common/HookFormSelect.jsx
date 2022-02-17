import React from "react"

import PropTypes from "prop-types"
import { Controller } from "react-hook-form"
import Select from "react-select"

export const HookFormSelect = ({
  name,
  id,
  control,
  placeholder,
  options,
  required,
  disabled = false,
  onChange,
} = {}) => (
  <Controller
    name={name}
    control={control}
    defaultValue=""
    rules={{ required: required ? "is required" : required }}
    render={({ onChange: hookOnChange, value }) => (
      <Select
        onChange={(val) => {
          hookOnChange(val.value)
          if (onChange) {
            onChange(val.value)
          }
        }}
        className="select"
        classNamePrefix="select"
        isDisabled={disabled}
        options={options}
        value={options.find((v) => v.value === value) || ""}
        placeholder={placeholder}
        inputId={id}
      />
    )}
  />
)

HookFormSelect.defaultProps = {
  id: undefined,
  placeholder: undefined,
  required: false,
  disabled: false,
  options: [],
  onChange: undefined,
}

HookFormSelect.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  control: PropTypes.object.isRequired,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    })
  ),
}
