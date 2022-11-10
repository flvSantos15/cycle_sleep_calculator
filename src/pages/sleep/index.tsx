/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';

export function Sleep() {
  const [time, setTime] = useState('')
  const [hourTime, setHourTime] = useState('')
  const [dateTime, setDateTime] = useState('')
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

  const handleResetCycle = () => {
    setTimeString('')
    setTime('')
  }

  const getHourAndMinute = (date: number) => {
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
    <div className="flex items-center justify-center h-full bg-blue-dark">
      <div className="flex flex-col items-center justify-center bg-blue-dark w-[100%] max-w-[90rem] h-full px-[1rem] xl:px-[10rem] lg:px-[6rem] md:px-[2rem]">
        <div>
          <h2 className="font-['Baloo_2'] text-center font-bold text-[1.75rem] xl:text-[2.5rem] leading-[2.625rem] text-white">
            Hora de Dormir!
          </h2>
        </div>

        <div className="flex mt-6">
          {time && (
            <p className="font-['Roboto'] text-center font-light text-[0.875rem] text-white">
              Esses são os melhores horários para dormir se você quiser acordar ás {hourTime}h
            </p>
          )}
        </div>

        <div className="flex flex-col items-center w-full xl:w-[30rem] h-[24rem] mt-2">
          {!time ? (
            <>
              <div className="flex flex-col justify-between h-[14rem]">
                <h3 className="font-['Roboto'] font-light xl:text-[1.75rem] text-[1.25rem] leading-[2.625rem] text-white">
                  Que horas você precisar acordar?
                </h3>
                <div className="flex flex-col w-[10rem] h-[8rem] items-center justify-between mx-auto">
                  <input
                    type="time"
                    name="hour"
                    id="hour"
                    value={hourTime}
                    onChange={(e) => setHourTime(e.target.value)}
                    className="bg-blue-dark border border-solid border-['#f1e9c9'] rounded w-[6rem] h-[3rem] px-[0.5rem] text-[#fff]"
                  />
                </div>
              </div>
              <button
                className="bg-blue-light text-white px-[1.125rem] py-[0.75rem] rounded text-[1.25rem] font-semibold shadow-lg"
                onClick={handleCalculateCycle}
              >
                calcular
              </button>
            </>
          ) : (
            <>
              <div className="flex flex-col items-center w-[70%] h-[17rem]">
                {sixthCycle && (
                  <p className="font-['Roboto'] text-[2.75rem] font-bold text-[#77de7f]">
                    {sixthCycle}h
                  </p>
                )}
                {fifthCycle && (
                  <p className="font-['Roboto'] text-[2.75rem] font-bold text-[#b8d879]">
                    {fifthCycle}h
                  </p>
                )}
                {fourthCycle && (
                  <p className="font-['Roboto'] text-[2.75rem] font-bold text-[#dbbd79]">
                    {fourthCycle}h
                  </p>
                )}
                {thirdCycle && (
                  <p className="font-['Roboto'] text-[2.75rem] font-bold text-[#db7979]">
                    {thirdCycle}h
                  </p>
                )}
              </div>
              <button
                className="bg-blue-light text-white px-[1.125rem] py-[0.75rem] rounded text-[1.25rem] font-semibold shadow-lg"
                onClick={handleResetCycle}
              >
                voltar
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}