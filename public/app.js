function renderTopics(topics) {
  return topics.map(topic => `
    <li class="topic">
      <div class="topic-header">
        <span class="topic-name">${topic.nombre}</span>
        <form class="vote-form" action="/topics/${topic.id}/vote" method="POST">
          <button type="submit">Votar (${topic.votos})</button>
        </form>
      </div>

      <ul class="links">
        ${topic.enlaces.map(enlace => `
          <li class="link">
            <a class="link-url" href="${enlace.url}" target="_blank" rel="noreferrer">${enlace.url}</a>
            <div class="link-actions">
              <form action="/topics/${topic.id}/links/${enlace.id}/delete" method="POST">
                <button type="submit">Borrar enlace</button>
              </form>
              <form action="/topics/${topic.id}/links/${enlace.id}/update" method="POST">
                <input type="text" name="nuevaURL" value="${enlace.url}">
                <button type="submit">Actualizar enlace</button>
              </form>
              <form class="vote-form" action="/topics/${topic.id}/links/${enlace.id}/vote" method="POST">
                <button type="submit">Votar (${enlace.votos})</button>
              </form>
            </div>
          </li>
        `).join('')}
      </ul>

      <div class="topic-actions">
        <form action="/topics/${topic.id}/delete" method="POST">
          <button type="submit">Borrar</button>
        </form>
        <form action="/topics/${topic.id}/update" method="POST">
          <input type="text" name="nuevoNombre" value="${topic.nombre}">
          <button type="submit">Actualizar</button>
        </form>
        <form action="/topics/${topic.id}/links" method="POST">
          <input type="text" name="link" placeholder="URL del enlace" required>
          <button type="submit">Agregar enlace</button>
        </form>
      </div>
    </li>
  `).join('')
}
document.addEventListener('DOMContentLoaded', () => {
  const list = document.getElementById('topicsList')
    list.addEventListener('submit', function(e){
    if (e.target.classList.contains('vote-form')){
      e.preventDefault()
      fetch(e.target.action, {method: 'POST'})
        .then(res => res.json())
        .then(topics => {
          list.innerHTML = renderTopics(topics)
        })
        .catch(err => console.error(err))
    }
  })
})
