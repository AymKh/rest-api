const mongoose  = require('mongoose')
const express   = require('express')
const router    = express.Router()
const Post      = require('../models/post')

// get all posts
router.get('/', async (req, res)=>{
    const allPosts = await Post.find()
    res.render('posts', {posts: allPosts})
})

// add new post
router.get('/new', (req, res)=>{
    res.render('new')
})

router.post('/', async (req, res)=>{
    const author = req.body.author
    const title = req.body.title
    const content = req.body.content
    const newPost = {title, author, content}
    const addedPost = await Post.create(newPost)
    res.redirect('/posts')
})

// get specific post
router.get('/:id', async (req, res)=>{
    const id = req.params.id
    try {
        const foundPost = await Post.findById(id)
        res.render('post', {post: foundPost})
    } catch (error) {
        console.error(error)
        res.redirect('/posts/')
    }
})


// delete one post
router.delete('/:id', async (req, res)=>{
    const id = req.params.id
    const foundPost = await Post.findByIdAndDelete(id)
    res.redirect('/posts')
})


// update one post
router.get('/:id/update', async (req, res)=>{
    const id = req.params.id
    const foundPost = await Post.findById(id)
    res.render('update', {post: foundPost})
})

router.put('/:id', async (req, res)=>{
    const id = req.params.id
    const foundPost = await Post.findByIdAndUpdate(id, req.body.post)
    res.redirect('/posts/' + id)
})


module.exports = router