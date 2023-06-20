import logo from './logo.svg'
import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import Sidebar from './components/sidebar'
import About from './components/about'
import Contact from './components/contact'
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path='About' element={<About/>}></Route>
        <Route path='Contact' element={<Contact/>}></Route>
      </Route>
    </Routes>
  )
}

export default App
