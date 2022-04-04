import React from "react"

import { Link } from "react-router-dom"

export const Paginator = ({ pageOffset, lastPage }) => {
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
      i === pageOffset ? "squids-pagination__current-page-number" : "squids-pagination__page-number"
    const pageNumberComponent = (
      <Link to={`/squids?page=${i + 1}`} className={pageNumberClass} key={i}>
        {i + 1}
      </Link>
    )
    pageNumberButtons.push(pageNumberComponent)
  }

  const disableForwardAndLast = pageOffset === 0 ? "squids-pagination__scroll-icon__disabled" : ""
  const disablePreviousAndFirst =
    pageOffset === lastPage - 1 ? "squids-pagination__scroll-icon__disabled" : ""

  return (
    <div className="squids-pagination">
      <Link to="/squids" className={`squids-pagination__scroll-icon ${disableForwardAndLast}`}>
        <i className="fa-solid fa-angles-left" />
      </Link>
      <Link
        to={`/squids?page=${pageOffset}`}
        className={`squids-pagination__scroll-icon ${disableForwardAndLast}`}
      >
        <i className="fa-solid fa-angle-left" />
      </Link>
      {pageNumberButtons}
      <Link
        to={`/squids?page=${pageOffset + 2}`}
        className={`squids-pagination__scroll-icon ${disablePreviousAndFirst}`}
      >
        <i className="fa-solid fa-angle-right" />
      </Link>
      <Link
        to={`/squids?page=${lastPage}`}
        className={`squids-pagination__scroll-icon ${disablePreviousAndFirst}`}
      >
        <i className="fa-solid fa-angles-right" />
      </Link>
    </div>
  )
}
