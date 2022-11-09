import { NavLink } from 'react-router-dom'
import { Heart, Heartbeat } from 'phosphor-react'

export function Footer() {
  return (
    <div className="flex items-center justify-center bg-background">
      <div className="flex items-center justify-center bg-background w-[100%] max-w-[90rem] h-[6.5rem] py-[2rem] px-[10rem] lg:px-[6rem] gap-[51.25rem]">
        <h3 className="flex items-center">
          Feito com
          <span className="mx-1.5">
            <Heart />
          </span>
          por Flávio Santos
        </h3>

        {/* <div className="flex justify-end items-center w-[16rem] h-[2.375rem] p-0 gap-[0.75rem]">
          <NavLink to="/sleep" title="Checkout">
            <button className="flex justify-center items-center p-0 gap-[0.25rem] w-[2.375rem] h-[2.375rem] rounded-[0.375rem] bg-blue-dark">
              <Moon size={32} color="#fff" />
            </button>
          </NavLink>
        </div> */}
      </div>
    </div>
  )
}