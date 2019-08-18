import path from 'path'
import express from 'express'
import bodyParser from 'body-parser'

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const clientpath = '../../node_modules/familiar-ratings-client/build'

app.use(express.static(path.join(__dirname, clientpath)))

app.get('/api', (req: any, res: any) =>
  res.send({ ping: 'ok', route: req.url })
)

app.get('/api/*', (req: any, res: any) =>
  res.send({ ping: 'ok', route: req.url })
)

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, clientpath))
})

export default app
