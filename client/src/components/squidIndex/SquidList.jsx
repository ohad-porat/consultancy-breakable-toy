import React from "react"

import { useSquidList } from "../hooks/useSquidList"
import { SquidTile } from "./SquidTile"

import "../../style/index.pcss"

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
    <div className="page-body">
      <h2 className="index-header__text">Squid List</h2>
      {squidListQueryOutput}
    </div>
  )
}
