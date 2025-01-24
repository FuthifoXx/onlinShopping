function Product({ products }) {
  return (
    <section>
      <div className="title">
        <h2>Our Products</h2>
        <div className="title-underline"></div>
      </div>
      <div className="products">
        {products.map((product) => {
          return <Product key={product.id} {...Product} />;
        })}
      </div>
    </section>
  );
}

export default Product;
