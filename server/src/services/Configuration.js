export class Configuration {
  get nodeEnv() {
    return (process.env.NODE_ENV || "") === "" ? "development" : process.env.NODE_ENV
  }
}
