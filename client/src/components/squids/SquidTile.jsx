import React from "react"

export const SquidTile = ({ squid }) => {
  const specialPowerElement = squid.specialPower ? <p>Special Power: {squid.specialPower}</p> : null

  return (
    <div className="squid-tile">
      <h3 className="squid-tile__header">Name: {squid.name}</h3>
      <h3>Species: {squid.species}</h3>
      {specialPowerElement}
      <p>Experience Points: {squid.experiencePoints}</p>
    </div>
  )
}
