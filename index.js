const express = require('express');
const cors = require('cors');
const postgres = require('postgres');

require('dotenv').config(); // one liner import n use

const app = express();

app.use(express.json());
app.use(cors());
// needed for taking post req body from form action
// app.use(bodyParser.urlencoded({ extended: true }));

// app.use('/', express.static('uploads/'));

// process.env.YOUR_ENV_VAR_GOES_HERE
const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;

const URL = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}`;

const sql = postgres(URL, { ssl: 'require' });

// routes(app);
app.get('/', (req, res) => {
  res.send({ introduction: 'I Am Prazol Basnet.' });
});

app.get('/api/me', (req, res) => {
  res.send({ message: 'I like to take on difficult challenges.' });
});


// gives access to user type admin from the database.
app.get('/api/users', async (req, res) => {
  // const result2 = await sql`select version()`;
  // console.log(result2);
  const result = await sql`select * from users`;
  
  res.send(result);
});

const port = process.env.PORT || 3500;

// listener added
app.listen(port, () => console.log(`server running on port ${port}...`));
// server.listen(port, () => console.log(`listening on port ${port}...`));

// app.use(
//   cors({
//     origin: 'http://localhost:3000',
//   })
// )