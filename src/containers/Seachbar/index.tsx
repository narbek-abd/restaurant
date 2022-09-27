import Button from "Src/components/Button";
import s from "./style.module.scss";
import g from "Src/App.module.scss";
import IconSearch from "Src/assets/icons/search.svg";

const Seachbar = () => {
  return (
    <div className={s.seachbar}>
      <div className={g.container}>
        <h1 className={s.seachTitle}>
          Найдите лучшее предложение от ресторана
        </h1>

        <div className={s.seachbox}>
          <div className={s.seachInputWrapper}>
            <input
              type="text"
              className={g.input}
              placeholder="Город, адрес, шоссе или ЖК"
            />
            <IconSearch />
          </div>

          <div className={s.seachBtn}>
            <Button color="blue" size="large">
              Найти
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seachbar;
