import SigninImgSvg from '../components/atoms/SigninImgSvg'
import FormSignup from '../components/containers/FormSignup'

export default function SignUp() {
  return (
    <main className="flex flex-col md:flex-row min-h-screen items-center">
      <SigninImgSvg />
      <div className=" bg-white w-full md:w-1/2 px-6 md:px-12 flex items-center justify-center">
        <div className="w-full h-100 ">
          <div className="flex w-full justify-center">
            <FormSignup />
          </div>
        </div>
      </div>
    </main>
  )
}
