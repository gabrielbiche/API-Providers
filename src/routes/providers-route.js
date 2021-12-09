import { Router } from 'express'

import providersController from '../controllers/providers-controller.js'

const router = Router()

router.get('/providers', providersController.index)
router.get('/providers/:id', providersController.show)
router.post('/providers', providersController.store)
router.put('/providers/:id', providersController.update)
router.delete('/providers/:id', providersController.exclude)

export default router
