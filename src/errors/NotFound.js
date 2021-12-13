export class NotFound extends Error {
  constructor() {
    const message = 'Provider not found'
    super(message)
    this.name = 'NotFound'
    this.idError = 0
  }
}

