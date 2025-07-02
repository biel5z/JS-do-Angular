console.log(1 == 1);
console.log(1 == "1");
console.log(1 === 1);
console.log(1 === "1");

console.log(1 != "1");
console.log(1 !== 1);

console.log(3 > 2);
console.log(3 < 2);

console.log(2 >= 2);
console.log(1 <= 2);

/*
==,===, !=, !==, >, <, >=, <=
*/

/*
1. Igual (==)
Compara dois valores e retorna true se forem iguais, mesmo que os tipos sejam diferentes.
*/
console.log(5 == 5);    // true
console.log(5 == '5');  // true (porque ele ignora o tipo e verifica só o valor)


/*
2. Estritamente igual (===)
Compara valores e tipos. Retorna true apenas se o valor e o tipo forem iguais.
*/
console.log(5 === 5);    // true
console.log(5 === '5');  // false (os tipos são diferentes: número e string)

/*
3. Diferente (!=)
Retorna true se os valores forem diferentes, mesmo que os tipos sejam diferentes. */
console.log(5 != 10);    // true
console.log(5 != '5');   // false (o valor é o mesmo)

/*4. Estritamente diferente (!==)
Retorna true se os valores ou os tipos forem diferentes. */
console.log(5 !== 5);    // false (valores e tipos iguais)
console.log(5 !== '5');  // true (os tipos são diferentes)

/*5. Maior que (>)
Retorna true se o valor da esquerda for maior que o valor da direita.
 */
console.log(10 > 5);    // true
console.log(3 > 5);     // false

/*6. Menor que (<)
Retorna true se o valor da esquerda for menor que o valor da direita. */
console.log(2 < 5);     // true
console.log(5 < 2);     // false

/*7. Maior ou igual (>=)
Retorna true se o valor da esquerda for maior ou igual ao valor da direita. */
console.log(10 >= 10);  // true
console.log(10 >= 5);   // true
console.log(2 >= 5);    // false

/*8. Menor ou igual (<=)
Retorna true se o valor da esquerda for menor ou igual ao valor da direita. */
console.log(5 <= 5);    // true
console.log(2 <= 5);    // true
console.log(10 <= 5);   // false
