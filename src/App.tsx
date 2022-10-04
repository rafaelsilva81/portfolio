import { Layout } from "./components/Layout"
import { Slider } from "./components/Slider"
import { About } from "./pages/About"
import { Hero } from "./pages/Hero"
import { Projects } from "./pages/Projects"
import { Technologies } from "./pages/Technologies"

function App() {

  return (
    <div className="App">
      {/* Page layout component */}
      <Slider />

      <Layout>
        <Hero />
      </Layout>

      <Layout>
        <About />
      </Layout>

      <Layout>
        <Technologies />
      </Layout>

      <Layout>
        <Projects />
      </Layout>

    </div>
  )
}

export default App
