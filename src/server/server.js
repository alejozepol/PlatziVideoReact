import express from 'express';
import dovenv from 'dotenv';

dovenv.config();

const ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 3000;

const app = express();

app.get('*', (req, res) => {
  res.send({ holaMundo: true });
});

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`El servidor se inicio exitosamente en el puerto ${PORT}`)
});
