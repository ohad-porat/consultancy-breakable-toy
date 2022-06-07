import React, { FC } from "react"

import { Link } from "react-router-dom"

import { Squid } from "../../types/Squid"

export const SquidTile: FC<{ squid: Squid }> = ({ squid }) => {
  const specialPowerElement = squid.specialPower ? <p>Special Power: {squid.specialPower}</p> : null

  return (
    <div className="squids-list__tile">
      <Link to={`/squids/${squid.id}`}>
        <h3 className="squids-list__tile-header">Name: {squid.name}</h3>
        <h3>Species: {squid.species}</h3>
        {specialPowerElement}
      </Link>
    </div>
  )
}
