// Carrega o agendamento do dia.

import { hoursLoad } from "../form/hours-load.js"; //importa a função que define os horários de funcionamento

//Seleciona o input de data.
const selectedDate = document.getElementById("date");

export function schedulesDay() {
  // Obtém a data do input de data.
  const date = selectedDate.value;

  // Renderiza as horas disponíveis.
  hoursLoad({ date });
}
