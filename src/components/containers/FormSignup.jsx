import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../routes/AppRouter'
import Input from '../molecules/Input'
import SelectHeadquarters from '../molecules/SelectHeadquarters'

export default function FormSignup({ type }) {
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
      <Link to={ROUTES.signin}>
        <span className="block text-right font-medium text-sm">
          ¿Desea iniciar sessión?
        </span>
      </Link>
      <button className="btn_primary">Iniciar Sesión</button>
    </form>
  )
}
