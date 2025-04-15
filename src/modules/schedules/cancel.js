// Cancela um agendamento.

import { schedulesDay } from "./load.js"; // Importa o arquivo de carregamento.

import { scheduleCancel } from "../../services/schedule-cancel.js"; // Importa a função de cancelamento de agendamento.

const periods = document.querySelectorAll(".period"); // Seleciona todos os elementos com a classe "period"

// Gera evento click para cada lista (manhã, tarde e noite)
periods.forEach((period) => {
  // Captura o evento de clique na lista.
  period.addEventListener("click", async (event) => {
    if (event.target.classList.contains("cancel-icon")) {
      // Verifica se o elemento clicado possui a classe "cancel-icon"

      const item = event.target.closest("li"); // Obtém a li pai do elemento clicado.

      const { id } = item.dataset; // Desestrutura o id do elemento clicado.

      if (id) {
        // Verifica se deseja cancelar o item clicado.
        const isConfirm = confirm(
          "Tem certeza que deseja cancelar o agendamento?"
        );

        if (isConfirm) {
          await scheduleCancel({ id }); // Chama a função de cancelamento de agendamento.
          schedulesDay(); // Atualiza a lista de agendamentos.
        }
      }
    }
  });
});
