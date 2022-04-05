import { useQuery } from "react-query"

import { ApiClient } from "../../backend/ApiClient"

export const useSquidShow = (id) =>
  useQuery(["squid", id], () => ApiClient.get(`/squids/${id}`).then((res) => res.data.squid), {
    keepPreviousData: true,
  })
