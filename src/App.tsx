import { Create } from "./components/Create";
import { Profile } from "./components/Profile";
import { Recover } from "./components/Recover";
import { Reset } from "./components/Reset";
import { SideBar } from "./components/SideBar";
import { Success } from "./components/Success";
import "./css/main.css";

import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Main } from "./pages/Main";
import { RegisterPet } from "./pages/RegisterPet";

function App() {
  return (
    <>
      {
        /*<Home />
     
      <Create />
      <Success />
      <Reset />
      <Recover />
      <Login />
         <Main />
             <RegisterPet />*/
        <Profile />
      }
    </>
  );
}

export default App;
