import React from 'react'
const messageDefault = "'* Es requerido este campo"
export default function MessageErrorInput({ error, customError = false }) {
  return (
    <>
      {error && (
        <span className="text-red-600 text-sm">
          {customError ? error.message || messageDefault : messageDefault}
        </span>
      )}
    </>
  )
}
