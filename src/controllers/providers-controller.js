import Provider from '../models/Provider.js'
import providersDao from '../dao/providers-dao.js'

const index = async (request, response) => {
  const result = await providersDao.list()
  return response.status(200).json(result)
}

const show = async (request, response, next) => {
  try {
    const id = parseInt(request.params.id)
    const provider = new Provider({ id: id })
    await provider.load()
    response.status(200).json(provider)
  } catch (error) {
    next(error)
  }
}

const store = async (request, response, next) => {
  try {
    const { company, email, category } = request.body
    const provider = new Provider({ company, email, category })
    await provider.create()
    response.status(201).json(provider)
  } catch (error) {
    next(error)
  }
}

const update = async (request, response, next) => {
  try {
    const id = request.params.id
    const { company, email, category } = request.body
    const data = Object.assign({}, { company, email, category }, { id: id })
    const provider = new Provider(data)
    await provider.update()
    response.status(204).end()
  } catch (error) {
    next(error)
  }
}

const exclude = async (request, response, next) => {
  try {
    const id = request.params.id
    const provider = new Provider({ id: id })
    await provider.load()
    await provider.remove()
    response.status(204).end()
  } catch (error) {
    next(error)
  }
}

export default {
  index,
  show,
  store,
  update,
  exclude
}
