// usado para enviar um novo agendamento.

import { apiConfig } from "./api-config.js";

export async function scheduleNew({ id, name, when }) {
  try {
    // Faz a requisição para enviar os dados do agendamento.
    await fetch (`${apiConfig.baseURL}/schedules` , {
        method: "POST",
        headers: {
            "content-Type": "application/json",
        },
        body: JSON.stringify({ id, name, when }),
    })

    // Exibe uma mensagem sobre a requisição.
    alert("Agendamento realizado com sucesso!")
  } catch (error) {
    alert("Não foi possível agendar. Tente novamente mais tarde.");
  }
}
