import './App.css';
import Header from './componentes/header';
import Footer from './componentes/footer';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import React, { useState } from 'react';
import Login from './pages/login';

function App() {

    const [user, setUser] = useState(null);

    if (user === null){
      return (
        <Login/>
      );
    }

  return (
    <BrowserRouter>
      
      <Header/>
      <Routes/>
      <Footer/>

    </BrowserRouter>
  );
}

export default App;
