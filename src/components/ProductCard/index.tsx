import Button from "../Button";
import s from "./style.module.scss";
import IconLocation from "Src/assets/icons/location.svg";
import ProductTypes from "Src/types/ProductTypes";
import productImg from "Src/assets/img/restaurant.jpg";

export interface ProductCardProps {
  product: ProductTypes;
  variant?: "vertical" | "horizontal";
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className={s.product}>
      <div className={s.productImg}>
        <img src={productImg} alt={product.description} />
      </div>

      <div className={s.productInf}>
        <p className={s.productName}>{product.title}</p>
        <p className={s.productAddress}>
          <IconLocation />
          {product.coords.address_name}
        </p>
        <p>{product.description}</p>
        <p className={s.productPrice}>от $56 000 000</p>

        <div className={s.productBtn}>
          <Button color="blue">Подробнее</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
