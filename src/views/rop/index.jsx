import { useState } from "react"

export const MyHeader = props => {
  const [mode, setMode] = useState("welcome")
  console.log(mode)
  return (
    <div>
      {props.topics.map((item, index) => {
        return (
          <ul key={index}>
            <li
              id={item.id}
              onClick={e => {
                e.preventDefault() // 기본 동작 방지 ex)체크박스 클릭시 체크되는것
                props.onChangeMode(e.target.id)
              }}
            >
              {item.title} {index}
            </li>
            <p onClick={() => setMode(item.body)}>{item.body}</p>
          </ul>
        )
      })}
    </div>
  )
}
