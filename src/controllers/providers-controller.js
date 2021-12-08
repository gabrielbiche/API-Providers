import Provider from '../models/Provider.js'

const getAllProvider = async (request, response) => {
  try {
    const result = await Provider.findAll()
    return response.status(200).json(result)
  } catch (error) {
    return response.status(400).json(error)
  }
}

const getAProvider = async (request, response) => {
  try {
    const id = parseInt(request.params.id)
    const result = await Provider.findByPk(id)
    return response.status(200).json(result)
  } catch (error) {
    return response.status(400).json(error)
  }
}

const createProvider = async (request, response) => {
  try {
    const { company, email, category } = request.body
    const result = await Provider.create({ company, email, category })
    return response.status(201).json(result)
  } catch (error) {
    return response.status(400).json(error)
  }
}

const updateProvider = async (request, response) => {}

const deleteProvider = async (request, response) => {}

export default {
  getAllProvider,
  getAProvider,
  createProvider,
  updateProvider,
  deleteProvider
}
