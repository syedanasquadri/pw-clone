import { BatchDetails } from "./Components/BatchDetails"
import { Benefits } from "./Components/Benefits"
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
    <BatchDetails/>
    <Benefits/>
    <CTA/>
    <Footer/>
  </div>
}

export default App