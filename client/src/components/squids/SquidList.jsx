import React from "react"

import { Link } from "react-router-dom"

import { useSquidList } from "../hooks/useSquidList"
import { SquidTile } from "./SquidTile"

import "../../style/index.pcss"

export const SquidList = (props) => {
  const {
    location: { search },
  } = props

  const pageOffset = parseInt(new URLSearchParams(search).get("page"), 10) - 1 || 0

  const pageSize = 10
  const squidListQuery = useSquidList(pageOffset, pageSize)
  const squids = squidListQuery.data || []
  const lastPage = Math.ceil(squids.total / pageSize)

  let firstPageLinkNumber
  let lastPageLinkNumber
  const pageNumberButtons = []

  if (pageOffset < 3) {
    firstPageLinkNumber = 0
    lastPageLinkNumber = 5
  } else if (pageOffset + 3 >= lastPage) {
    firstPageLinkNumber = lastPage - 5
    lastPageLinkNumber = lastPage
  } else {
    firstPageLinkNumber = pageOffset - 2
    lastPageLinkNumber = pageOffset + 3
  }

  for (let i = firstPageLinkNumber; i < lastPageLinkNumber; i += 1) {
    const pageNumberClass =
      i === pageOffset ? "pagination__current-page-number" : "pagination__page-number"
    const pageNumberComponent = (
      <Link to={`/squids?page=${i + 1}`} className={pageNumberClass}>
        {i + 1}
      </Link>
    )
    pageNumberButtons.push(pageNumberComponent)
  }

  const disableForwardAndLast = pageOffset === 0 ? "pagination__button-scroll__disabled" : ""
  const disablePreviousAndFirst =
    pageOffset === lastPage - 1 ? "pagination__button-scroll__disabled" : ""

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
      <div className="pagination__buttons">
        <Link to="/squids?page=1" className={`pagination__button-scroll ${disableForwardAndLast}`}>
          <i className="fa-solid fa-angles-left" />
        </Link>
        <Link
          to={`/squids?page=${pageOffset}`}
          className={`pagination__button-scroll ${disableForwardAndLast}`}
        >
          <i className="fa-solid fa-angle-left" />
        </Link>
        {pageNumberButtons}
        <Link
          to={`/squids?page=${pageOffset + 2}`}
          className={`pagination__button-scroll ${disablePreviousAndFirst}`}
        >
          <i className="fa-solid fa-angle-right" />
        </Link>
        <Link
          to={`/squids?page=${lastPage}`}
          className={`pagination__button-scroll ${disablePreviousAndFirst}`}
        >
          <i className="fa-solid fa-angles-right" />
        </Link>
      </div>
    </div>
  )
}
