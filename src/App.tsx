import { BatchDetails } from "./Components/BatchDetails"
import { Benefits } from "./Components/Benefits"
import { CTA } from "./Components/CTA"
import { Footer } from "./Components/Footer"
import { Hero } from "./Components/Hero"
import { Navbar } from "./Components/Navbar"
import { ProblemAndSol } from "./Components/ProblemAndSol"
import { Testimonials } from "./Components/Testimonials"

const App = () => {
  return <div>
    <Navbar/>
    <Hero/>
    <ProblemAndSol/>
    <BatchDetails/>
    <Benefits/>
    <Testimonials/>
    <CTA/>
    <Footer/>
  </div>
}

export default App