export function Home() {
  return (
    <div className="flex flex-col w-full max-w[1120px] h-full min-h-[720px] bg-slate-800">
      {/* aqui será a page de escolha */}
      <div className="flex items-center justify-center">
        <div className="flex flex-col w-[100%] max-w-[90rem] h-[100%] px-[10rem] lg:px-[6rem] py-[2rem]">
          <div className="flex items-center justify-between w-[100%] mb-[1.2rem]">
            <h3 className="font-['Baloo_2'] font-bold text-[2rem] leading-[2.625rem] text-base-subtitle">
              Escolha o tipo de calculadora de ciclo do sono
            </h3>
          </div>
          <h4>Você deseja calcular a hora de dormir ou acorda?</h4>
        </div>
      </div>
    </div>
  )
}