import { BrowserRouter, Routes, Route } from "react-router-dom"
import { RQExample } from "./views/example/query"
import { Healthdetail } from "./views/example/healthdetail"
import { useRecoilState } from "recoil"
import { isPcState } from "./store"
import { useEffect } from "react"
import { checkDevice } from "./service/utils"

const App = () => {
  const [isPc, setIsPc] = useRecoilState(isPcState)
  useEffect(()=>{
    window.addEventListener('resize', ()=>{
      const checkPc = checkDevice(window.innerWidth)
      setIsPc( checkPc)
    })
  },[setIsPc])

  return (
    <div className="App">
      <div>{isPc}</div>
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
