import { Layout } from "../../components/Layout"
import { Slider } from "../../components/Slider"
import { About } from "./components/About"
import { Hero } from "./components/Hero"
import { Projects } from "./components/Projects"
import { Technologies } from "./components/Technologies"

import '../../styles/disableScroll.css'

function Home() {

  return (
    <div className="Home">
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

export default Home
