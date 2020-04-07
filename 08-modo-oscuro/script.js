window.onload = () => {
  document.getElementById('boton-modo-claro').onclick = () =>
    document.body.classList.remove('modo-oscuro')

  document.getElementById('boton-modo-oscuro').onclick = () =>
    document.body.classList.add('modo-oscuro')
}
