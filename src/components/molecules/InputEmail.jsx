import validationsInputs from '../../help/validationsInputs'
import Input from './Input'

export default function InputEmail({
  register,
  formState,
  defaultValue,
  required = true,
}) {
  return (
    <Input
      name="Correo"
      register={register('email', {
        required,
        pattern: {
          value: validationsInputs.emailRegex,
          message: 'Correo Incorrecto',
        },
      })}
      error={formState.errors.email}
      defaultValue={defaultValue}
      customError={true}
    />
  )
}
