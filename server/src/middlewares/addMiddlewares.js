import addEnvironmentMiddlewares from "./addEnvironmentMiddlewares.js";
import addExpressSession from "./addExpressSession.js";
import addPassport from "./addPassport.js";

const addMiddlewares = async (app) => {
  addExpressSession(app);
  addPassport(app);
  await addEnvironmentMiddlewares(app);
};

export default addMiddlewares;
