import { CTA } from "./Components/CTA"
import { Footer } from "./Components/Footer"
import { Hero } from "./Components/Hero"
import { Navbar } from "./Components/Navbar"
import { ProblemAndSol } from "./Components/ProblemAndSol"

const App = () => {
  return <div>
    <Navbar/>
    <Hero/>
    <ProblemAndSol/>
    <CTA/>
    <Footer/>
  </div>
}

export default App