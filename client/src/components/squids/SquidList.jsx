import React, { useState } from "react"

import { useSquidList } from "../hooks/useSquidList"
import { SquidTile } from "./SquidTile"

import "../../style/index.pcss"

export const SquidList = () => {
  const [pageOffset, setPage] = useState(0)
  const pageSize = 3
  const squidListQuery = useSquidList(pageOffset, pageSize)
  const squids = squidListQuery.data || []
  const lastPage = Math.floor(squids.total / pageSize)

  let squidListQueryOutput = ""
  if (squidListQuery.isLoading) {
    squidListQueryOutput = "Loading..."
  } else if (squidListQuery.isError) {
    squidListQueryOutput = squidListQuery.error.message
  } else {
    squidListQueryOutput = squids.results.map((squid, index) => {
      let hrElement = ""
      if (index > 0) {
        hrElement = <hr />
      }
      return (
        <div key={squid.id}>
          {hrElement}
          <SquidTile squid={squid} />
        </div>
      )
    })
  }

  return (
    <div className="page-body">
      <h2 className="index-header__text">Squid List</h2>
      {squidListQueryOutput}
      <button
        type="button"
        onClick={() => setPage((current) => current - 1)}
        disabled={pageOffset === 0}
      >
        Previous
      </button>
      <button
        type="button"
        onClick={() => setPage((current) => current + 1)}
        disabled={pageOffset + 1 === lastPage}
      >
        Next
      </button>
      <span>
        Current Page: {pageOffset + 1} {squidListQuery.isFetching ? "..." : ""}
      </span>
    </div>
  )
}
