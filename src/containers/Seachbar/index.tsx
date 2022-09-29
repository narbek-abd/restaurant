import Button from "Src/components/Button";
import s from "./style.module.scss";
import g from "Src/App.module.scss";
import IconSearch from "Src/assets/icons/search.svg";
import { FormEvent, useRef } from "react";

interface SearchbarProps {
  onSearch: (filterString: string) => void;
}

const Seachbar = ({ onSearch }: SearchbarProps) => {
  const searchInput = useRef<HTMLInputElement>(null);

  function onSubmit(e: FormEvent) {
    e.preventDefault();

    if (searchInput.current !== null) {
      onSearch(searchInput.current.value);
    }
  }

  return (
    <div className={s.seachbar}>
      <div className={g.container}>
        <h1 className={s.seachTitle}>
          Найдите лучшее предложение от ресторана
        </h1>

        <form className={s.loginForm} onSubmit={onSubmit}>
          <div className={s.seachbox}>
            <div className={s.seachInputWrapper}>
              <input
                ref={searchInput}
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
        </form>
      </div>
    </div>
  );
};

export default Seachbar;
