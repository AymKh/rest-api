const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const methodOverride = require('method-override')
const PORT  = process.env.PORT || 5000

app.set('view engine', 'ejs')
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb://localhost/restapi', { useNewUrlParser: true })

app.use(bodyParser.urlencoded({extended: true}))
app.use(methodOverride('_method'))
const postRoute = require('./routes/post')
app.use('/posts', postRoute)
app.use(express.static('public'))

app.get('/', (req, res)=>{
    res.redirect('/posts')
})

app.get('*', (req, res)=>{
    res.send('404')
})
app.listen(PORT, ()=> console.log(`Live on port ${PORT}`))