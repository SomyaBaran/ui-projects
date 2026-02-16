import { Topbar } from './components/topBar'
import { Main } from './components/main'
import './App.css'

function App() {

  return (
    <div style={
      { marginLeft: "3vw", marginRight: "3vw" }
    }>
      <Topbar />
      <Main />
    </div>
  )
}

export default App

