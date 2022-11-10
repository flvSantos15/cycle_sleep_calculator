import { Heart } from 'phosphor-react'

export function Footer() {
  return (
    <div className="flex items-center justify-center bg-blue-light ">
      <div className="flex items-center justify-center bg-blue-light w-[100%] max-w-[90rem] h-[6.5rem] py-[2rem] px-[1rem] xl:px-[10rem] lg:px-[6rem] md:px-[2rem]">
        <h3 className="flex items-center text-white">
          Feito com
          <span className="mx-1.5">
            <Heart />
          </span>
          por Flávio Santos
        </h3>
      </div>
    </div>
  )
}