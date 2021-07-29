import { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { AuthContext } from '../../context/AuthProvider'
import { ROUTES } from '../../routes/AppRouter'
import Input from '../molecules/Input'
import SelectHeadquarters from '../molecules/SelectHeadquarters'
import { signup } from '../../service/auth'
import { useMutation } from 'react-query'
import { useForm } from 'react-hook-form'
import InputPhone from '../molecules/InputPhone'
import InputEmail from '../molecules/InputEmail'
import InputPassword from '../molecules/InputPassword'
import InputConfirmPassword from '../molecules/InputConfirmPassword'
import { WelcomeContext } from '../../context/WelcomeProvider'
export default function FormSignup({ type }) {
  const auth = useContext(AuthContext)
  const { deleteWelcome } = useContext(WelcomeContext)
  const history = useHistory()
  const { register, handleSubmit, formState, getValues } = useForm({
    criteriaMode: 'all',
  })

  const mutation = useMutation(signup, {
    onSuccess: function (data) {
      auth.login({ ...data })
      deleteWelcome()
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

      <InputEmail {...{ register, formState }} />
      <InputPhone {...{ register, formState }} />

      <SelectHeadquarters {...{ register, formState }} />

      <InputPassword {...{ register, formState }} />
      <InputConfirmPassword {...{ register, formState, getValues }} />

      <span className="block text-right font-medium text-sm">
        <Link to={ROUTES.signin}>¿Desea iniciar sessión?</Link>
      </span>

      <button type="submit" className="btn_primary">
        Registrarme
      </button>
    </form>
  )
}
