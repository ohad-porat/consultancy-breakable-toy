import { addDevelopmentMiddlewares } from "./environments/addDevelopmentMiddlewares.js"

export const addEnvironmentMiddlewares = (app) => {
  addDevelopmentMiddlewares(app)
}
