/**
 * Construa uma função que, dado um número n passando como parâmetro e uma lista contento
 * o primeiro nível da sequência de Farey, faça uma extensão da lista encadeada de frações
 * no nível n e então retorne a lista alterada contendo a sequência de Farey no nível n.
 */

/**
 * README: a ordem de execução está enumerada nos comentário de 1 a 8.
 * O resultado você pode ver no console ao lado. Ele é executado a cada alteração do código
 */

function adicionarNivel(lista, n) {
  var novaLista = [];

  /**
   * 4 - Raliza um laço de repetição nos itens (item: [a, b]) do array principal para calcular
   * a soma da fração na posição i mais a fração na posição i + 1 (fração seguinte).
   */
  for (var i = 0; i < lista.length - 1; i++) {
    novaLista.push(lista[i]);

    var a = lista[i][0]; // Numerador da fração i
    var b = lista[i + 1][0]; // Numerador da fração i + 1
    var c = lista[i][1]; // Denominador da fração i
    var d = lista[i + 1][1]; // Denominador da fração i + 1

    /**
     * 5 - Adiciona a soma na lista somente de c + d for menor que n
     */
    if (c + d <= n) {
      var soma = [a + b, c + d];
      novaLista.push(soma);
    }
  }

  /**
   * 6 - O laço de repetição anterior não inclui a última fração no array,
   * por isso ela é incluída neste momento
   */
  novaLista.push(lista[lista.length - 1]);

  return novaLista;
}

function formatarParaFracao(lista) {
  var saida = "";
  var length = lista.length;

  for (var i = 0; i < length; i++) {
    var a = lista[i][0]; // Numerador
    var b = lista[i][1]; // Denominador
    saida = saida + a + "/" + b; // a/b
    if (i < length - 1) {
      saida = saida + " , "; // Inclui a vírgula entre frações apenas se não for a última fração
    }
  }

  return "(" + saida + ")";
}

function iniciarAlgoritmo(n, primeiroNivel) {
  var lista = primeiroNivel;

  /**
   * 3 - Realiza um laço de repetição chamando a função que adiciona a soma das frações.
   * A cada iteração uma nova lista é retornada.
   */
  for (var i = 0; i < n; i++) {
    lista = adicionarNivel(lista, n);
  }

  /**
   * 7 - Formata o resultado para ser exibido no terminal
   */
  var saida = formatarParaFracao(lista);

  /**
   * 8 - Exibe o resultado no terminal - FIM
   */
  console.log(saida);
}

/**
 * 1 - As frações serão tratas como uma matriz.
 * O array maior é a lista. O array menor (com duas posições) representa as frações,
 * onde o primeiro item é o numerador e o segundo é o denominador.
 * Exemplo: [[a, b], [c, d]] = (a/b, c/d)
 */
var primeiroNivel = [
  [0, 1],
  [1, 1]
];

/**
 * 2 - Chamando a função que inicia o algoritmo passando como primeiro parâmetro n
 * e como segundo parâmetro o nível inicial
 */
iniciarAlgoritmo(5, primeiroNivel);
