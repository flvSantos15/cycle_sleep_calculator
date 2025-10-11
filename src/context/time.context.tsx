import { createContext, ReactNode, useEffect, useState } from "react"

interface ITimerProviderProps {
  children: ReactNode
}

interface ITimerContextData {
  time: string
  hourTime: string
  timeString: string
  sixthCycle: string
  fifthCycle: string
  fourthCycle: string
  thirdCycle: string
  handleCalculateCycle: () => void
  handleResetCycle: () => void
  getHourTime: (time: string) => void
}

export const TimerContext = createContext({} as ITimerContextData)

export function TimesProvider({ children }: ITimerProviderProps) {
  const [time, setTime] = useState('')
  const [hourTime, setHourTime] = useState('')
  const [timeString, setTimeString] = useState('')
  const [sixthCycle, setSixthCycle] = useState('')
  const [fifthCycle, setFifthCycle] = useState('')
  const [fourthCycle, setFourthCycle] = useState('')
  const [thirdCycle, setThirdCycle] = useState('')

  const getHourTime = (time: string) => {
    setHourTime(time)
  }

  const handleCalculateCycle = () => {
    const hourNumber = Number(hourTime.replace(':', ''))

    const hourInNumber = Number(
      `${new Date().getHours()}${new Date().getMinutes()}`
    )

    const month = new Date().toLocaleString('en-GB', { month: 'long' })
    const year = new Date().getFullYear()
    let day: number

    // if (hourNumber > hourInNumber) {
    if (hourNumber < hourInNumber) {
      day = new Date().getDate()
    } else {
      day = new Date().getDate() + 1
    }
    if (hourTime.length) {
      setTimeString(`${month} ${day}, ${year} ${hourTime}:00`)
    }
  }

  const handleResetCycle = () => {
    setTimeString('')
    setTime('')
  }

  const getHourAndMinute = (date: number) => {
    const formatted = `${String(new Date(date).getHours()).padStart(
      2,
      '0'
    )}: ${String(new Date(date).getMinutes()).padStart(2, '0')}`

    return formatted
  }

  useEffect(() => {
    if (timeString) {
      setTime(timeString)
    }
  }, [timeString])

  useEffect(() => {
    if (time) {
      const timeOffline = new Date(time).getTime()
      const now = new Date().getTime()
      const distance = timeOffline - now
      const cycle = distance / 60000 / 90

      const sixCycleDistance = cycle - 6
      const fiveCycleDistance = cycle - 5
      const fourCycleDistance = cycle - 4
      const threeCycleDistance = cycle - 3

      const dataSix = sixCycleDistance * 90 * 60000
      const dataFive = fiveCycleDistance * 90 * 60000
      const dataFour = fourCycleDistance * 90 * 60000
      const dataThree = threeCycleDistance * 90 * 60000

      setSixthCycle(getHourAndMinute(dataSix + now))
      setFifthCycle(getHourAndMinute(dataFive + now))
      setFourthCycle(getHourAndMinute(dataFour + now))
      setThirdCycle(getHourAndMinute(dataThree + now))
    }
  }, [time])

  const values = {
    time,
    hourTime,
    timeString,
    sixthCycle,
    fifthCycle,
    fourthCycle,
    thirdCycle,
    handleCalculateCycle,
    handleResetCycle,
    getHourTime
  }

  return (
    <TimerContext.Provider value={values}>
      {children}
    </TimerContext.Provider>
  )
}