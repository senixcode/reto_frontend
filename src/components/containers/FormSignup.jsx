import { useContext, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { AuthContext } from '../../context/AuthProvider'
import { ROUTES } from '../../routes/AppRouter'
import Input from '../molecules/Input'
import SelectHeadquarters from '../molecules/SelectHeadquarters'
import { signup } from '../../service/auth'
import { useMutation } from 'react-query'
import { useForm } from 'react-hook-form'
import validationsInputs from '../../help/validationsInputs'
export default function FormSignup({ type }) {
  const auth = useContext(AuthContext)
  const history = useHistory()
  const { register, handleSubmit, formState, getValues } = useForm({
    criteriaMode: 'all',
  })

  const mutation = useMutation(signup, {
    onSuccess: function (data) {
      auth.login({ ...data })
      history.push(ROUTES.dasboard.home)
    },
    onError: function (error) {
      console.log('error signup', error)
    },
  })

  const handleCustomSubmit = (body) => mutation.mutate({ body })

  return (
    <form className="grid w-full" onSubmit={handleSubmit(handleCustomSubmit)}>
      <Input
        name="Nombres"
        register={register('names', {
          required: true,
        })}
        error={formState.errors.names}
        customError={true}
      />

      <Input
        name="Apellidos"
        register={register('lastName', {
          required: true,
        })}
        error={formState.errors.lastName}
        customError={true}
      />
      <Input
        type="date"
        name="Fecha de Nacimiento"
        register={register('dateOfBirth', {
          required: true,
        })}
        error={formState.errors.dateOfBirth}
        customError={true}
      />

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
        name="Celular"
        register={register('phone', {
          required: true,
        })}
        error={formState.errors.phone}
        customError={true}
      />

      <SelectHeadquarters
        register={register('headquarters', {
          required: true,
        })}
        customError={true}
        type="password"
        error={formState.errors.headquarters}
      />

      <Input
        name="Contraseña"
        register={register('password', {
          required: true,
          validate: (value) =>
            value === getValues().password || 'Las contraseñas no coinciden',
        })}
        customError={true}
        type="password"
        error={formState.errors.password}
      />

      <Input
        name="Comfirmar Contraseña"
        register={register('confirmPassword', {
          validate: (value) =>
            value === getValues().password || 'Las contraseñas no coinciden',
        })}
        customError={true}
        type="password"
        error={formState.errors.confirmPassword}
      />

      <span className="block text-right font-medium text-sm">
        <Link to={ROUTES.signin}>¿Desea iniciar sessión?</Link>
      </span>

      <button type="submit" className="btn_primary">
        Iniciar Sesión
      </button>
    </form>
  )
}
