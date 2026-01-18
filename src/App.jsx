
import { Navbar } from "@/layout/Navbar"
import { Hero } from "@/sections/Hero"
import { About } from "@/sections/About"
import { Experience } from "@/sections/Experience"
import { Projects } from "@/sections/Projects"


function App() {
  return <div className="min-h-screen overflow-x-hidden">
    <Navbar />
    <main>
      <Hero />
      <About />
      <Experience />
      <Projects />
    </main>
  </div>;
}

export default App;