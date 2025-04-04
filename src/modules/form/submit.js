// Configurando o submit do formulário.
import dayjs from "dayjs"; // Importa a biblioteca dayjs para manipulação de datas.


const form = document.querySelector('form');
const selectedDate = document.getElementById("date")

// Data atual para o input.
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

// Carrega a data atual para o campo de data do formulário e Define a data mínima como sendo o dia atual.
selectedDate.value = inputToday
selectedDate.min = inputToday

form.onsubmit = (event) => {
    event.preventDefault(); // Previne o comportamento padrão do formulário de atualizar a página após o envio.
}