// import { useState } from 'react'

import NavBar from "./layouts/LayoutSite.jsx";
import FooterSite from "./layouts/LayoutFooterSite.jsx"



function App() {

  return (
    <>
      <NavBar />
      <div className="text-3xl text-green-500 p-8">
        Tailwind funcionando! 🎉
      </div>
      <FooterSite />
    </>
  )
}

export default App  
