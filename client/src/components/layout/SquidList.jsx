import React, { useState, useEffect } from "react"

import { SquidTile } from "./SquidTile"

export const SquidList = () => {
  const [squids, setSquids] = useState([])

  const fetchSquids = async () => {
    try {
      const response = await fetch("api/v1/squids")
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      }
      const responseBody = await response.json()
      setSquids(responseBody.squids)
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`)
    }
  }

  useEffect(() => {
    fetchSquids()
  }, [])

  const squidTiles = squids.map((squid) => <SquidTile key={squid.id} squid={squid} />)

  return (
    <>
      <h2>Squid List</h2>
      {squidTiles}
    </>
  )
}
