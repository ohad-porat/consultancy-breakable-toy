import objection from "objection"

const { DataError, NotFoundError, NotNullViolationError, ValidationError, UniqueViolationError } =
  objection

// eslint-disable-next-line no-unused-vars
export const handleErrors = (error, req, res, next) => {
  // eslint-disable-next-line no-console
  console.error(error)
  if (
    error instanceof NotNullViolationError ||
    error instanceof ValidationError ||
    error instanceof DataError ||
    error instanceof UniqueViolationError
  ) {
    return res.status(422).json({ error })
  }
  if (error instanceof NotFoundError) {
    return res.status(404).json({ error })
  }
  return res.status(500).json({ error })
}
