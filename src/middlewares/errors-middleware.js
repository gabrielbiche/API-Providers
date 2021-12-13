import { NotFound } from '../errors/NotFound.js'
import { InvalidField } from '../errors/InvalidField.js'
import { NoDataProvided } from '../errors/NoDataProvided.js'

const middlewareErrors = (error, request, response, next) => {
  let status = 500

  if (error instanceof NotFound) status = 404

  if (error instanceof InvalidField || error instanceof NoDataProvided)
    status = 400

  response.status(status).json({ Message: error.message, id: error.idError })
}

export default middlewareErrors
