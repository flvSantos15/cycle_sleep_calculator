import { Moon, Sun } from 'phosphor-react'
import { Logo } from '../Logo'
import { NavLinkItem } from '../NavLinkItem'

export function Header() {
  return (
    <div className="flex items-center justify-center bg-blue-light">
      <div className="flex items-center justify-between bg-blue-light w-[100%] max-w-[90rem] h-[6.5rem] py-[2rem] px-[1rem] xl:px-[10rem] lg:px-[6rem] md:px-[2rem] sm:px-[2rem]">
        <Logo />

        <div className="flex justify-end items-center xl:w-[16rem] h-[2.375rem] p-0 gap-[0.75rem] md:w-[50%]">
          <NavLinkItem
            to="/wakeup"
            title="Checkout"
            color="bg-yellow-light"
            icon={Sun}
            colorIcon="#dbac2c"
          />
          <NavLinkItem
            to="/"
            title="Checkout"
            color="bg-blue-dark"
            icon={Moon}
            colorIcon="#fff"
          />
        </div>
      </div>
    </div>
  )
}