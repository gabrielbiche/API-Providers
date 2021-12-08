import express from 'express'

import { port } from './configuration'

const app = express()

app.use(express.json())
app.listen(port, () => console.log(`Server running on port ${port}`))

app.get('/', (req, res) => res.send('ola'))
