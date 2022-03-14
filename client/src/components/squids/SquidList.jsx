import React from "react"

import { useQueryClient } from "react-query"
import { useLocation } from "react-router-dom"

import { useSquidList } from "../hooks/useSquidList"
import { Paginator } from "./Paginator"
import { SquidForm } from "./SquidForm"
import { SquidTile } from "./SquidTile"

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
    squidListQueryOutput = squids.results.map((squid) => (
      <div key={squid.id}>
        <SquidTile squid={squid} />
      </div>
    ))
  }

  const queryClient = useQueryClient()
  const useSquidRefetch = () => {
    queryClient.invalidateQueries("squids")
  }

  return (
    <div className="squids-list">
      <h2 className="squids-list__header">Squid List</h2>
      <button type="button" className="squids-list__refresh-button" onClick={useSquidRefetch}>
        <i className="fa-solid fa-rotate fa-2x" />
      </button>
      <SquidForm />
      {squidListQueryOutput}
      <Paginator pageOffset={pageOffset} lastPage={lastPage} />
    </div>
  )
}
