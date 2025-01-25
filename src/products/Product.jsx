function Product({
  id,
  productImage,
  productTitle,
  productDetails,
  price,
  status,
}) {
  return (
    <article>
      <img src={productImage} alt="" />
      <span className="item-price">${price}</span>
      <div className="product-info">
        <h5>{productTitle}</h5>
        <p>{productDetails}</p>
      </div>
    </article>
  );
}

export default Product;
