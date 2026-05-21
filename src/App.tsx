/// <reference types="react" />
import { Hero } from "./sections/Hero/Hero"
import { Header } from "./components/Header/Header"
import { About } from "./sections/About/About"

function App() {
  return (
      <div>
        <Header />
        <Hero />
        <About />
      </div>
  )
}

export default App
