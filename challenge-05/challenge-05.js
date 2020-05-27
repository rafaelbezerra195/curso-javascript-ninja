/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var ar = [1,2,3,4,5]

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
var getAr = function (ar){
    return ar;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
getAr(ar)[1] //2

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
var getArByIndex = function (ar,i){
    return ar[i];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arDifferentTypes = [1,'',true,1.567,5]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
getArByIndex(arDifferentTypes,0);
getArByIndex(arDifferentTypes,1);
getArByIndex(arDifferentTypes,2);
getArByIndex(arDifferentTypes,3);
getArByIndex(arDifferentTypes,4);

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
var book = function(bookName){
    var livros = {
        senhorDosAneis: {
            quantidadePaginas: 1,
            autor: 'Tolkien',
            editora: 'Sextante'
        },
        GeloEFogo: {
            quantidadePaginas: 1,
            autor: 'Martin',
            editora: 'Arqueiro'
        },
        Inferno: {
            quantidadePaginas: 1,
            autor: 'Dan Brown',
            editora: 'Rocco'
        }
    }

    return !bookName ? livros : livros[bookName]
}


/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book();

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
`O livro Senhor dos Aneis tem ${book('senhorDosAneis').quantidadePaginas} páginas`;

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
`O autor do livro Senhor dos Aneis é ${book('senhorDosAneis').autor}`;

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
`O livro Senhor dos Aneis foi publicado pela editora ${book('senhorDosAneis').editora}`;
