import Input from './Input'

export default function InputPassword({
  register,
  formState,
  required = true,
}) {
  return (
    <Input
      name="Contraseña"
      register={register('password', {
        required,
      })}
      customError={true}
      type="password"
      error={formState.errors.password}
    />
  )
}
