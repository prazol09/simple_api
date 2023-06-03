import express from 'express';
// import http from 'http';
// import path from 'path';
import cors from 'cors';
// import bodyParser from 'body-parser';

const app = express();

app.use(express.json());
app.use(cors());
// needed for taking post req body from form action
// app.use(bodyParser.urlencoded({ extended: true }));

// app.use('/', express.static('uploads/'));


// routes(app);
app.get('/', (req, res) => {
  res.send({ introduction: 'I Am Prazol Basnet.' });
});

app.get('/api/me', (req, res) => {
  res.send({ message: 'I like to take on difficult challenges.' });
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