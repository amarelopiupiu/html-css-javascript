function carregar() {

    var msg = document.getElementById('msg') // Pegou o id 'msg'
    var img = document.getElementById('imagem') // Pegou o id 'imagem'
    var data = new Date() // Vai pegar a data atual
    //var hora = data.getHours() // Vai pegar a hora atual

    var hora = 21

    msg.innerHTML = `Agora são ${hora} horas` // Vai mostrar a mensagem das horas

    if (hora >= 0 && hora < 12) { // Cálculo do dia
        img.scr = 'imagens/manha.png' // Vai mostrar a imagem da manhã
        document.body.style.background = 'green' // Vai mudar o fundo pra verde

    } else if (hora >= 12 && hora < 18) { // Cálculo da tarde
        img.src = 'imagens/tarde.png' // Vai mostrar a imagem da tarde
        document.body.style.background = 'pink' // Vai mudar o fundo para rosa

    } else {
        img.src = 'imagens/noite.png' // Caso não seja nenhum dos cálculos acima, vai mostrar a foto de noite
        document.body.style.background = 'black' // Vai mudar o fundo para preto
    }
}