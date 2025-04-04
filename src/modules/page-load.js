// Captura o evento de quando os elementos forem carregados na página.

import { schedulesDay } from "./schedules/load.js"


document.addEventListener("DOMContentLoaded", function(){
    schedulesDay()
})