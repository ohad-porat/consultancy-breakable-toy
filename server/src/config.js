import "./boot.js"
import getDatabaseUrl from "./config/getDatabaseUrl.cjs"
import { getNodeEnv } from "./config/getNodeEnv.js"

export const config = {
  nodeEnv: getNodeEnv(),
  session: { secret: process.env.SESSION_SECRET },
  databaseUrl: getDatabaseUrl(getNodeEnv()),
  web: { host: process.env.HOST || "0.0.0.0", port: process.env.PORT || 4000 },
}
