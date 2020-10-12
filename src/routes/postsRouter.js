const express = require('express')
const router = express.Router()
const postsController = require('../controllers/postsController')

router.get('/posts', postsController.getAllPosts)
router.get('/posts/:id', postsController.getPostByID)
router.post('/posts', postsController.createPost)
router.delete('/posts/:id', postsController.deletePost)

module.exports = router