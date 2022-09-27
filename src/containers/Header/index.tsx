import s from "./style.module.scss";
import g from "Src/App.module.scss";
import RegisterModalForm from "Src/components/RegisterModalForm";
import { useState } from "react";
import Button from "Src/components/Button";

const Header = () => {
  const [isRegisterModalOpened, setIsRegisterModalOpened] = useState(false);

  function openModal() {
    setIsRegisterModalOpened(true);
  }

  function closeModal() {
    setIsRegisterModalOpened(false);
  }

  return (
    <header className={s.header}>
      <div className={g.container}>
        <div className={s.headerInner}>
          <a href="/">Главная</a>

          <nav className={s.navbar}>
            <ul className={s.navbarList}>
              <li className={s.navbarItem}>
                <Button className={g.btn}>Регистрация</Button>
              </li>
              <li className={s.navbarItem}>
                <Button
                  className={`${g.btn} ${g.btnBlue} ${g.btnBordered}`}
                  onClick={openModal}
                  color="blue"
                >
                  Войти
                </Button>

                <RegisterModalForm
                  isOpen={isRegisterModalOpened}
                  onClose={closeModal}
                />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
