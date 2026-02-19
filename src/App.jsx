

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './navbar'
import Home from './pages/HomePage';
import Projects from './pages/ProyectoPage';
import Contact from './pages/ContactPage';
import Newsletter from './pages/NewsletterPage';
import Success from './pages/SuccesPage';
import Footer from './Components/Footer';
import About from './pages/AboutPage';

function App() {

  return (
    <Router>
       <Navbar/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/proyectos' element={<Projects/>}/>
        <Route path='/contacto' element={<Contact/>}/>
        <Route path='/newsletter' element={<Newsletter/>}/>
        <Route path='/success' element={<Success/>}/>
        <Route path='/about' element={<About/>}/>



       </Routes>
       <Footer/>
    </Router>
   
  )
}

export default App
