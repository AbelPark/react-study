import axios from "axios"
import { useQuery } from "react-query"
import { useNavigate } from "react-router-dom"

export function guid() {
  function _p8(s: boolean) {
    const p = (Math.random().toString(16) + "000000000").substr(2, 8)
    return s ? "-" + p.substr(0, 4) + "-" + p.substr(4, 4) : p
  }
  return _p8(false) + _p8(true) + _p8(true) + _p8(false)
}

const httpData = {
  Header: {
    CmdType: 10020,
    RequestID: guid(),
  },
  Body: { Length: 5, Offset: 0 },
}

const fetchAPi = () => {
  return axios.post("https://dev-wcrs.familycare.ai:1023/service", httpData, { withCredentials: true })
}

export const RQExample = () => {
  const navigate = useNavigate()
  const GoPath = (idx: number) => navigate(`/healthdetail/${idx}`)

  const { data, isLoading } = useQuery("example", fetchAPi, {
    staleTime: 5000,
  })
  if (isLoading) {
    return <h1>Loading</h1>
  }
  return (
    <>
      <h2>Example</h2>
      {data?.data.Body.map(({ Title }: any, idx: number) => (
        <div key={idx} onClick={() => GoPath(idx)}>
          {Title}
        </div>
      ))}
    </>
  )
}
