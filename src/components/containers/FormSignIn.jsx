import Input from '../molecules/Input'
import { Link, useHistory } from 'react-router-dom'
import { ROUTES } from '../../routes/AppRouter'
import { signin } from '../../service/auth'
import { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import { useMutation } from 'react-query'
import { useForm } from 'react-hook-form'
import validationsInputs from '../../help/validationsInputs'
export default function FormSignIn() {
  const auth = useContext(AuthContext)
  const history = useHistory()
  const { register, handleSubmit, formState } = useForm()
  const [errors, setErrors] = useState('')

  const mutation = useMutation(signin, {
    onSuccess: function (data) {
      setErrors('')
      auth.login({ ...data })
      history.push(ROUTES.dasboard.home)
    },
    onError: function (error) {
      if ([401, 404].includes(error.status)) setErrors('Error de credenciales')
    },
  })

  const ShowErrors = () => (
    <div className="text-right mt-2">
      <span className=" text-center block font-semibold text-red-600">
        {errors}
      </span>
    </div>
  )
  const handleCustomSubmit = (body) => mutation.mutate({ body })

  return (
    <form className="grid w-full" onSubmit={handleSubmit(handleCustomSubmit)}>
      <Input
        name="Correo"
        register={register('email', {
          required: true,
          pattern: {
            value: validationsInputs.emailRegex,
            message: 'Correo Incorrecto',
          },
        })}
        error={formState.errors.email}
        customError={true}
      />

      <Input
        name="Contraseña"
        type="password"
        register={register('password', {
          required: true,
        })}
        error={formState.errors.password}
        customError={true}
      />

      {errors && <ShowErrors />}

      <Link to={ROUTES.signup}>
        <span className="block text-right font-medium text-sm">
          ¿Desea registrarse?
        </span>
      </Link>

      <button type="submit" className="btn_primary">
        Iniciar Sesión
      </button>
    </form>
  )
}
