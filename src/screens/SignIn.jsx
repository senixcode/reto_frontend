import SigninImgSvg from '../components/atoms/SigninImgSvg'
import FormSignIn from '../components/containers/FormSignIn'

export default function SignIn() {
  return (
    <main className="flex flex-col md:flex-row h-screen items-center ">
      <SigninImgSvg />
      <div className="bg-white w-full md:w-1/2  h-screen px-6 lg:px-16 flex items-center justify-center">
        <div className="w-full h-100 ">
          <div className="flex w-full justify-center">
            <FormSignIn />
          </div>
        </div>
      </div>
    </main>
  )
}
