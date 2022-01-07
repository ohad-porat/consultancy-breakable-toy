import session from "cookie-session";

import { config } from "../config.js";

export const addExpressSession = (app) => {
  app.use(
    session({
      name: "consultancy-breakable-toy-session",
      keys: [config.session.secret],
      resave: true,
      maxAge: config.maxAge,
    })
  );
};
