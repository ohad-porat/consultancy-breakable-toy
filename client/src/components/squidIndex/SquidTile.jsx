import React from "react"

export const SquidTile = ({ squid }) => {
  const specialPowerElement = squid.specialPower ? <p>Special Power: {squid.specialPower}</p> : null
  const hrLineElement = squid.id === "1" ? "" : <hr />

  return (
    <div className="squid-tile">
      {hrLineElement}
      <h3 className="squid-tile__header">Name: {squid.name}</h3>
      <h3>Species: {squid.species}</h3>
      {specialPowerElement}
      <p>Experience Points: {squid.experiencePoints}</p>
    </div>
  )
}
