AOS.init();


// const dataDoEvento = new Date("Dec 12, 2023 19:00:00")
// const timeStampDoEvento = dataDoEvento.getTime()

// const contador = setInterval(function(){
//     const agora = new Date();
//     const timeStampAtual = agora.getTime();

//     const ateOEvento = timeStampDoEvento - timeStampAtual;

//     const diasAteOEvento = Math.floor(ateOEvento / (1000 * 60 * 60 * 24)
//     )
//     const horasAteOEvento = Math.floor(ateOEvento % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)
//     )
//     const minutosAteOEvento = Math.floor(ateOEvento %(1000 * 60 * 60 * 24) % (1000 * 60 * 60) /(1000 * 60))
//     const segundosAteOEvento = Math.floor(ateOEvento % (1000 * 60 * 60 * 24) % (1000 * 60 * 60) % (1000 * 60) / (1000))

//     const restante = document.getElementById('contador')
//     restante.innerText = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m e ${segundosAteOEvento}s`

// }, 1000);

const dataEvento = new Date(`Dec 12, 2025 19:00:00`)
const dataEventoTimeSamp = dataEvento.getTime()

const contador = setInterval(function() {  
    const agora = new Date()
    const agoraTimeSamp = agora.getTime()

    const dia = (1000 * 60 * 60 * 24)
    const hora = (1000 * 60 * 60)
    const minuto = (1000 * 60)
    const segundo = (1000)

    const tempoAteEvento = dataEventoTimeSamp - agoraTimeSamp
    const diasAteOEvento = Math.floor(tempoAteEvento / dia)
    const horasAteOEvento = Math.floor(tempoAteEvento % dia / hora)
    const minutosAteOEvento = Math.floor(tempoAteEvento % dia % hora / minuto)
    const segundosAteOEvento = Math.floor(tempoAteEvento % dia % hora % minuto / segundo)

    const restante = document.getElementById('contador')
    restante.innerText = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m e ${segundosAteOEvento}s`

    if(tempoAteEvento < 0){
        clearInterval(contador)
        restante.innerText = 'O evento espirou'
    }

}, 1000)


