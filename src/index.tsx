import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { QueryClient, QueryClientProvider } from "react-query"
import { RecoilRoot } from "recoil"
// import reportWebVitals from "./reportWebVitals"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0, // API가 실패하면 설정한 값만큼 재시도
      useErrorBoundary: true, // Fallback UI 설정
    },
    mutations: {
      useErrorBoundary: true,
    },
  },
})

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </QueryClientProvider>
  </React.StrictMode>
  ,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log)
