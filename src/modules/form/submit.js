// Configurando o submit do formulário.
import dayjs from "dayjs"; // Importa a biblioteca dayjs para manipulação de datas.

const form = document.querySelector("form");
const clientName = document.getElementById("client");
const selectedDate = document.getElementById("date");

// Data atual para o input.
const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

// Carrega a data atual para o campo de data do formulário e Define a data mínima como sendo o dia atual.
selectedDate.value = inputToday;
selectedDate.min = inputToday;

form.onsubmit = (event) => {
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

    
  } catch (error) {
    alert("Não foi possível realizar o agendamento.");
  }
};
