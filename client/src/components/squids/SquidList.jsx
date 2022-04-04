import React from "react"

import { useLocation } from "react-router-dom"

import { useSquidList } from "../hooks/useSquidList"
import { SquidTile } from "./SquidTile"
import { Paginator } from "./Paginator"

import "../../style/index.pcss"

export const SquidList = () => {
  const location = useLocation()
  const pageOffset = parseInt(new URLSearchParams(location.search).get("page"), 10) - 1 || 0
  const pageSize = 10
  const squidListQuery = useSquidList(pageOffset, pageSize)
  const squids = squidListQuery.data || []
  const lastPage = Math.ceil(squids.total / pageSize)

  let squidListQueryOutput = ""
  if (squidListQuery.isLoading) {
    squidListQueryOutput = "Loading..."
  } else if (squidListQuery.isError) {
    squidListQueryOutput = squidListQuery.error.message
  } else {
    squidListQueryOutput = squids.results.map((squid, index) => {
      const hrElement = index > 0 ? <hr /> : ""
      return (
        <div key={squid.id}>
          {hrElement}
          <SquidTile squid={squid} />
        </div>
      )
    })
  }

  return (
    <div className="squids-list">
      <h2 className="squids-list__header">Squid List</h2>
      {squidListQueryOutput}
      <Paginator pageOffset={pageOffset} lastPage={lastPage} />
    </div>
  )
}
