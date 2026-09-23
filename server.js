const express = require('express')
const path = require('path')
const controllers = require('./controllers')

const app = express()
const PORT = process.env.PORT || 3000

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', controllers.getTopics)

app.post('/topics', controllers.createTopic)
app.post('/topics/:id/delete', controllers.deleteTopic)
app.post('/topics/:id/update', controllers.updateTopic)
app.post('/topics/:id/vote', controllers.voteTopic)

app.post('/topics/:id/links', controllers.createLink)
app.post('/topics/:id/links/:linkId/delete', controllers.deleteLink)
app.post('/topics/:id/links/:linkId/update', controllers.updateLink)
app.post('/topics/:id/links/:linkId/vote', controllers.voteLink)

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})
