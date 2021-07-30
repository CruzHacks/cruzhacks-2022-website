import React from "react"
import DebugBar from "./components/Debug/DebugBar"
import Routes from "./routes/Routes"

import "./App.scss"

const App: React.FC = () => (
  <>
    <div className='App'>
      <DebugBar /> {/* TODO: remove once we have a design */}
      <Routes />
    </div>
  </>
)

export default App
