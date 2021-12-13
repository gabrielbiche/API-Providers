import providersTable from '../database/providersTable.js'
import { NotFound } from '../errors/NotFound.js'

const list = () => providersTable.findAll()

const insert = provider => providersTable.create(provider)

const getById = async id => {
  const found = await providersTable.findOne({ where: { id: id } })
  if (!found) {
    throw new NotFound()
  }
  return found
}

const update = (id, dataForUpdate) =>
  providersTable.update(dataForUpdate, { where: { id: id } })

const remove = async id => providersTable.destroy({ where: { id: id } })

export default {
  insert,
  list,
  getById,
  update,
  remove
}
