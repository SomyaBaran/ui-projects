import { Topbar } from './components/topBar'
import { Main } from './components/main'
import SecondPage  from './components/secondPage'
import './App.css'

function App() {

  return (
    <div style={{ margin: 0, padding: 0 }}>
      <Topbar />
      <Main />
      <SecondPage />
    </div>
  )
}

export default App

