import './App.css';
import Header from './componentes/header';
import Footer from './componentes/footer';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';


function App() {
  return (
    <BrowserRouter>
      
      <Header/>
      <Routes/>
      <Footer/>

    </BrowserRouter>
  );
}

export default App;
