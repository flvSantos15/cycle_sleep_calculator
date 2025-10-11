import { Logo } from '../../atoms/Logo'
import { NavLinks } from '../../molecules/NavLinks'

export function Header() {
  return (
    <div className="flex items-center justify-center bg-blue-light">
      <div className="flex items-center justify-between bg-blue-light w-[100%] max-w-[90rem] h-[6.5rem] py-[2rem] px-[1rem] xl:px-[10rem] lg:px-[6rem] md:px-[2rem] sm:px-[2rem]">
        <Logo />

        <NavLinks />
      </div>
    </div>
  )
}