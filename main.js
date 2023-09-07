function calcularFactorial() {
  const numberFactorial = document.getElementById("inputfactorial");
  const resultado = document.getElementById("respuesta1");
  const num = parseInt(numberFactorial.value);

  if (isNaN(num) || num < 0) {
    resultado.textContent = "ingresa numero valido";
    return;
  }

  if (num == 0 || num == 1) {
    resultado.textContent = "El factorial de " + num + "es de 1.";
  }

  let factorial = 1;
  for (let i = 2; i <= num; i++) {
    factorial *= i;
  }

  resultado.textContent = "El factorial de " + num + " es: " + factorial;
}

/* funcion palindromo */
function verificarPalindromo() {
  const inputpalindromo = document.getElementById("inputpalindromo");
  const respuesta = document.getElementById("respuesta2");
  const texto = inputpalindromo.value.toLowercase().replace(/[^a-z]/g, "");

  if (texto === "") {
    respuesta.textContent = "Ingresa una palabra valida";
    return;
  }
  const reverse = texto.split("").reverse().join();

  if (texto === reverse) {
    respuesta.textContent = "Si, la palabra " + texto + ". Es un palindromo";
  } else {
    respuesta.textContent =
      "No, la palabra " + inputpalindromo.value + ".No es un palindromo";
  }
}
