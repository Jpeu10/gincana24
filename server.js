const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

let attendanceList = [];

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/register', (req, res) => {
    const { studentName, team, validationCode } = req.body;

    attendanceList.push({
        studentName,
        team,
        timestamp: new Date().toLocaleString()
    });

    res.json({ success: true });
});

app.get('/get_attendance', (req, res) => {
    res.json(attendanceList);
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
