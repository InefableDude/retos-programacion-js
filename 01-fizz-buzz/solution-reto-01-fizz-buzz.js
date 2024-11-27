// Se crea un arrow function la cual se invocara mas abajo
const printFizzBuzz = () => {
	// La forma que encontre es usar un bucle For para iterar del 1 al 100
	for(let i = 1; i <= 100; i++) {
		/* 
		* Se hacen varias verificaciones
		* Un multiplo de un numero significa que se puede divir entre ese mismo numero
		* Entonces si un numero es multiplo de 3 o 5 es porque se puede dividir entre estos mismos
		* En este caso el operador de modulo da 0 
		* si no hay residuo de la division, por lo cual significa que es divisible entre ese numero
		*/	
		if (i % 3 === 0 && i % 5 === 0) { // Se verifica si es multiplo de 3 y 5
			console.log("fizzbuzz");
		} else if (i % 3 === 0) { // Se verifica si es multiplo de 3
			console.log("fizz");
		} else  if (i % 5 === 0) {// Se verifica si es multiplo de 5
			console.log("buzz");
		} else { // Por defecto solo imprime los numeros que no sean fizz, buzz o fizzbuzz
			console.log(i)
		}
	}
}

printFizzBuzz();