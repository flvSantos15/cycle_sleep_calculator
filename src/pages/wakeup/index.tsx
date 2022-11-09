/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';

export function Wakeup() {
  const [time, setTime] = useState('')
  const [hourTime, setHourTime] = useState('')
  const [timeString, setTimeString] = useState('')
  const [sixthCycle, setSixthCycle] = useState('')
  const [fifthCycle, setFifthCycle] = useState('')
  const [fourthCycle, setFourthCycle] = useState('')
  const [thirdCycle, setThirdCycle] = useState('')

  const handleCalculateCycle = () => {
    const hourNumber = Number(hourTime.replace(':', ''))

    const hourInNumber = Number(`${new Date().getHours()}${new Date().getMinutes()}`)

    const month = new Date().toLocaleString('default', { month: 'long' });
    const year = new Date().getFullYear()
    let day: number;

    if (hourNumber > hourInNumber) {
      day = new Date().getDate()

    } else {
      day = new Date().getDate() + 1
    }
    if (hourTime.length) {
      setTimeString(`${month} ${day}, ${year} ${hourTime}:00`)
    }
  }

  const getHourAndMinute = (date: Date) => {
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
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))

      const sixCycleDistance = new Date((((minutes - minutes) + (90 * 5)) * 60000 + timeOffline))
      const fiveCycleDistance = new Date((((minutes - minutes) + (90 * 4)) * 60000 + timeOffline))
      const fourCycleDistance = new Date((((minutes - minutes) + (90 * 3)) * 60000 + timeOffline))
      const threeCycleDistance = new Date((((minutes - minutes) + (90 * 2)) * 60000 + timeOffline))

      setSixthCycle(getHourAndMinute(sixCycleDistance))
      setFifthCycle(getHourAndMinute(fiveCycleDistance))
      setFourthCycle(getHourAndMinute(fourCycleDistance))
      setThirdCycle(getHourAndMinute(threeCycleDistance))
    }
  }, [time])

  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        margin: 0,
        padding: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        background: '#2f3774'
      }}
    >
      {/* pagina pra calcular a hora de acordar */}
      <div>
        <h2>Hora de Acordar!</h2>
        {hourTime && (
          <p>Esses são os melhores horários para acordar se você dormir ás {hourTime}</p>
        )}
      </div>

      <div
        style={{
          width: '20%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          gap: '4',
        }}
      >
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