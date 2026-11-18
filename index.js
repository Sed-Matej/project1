import express from 'express'

const app = express()
const port = 3000

app.set(express.static('public'))
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.get('/page2', (req, res) => {
    res.render('page2.ejs')
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})