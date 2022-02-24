import React from "react"

import { useSquidList } from "../hooks/useSquidList"
import { SquidTile } from "./SquidTile"

export const SquidList = () => {
  const squidListQuery = useSquidList()
  const squids = squidListQuery.data || []
  // eslint-disable-next-line no-nested-ternary
  const squidTiles = squidListQuery.isLoading
    ? "Loading..."
    : squidListQuery.isError
    ? squidListQuery.error.message
    : squids.map((squid) => <SquidTile key={squid.id} squid={squid} />)

  return (
    <>
      <h2>Squid List</h2>
      {squidTiles}
    </>
  )
}
