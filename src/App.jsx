import './App.css'
import HEI from './components/HEI/HEI.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import About from './components/About/About.jsx'
import Debouche from './components/Debouche/Debouche.jsx'
import Domaine from './components/Domaine/Domaine.jsx'
import Admission from './components/Admission/Admission.jsx'
import Programme from './components/Programme/Programme.jsx'
import Technologie from './components/Technologie/Technologie.jsx'
import Enseigent from './components/Team/Team.jsx'
import Footer from './components/PartenaireETFoot/Partenaire_Footer.jsx'

function App() {

  return (
    <>
      <Navbar/>
      <HEI/>
      <About />
      <Enseigent/>
      <Debouche />
      <Domaine />
      <Admission />
      <Programme />
      <Technologie />
      <Footer/>
    </>
  )
}

export default App
