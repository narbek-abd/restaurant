import s from "./style.module.scss";
import g from "Src/App.module.scss";
import RegisterModalForm from "Src/components/RegisterModalForm";
import { useState } from "react";
import Button from "Src/components/Button";
import LoginModalForm from "Src/components/LoginModalForm";

const Header = () => {
  const [isRegisterModalOpened, setIsRegisterModalOpened] = useState(false);
  const [isLoginModalOpened, setIsLoginModalOpened] = useState(false);

  function openRegisterModal() {
    setIsLoginModalOpened(false);
    setIsRegisterModalOpened(true);
  }

  function closeRegisterModal() {
    setIsRegisterModalOpened(false);
  }

  function openLoginModal() {
    setIsLoginModalOpened(true);
  }

  function closeLoginModal() {
    setIsLoginModalOpened(false);
  }

  return (
    <header className={s.header}>
      <div className={g.container}>
        <div className={s.headerInner}>
          <a href="/">Главная</a>

          <nav className={s.navbar}>
            <ul className={s.navbarList}>
              <li className={s.navbarItem}>
                <Button className={g.btn} onClick={openRegisterModal}>
                  Регистрация
                </Button>

                <LoginModalForm
                  isOpen={isLoginModalOpened}
                  onClose={closeLoginModal}
                  onCallRegisterModal={openRegisterModal}
                />
              </li>
              <li className={s.navbarItem}>
                <Button
                  className={`${g.btn} ${g.btnBlue} ${g.btnBordered}`}
                  onClick={openLoginModal}
                  color="blue"
                >
                  Войти
                </Button>

                <RegisterModalForm
                  isOpen={isRegisterModalOpened}
                  onClose={closeRegisterModal}
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
