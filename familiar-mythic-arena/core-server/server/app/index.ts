import path from 'path'
import express from 'express'
import bodyParser from 'body-parser'

const app = express()

app.use(express.static('node_modules/rankings-client/build'))
app.use(express.static('node_modules/admin-client/build'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/api', (req: any, res: any) =>
  res.send({ ping: 'ok', route: req.url })
)

app.get('/api/*', (req: any, res: any) =>
  res.send({ ping: 'ok', route: req.url })
)

app.get('/admin', function(req: any, res: any) {
  res.sendFile(
    path.join(__dirname, '../../node_modules/admin-client/build/index.html')
  )
})

app.get('/admin/*', function(req: any, res: any) {
  res.sendFile(
    path.join(__dirname, '../../node_modules/admin-client/build/index.html')
  )
})

app.get('*', function(req: any, res: any) {
  res.sendFile(
    path.join(__dirname, '../../node_modules/rankings-client/build/index.html')
  )
})

export default app
