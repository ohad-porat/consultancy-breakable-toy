import React, { FC, ReactElement } from "react"

import { useLocation } from "react-router-dom"

import { useSquidList } from "../hooks/useSquidList"
import { Paginator } from "./Paginator"
import { SquidTile } from "./SquidTile"

import "../../style/index.pcss"

export const SquidList: FC = () => {
  const location = useLocation()
  const pageOffset = parseInt(new URLSearchParams(location.search).get("page"), 10) - 1 || 0
  const pageSize = 10
  const squidListQuery = useSquidList(pageOffset, pageSize)
  const squids = squidListQuery.data || { total: 0, results: [] }
  const lastPage = Math.ceil(squids.total / pageSize)

  let squidListQueryOutput: string | ReactElement[]
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
