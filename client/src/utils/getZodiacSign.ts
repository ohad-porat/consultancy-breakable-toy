import { parseISO } from "date-fns"
import tellSign from "sign-teller"

export const getZodiacSign = (birthday: string): string => {
  const parsedDate = parseISO(birthday)
  const day = parsedDate.getDate()
  const month = parsedDate.getMonth()
  const sign = tellSign({ day, month }, "tropical") || ""

  return sign.sign
}
