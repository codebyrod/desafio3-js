//1 - Criar um loop que conte de 1 até 10 usando FOR

for (let lapiseira = 1; lapiseira <= 10; lapiseira++){
    console.log(`${lapiseira} lapiseiras são compartilhadas em sala de aula`)
}

//1.1 BONUS - Criar um loop que conte de 1 até 10 usando WHILE

let borracha = 1
while (borracha <= 10){
    console.log(`${borracha} borrachas reutilizadas`)
    borracha++
}

//2 - Criar um loop que conte de 10 até 1 usando WHILE

let grafite = 10
while (1 <= grafite){
    console.log(`${grafite} grafites foram usados na última obra de arte`)
    grafite--
}

//2.1 BONUS - Criar um loop que conte de 10 até 1 usando FOR

for (apontador = 10; apontador >= 1; apontador--){
    console.log(`${apontador} apontadores que foram descartados no último mês`)
}

//3 - Criar um loop que conte todos os números ímpares de 1 até 100

let cad = 1
while (cad <= 100){
    console.log(`${cad} são os números de cadernos reclicados`)
    cad+=2
}

for (livro = 1; livro <= 100; livro+=2){
    console.log(`exibindo ${livro} livros na tela`)
}

//4- Criar um loop que conte todos os números pares de 0 a 100

let lapis = 0
while (lapis <= 100){
    console.log(`lápis adicionados ao carrinho é igual a ${lapis}`)
    lapis+=2
}

for (caneta = 0; caneta <= 100; caneta+=2){
    console.log(`${caneta} é a quantidade de canetas entregues`)
}
