// Carrega os horários do dia, a partir do horário de funcionamento.

import dayjs from "dayjs"; //importa a biblioteca dayjs para manipulação de datas
import { openingHours } from "../../utils/opening-hours.js"; //importa a função que define os horários de funcionamento
import { hoursClick } from "./hours-click.js";

const hours = document.getElementById("hours"); //Seleciona o elemento HTML com o id "hours" (UL)

export function hoursLoad({ date }) {
  const opening = openingHours.map((hour) => {
    //Recupera somente a hora.
    const [scheduleHour] = hour.split(":");

    // Adiciona a hora na data e verifica se está no passado.
    const isHourPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs());

    return {
      hour,
      available: isHourPast,
    };
  });

  // Renderiza os horários.
  opening.forEach(({ hour, available }) => {
    const li = document.createElement("li");
    li.classList.add("hour");
    li.classList.add(available ? "hour-available" : "hour-unavailable");

    li.textContent = hour;

    // Adiciona o cabeçalho antes dos horários.
    if(hour === "9:00"){
        hourHeaderAdd("Manhã")
    } else if (hour === "13:00"){
        hourHeaderAdd("Tarde")
    } else if (hour === "18:00"){
        hourHeaderAdd("Noite")
    }


    hours.append(li); // Adiciona o item na UL. o horário na lista.
  });

  // Adiciona o evento de clique para os horários disponíveis.
  hoursClick()
}

// Função para adicionar o cabeçalho dos horários, manhã tarde e noite.
function hourHeaderAdd (title) {
    const header = document.createElement("li")
    header.classList.add("hour-period")
    header.textContent = title

    hours.append(header)
}