// eslint-disable-next-line import/order
import { hot } from "react-hot-loader/root"
// eslint-disable-next-line import/order
import React from "react"
import { QueryClientProvider, QueryClient } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import { TopBar } from "./layout/TopBar"
import { SquidList } from "./squidIndex/SquidList"

import "../style/main.pcss"
// import { useEffect } from "react"

const App = () => {
  /*
  Defaults:
  - retry: false because we don't want to retry on network errors
  - refetchOnWindowFocus: true because we want to refetch data on window focus -- this easily hides
    bugs in development
  */
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false, refetchOnWindowFocus: false } },
  })

  // ohad is a total nerd hahahahahaha ULTIMATE POWERRRRRRRRRR!!!!!!!!!

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <TopBar />
        <Switch>
          <Route exact path="/">
            <h2>Hello from Squidward</h2>
          </Route>
          <Route exact path="/squids" component={SquidList} />
        </Switch>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

// eslint-disable-next-line import/no-default-export
export default hot(App)
