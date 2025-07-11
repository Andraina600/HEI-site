import './App.css'
import HEI from './components/HEI/HEI.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import About from './components/About/About.jsx'
import Debouche from './components/Debouche/Debouche.jsx'
import Domaine from './components/Domaine/Domaine.jsx'
import Admission from './components/Admission/Admission.jsx'
import Enseigent from './components/Team/Team.jsx'

function App() {

  return (
    <>
      <Navbar/>
      <HEI/>
      <About />
      <Debouche />
      <Domaine />
      <Admission />
    </>
  )
}

export default App
