import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT: number = 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/api/hello', (req: Request, res: Response) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.json({ message: 'Hola desde el servidor Express!' });
});

// Datos ficticios para la API
const data = [
  { id: 1, name: 'Producto 1', price: 10 },
  { id: 2, name: 'Producto 2', price: 20 },
  { id: 3, name: 'Producto 3', price: 30 },
];

app.get('/api/products', (req: Request, res: Response) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});
