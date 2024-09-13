function aleatorio(min, max){
    return Math.floor(Math.random()*(max - min+1)+min)
}
    function eleccion(jugada) {
        let resultado = ""
        if (jugada == 1) {
            resultado = "piedra🪨"
        }
        else if (jugada == 2) {
            resultado = "papel🗞️"
        }
        else if (jugada == 3) {
            resultado = "tijera✂️"
        }
        else {
            resultado = "Mira las opciones :p"
        }
        return resultado
    }
    function combate(pc, jugador ){
        let desenlace = ""
        //combate

        if (pc == jugador){
            desenlace = "EMPATE🤝"
        }
        else if (jugador == 1 && pc == 3 || jugador == 2 && pc == 1 ||jugador == 3 && pc == 2 ){
            desenlace = "GANASTE🥇"
            triunfos++ 
        }   
        else{
            desenlace = "PERDISTE🥉"
            perdidas++
        }
        return desenlace
        
    }
    //1 --> piedra
    //2 --> papel
    //3 --> tijera
    let min = 1
    let max = 3
    let jugador = 0
    let pc = 0
    let triunfos = 0
    let perdidas = 0

    while (triunfos<3 && perdidas<3) {
        pc = aleatorio(1,3)
        jugador = prompt("Elige 1 --> piedra🪨 / 2 --> papel🗞️ / 3 --> tijera✂️")
        //alert("Elegiste " + jugador)

        alert("PC elige " + eleccion(pc))
        alert("TU eliges " + eleccion(jugador))
        alert("TU " + combate(pc, jugador))
        
    }
    alert ("GANASTE " + triunfos +" Veces y PERDISTE " + perdidas + " Veces")