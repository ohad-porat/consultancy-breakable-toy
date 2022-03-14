import { config } from "../../config.js"

export const addDevelopmentMiddlewares = async (app) => {
  if (config.nodeEnv === "development") {
    const { default: errorHandler } = await import("../errorHandler.js")
    app.use(errorHandler())
  }
}
