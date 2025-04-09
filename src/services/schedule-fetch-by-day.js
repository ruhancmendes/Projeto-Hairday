// Lista os agendamentos do dia.

// Importa o dayjs para usar na filtragem por dia
import dayjs from "dayjs";

// Importa a API para usar no fetch
import { apiConfig } from "./api-config.js";

export async function scheduleFetchByDay({ date }) {
    try {
        // Busca os dados na API (fazendo a requisição.)
        const response = await fetch(`${apiConfig.baseURL}/schedules`)

        // Converte para JSON.
        const data = await response.json()
        
        // Filtra os agendamentos pelo dia selecionado.
        const dailySchedules = data.filter(( schedule) => 
        dayjs(date).isSame(schedule.when, "day"))
        
    } catch (error) {
        console.log(error);
        alert("Não foi possível buscar os agendamentos do dia.");
    }
}