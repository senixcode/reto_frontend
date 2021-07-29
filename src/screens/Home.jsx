import { useContext, useState } from 'react'
import ModalDetailUser from '../components/containers/ModalDetailUser'
import MyAccountForm, {
  TYPE_MYACCOUNT_FORM,
} from '../components/containers/MyAccountForm'
import Users from '../components/containers/Users'
import { WelcomeContext } from '../context/WelcomeProvider'

export default function Home() {
  const { welcome: isWelcome } = useContext(WelcomeContext)
  let [isOpen, setIsOpen] = useState(false)
  const closeModal = () => setIsOpen(false)
  const openModal = () => setIsOpen(true)

  return (
    <>
      <ModalDetailUser closeModal={closeModal} isOpen={isOpen} />
      <div className="p-8 md:w-9/12 lg:w-10/12 bg-neutral-50">
        {isWelcome ? (
          <>
            <h1 className="title">Cuéntanos sobre ti</h1>
            <h3 className="text-lg font-semibold text-neutral-800">
              esta información la podrán ver los demás personas
            </h3>
            <MyAccountForm type={TYPE_MYACCOUNT_FORM.Home} />
          </>
        ) : (
          <Users openModal={openModal} />
        )}
      </div>
    </>
  )
}
