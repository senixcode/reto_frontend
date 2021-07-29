import React, { useContext } from 'react'
import { UserContext } from '../../context/UserProvider'
import formatePhone from '../../help/formatePhone'
import Modal from '../molecules/Modal'

export default function ModalDetailUser({ closeModal, isOpen }) {
  const { user } = useContext(UserContext)
  const detail = [
    {
      icon: 'uil uil-file-alt',
      name: user?.SpecializationProgram,
    },
    {
      icon: 'uil uil-location-point',
      name: user?.headquarters,
    },
    {
      icon: 'uil uil-mobile-android',
      name: formatePhone(user?.phone),
    },
    {
      icon: 'uil uil-message',
      name: user?.email,
    },
  ]
  return (
    <Modal closeModal={closeModal} isOpen={isOpen}>
      <div className="flex justify-between items-center pb-1 border-b-2 border-neutral-400">
        <h4 className="text-sm">PERFIL</h4>
        <span className="cursor-pointer" onClick={() => closeModal()}>
          <i className="uil uil-multiply"></i>
        </span>
      </div>
      <div className="my-2">
        <h3 className="font-semibold text-lg">{`${user?.names} ${user?.lastName}`}</h3>
        <p className="mt-1 text-neutral-600"> {user?.profile}</p>
      </div>
      <div>
        {detail.map(({ icon, name }, i) => (
          <div key={i} className="flex gap-x-6 items-center">
            {name && (
              <>
                <i className={`${icon} text-primary-900 text-lg`} />
                <span>{name}</span>
              </>
            )}
          </div>
        ))}
        <button className="btn_primary">Mandar mensaje</button>
      </div>
    </Modal>
  )
}
