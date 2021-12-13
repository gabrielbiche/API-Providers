import providersDao from '../dao/providers-dao.js'
import { InvalidField } from '../errors/InvalidField.js'
import { NoDataProvided } from '../errors/NoDataProvided.js'

class Provider {
  constructor({ id, company, email, category, createdAt, updateAt }) {
    this.id = id
    this.company = company
    this.email = email
    this.category = category
    this.createdAt = createdAt
    this.updateAt = updateAt
  }

  async create() {
    this.validate()
    const result = await providersDao.insert({
      company: this.company,
      email: this.email,
      category: this.category
    })
    ;(this.id = result.id),
      (this.createdAt = result.createdAt),
      (this.updateAt = result.updateAt)
  }

  async load() {
    const find = await providersDao.getById(this.id)
    this.company = find.company
    this.email = find.email
    this.category = find.category
    this.createdAt = find.createdAt
    this.updateAt = find.updateAt
  }

  async update() {
    await providersDao.getById(this.id)
    const data = ['company', 'email', 'category']
    const dataForUpdate = {}
    data.forEach(element => {
      const value = this[element]
      if (typeof value === 'string' && value.length > 0)
        dataForUpdate[element] = value
    })
    if (Object.keys(dataForUpdate).length === 0) throw new NoDataProvided()
    await providersDao.update(this.id, dataForUpdate)
  }

  async remove() {
    await providersDao.remove(this.id)
  }

  validate() {
    const data = ['company', 'email', 'category']
    data.forEach(element => {
      const value = this[element]
      if (typeof value !== 'string' || value.length === 0)
        throw new InvalidField(element)
    })
  }
}

export default Provider
