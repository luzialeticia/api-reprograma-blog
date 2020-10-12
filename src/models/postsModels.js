const helper = require('../helpers/helper')

const posts = [
  {
    id: 1,
    dataCriacao: helper.newDate,
    titulo: "Conectando Bando de Dados SQL ao servidor Node.js",
    conteudo: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    etiquetas: ['SQL', 'Banco de Dados', 'Node']
  }
]

module.exports = posts