const app = require('express')()
const server = require('http').createServer(app)
const cors = require('cors');

app.use(cors({
  credentials: true,
  origin: 'http://localhost:8080'
}));

app.get('/auth/me', (req,res) => {
  return res.send({ data: { id: 1, username: "orlov" }, code: 100 })
})

server.listen(3030, () => {
  console.log('started')
})