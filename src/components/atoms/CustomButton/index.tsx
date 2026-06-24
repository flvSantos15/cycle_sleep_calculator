interface ICustomButtonProps {
  label: string
  onClick: () => void
}

export function CustomButton({ label, onClick }: ICustomButtonProps) {
  return (
    <button
      className="bg-blue-dark text-white px-[1.125rem] py-[0.75rem] rounded text-[1.25rem] font-semibold shadow-lg mt-5"
      onClick={onClick}
      arial-label={label}
      type="submit"
    >
      {label}
    </button>
  )
}