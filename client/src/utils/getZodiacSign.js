import tellSign from "sign-teller"

export const getZodiacSign = (parsedDate) => {
  const day = parsedDate.getDate()
  const month = parsedDate.getMonth()
  const sign = tellSign({ day, month }, "tropical") || ""

  return sign.sign
}
