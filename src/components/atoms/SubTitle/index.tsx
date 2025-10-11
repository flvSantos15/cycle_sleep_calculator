interface ISubTitleProps {
  title: string
}

export function SubTitle({ title }: ISubTitleProps) {
  return (
    <h3 className="font-['Roboto'] font-light xl:text-[1.75rem] text-[1.25rem] leading-[2.625rem] text-white">
      {title}
    </h3>
  )
}