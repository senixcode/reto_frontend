import { useState } from 'react'
import Input from '../molecules/Input'
import SelectHeadquarters from '../molecules/SelectHeadquarters'

export default function FormSignin({ type }) {
  const [errors, setErrors] = useState('')

  const ShowErrors = () => (
    <div className="text-right mt-2">
      <span className=" text-center block font-semibold text-red-600">
        {errors}
      </span>
    </div>
  )

  return (
    <form className="grid w-full">
      <Input name="Nombres" />
      <Input name="Apellidos" />
      <Input name="Correo" />
      <Input name="Celular" />
      <SelectHeadquarters />
      <Input name="Contraseña" />
      <Input name="Comfirmar Contraseña" />
      {errors && <ShowErrors />}
      <button className="btn_primary">Iniciar Sesión</button>
    </form>
  )
}
