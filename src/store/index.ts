import { atom } from "recoil"
import { checkDevice } from "../service/utils"

export const isPcState = atom<boolean>({
  key: "isPc",
  default: checkDevice(window.innerWidth),
})
