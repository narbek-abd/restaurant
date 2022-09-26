import s from "./style.module.scss";
import g from "Src/App.module.scss";

const Header = () => {
  return (
    <header className={s.header}>
      <div className={g.container}>
        <div className={s.headerInner}>
          <a href="/">Главная</a>

          <nav className={s.navbar}>
            <ul className={s.navbarList}>
              <li className={s.navbarItem}>
                <button className={g.btn}>Регистрация</button>
              </li>
              <li className={s.navbarItem}>
                <button className={`${g.btn} ${g.btnBlue} ${g.btnBordered}`}>
                  Войти
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
