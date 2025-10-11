import { useContext } from "react"
import { TimerContext } from "../context/time.context"

export const useTimer = () => {
  const context = useContext(TimerContext)

  if (!context) alert('Contexto não encontrado!')

  return context
}