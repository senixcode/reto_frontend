import { useContext, useState } from 'react'
import ModalDetailUser from '../components/containers/ModalDetailUser'
import MyAccountForm, {
  TYPE_MYACCOUNT_FORM,
} from '../components/containers/MyAccountForm'
import CardUser from '../components/molecules/CardUser'
import { WelcomeContext } from '../context/WelcomeProvider'

export default function Home() {
  const { welcome } = useContext(WelcomeContext)
  let [isOpen, setIsOpen] = useState(false)
  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <ModalDetailUser closeModal={closeModal} isOpen={isOpen} />
      <div className="p-8 md:w-9/12 lg:w-10/12 bg-neutral-50">
        {welcome ? (
          <>
            <h1 className="title">Cuéntanos sobre ti</h1>
            <h3 className="text-lg font-semibold text-neutral-800">
              esta información la podrán ver los demás personas
            </h3>
            <MyAccountForm type={TYPE_MYACCOUNT_FORM.Home} />
          </>
        ) : (
          <>
            <div>
              <input type="text" placeholder="Buscar" className="rounded-lg" />
            </div>
            <div className="flex flex-wrap gap-x-8">
              <CardUser openModal={openModal} />
            </div>
          </>
        )}
      </div>
    </>
  )
}
