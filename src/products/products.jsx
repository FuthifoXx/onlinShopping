import Product from '../products/Product';

function Products({ products }) {
  return (
    <section>
      <div className="title">
        <h2>our items</h2>
        <div className="underline"></div>
      </div>
      <div className="products">
        {products.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
    </section>
  );
}

export default Products;
