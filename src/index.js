import express from 'express'

import { port } from './configuration.js'
import providerRoute from '../src/routes/providers-route.js'
import middlewareErrors from './middlewares/errors-middleware.js'

const app = express()

app.use(express.json())
app.use(providerRoute)
app.use(middlewareErrors)

app.listen(port, () => console.log(`Server running on port ${port}`))
