import { CustomButton } from '../../../components/atoms/CustomButton'
import { CustomInput } from '../../../components/atoms/CustomInput'
import { PageTitle } from '../../../components/atoms/PageTitle'
import { SubTitle } from '../../../components/atoms/SubTitle'
import { useTimer } from '../../../hooks/useTimer'

export function Home() {
  const methods = useTimer()

  return (
    <div className="flex items-center justify-center h-full bg-blue-dark">
      <div className="flex flex-col items-center justify-center bg-blue-dark w-[100%] max-w-[90rem] h-full px-[1rem] xl:px-[10rem] lg:px-[6rem] md:px-[2rem]">
        <PageTitle title="Hora de Dormir!" />

        <div className="flex mt-6">
          {methods.time && (
            <p className="font-['Roboto'] text-center font-light text-[0.875rem] text-white">
              Esses são os melhores horários para dormir se você quiser acordar
              ás {methods.hourTime}h
            </p>
          )}
        </div>

        <div className="flex flex-col items-center w-full xl:w-[30rem] h-[24rem] mt-2">
          {!methods.time ? (
            <>
              <div className="flex flex-col justify-between h-[14rem]">
                <SubTitle title="Que horas você precisar acordar?" />

                <CustomInput value={methods.hourTime} onChange={methods.getHourTime} />
              </div>
              <CustomButton label="calcular" onClick={methods.handleCalculateCycle} />
            </>
          ) : (
            <>
              <div className="flex flex-col items-center w-[70%] h-[17rem]">
                {methods.sixthCycle && (
                  <p className="font-['Roboto'] text-[2.75rem] font-bold text-[#77de7f]">
                    {methods.sixthCycle}h
                  </p>
                )}
                {methods.fifthCycle && (
                  <p className="font-['Roboto'] text-[2.75rem] font-bold text-[#b8d879]">
                    {methods.fifthCycle}h
                  </p>
                )}
                {methods.fourthCycle && (
                  <p className="font-['Roboto'] text-[2.75rem] font-bold text-[#dbbd79]">
                    {methods.fourthCycle}h
                  </p>
                )}
                {methods.thirdCycle && (
                  <p className="font-['Roboto'] text-[2.75rem] font-bold text-[#db7979]">
                    {methods.thirdCycle}h
                  </p>
                )}
              </div>
              <CustomButton label="voltar" onClick={methods.handleResetCycle} />
            </>
          )}
        </div>
      </div>
    </div>
  )
}
