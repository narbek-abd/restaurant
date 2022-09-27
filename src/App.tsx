import "./App.scss";
import Header from "./containers/Header";
import Seachbar from "./containers/Seachbar";
import g from "./App.module.scss"
import FeaturedRestaurants from "./containers/FeaturedRestaurants";

function App() {
  return (
    <>
      <div className={g.headerWrapper}>
        <Header />
        <Seachbar />
      </div>

      <FeaturedRestaurants />
    </>
  );
}

export default App;
