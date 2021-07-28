import React from 'react'
import Modal from '../molecules/Modal'

export default function ModalDetailUser({ closeModal, isOpen }) {
  return (
    <Modal closeModal={closeModal} isOpen={isOpen}>
      <div className="flex justify-between items-center pb-1 border-b-2 border-neutral-400">
        <h4 className="text-sm">PERFIL</h4>
        <span className="cursor-pointer" onClick={() => closeModal()}>
          <i className="uil uil-multiply"></i>
        </span>
      </div>
      <div className="my-2">
        <h3 className="font-semibold text-lg">Nombre del usuario</h3>
        <p className="mt-1 text-neutral-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
          accusantium debitis illo alias facilis pariatur deleniti iste eveniet
          sunt aut enim, assumenda, fugit sit eligendi expedita perferendis sint
          maxime distinctio.
        </p>
      </div>
      <div>
        {[
          {
            icon: 'uil uil-file-alt',
            name: 'Front-End',
          },
          {
            icon: 'uil uil-location-point',
            name: 'Front-End',
          },
          {
            icon: 'uil uil-mobile-android',
            name: '977 663 454',
          },
          {
            icon: 'uil uil-message',
            name: 'hola@gmail.com',
          },
        ].map(({ icon, name }, i) => (
          <div key={i} className="flex gap-x-6 items-center">
            <i className={`${icon} text-primary-900 text-lg`} />
            <span>{name}</span>
          </div>
        ))}
        <button className="btn_primary">Mandar mensaje</button>
      </div>
    </Modal>
  )
}
