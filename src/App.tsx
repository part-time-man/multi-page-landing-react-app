import { Main } from "./components/main";
import { Header } from "./components/header";
import classes from "./App.module.scss";
import { FixedLinks } from "./components/fixedLinks";


function App() {
  return (
    <div className={classes.app}>
      <Header />
      <Main />
      <FixedLinks />
    </div>
  );
}

export default App;
