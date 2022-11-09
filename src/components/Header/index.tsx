import { NavLink } from 'react-router-dom'
import { Sun, Moon } from 'phosphor-react'

export function Header() {
  return (
    <div className="flex items-center justify-center bg-background">
      <div className="flex items-center justify-between bg-background w-[100%] max-w-[90rem] h-[6.5rem] py-[2rem] px-[10rem] lg:px-[6rem] gap-[51.25rem]">
        <h2 className="font-['Baloo_2'] font-bold text-[2rem] leading-[2.625rem] text-base-subtitle">Cycle_Sleep</h2>

        <div className="flex justify-end items-center w-[16rem] h-[2.375rem] p-0 gap-[0.75rem]">
          <NavLink to="/wakeup" title="Checkout">
            <button className="flex justify-center items-center p-0 gap-[0.25rem] w-[2.375rem] h-[2.375rem] rounded-[0.375rem] bg-yellow-light">
              <Sun size={32} color="#dbac2c" />
            </button>
          </NavLink>
          <NavLink to="/sleep" title="Checkout">
            <button className="flex justify-center items-center p-0 gap-[0.25rem] w-[2.375rem] h-[2.375rem] rounded-[0.375rem] bg-blue-dark">
              <Moon size={32} color="#fff" />
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  )
}