// const express = require('express') --- commonjs
import express from 'express' // ESModules

import diaryRouter from './routes/diaries'

const app = express()

app.use(express.json()) // middleware that transforms req.body into JSON

const PORT = 3000

app.get('/ping', (_req, res) => {
  console.log('Someone pinged here')
  res.send('pong')
})

app.use('/api/diaries', diaryRouter)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
