import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Header from './components/Header';
import BodyMain from './components/BodyMain';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <Header />

      <BodyMain />

      <Footer />
      </div>
        

    </>
  )
}

export default App
