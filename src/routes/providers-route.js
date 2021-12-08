import { Router } from 'express'

import providersController from '../controllers/providers-controller'

const router = Router()

router.get('/providers', providersController.getAllProvider)
router.get('/providers/:id', providersController.getAProvider)
router.post('/providers', providersController.createProvider)
router.put('/providers/:id', providersController.updateProvider)
router.delete('/providers/:id', providersController.deleteProvider)

export default router
