var entrada = require('fs').readFileSync('sp-doses-mensais.tsv', 'utf8');
var linhas = entrada.split('\n');

const colunas = linhas.shift().split('\t');

var municipios = [];

while(linhas.length) {
  var tupla = linhas.shift().split('\t');
  var municipio = {};

  for(var atributo = 0; atributo < colunas.length; ++atributo) {
    var coluna = colunas[atributo];
    var dado = tupla[atributo];
    
    municipio[coluna] = dado;
  }
  
  municipios.push(municipio);
}

console.log(municipios);