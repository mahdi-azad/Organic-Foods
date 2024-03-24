import DisplayProducts from "./components/DisplayProducts/DisplayProducts"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Services from "./components/Services"
import Sustainable from "./components/Sustainable"
import Trusted from "./components/Trusted"
import YearOrganic from "./components/YearOrganic"
import './styles/global.scss'

function App() {
  

  return (
    <>
      <Navbar />
      <Hero></Hero>
      <Services></Services>
      <DisplayProducts></DisplayProducts>
      <Trusted></Trusted>
      <YearOrganic></YearOrganic>
      <Sustainable></Sustainable>
      <Footer></Footer>
    </>
  )
}

export default App
