import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import { ProjectDetails } from "./pages/ProjectDetails"
import { ProjectList } from "./pages/ProjectList"

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/projects">
            <Route index element={<ProjectList />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
          </Route>
        </Route>
      </Routes>

    </div>
  )
}

export default App
