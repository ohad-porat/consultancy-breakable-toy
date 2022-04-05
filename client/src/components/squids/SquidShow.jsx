import React from "react"

import { format, parseISO } from "date-fns"
import { useParams, useHistory } from "react-router-dom"

import { getZodiacSign } from "../../utils/getZodiacSign"
import { useSquidShow } from "../hooks/useSquidShow"
import "../../style/show.pcss"

export const SquidShow = () => {
  const { id } = useParams()
  const history = useHistory()
  const squidShowQuery = useSquidShow(id)
  const squid = squidShowQuery.data || {}

  const goBackHandler = () => {
    history.goBack()
  }

  const parsedDate = parseISO(squid.birthday)

  let formattedBirthday = ""
  let zodiacSign = ""
  if (squid.birthday) {
    formattedBirthday = format(parsedDate, "MMMM do, yyyy")
    zodiacSign = getZodiacSign(parsedDate)
  }

  return (
    <div className="squid-show">
      <h1 className="squid-show__header">{squid.name}</h1>
      <p className="squid-show__p">Species: {squid.species}</p>
      <p className="squid-show__p">Experience Points: {squid.experiencePoints}</p>
      <p className="squid-show__p">Birthday: {formattedBirthday}</p>
      <p className="squid-show__p">Zodiac Sign: {zodiacSign}</p>
      <p className="squid-show__p">Special Power: {squid.specialPower}</p>
      <button type="button" className="link" onClick={goBackHandler}>
        Back To Squid List
      </button>
    </div>
  )
}
