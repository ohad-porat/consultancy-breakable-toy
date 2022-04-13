/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import React, { useState } from "react"

import { useForm } from "react-hook-form"

import "../../style/form.pcss"
import { useSquidMutation } from "../hooks/useSquidMutation"
import { ErrorMessage } from "./ErrorMessage"

export const SquidForm = ({ squidListQuery }) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      species: "",
      specialPower: "",
      experiencePoints: 0,
    },
  })
  const [submitMessage, setSubmitMessage] = useState("")
  // debugger
  const resetForm = () => {
    reset()
    setSubmitMessage("")
  }

  const addSquidMutation = useSquidMutation(squidListQuery, setSubmitMessage)

  const postSquid = (data) => {
    addSquidMutation.mutate(data)
  }

  const [showForm, setShowForm] = useState(false)
  const toggleShowForm = () => {
    if (showForm === false) {
      setShowForm(true)
    } else {
      setShowForm(false)
    }
  }

  let formVisibility = "squids-form__hide"
  if (showForm === true) {
    formVisibility = "squids-form__show"
  } else {
    formVisibility = "squids-form__hide"
  }

  let submitButtonText = "Add Squid"
  if (addSquidMutation.isLoading) {
    submitButtonText = "Saving..."
  } else if (addSquidMutation.isError) {
    submitButtonText = "Error!"
  } else {
    submitButtonText = "Add Squid"
  }

  return (
    <div className="squid-form">
      <h1
        role="button"
        className="squids-form__header"
        onClick={toggleShowForm}
        onKeyDown={toggleShowForm}
      >
        Add a Squid
      </h1>
      <form onSubmit={handleSubmit(postSquid)} className={formVisibility}>
        <label htmlFor="name">
          Name:
          <input
            type="text"
            id="name"
            className="squids-form__input-field"
            {...register("name", { required: "Name is required" })}
          />
        </label>
        <ErrorMessage errors={errors?.name} />
        <label htmlFor="species">
          Species:
          <input
            type="text"
            id="species"
            className="squids-form__input-field"
            {...register("species", { required: "Species is required" })}
          />
        </label>
        <ErrorMessage errors={errors?.species} />
        <label htmlFor="specialPower">
          Special Power:
          <select
            type="text"
            id="specialPower"
            className="squids-form__select-field"
            {...register("specialPower")}
          >
            <option value=""> </option>
            <option value="ink">Ink</option>
            <option value="camouflage">Camouflage</option>
            <option value="bioluminescence">Bioluminescence</option>
            <option value="change color">Change color</option>
          </select>
        </label>
        <br />
        <label htmlFor="experiencePoints">
          Experience Points:
          <input
            type="number"
            id="experiencePoints"
            className="squids-form__input-field"
            {...register("experiencePoints", { required: "Experience Points is required" })}
          />
        </label>
        <ErrorMessage errors={errors?.experiencePoints} />
        <input type="submit" value={submitButtonText} className="squids-form__submit-button" />
        <button type="button" className="squids-form__reset-button" onClick={resetForm}>
          Reset
        </button>
        <p>{submitMessage}</p>
      </form>
    </div>
  )
}
