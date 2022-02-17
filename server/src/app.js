import path from "path"
import { fileURLToPath } from "url"

import bodyParser from "body-parser"
import express from "express"
import logger from "morgan"

import "./boot.js"
import { config } from "./config.js"
import { addMiddlewares } from "./middlewares/addMiddlewares.js"
import { handleErrors } from "./middlewares/handleErrors.js"
import { rootRouter } from "./routes/rootRouter.js"

const __filename = fileURLToPath(import.meta.url)

const __dirname = path.dirname(__filename)

const app = express()

app.use(logger("dev"))
app.use(express.json())
app.use(express.static(path.join(__dirname, "../public")))
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.use(bodyParser.json())
addMiddlewares(app)

app.use(rootRouter)
app.use(handleErrors)

app.listen(config.web.port, config.web.host, () => {
  // eslint-disable-next-line no-console
  console.log("Server is listening on port " + config.web.port)
})
export { app }
