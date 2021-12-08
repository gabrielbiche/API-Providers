import Provider from '../models/Provider.js'

Provider
  .sync()
  .then(() => console.log('Providers table created successfully'))
  .catch(console.log)
