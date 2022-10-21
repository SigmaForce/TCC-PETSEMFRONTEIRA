import { Create } from "./components/Create";
import { Recover } from "./components/Recover";
import { Reset } from "./components/Reset";
import { Success } from "./components/Success";
import "./css/main.css";

import { Home } from "./pages/Home";
import { Login } from "./pages/Login";

function App() {
  return (
    <>
      {
        //<Home />
      }
      <Create />
      <Success />
      <Reset />
      <Recover />
      <Login />
    </>
  );
}

export default App;
