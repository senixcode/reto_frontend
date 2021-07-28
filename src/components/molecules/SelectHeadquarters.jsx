import React from 'react'
import Select from './Select'

const field = 'headquarters'
const headquarters = ['Miraflores', 'La Molina', 'San Isidro']
const options = headquarters.map((headquarter) => ({
  value: headquarter,
  text: headquarter,
}))
export default function SelectHeadquarters({
  register,
  formState,
  defaultValue,
  required = true,
}) {
  return (
    <Select
      name="Sedes"
      options={options}
      register={register(field, {
        required,
      })}
      customError={true}
      defaultValue={defaultValue}
      error={formState.errors[field]}
    />
  )
}

// <>
//   <div className="flex flex-col gap-y-1">
//     <label> Sedes </label>
//     <select {...register} className="rounded-lg">
//       <option hidden value=""></option>
//       {headquarters.map((headquarter, i) => (
//         <option key={i} value={headquarter}>
//           {headquarter}
//         </option>
//       ))}
//     </select>
//   </div>
//   <MessageErrorInput {...{ error, customError }} />
// </>
