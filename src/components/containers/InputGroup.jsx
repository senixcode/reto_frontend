import ErrorMessageInput from '../atoms/ErrorMessageInput'
import IconInput from '../atoms/IconInput'
import Label from '../atoms/Label'

export default function InputGroup(props) {
  return (
    <>
      <Label text={props.label} />
      <div className="flex">
        <IconInput icon={props.icon} />
        {props.hildren}
      </div>
      <ErrorMessageInput error={props.error} custom={props.customError} />
    </>
  )
}
