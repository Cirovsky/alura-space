import { useState } from 'react';
import Header from './components/Header'
import Banner from './components/Banner';
import Menu from './components/Menu';

import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="container main">
      <Header/>
      <Menu/>
      <Banner/>
    </main>
  )
}

export default App
