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
export const TYPE_MYACCOUNT_FORM = {
  Home: 'home',
  Profile: 'profile',
}
export default function MyAccountForm({ type }) {
  const auth = useContext(AuthContext)
  const { setWelcome } = useContext(WelcomeContext)
  const { register, handleSubmit, formState } = useForm({
    criteriaMode: 'all',
  })

  const mutation = useMutation(userUpdate, {
    onSuccess: function (data) {
      console.log(data)
      auth.login({ ...data })
      setWelcome(false)
    },
    onError: function (error) {
      console.log('error signup', error)
    },
  })

  const handleCustomSubmit = (body) => {
    const data = { ...body, id: auth?.user.username?._id }
    mutation.mutate({ body: data, token: auth?.user.token })
  }

  const TYPE_ACTION_BUTTON = {
    [TYPE_MYACCOUNT_FORM.Home]: {
      name: 'Continuar',
    },
    [TYPE_MYACCOUNT_FORM.Profile]: {
      name: 'Guardar',
    },
  }
  console.log('hola auth', auth)
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
