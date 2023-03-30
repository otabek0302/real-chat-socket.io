const socket = io()
const msg = document.querySelector('.msg')
const form = document.querySelector('.form')
const input = document.querySelector('.input')
const nameBlock = document.querySelector('.name')
const btn = document.querySelector('.btn')

const userName = prompt('Enter your name ?')
nameBlock.innerHTML = `${userName}`

form.onsubmit = e => {
  e.preventDefault()
  if (input.value) {
    socket.emit('chat message', {
      message: input.value,
      name: userName
    })
    input.value = ''
  }
}

socket.on('chat message', data => {
    const item = document.createElement('li')
    item.innerHTML = `<span>${data.name}</span>: ${data.message}`
    msg.appendChild(item)
    window.scrollTo(0, document.body.scrollHeight)
})
