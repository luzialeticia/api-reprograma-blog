const postsModel = require('../models/postsModels')
const helper = require('../helpers/helper')

const createPost = (req, res) => {
  const { titulo, conteudo, etiquetas } = req.body
  const newPost = {
    id: helper.newID(postsModel),
    dataCriacao: helper.newDate(postsModel),
    titulo: titulo,
    conteudo: conteudo,
    etiquetas: etiquetas
  }

  postsModel.push(newPost)

  res.status(201).json(newPost)
}

const deletePost = (req, res) => {
  const { id } = req.params

  const findPost = postsModel.find(post => post.id == id)[0]

  const index = postsModel.indexOf(findPost)

  postsModel.splice(index, 1)

  res.json(postsModel)
}

module.exports = {
  createPost,
  deletePost
}