// você pode criar um array literal usando colchetes para demarcar o início e o fim de um array, da mesma forma que você faz com as aspas nas strings. Então [] é um array vazio, um array sem itens.

let myArray = []

// para colocar coisas no array quando você o criar, basta colocar esses dados entre colchetes, com uma vírgula separando-os.

let numbers = [1, 2, 3]

// portanto, isso é um array de números. que tal um array de strings?

let fruta = ['banana', 'morango', 'uva']

// que tal um array que contém alguns números e strings?
let myArray = [1, 'banana', 3]

// podemos usar variáveis dentro dos colchetes, ou até mesmo expressões.
let n = 44
myArray = [1, n, 7 * 3]

// quantos itens há em um array 
fruta.length

// agora que você sabe sobre os índices, podemos obter um item do array ao colocar o índice do array que queremos obter dentro do par de colchetes depois do array.
fruta[1]

// modificar um item no array
fruta[1] = laranja

// e se você quisesse adicionar alguma coisa no final de um array e não soubesse quantos itens tem nele? 
let dinos = ['T. rex', 'stegosaurus']
dinos[dinos.length] = 'triceratops'

// adicionar um novo item ao final de um array
dinos.push('utahraptor')

// um método para remover o últimos item do array
let removeitem = dinos.pop()
