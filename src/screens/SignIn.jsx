import { Link } from 'react-router-dom'
import SigninImgSvg from '../components/atoms/SigninImgSvg'
import FormSignup from '../components/containers/FormSignup'
import Input from '../components/molecules/Input'
import { ROUTES } from '../routes/AppRouter'

export default function SignIn() {
  return (
    <main className="flex flex-col md:flex-row h-screen items-center ">
      <SigninImgSvg />
      <div className="bg-white w-full md:w-1/2  h-screen px-6 lg:px-16 flex items-center justify-center">
        <div className="w-full h-100 ">
          <div className="flex w-full justify-center">
            <form className="grid w-full">
              <Input name="Correo" />
              <Input name="Contraseña" />
              <Link to={ROUTES.signup}>
                <span className="block text-right font-medium text-sm">
                  ¿Desea registrarse?
                </span>
              </Link>
              <button className="btn_primary">Iniciar Sesión</button>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}
