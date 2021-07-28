import MyAccountForm, {
  TYPE_MYACCOUNT_FORM,
} from '../components/containers/MyAccountForm'

export default function MyAccount() {
  return (
    <div className="p-8 md:w-9/12 lg:w-10/12 xs:bg-neutral-500 ">
      <h1 className="title">Mi cuenta</h1>
      <MyAccountForm type={TYPE_MYACCOUNT_FORM.Profile} />
    </div>
  )
}
