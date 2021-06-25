import './App.css';
import Header from './componentes/header';
import Footer from './componentes/footer';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import React, { useState } from 'react';
import Login from './pages/login';

function App() {

    const [user, setUser] = useState(null);

    const ActionLoginDataGoogle = async (u) =>{
       
      let newUser ={
        id: u.uid,
        name: u.displayName,
        avatar: u.photoURL
      }

      setUser(newUser);

    }

    if (user === null){
      return (
        <Login onReceiveGoogle = {ActionLoginDataGoogle}/>
      );
    }

  return (
    <BrowserRouter>
      
      <Header user= {user} />
      <Routes/>
      <Footer/>

    </BrowserRouter>
  );
}

export default App;
