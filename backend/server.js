const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
const port = 3010; 

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/api/posts', (req, res) => {
    console.log('Fetching posts...');
    fetch('https://api.npoint.io/e49bbe98e965d535a9ce')
        .then(response => response.json())
        .then(posts => res.json(posts))
        .catch(error => res.status(500).json({ error: 'Error fetching posts' }));
});

app.listen(port, () => console.log(`Server running on port ${port}`));
