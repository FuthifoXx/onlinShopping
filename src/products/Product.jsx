function Product() {
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

// export default Product;
// [6:56 PM] Ogbu Esther Uzoma
// import React from "react";
// import bag from "../assets/bag3.jpg"
// const Card = () => {
//   return (
//     <div style={{ width: "300px", height: "300px", backgroundColor: "white" , border:"1px solid gray" , borderRadius : "15px"  , margin : "10px"}}>
//       <div style={{width: "100%", height: "100px"}}>
//         <img style={{objectFit: "contain" ,width : "100%" , height:"100%"}} src={bag} alt="product image" />
//       </div>
//       <div>
//         <h3>
//           Product title <span>Price</span>
//         </h3>
//         <p>
//           Product details Lorem, ipsum dolor sit amet consectetur adipisicing
//           elit. Optio, repudiandae. Deserunt, deleniti.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Card;

import React from 'react';
import Card from './Card';

const Products = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: 'wrap',
        width: '100%',
        height: '100vh',
      }}
    >
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Products;
