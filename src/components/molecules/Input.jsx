import React from 'react'
const messageDefault = "'* Es requerido este campo'"
export default function Input({
  name,
  type = 'text',
  register,
  error,
  customError = false,
}) {
  return (
    <>
      <div className="flex flex-col gap-y-1">
        <label>{name}</label>
        <input type={type} {...register} className="rounded-lg" />
      </div>
      {error && (
        <span className="text-red-600">
          {customError ? error.message || messageDefault : messageDefault}
        </span>
      )}
    </>
  )
}
