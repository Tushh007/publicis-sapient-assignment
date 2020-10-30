const express = require('express');

const app = express();

app.use(express.static('./dist/angular-solution'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/angular-solution/'}),
);

app.listen(process.env.PORT || 8080);