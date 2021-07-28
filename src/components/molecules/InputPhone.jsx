import validationsInputs from '../../help/validationsInputs'
import Input from './Input'
export default function InputPhone({
  register,
  formState,
  defaultValue,
  required = true,
}) {
  return (
    <Input
      name="Celular"
      register={register('phone', {
        required,
        pattern: {
          value: validationsInputs.phoneNumberLenght9,
          message: 'Ingrese 9 caracteres numericos',
        },
      })}
      error={formState.errors.phone}
      defaultValue={defaultValue}
      customError={true}
    />
  )
}
