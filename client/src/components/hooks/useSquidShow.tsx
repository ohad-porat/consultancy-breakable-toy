import { AxiosError } from "axios"
import { useQuery, UseQueryResult } from "react-query"

import { ApiClient } from "../../backend/ApiClient"
import { Squid } from "../../types/Squid"

export const useSquidShow = (id: string): UseQueryResult<Squid, AxiosError> =>
  useQuery(["squid", id], () => ApiClient.get(`/squids/${id}`).then((res) => res.data.squid), {
    keepPreviousData: true,
  })
