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

const dataEvento = new Date(`Dec 12, 2023 19:00:00`)
const dataEventoTimeSamp = dataEvento.getTime()

const contador = setInterval(function() {  
    const agora = new Date()
    const agoraTimeSamp = agora.getTime()

    const tempoAteEvento = dataEventoTimeSamp - agoraTimeSamp
    const dias = Math.floor(tempoAteEvento / (1000 * 60 * 60 * 24))
    const horas = Math.floor(tempoAteEvento % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const minutos = Math.floor(tempoAteEvento % (1000 * 60 * 60 * 24) % (1000 * 60 * 60) / (1000 * 60))
    const segundos = Math.floor(tempoAteEvento % (1000 * 60 * 60 * 24) % (1000 * 60 * 60) % (1000 * 60) / (1000))

    const restante = document.getElementById('contador')
    restante.innerText = `${dias}d ${horas}h ${minutos}m e ${segundos}s`

}, 1000)


