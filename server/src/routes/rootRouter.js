import express from "express";

import { clientRouter } from "./clientRouter.js";
import squidsRouter from "./api/v1/squidsRouter.js"

const rootRouter = new express.Router();
rootRouter.use("/", clientRouter);

rootRouter.use("/api/v1/squids", squidsRouter)

export { rootRouter };
