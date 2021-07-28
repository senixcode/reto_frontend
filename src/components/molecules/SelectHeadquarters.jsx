import React from 'react'

export default function SelectHeadquarters() {
  return (
    <div className="flex flex-col gap-y-1">
      <label>Sede</label>
      <select className="rounded-lg">
        <option hidden value=""></option>
        {['Miraflores', 'La Molina', 'San Isidro'].map((headquarter, i) => (
          <option key={i} value={headquarter}>
            {headquarter}
          </option>
        ))}
      </select>
    </div>
  )
}
