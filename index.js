const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());


//const express = require('express')

const bodyParser = require('body-parser')

app.use(cors());
app.use(express.json());


const db = require('/queries')
// const port = 3000
// IMPORTANT: use the Azure port

app.use(bodyParser.json())

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)


// GET Request to root URL (/)
// app.get('/', (request, response) => {
//   response.json({Welcome: 'How to create API with Node.js,EXPRESS and PostgreSQL' })
// })

// Endpoints
// app.get('/', db.getCountries)
app.get('/health', (req, res) => {
  res.json({ ok: true, time: new Date().toISOString() });
});

app.get('/api/hello', (req,res) => res.json({ message: 'Hello from Express on Azure!' }));

app.get('/countries', db.getCountries)
app.get('/countries/:id', db.getCountryById)
app.post('/countries', db.createCountry)
app.put('/countries/:id', db.updateCountry)
app.delete('/countries/:id', db.deleteCountry)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
