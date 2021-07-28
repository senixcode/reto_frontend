import React from 'react'

const messageDefault = "'* Es requerido este campo'"
export default function SelectHeadquarters({
  name,
  register,
  error,
  customError = false,
}) {
  return (
    <>
      <div className="flex flex-col gap-y-1">
        <label> Sedes </label>
        <select {...register} className="rounded-lg">
          <option hidden value=""></option>
          {['Miraflores', 'La Molina', 'San Isidro'].map((headquarter, i) => (
            <option key={i} value={headquarter}>
              {headquarter}
            </option>
          ))}
        </select>
      </div>
      {error && (
        <span className="text-red-600 text-sm">
          {customError ? error.message || messageDefault : messageDefault}
        </span>
      )}
    </>
  )
}
