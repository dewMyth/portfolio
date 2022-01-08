import "./ProductList.css";

import Product from "../Product/Product";

import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create & Inspire, It's Me</h1>
        <p className="pl-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ut ipsam
          distinctio commodi assumenda molestiae praesentium quibusdam aperiam.
          Consequatur itaque repellendus ex et aut facere sapiente aliquid
          dolorum perspiciatis! Suscipit.
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
