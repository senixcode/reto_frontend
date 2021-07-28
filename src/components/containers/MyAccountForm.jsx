import React, { useContext } from 'react'
import { WelcomeContext } from '../../context/WelcomeProvider'
import Input from '../molecules/Input'
import SelectHeadquarters from '../molecules/SelectHeadquarters'
export const TYPE_MYACCOUNT_FORM = {
  Home: 'home',
  Profile: 'profile',
}
export default function MyAccountForm({ type }) {
  const { setWelcome } = useContext(WelcomeContext)
  const TYPE_ACTION_BUTTON = {
    [TYPE_MYACCOUNT_FORM.Home]: {
      name: 'Continuar',
      click: () => setWelcome(false),
    },
    [TYPE_MYACCOUNT_FORM.Profile]: {
      name: 'Guardar',
    },
  }
  return (
    <form className="flex flex-col mt-8">
      <Input name="Perfil" />
      <div className="grid md:grid-cols-2 gap-x-8 gap-y-2">
        <div>
          <Input name="Programa de especialización" />
          <SelectHeadquarters />
        </div>
        <div>
          <Input name="Celular" />
          <Input name="Correo electronico" />
        </div>
      </div>
      <div className=" flex justify-end">
        <div className="w-3/12">
          <button
            className="btn_primary"
            onClick={() => TYPE_ACTION_BUTTON[type].click()}
          >
            {TYPE_ACTION_BUTTON[type].name}
          </button>
        </div>
      </div>
    </form>
  )
}
