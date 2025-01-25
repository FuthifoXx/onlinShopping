import { useEffect, useState } from 'react';
import Loading from '../products/Loading';
import Products from '../products/Products';

const url = '#';
// import Products from '../products/products';
// function Hero() {
//   return (
//     <main className="hero">
//       <Products />
//     </main>
//   );
// }

// export default Hero;

function Hero() {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const products = await response.json();
      setProducts(products);
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
      <Products product={products} />
    </main>
  );
}

export default Hero;
