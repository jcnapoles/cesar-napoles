import { useEffect, useState } from 'react';
import { getProducts } from '../api';
  
  export default function ProductList() {
    const [products, setProducts] = useState([]);

  useEffect(() => {
    // Llamada a la API del servidor Express
    getProducts().then((data) => {
     
        setProducts(data);
      
    });
  }, []);
    return (
        <div>
      <h2>Lista de Productos</h2>
      <ul>
        {products.map((product: any) => (
          <li key={product.id}>{product.name} - ${product.price}</li>
        ))}
      </ul>
    </div>
    );
  }