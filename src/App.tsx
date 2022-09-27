import "./App.scss";
import Header from "./containers/Header";
import Seachbar from "./containers/Seachbar";
import g from "./App.module.scss"

function App() {
  return (
    <>
      <div className={g.headerWrapper}>
        <Header />
        <Seachbar />
      </div>
    </>
  );
}

export default App;
