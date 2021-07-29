import { useContext } from 'react'
import { UserContext } from '../../context/UserProvider'

export default function CardUser({ openModal, user }) {
  const { setUser } = useContext(UserContext)
  const handleOpenModal = () => {
    setUser(user)
    openModal()
  }
  return (
    <div className="max-w-xs py-4 px-8 bg-white shadow-lg rounded-lg my-20">
      <div className="flex justify-center md:justify-center -mt-16">
        <img
          className="w-20 h-20 object-cover rounded-full"
          src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
          alt="perfil"
        />
      </div>
      <div className="text-neutral-800 text-center">
        <h2 className="text-xl font-medium">{user?.names}</h2>
        <p className="text-sm">{user?.SpecializationProgram}</p>
      </div>
      <div className="flex justify-end mt-4">
        <span
          className="font-medium text-primary-500 cursor-pointer"
          onClick={() => handleOpenModal()}
        >
          <i className="uil uil-plus-circle"></i> ver mas
        </span>
      </div>
    </div>
  )
}
