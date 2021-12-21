require('dotenv/config')

const express = require('express')
const list = require('./resources/city.list.min.json')
const normalize = require('./helpers/normalize')

const app = express()

app.get('/', (request, response) => {
  return response.json({message: 'Warmed up'})
})

app.get('/cities/:name', (request, response) => {
  if (typeof request.params.name !== 'string') {
    return response.status(400).send('Missing name parameter')
  }

  const name = normalize(request.params.name)
  const cities = list.filter(city => normalize(city.name).includes(name))

  return response.json(cities)
})

app.listen(process.env.PORT)
