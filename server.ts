import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT: number = 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/api/hello', (req: Request, res: Response) => {
  res.json({ message: 'Hola desde el servidor Express!' });
});

app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});
