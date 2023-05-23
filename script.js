// Selecionando os elementos HTML que serão usados
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const submitButton = document.querySelector("input[type=submit]");
const resultadoDiv = document.getElementById("resultado");

// Adicionando um evento de tecla pressionada ao campo de entrada num1
num1Input.addEventListener("keydown", function(event) {
  if (event.key === "Enter") { // Se a tecla pressionada for Enter
    event.preventDefault(); // Previne a ação padrão de enviar o formulário
    num2Input.focus(); // Move o foco para o campo de entrada num2
  }
});

// Adicionando um evento de tecla pressionada ao campo de entrada num2
num2Input.addEventListener("keydown", function(event) {
  if (event.key === "Enter") { // Se a tecla pressionada for Enter
    event.preventDefault(); // Previne a ação padrão de enviar o formulário
    calcular(); // Chama a função calcular
  }
});

// Adicionando um evento de clique ao botão submit
submitButton.addEventListener("click", function(event) {
  event.preventDefault(); // Previne a ação padrão de enviar o formulário
  calcular(); // Chama a função calcular
});

// Definindo a função calcular
function calcular() {
  const num1 = Number(num1Input.value); // Convertendo o valor de num1 para um número
  const num2 = Number(num2Input.value); // Convertendo o valor de num2 para um número

  // Verificando se num1 ou num2 não são números válidos
  if (isNaN(num1) || isNaN(num2)) {
    resultadoDiv.innerText = "Por favor, insira números válidos."; // Define o texto da div resultado como "Por favor, insira números válidos."
    return; // Sai da função
  }

  // Calculando o resultado conforme especificado
  const resultado = ( num1 - num2) / 2;

  // Exibindo o resultado na div resultado
  resultadoDiv.innerText = `${resultado}`;

  // Limpando os campos num1 e num2
  num1Input.value = "";
  num2Input.value = "";
  num1Input.focus(); // Movendo o foco de volta para o campo num1
}