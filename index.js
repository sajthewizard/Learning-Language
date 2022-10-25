const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const data = require('./data/courses.json')
app.use(cors());

app.get('/', (req, res) => {
    res.send('LEraning api is running')
})
app.get('/courses', (req, res) => {
    res.send(data)
})
app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const selectedcourse = data.find(n => n.id === id);
    res.send(selectedcourse)
})
app.listen(port, () => {
    console.log('Learning news port is running', port);
}
)