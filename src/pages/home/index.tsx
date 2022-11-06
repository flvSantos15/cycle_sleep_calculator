/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';

export function Home() {
  const [time, setTime] = useState('')
  const [hourTime, setHourTime] = useState('')
  const [dateTime, setDateTime] = useState('')
  const [timeString, setTimeString] = useState('')
  const [sixthCycle, setSixthCycle] = useState('')
  const [fifthCycle, setFifthCycle] = useState('')
  const [fourthCycle, setFourthCycle] = useState('')
  const [thirdCycle, setThirdCycle] = useState('')

  const handleCalculateCycle = () => {
    if (hourTime.length && dateTime.length) {
      const month = new Date(dateTime).toLocaleString('default', { month: 'long' });
      const day = new Date(dateTime).getDate() + 1
      const year = new Date(dateTime).getFullYear()

      setTimeString(`${month} ${day}, ${year} ${hourTime}:00`)
    }
  }

  const getHourAndMinute = (date) => {
    const formatted = `${String(new Date(date).getHours()).padStart(2, '0')}: ${String(new Date(date).getMinutes()).padStart(2, '0')}`

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
      const cycle = (distance / 60000) / 90

      const sixCycleDistance = cycle - 6
      const fiveCycleDistance = cycle - 5
      const fourCycleDistance = cycle - 4
      const threeCycleDistance = cycle - 3

      const dataSix = (sixCycleDistance * 90) * 60000
      const dataFive = (fiveCycleDistance * 90) * 60000
      const dataFour = (fourCycleDistance * 90) * 60000
      const dataThree = (threeCycleDistance * 90) * 60000

      setSixthCycle(getHourAndMinute(dataSix + now))
      setFifthCycle(getHourAndMinute(dataFive + now))
      setFourthCycle(getHourAndMinute(dataFour + now))
      setThirdCycle(getHourAndMinute(dataThree + now))
    }
  }, [time])

  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        margin: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      }}
    >
      <div
        style={{
          width: '30%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          gap: '4',
        }}
      >
        <input
          type="date"
          name="date"
          id="date"
          value={dateTime}
          onChange={(e) => setDateTime(e.target.value)}
        />
        <input
          type="time"
          name="hour"
          id="hour"
          value={hourTime}
          onChange={(e) => setHourTime(e.target.value)}
        />
        <button onClick={handleCalculateCycle}>
          calcular
        </button>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {sixthCycle && (<p>{sixthCycle}</p>)}
        {fifthCycle && (<p>{fifthCycle}</p>)}
        {fourthCycle && (<p>{fourthCycle}</p>)}
        {thirdCycle && (<p>{thirdCycle}</p>)}
      </div>
    </div>
  );
}