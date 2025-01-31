import Product from '../products/Product';

function Products({ products }) {
  return (
    <section>
      <div className="title">
        <h2>Our Products</h2>
        <div className="underline"></div>
      </div>
      <div className="products"></div>
    </section>
  );
}

export default Products;
