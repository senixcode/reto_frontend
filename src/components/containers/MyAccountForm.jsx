import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { WelcomeContext } from '../../context/WelcomeProvider'
import Input from '../molecules/Input'
import SelectHeadquarters from '../molecules/SelectHeadquarters'
import { userUpdate } from '../../service/user'
import { useMutation } from 'react-query'
import InputPhone from '../molecules/InputPhone'
import InputEmail from '../molecules/InputEmail'
import { AuthContext } from '../../context/AuthProvider'
import { formDateToYearMonthDay } from '../../help/date'
export const TYPE_MYACCOUNT_FORM = {
  Home: 'home',
  Profile: 'profile',
}
export default function MyAccountForm({ type }) {
  const auth = useContext(AuthContext)
  const { welcome, setWelcome } = useContext(WelcomeContext)
  const { register, handleSubmit, formState } = useForm({
    criteriaMode: 'all',
  })

  const mutation = useMutation(userUpdate, {
    onSuccess: function (data) {
      auth.login({ username: data, token: auth.user.token })
      welcome && setWelcome(false)
    },
    onError: function (error) {
      console.log('error signup', error)
    },
  })

  const handleCustomSubmit = (body) => {
    const { phone } = body
    let data = { ...body, phone: +phone, id: auth?.user.username?._id }
    data = { body: data, token: auth.user.token }
    mutation.mutate(data)
  }

  const TYPE_ACTION_BUTTON = {
    [TYPE_MYACCOUNT_FORM.Home]: {
      name: 'Continuar',
    },
    [TYPE_MYACCOUNT_FORM.Profile]: {
      name: 'Guardar',
    },
  }

  return (
    <form
      className="flex flex-col mt-8"
      onSubmit={handleSubmit(handleCustomSubmit)}
    >
      <Input
        name="Perfil"
        register={register('profile', {
          required: true,
        })}
        customError={true}
        defaultValue={auth?.user.username?.profile}
        error={formState.errors.profile}
      />
      <div className="grid md:grid-cols-2 gap-x-8 gap-y-2">
        <div>
          <Input
            name="Programa de especialización"
            register={register('SpecializationProgram', {
              required: true,
            })}
            customError={true}
            defaultValue={auth?.user.username?.SpecializationProgram}
            error={formState.errors.SpecializationProgram}
          />
          <SelectHeadquarters
            {...{
              register,
              formState,
              defaultValue: auth?.user.username?.headquarters,
            }}
          />
        </div>
        <div>
          <InputPhone
            {...{
              register,
              formState,
              defaultValue: auth?.user.username?.phone,
            }}
          />

          <InputEmail
            {...{
              register,
              formState,
              defaultValue: auth?.user.username?.email,
            }}
          />
        </div>
      </div>
      {welcome === false && <Profile {...{ auth, formState, register }} />}
      <div className=" flex justify-end">
        <div className="w-3/12">
          <button className="btn_primary" type="submit">
            {TYPE_ACTION_BUTTON[type].name}
          </button>
        </div>
      </div>
    </form>
  )
}

const Profile = ({ auth, formState, register }) => (
  <div className="grid md:grid-cols-2 gap-x-8 gap-y-2">
    <div>
      <Input
        name="Nombres"
        register={register('names', {
          required: true,
        })}
        customError={true}
        defaultValue={auth?.user.username?.names}
        error={formState.errors.names}
      />
      <Input
        name="Fecha de Nacimiento"
        type="date"
        register={register('dateOfBirth', {
          required: true,
        })}
        customError={true}
        defaultValue={formDateToYearMonthDay(auth?.user.username?.dateOfBirth)}
        error={formState.errors.dateOfBirth}
      />
    </div>
    <div>
      <Input
        name="Apellidos"
        register={register('lastName', {
          required: true,
        })}
        customError={true}
        defaultValue={auth?.user.username?.lastName}
        error={formState.errors.lastName}
      />
    </div>
  </div>
)
