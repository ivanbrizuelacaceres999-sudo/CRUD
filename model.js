let topics = [
    {
        id: 1,
        nombre: "¿Por qué olvidamos lo que acabamos de aprender?",
        votos: 0,
        enlaces: [
            { id: 1, url: "https://www.bbc.com/mundo/noticias-49790635", votos: 0 }
        ]
    },
    {
        id: 2,
        nombre: "¿Cómo aprende una inteligencia artificial?",
        votos: 0,
        enlaces: [
            { id: 2, url: "https://www.psychologytoday.com/us/basics/memory", votos: 0 }
        ]
    },
    {
        id: 3,
        nombre: "Cómo pasar de copiar código a entenderlo",
        votos: 0,
        enlaces: [
            { id: 3, url: "https://es.wikipedia.org/wiki/Curva_del_olvido", votos: 0 }
        ]
    }
]
function createTopic(nombre){
    const newTopic = {
        id: (topics.length) + 1,
        nombre,
        votos: 0,
        enlaces: []
    }
    topics.push(newTopic)
}
function deleteTopic(id){
    const indice = topics.findIndex(t => t.id === parseInt(id))
    if (indice === -1) return false
    topics.splice(indice, 1)
    return true
}
function updateTopic(id, nuevoNombre){
    const indice = topics.findIndex(t => t.id === parseInt(id))
    if (indice !== -1){
        topics[indice].nombre = nuevoNombre;
        return true
    }
    return false
}
function getAllTopics(){
    const copiaTopicsArray = [...topics]
    copiaTopicsArray.sort((a, b) => b.votos - a.votos)
    copiaTopicsArray.forEach(c => {c.enlaces.sort((a, b) => b.votos - a.votos)});
    return copiaTopicsArray
}
function createLink(topicId, url){
    const topic = topics.find(t => t.id === parseInt(topicId))
    if (!topic) return false
    const newLink = {
        id: (topic.enlaces.length) +1,
        url,
        votos: 0
    }
    topic.enlaces.push(newLink)
    return true
}
function deleteLink(topicId, linkId){
    const topic = topics.find(t => t.id === parseInt(topicId))
    if (!topic) return false
    const link = topic.enlaces.findIndex(e => e.id === parseInt(linkId))
    if (link !== -1){
        topic.enlaces.splice(link, 1)
        return true
    } 
    return false
}
function updateLink(topicId, linkId, nuevaURL){
    const topic = topics.find(t => t.id === parseInt(topicId))
    if (!topic) return false
    const link = topic.enlaces.findIndex(e => e.id === parseInt(linkId))
    if (link !== -1){
        topic.enlaces[link].url = nuevaURL;
        return true
    }
    return false
}
function voteTopic(id){
    const topic = topics.find(t => t.id === parseInt(id))
    if (!topic) return false
    topic.votos = topic.votos +1;
    return true
}
function voteLink(topicId, linkId){
    const topic = topics.find(t => t.id === parseInt(topicId))
    if (!topic) return false
    const link = topic.enlaces.find(e => e.id === parseInt(linkId))
    if (!link) return false
    link.votos = link.votos +1;
    return true
}
module.exports = {topics, createTopic, deleteTopic, updateTopic, createLink, deleteLink, updateLink, voteTopic, voteLink, getAllTopics}