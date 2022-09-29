import s from "./style.module.scss";
import g from "Src/App.module.scss";
import ProductCard from "Src/components/ProductCard";
import ProductTypes from "Src/types/ProductTypes";

interface ProductsProps {
  products: ProductTypes[];
}

const Products = ({ products }: ProductsProps) => {
  return (
    <div className={s.featuredRestaurants}>
      <div className={g.container}>
        <h2 className={s.title}>Популярные предложения</h2>
        <h3 className={s.subtitle}>Предложения, которые любят наши клиенты</h3>

        <div className={s.results}>
          {products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
