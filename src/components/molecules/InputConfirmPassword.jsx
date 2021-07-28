import Input from './Input'
const message = 'Las contraseñas no coinciden'
export default function InputConfirmPassword({
  register,
  formState,
  getValues,
  required = true,
}) {
  return (
    <Input
      name="Comfirmar Contraseña"
      register={register('confirmPassword', {
        required,
        validate: (value) => value === getValues().password || message,
      })}
      customError={true}
      type="password"
      error={formState.errors.confirmPassword}
    />
  )
}
