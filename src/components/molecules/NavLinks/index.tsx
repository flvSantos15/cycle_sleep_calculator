import { Moon, Sun } from "phosphor-react";
import { NavLinkItem } from "../../atoms/NavLinkItem";

export function NavLinks() {
  return (
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
  )
}