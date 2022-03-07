import React from "react"

import { useSquidList } from "../hooks/useSquidList"
import { SquidTile } from "./SquidTile"

export const SquidList = () => {
  const squidListQuery = useSquidList()
  const squids = squidListQuery.data || []

  let squidListQueryOutput = ""
  if (squidListQuery.isLoading) {
    squidListQueryOutput = "Loading..."
  } else if (squidListQuery.isError) {
    squidListQueryOutput = squidListQuery.error.message
  } else {
    squidListQueryOutput = squids.map((squid) => <SquidTile key={squid.id} squid={squid} />)
  }

  return (
    <>
      <h2>Squid List</h2>
      {squidListQueryOutput}
    </>
  )
}
