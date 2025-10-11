interface ICustomInputProps {
  value: string
  onChange: (value: string) => void
}

export function CustomInput({ value, onChange }: ICustomInputProps) {
  return (
    <div className="flex flex-col w-[10rem] h-[8rem] items-center justify-between mx-auto">
      <input
        type="time"
        name="hour"
        id="hour"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-blue-dark border border-solid border-['#f1e9c9'] rounded w-[6rem] h-[3rem] px-[0.5rem] text-[#fff]"
      />
    </div>
  )
}