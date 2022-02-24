import { useQuery } from "react-query"

import { ApiClient } from "../../backend/ApiClient"

export const useSquidList = () =>
  useQuery("squids", () => ApiClient.get("/squids").then((res) => res.data.squids))
