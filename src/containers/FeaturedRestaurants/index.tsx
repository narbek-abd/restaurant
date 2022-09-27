import s from "./style.module.scss";
import g from "Src/App.module.scss";
import ProductCard from "Src/components/ProductCard";

const FeaturedRestaurants = () => {
  return (
    <div className={s.featuredRestaurants}>
      <div className={g.container}>
        <h2 className={s.title}>Популярные предложения</h2>
        <h3 className={s.subtitle}>Предложения, которые любят наши клиенты</h3>

        <div className={s.results}>
          <ProductCard product={prod} />
        </div>
      </div>
    </div>
  );
};

let prod = {
  is_favourite: true,
  id: 5,
  title: "New restaurant",
  description: "New restaurant description",
  schedule_id: 5,
  coords_id: 5,
  user_id: 7,
  schedule: {
    id: 5,
    opening: "12:00",
    closing: "23:00",
  },
  coords: {
    id: 5,
    longitude: 76.88892877135433,
    latitude: 43.23672076148338,
    address_name: "улица Мынбаева, Алматы",
  },
  images: [],
  user: {
    id: 7,
    email: "test@gmail.com",
    nickname: "test",
  },
};

export default FeaturedRestaurants;
