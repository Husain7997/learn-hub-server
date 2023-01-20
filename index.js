const express = require('express');
var cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;


const courses = require('./data/courses.json');
app.use(cors());

app.get('/products/:id', function (req, res, next) {
    res.json({ msg: 'This is CORS-enabled for all origins!' })
})

app.get('/', (req, res) => {
    res.send('API Runing')
});
app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    console.log(id)
    const selectedCourse = courses.find(course => parseInt(course.id === id));
    res.send(selectedCourse)
});
app.get('/courses', (req, res) => {
    res.send(courses)
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})