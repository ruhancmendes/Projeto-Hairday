//Adiciona o evento de clique para os horários disponíveis.
export function hoursClick() {
  const hours = document.querySelectorAll('.hour-available');
  console.log(hours)

  hours.forEach((available) => {
    available.addEventListener("click", (selected) => {
      // Remove a classe de selecionado de todos os horários não selecionados.
      hours.forEach((hour) => {
        hour.classList.remove("hour-selected")
      })

      // Adiciona a classe de selecionado ao horário clicado.
      selected.target.classList.add("hour-selected")
    })
  })
}
