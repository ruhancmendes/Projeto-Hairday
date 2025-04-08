import { schedulesDay } from "../schedules/load"
// Seleciona o input de data
const selectedDated = document.getElementById("date")
//Recarrega a lista de horários  quando o input de data for alterado.
selectedDated.onchange = () => schedulesDay()