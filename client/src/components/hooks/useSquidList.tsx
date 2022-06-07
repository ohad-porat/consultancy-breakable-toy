import { AxiosError } from "axios"
import { useQuery, UseQueryResult } from "react-query"

import { ApiClient } from "../../backend/ApiClient"
import { Squid } from "../../types/Squid"

interface SquidData {
  results: Squid[]
  total: number
}

export const useSquidList = (
  pageOffset: number,
  pageSize: number
): UseQueryResult<SquidData, AxiosError> =>
  useQuery(
    ["squids", { pageOffset, pageSize }],
    () =>
      ApiClient.get("/squids", { params: { pageOffset, pageSize } }).then((res) => res.data.squids),
    { keepPreviousData: true }
  )
