import express from 'express'

import { port } from './configuration.js'
import providerRoute from '../src/routes/providers-route.js'

const app = express()

app.use(express.json())
app.use(providerRoute)

app.listen(port, () => console.log(`Server running on port ${port}`))
