interface IPageTitleProps {
  title: string
}

export function PageTitle({ title }: IPageTitleProps) {
  return (
    <div>
      <h2 className="font-['Baloo_2'] text-center font-bold text-[1.75rem] xl:text-[2.5rem] leading-[2.625rem] text-blue-dark">
        {title}
      </h2>
    </div>
  )
}