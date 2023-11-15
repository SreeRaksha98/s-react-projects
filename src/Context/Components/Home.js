import { CartState } from "../Context";
import SingleProduct from "./SingleProduct";
import Header from "./Header"

const Home = () => {
  console.log(CartState, CartState())
  const { products=[] } = CartState();

  return (
    <div>
      <Header />
    <div style={{ textAlign: "center" }}>
      <span style={{ fontSize: 30 }}>Products Page</span>
      <div className="productContainer">
        {products.map((prod) => (
          <SingleProduct prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default Home;
