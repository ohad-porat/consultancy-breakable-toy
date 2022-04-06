import React, { FC } from "react"

import { format, parseISO } from "date-fns"
import { useParams, useHistory } from "react-router-dom"

import { getZodiacSign } from "../../utils/getZodiacSign"
import { useSquidShow } from "../hooks/useSquidShow"
import "../../style/show.pcss"

interface Params {
  id: string
}

export const SquidShow: FC = () => {
  const { id } = useParams<Params>()
  const history = useHistory()
  const squidShowQuery = useSquidShow(id)
  const squid = squidShowQuery.data

  const goBackHandler = (): void => {
    history.goBack()
  }

  let formattedBirthday: string
  let zodiacSign: string

  if (squidShowQuery.isLoading) {
    return <h1>Hold your horses, your squid is coming</h1>
  }

  if (squid) {
    formattedBirthday = format(parseISO(squid.birthday), "MMMM do, yyyy")
    zodiacSign = getZodiacSign(squid.birthday)
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
  return <h1>Squid Not Found</h1>
}
