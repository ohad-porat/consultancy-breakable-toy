import React, { useState } from "react"

import { useSquidList } from "../hooks/useSquidList"
import { SquidTile } from "./SquidTile"

import "../../style/index.pcss"

export const SquidList = (props) => {
  const {
    location: { search },
  } = props

  const pageNumberQueryString = parseInt(new URLSearchParams(search).get("page"), 10)

  const [pageOffset, setPage] = useState(pageNumberQueryString - 1 || 0)
  const pageSize = 10
  const squidListQuery = useSquidList(pageOffset, pageSize)
  const squids = squidListQuery.data || []
  const lastPage = Math.ceil(squids.total / pageSize)

  let firstPageOffset
  let lastPageOffset
  const pageNumberButtons = []

  if (pageOffset < 3) {
    firstPageOffset = 0
    lastPageOffset = 5
  } else if (pageOffset + 3 >= lastPage) {
    firstPageOffset = lastPage - 5
    lastPageOffset = lastPage
  } else {
    firstPageOffset = pageOffset - 2
    lastPageOffset = pageOffset + 3
  }

  for (let i = firstPageOffset; i < lastPageOffset; i += 1) {
    const pageNumberClass = i === pageOffset ? "current-page-number" : "page-number"
    const buttonComponent = (
      <button key={i} type="button" onClick={() => setPage(i)}>
        <span className={pageNumberClass}>{i + 1}</span>
      </button>
    )
    pageNumberButtons.push(buttonComponent)
  }

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
    <div className="page-body">
      <h2 className="index-header__text">Squid List</h2>
      {squidListQueryOutput}
      <div className="pagination-buttons">
        <button
          type="button"
          className="scroll-button"
          onClick={() => setPage(0)}
          disabled={pageOffset === 0}
        >
          <i className="fa-solid fa-angles-left" />
        </button>
        <button
          type="button"
          className="scroll-button"
          onClick={() => setPage((current) => current - 1)}
          disabled={pageOffset === 0}
        >
          <i className="fa-solid fa-angle-left" />
        </button>
        {pageNumberButtons}
        <button
          type="button"
          className="scroll-button"
          onClick={() => setPage((current) => current + 1)}
          disabled={pageOffset + 1 === lastPage}
        >
          <i className="fa-solid fa-angle-right" />
        </button>
        <button
          type="button"
          className="scroll-button"
          onClick={() => setPage(lastPage - 1)}
          disabled={pageOffset + 1 === lastPage}
        >
          <i className="fa-solid fa-angles-right" />
        </button>
      </div>
    </div>
  )
}
