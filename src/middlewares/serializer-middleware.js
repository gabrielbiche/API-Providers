import Serializer from '../Serializer'

const middlewareSerializer = (request, response, next) => {
  let requiredFormat = request.header('Accept')
  const acceptedFormats = Serializer.acceptedFormats
  if (requiredFormat === '*/*') requiredFormat = 'application/json'
  if (acceptedFormats.indexOf(requiredFormat) === -1) response.status(406).end()
  response.setHeader('Content-Type', requiredFormat)
  next()
}

export default middlewareSerializer
