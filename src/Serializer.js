import { UnsupportedValue } from './errors/UnsupportedValue.js'

class Serializer {
  json(data) {
    return JSON.stringify(data)
  }

  serialize(data) {
    if (this.contentType === 'application/json') this.json(data)
    throw new UnsupportedValue(this.contentType)
  }
}

export default {
  Serializer: Serializer,
  acceptedFormats: ['application/json']
}
