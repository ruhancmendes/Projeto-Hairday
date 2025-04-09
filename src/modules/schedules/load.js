// Carrega o agendamento do dia.

import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js"; //importa a função que busca os agendamentos do dia
import { hoursLoad } from "../form/hours-load.js"; //importa a função que define os horários de funcionamento
import { schedulesShow } from "../schedules/show.js"; //importa a função que renderiza os agendamentos

//Seleciona o input de data.
const selectedDate = document.getElementById("date");

export async function schedulesDay() {
  // Obtém a data do input de data.
  const date = selectedDate.value;

  // Busca na API os agendamentos 
  const dailySchedules = await scheduleFetchByDay({ date})

  // Exibe os agendamentos
  schedulesShow({ dailySchedules });

  // Renderiza as horas disponíveis.
  hoursLoad({ date });
}
