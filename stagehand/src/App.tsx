import { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import { Topbar } from './components/topBar'
import { Main } from './components/main'
import SecondPage from './components/secondPage'
import './App.css'

function App() {
  useEffect(() => {
    const scroll = new LocomotiveScroll();
    return () => scroll.destroy();
  }, []);
  return (
    <div data-scroll-container style={{ margin: 0, padding: 0 }}>
      <Topbar />
      <Main />
      <SecondPage />
    </div>
  )
}

export default App

