import React from "react";
import { Footer } from "./components/footer";
import { Main } from "./components/main";
import { Header } from "./components/header";
import classes from "./App.module.scss";

function App() {
  return (
    <div className={classes.app}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
