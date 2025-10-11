import { ElementType } from "react";
import { NavLink, NavLinkProps } from "react-router-dom";

interface INavLinkItemProps extends NavLinkProps {
  icon: ElementType
  color: string
  colorIcon: string
}

export function NavLinkItem({ icon: Icon, color, colorIcon, ...rest }: INavLinkItemProps) {
  return (
    <NavLink {...rest}>
      <button className={`flex justify-center items-center p-0 gap-[0.25rem] w-[2.375rem] h-[2.375rem] rounded-[0.375rem] ${color}`}>
        <Icon size={32} color={colorIcon} />
      </button>
    </NavLink>
  )
}