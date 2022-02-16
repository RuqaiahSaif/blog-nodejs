const express = require('express');
const path = require('path');


let initial_path = path.join(__dirname, "public");

const app = express();
app.use(express.static(initial_path));


app.get('/', (req, res) => {
    res.sendFile(path.join(initial_path, "index.html"));
})
app.get('/index', (req, res) => {
    res.sendFile(path.join(initial_path, "index.html"));
})

app.get('/blog', (req, res) => {
    res.sendFile(path.join(initial_path, "blog.html"));
})
app.get('/post', (req, res) => {
    res.sendFile(path.join(initial_path, "post.html"));
})



app.get('*', (req, res) => {
    res.sendFile(path.join(initial_path, "notfounf.html"));
})


app.use((req, res) => {
    res.json("404");
})

app.listen("3001", () => {
    console.log('start server');
})