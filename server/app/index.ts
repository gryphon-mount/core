import express from 'express'

const app = express()

app.get('*', (req: any, res: any) => res.send({ ping: 'ok', route: '/' }))

export default app
