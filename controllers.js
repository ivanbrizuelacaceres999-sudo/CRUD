const topics = require('./model')

module.exports = {
    getTopics: function (req, res) {
        res.render('topics', {
            topics: topics.getAllTopics()
        })
    },
    createTopic: function (req,res){
        const nombre = req.body.nombre
        topics.createTopic(nombre)
        res.redirect('/')
    },
    deleteTopic: function (req,res){
        topics.deleteTopic(req.params.id)
        res.redirect('/')
    },
    updateTopic: function (req, res){
        const id = req.params.id
        const nuevoNombre = req.body.nuevoNombre
        topics.updateTopic(id, nuevoNombre)
        res.redirect('/')
    },
    createLink: function (req, res){
        const id = req.params.id
        const link = req.body.link
        topics.createLink(id, link)
        res.redirect('/')
    },
    deleteLink: function (req,res){
        const topicId = req.params.id
        const linkId = req.params.linkId
        topics.deleteLink(topicId, linkId)
        res.redirect('/')
    },
    updateLink: function (req,res){
        const topicId = req.params.id
        const linkId = req.params.linkId
        const nuevaURL = req.body.nuevaURL
        topics.updateLink(topicId, linkId, nuevaURL)
        res.redirect('/')
    },
    voteTopic: function (req,res){
        const id = req.params.id
        topics.voteTopic(id)
        res.json(topics.getAllTopics())
    },
    voteLink: function (req,res){
        const topicId = req.params.id
        const linkId = req.params.linkId
        topics.voteLink(topicId, linkId)
        res.json(topics.getAllTopics())
    }
}
