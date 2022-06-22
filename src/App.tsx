import { BrowserRouter, Routes, Route } from "react-router-dom"
import { RQExample } from "./views/example/query"
import { Healthdetail } from "./views/example/healthdetail"

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RQExample />} />
          <Route path="/healthdetail/:idx" element={<Healthdetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
