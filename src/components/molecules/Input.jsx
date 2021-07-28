import React from 'react'

export default function Input({ name }) {
  return (
    <div className="flex flex-col gap-y-1">
      <label>{name}</label>
      <input type="text" className="rounded-lg" />
    </div>
  )
}
