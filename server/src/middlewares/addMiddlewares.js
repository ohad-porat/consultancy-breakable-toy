import { addEnvironmentMiddlewares } from "./addEnvironmentMiddlewares.js"
import { addExpressSession } from "./addExpressSession.js"

export const addMiddlewares = async (app) => {
  addExpressSession(app)
  await addEnvironmentMiddlewares(app)
}
