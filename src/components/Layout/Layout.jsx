import AppBar from "../AppBar/AppBar"
import Features from "../Features/Features"

import Footer from "../Footer/Footer"
import Herro from "../Herro/Herro"

export const Layout = () => {
  return (
      <div className='container'>
          <AppBar />
      <Herro />
      <Features/>
          <Footer/>
    </div>
  )
}

