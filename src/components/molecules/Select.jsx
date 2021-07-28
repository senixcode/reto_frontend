import MessageErrorInput from './MessageErrorInput'

export default function Select({
  name,
  options,
  register,
  error,
  customError,
  defaultValue = '',
}) {
  return (
    <>
      <div className="flex flex-col gap-y-1">
        <label>{name}</label>
        <select
          {...register}
          defaultValue={defaultValue}
          className="rounded-lg"
        >
          <option hidden value=""></option>
          {options &&
            options.map((option, i) => (
              <option key={i} value={option.value}>
                {option.text}
              </option>
            ))}
        </select>
      </div>
      <MessageErrorInput {...{ error, customError }} />
    </>
  )
}
