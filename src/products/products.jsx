import { useEffect, useState } from 'react';
import Product from './Product';
import Loading from './Loading';

const url = '#';
function products() {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const products = await response.json();
      console.log(products);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  return (
    <main>
      <Product products={products} />
    </main>
  );
}

export default products;
