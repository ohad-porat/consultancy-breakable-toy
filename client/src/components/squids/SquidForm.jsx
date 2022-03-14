/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import React, { useState } from "react"

import { useForm } from "react-hook-form"
import { useQueryClient, useMutation } from "react-query"

import "../../style/form.pcss"
import { ApiClient } from "../../backend/ApiClient"

export const SquidForm = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const [submitMessage, setSubmitMessage] = useState("")

  const resetForm = () => {
    reset({
      name: "",
      species: "",
      specialPower: "",
      experiencePoints: "",
    })
    setSubmitMessage("")
  }

  const addSquidMutation = useMutation((formPayload) => {
    ApiClient.post("/squids", formPayload)
  })

  const queryClient = useQueryClient()

  const postSquid = (data) => {
    addSquidMutation.mutate(data, {
      onSuccess: () => {
        setSubmitMessage("Squid Added Successfully")
      },
      onError: (error) => {
        // eslint-disable-next-line no-console
        console.log(error.response.data.message)
      },
      onSettled: () => queryClient.invalidateQueries("squids"),
    })
  }

  const [showForm, setShowForm] = useState("squids-form__hide")
  const toggleShowForm = () => {
    if (showForm === "squids-form__hide") {
      setShowForm("squid-form__show")
    } else {
      setShowForm("squids-form__hide")
    }
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
      <form onSubmit={handleSubmit(postSquid)} className={showForm}>
        <label htmlFor="name">
          Name:
          <input
            type="text"
            name="name"
            id="name"
            className="squids-form__input-field"
            {...register("name", { required: "Name is required" })}
          />
        </label>
        <p className="squids-form__error">{errors.name && errors.name.message}</p>
        <label htmlFor="species">
          Species:
          <input
            type="text"
            name="species"
            id="species"
            className="squids-form__input-field"
            {...register("species", { required: "Species is required" })}
          />
        </label>
        <p className="squids-form__error">{errors.species && errors.species.message}</p>
        <label htmlFor="specialPower">
          Special Power:
          <select
            type="text"
            name="specialPower"
            id="specialPower"
            className="squids-form__select-field"
            {...register("specialPower")}
          >
            <option value="none"> </option>
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
        <p className="squids-form__error">
          {errors.experiencePoints && errors.experiencePoints.message}
        </p>
        <input type="submit" value={submitButtonText} className="squids-form__submit-button" />
        <button type="button" className="squids-form__reset-button" onClick={resetForm}>
          Reset
        </button>
        <p>{submitMessage}</p>
      </form>
    </div>
  )
}
