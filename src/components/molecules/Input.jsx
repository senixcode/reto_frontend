import React from 'react'
import MessageErrorInput from './MessageErrorInput'

export default function Input({
  name,
  type = 'text',
  register,
  error,
  customError,
  defaultValue = '',
}) {
  return (
    <>
      <div className="flex flex-col gap-y-1">
        <label>{name}</label>
        <input
          type={type}
          defaultValue={defaultValue}
          {...register}
          className="rounded-lg"
        />
      </div>
      <MessageErrorInput {...{ error, customError }} />
    </>
  )
}
