import express from "express"

import Squid from "../../../models/Squid.js"
import { nextWrapper } from "../../lib/nextWrapper.js"

export const squidsRouter = new express.Router()

squidsRouter.get(
  "/",
  nextWrapper(async (req, res) => {
    const { pageOffset, pageSize } = req.query
    const squids = await Squid.query()
      .orderBy([
        { column: "createdAt", order: "desc" },
        { column: "id", order: "desc" },
      ])
      .page(pageOffset, pageSize)
    return res.status(200).json({ squids })
  })
)

// dont mind me just gonna copy and pasta all of your work JK
