export class NoDataProvided extends Error {
  constructor() {
    const message = 'No update data provided'
    super(message)
    this.name = 'NoDataProvided'
    this.idError = 2
  }
}
