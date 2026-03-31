document.addEventListener('DOMContentLoaded', () => {
  const botaoLogin = document.getElementById('bot')
  const botaoEntrarSemLogin = document.getElementById('bot2')

  botaoEntrarSemLogin.addEventListener('click', e => {
    e.preventDefault()
    window.location.href = 'telainicio.html'
  })

  botaoLogin.addEventListener('click', e => {
    e.preventDefault()

    const nome = document.getElementById('nm').value
    const senha = document.getElementById('sn').value

    if (
      (nome === 'eduardogay123' && senha === 'eduardogay123') ||
      (nome === 'admin' && senha === 'admin')
    ) {
      window.location.href = 'telainicio.html'
    } else {
      document.getElementById('erro').style.display = 'block'
    }
  })
})
