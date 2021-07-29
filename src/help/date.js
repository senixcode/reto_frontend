import { addHours, format } from 'date-fns'

export const formDateToDayMonthYear = (formDate) => {
  if (formDate) {
    const date = new Date(formDate)
    return format(addHours(date, 12), 'dd-MM-yyyy')
  }
}
export const formDateToYearMonthDay = (formDate) => {
  if (formDate) {
    const date = new Date(formDate)
    return format(addHours(date, 12), 'yyyy-MM-dd')
  }
}
