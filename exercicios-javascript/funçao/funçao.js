// é uma sequência de instruções que realizam uma tarefa específica, empacotada como uma unidade. essa unidade pode então ser usada em programas sempre que esta tarefa específica precisar ser realizada. Hoje você aprenderá a usar funções para organizar seus programas em blocos de código.

// função com parâmetros
function soma(numero1, numero2) {
    return numero1 + numero2
}

soma(2, 2) // retorna 4

// função sem parâmetros
function hello() {
    return 'Hello!'
}

hello() // retorna 'Hello!'

// passar diversas instruções para a função
function fazerMedia(notaTotal, numeroDeEstudantes) {
    let media = notaTotal / numeroDeEstudantes
    return media 
}

fazerMedia(1680, 20) // retorna 84