// Carrega os horários do dia, a partir do horário de funcionamento.

import dayjs from "dayjs" //importa a biblioteca dayjs para manipulação de datas
import { openingHours } from "../../utils/opening-hours.js" //importa a função que define os horários de funcionamento

export function hoursLoad({ date }){
    const opening = openingHours.map((hour) => {
        //Recupera somente a hora.
        const [scheduleHour] = hour.split(":")

        // Adiciona a hora na data e verifica se está no passado.
        const isHourPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs())

        return{
            hour,
            available: isHourPast,
        }
    })
}