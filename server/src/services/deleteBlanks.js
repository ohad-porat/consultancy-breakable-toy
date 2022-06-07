export const deleteBlanks = (formInput) => {
  const initialObject = {}
  const cleanObject = Object.keys(formInput).reduce((object, currentField) => {
    if (formInput[currentField] !== "") {
      return { ...object, [currentField]: formInput[currentField] }
    } else {
      return { ...object }
    }
  }, initialObject)
  return cleanObject
}
