
import { NavBar } from "./layouts/NavBar.jsx";
import { Home } from "./pages/Home.jsx";
import { PorQueSafeStock } from "./pages/PorQueSafeStock.jsx";
import { Servicos } from "./pages/Servicos.jsx";
import { FooterSite } from "./layouts/Footer.jsx";
import { BtnSubir } from "./components/BtnSubir.jsx";


function App() {

  return (
    <>
      <NavBar />
      <Home />
      <PorQueSafeStock />
      <Servicos />
      <BtnSubir />
      <FooterSite />
    </>
  )
}

export default App  
