import React from "react"
import NavBar from "./components/NavBar/NavBar"
import Routes from "./routes/Routes"

import "./App.scss"

const App: React.FC = () => (
  <>
    <div className='App'>
      <NavBar /> {/* TODO: Refactor existing code to model the navbar */}
      <Routes />
    </div>
  </>
)

export default App
