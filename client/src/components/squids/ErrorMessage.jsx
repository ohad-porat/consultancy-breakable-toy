import React from "react"

export const ErrorMessage = ({ errors }) => (
  <p className="squids-form__error">{errors && errors.message}</p>
)
