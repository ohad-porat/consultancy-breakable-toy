import { useMutation } from "react-query"

import { ApiClient } from "../../backend/ApiClient"

export const useSquidMutation = (squidQuery, setSubmitMessage) =>
  useMutation((formPayload) => ApiClient.post("/squids", formPayload).then((resp) => resp.data), {
    onSuccess: () => {
      setSubmitMessage("Squid Added Successfully")
    },
    onError: (error) => {
      // eslint-disable-next-line no-console
      console.log(error.response.data.message)
    },
    onSettled: () => squidQuery.refetch(),
  })
