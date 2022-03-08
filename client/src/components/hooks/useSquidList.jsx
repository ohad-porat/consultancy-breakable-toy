import { useQuery } from "react-query"

import { ApiClient } from "../../backend/ApiClient"

export const useSquidList = (pageOffset, pageSize) =>
  useQuery(
    ["squids", { pageOffset }],
    () =>
      ApiClient.get("/squids", { params: { pageOffset, pageSize } }).then((res) => res.data.squids),
    { keepPreviousData: true }
  )
