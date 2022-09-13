import {  Routes, Route, BrowserRouter, Link } from 'react-router-dom'

import Home from './componentes/pages/Home'
import Company from './componentes/pages/Company'
import Contact from "./componentes/pages/Contact"
import NewProject from './componentes/pages/NewProject'
import Container from './layout/Container'
import NavBar from './layout/Navbar'
import Footer from './layout/Footer'
function App() {
  return (
    <BrowserRouter> 
      <NavBar />

      <Container customClass='min-height'>
        <Routes>
          <Route path= "/" element={<Home/>}/> 
          <Route path= "/Company" element={<Company/>}/> 
          <Route path= "/Contact" element={<Contact/>}/> 
          <Route path= "/NewProject" element={<NewProject/>}/>    
        </Routes>
      </Container>

     <Footer />

  </BrowserRouter>
  );
}

export default App;
