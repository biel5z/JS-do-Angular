/*
Estrutura de Repetição - LOOP
 -FOR
  1) INICIALIZAÇÂO - Criar uma variável e 
                     colocar um valor inicial pra ela.

  2) CODIÇÂO - Enquanto for true, o laço continuará iterando.
                      Ele irá verificar antes de cada iteração .

  3) EXPRESSÃO FINAL - O que irá ocorrer a cada vez que o 
                       nosso laço der uma volta.


  for ([inicialização]: [condição]: [expressão final]){
     Seu codigo aqui
  }                      
*/

const users = ['Maria', 'Ana', 'Gabrielle'] // length(tamanho do array) = 3

for(let i = 0; i < users.length; i++){
   console.log(users[i])
} 


// for(let i = 0; i < users.length; i++ ){
//     console.log(users[i])
// }