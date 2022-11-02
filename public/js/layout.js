//const express = require('express');
//const app = express()

//app.use(express.static(path.join(__dirname, "node_modules/bootstrap/dist/")));

const button = document.getElementById('togglebar');
const bclose = document.getElementById('closebar');

button.addEventListener('click', () => {
    document.getElementById("sidebar").style.display = "block";
});

bclose.addEventListener('click', () => {
    document.getElementById("sidebar").style.display = "none";
});