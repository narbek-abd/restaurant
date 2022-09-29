import "./App.scss";
import Header from "./containers/Header";
import Seachbar from "./containers/Seachbar";
import g from "./App.module.scss";
import Products from "./containers/Products";
import api from "./api";
import { useState } from "react";
import ProductTypes from "./types/ProductTypes";

function App() {
  const [products, setProducts] = useState<ProductTypes[]>();

  const getProducts = async (filterString: string) => {
    const responce = await api.products.getProducts(filterString);

    setProducts(responce.data);
  };

  return (
    <>
      <div className={g.headerWrapper}>
        <Header />
        <Seachbar onSearch={getProducts} />
      </div>

      {products && <Products products={products} />}
    </>
  );
}

export default App;
