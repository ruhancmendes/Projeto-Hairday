// Configurando o submit do formulário.
import dayjs from "dayjs"; // Importa a biblioteca dayjs para manipulação de datas.

import { scheduleNew } from "../../services/schedule-new.js"; // Importa a função scheduleNew para agendar um novo horário.

import { schedulesDay } from "../schedules/load.js"; // Importa a função load para recarregar os agendamentos.

const form = document.querySelector("form");
const clientName = document.getElementById("client");
const selectedDate = document.getElementById("date");

// Data atual para o input.
const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

// Carrega a data atual para o campo de data do formulário e Define a data mínima como sendo o dia atual.
selectedDate.value = inputToday;
selectedDate.min = inputToday;

form.onsubmit = async (event) => {
  event.preventDefault(); // Previne o comportamento padrão do formulário de atualizar a página após o envio.

  try {
    // Recuperando o nome do cliente.
    const name = clientName.value.trim();

    if (!name) {
      return alert("Informe o nome do cliente!");
    }

    // Recuperando o horário selecionado.
    const hourSelected = document.querySelector(".hour-selected");

    if (!hourSelected) {
      return alert("Selecione um horário!");
    }

    // Recuperando somente a hora
    const [hour] = hourSelected.innerText.split(":");

    // Inserindo a hora na data selecionada.
    const when = dayjs(selectedDate.value).add(hour, "hour");

    // Gerando um ID
    const id = new Date().getTime();

    // Criando um objeto com os dados do agendamento. (faz agendamento)
    await scheduleNew({
      id,
      name,
      when,
    })
    
    // Recarrega os agendamentos. 
    await schedulesDay();

    // Limpa o input de nome do cliente.
    clientName.value = "";

  } catch (error) {
    alert("Não foi possível realizar o agendamento.");
  }
};
