import path from 'path'
import express from 'express'
import bodyParser from 'body-parser'

const app = express()
const clientpath = 'node_modules/rankings-client/build'

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static(clientpath))

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
