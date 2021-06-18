/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { AreaHeader } from './styled';
import { Link } from 'react-router-dom';

function Header() {
    return (
        
        
          <AreaHeader>
          <div Class="container">
           <div Class="logo">
             <img src="../../../coroa.png"/>
          
             </div>

             <nav>
                 <ul>
                     <li><Link to='/'>Home</Link></li>
                     <li><Link to='/config'>Configurações</Link></li>
                     <li><Link to='/logout'>Sair</Link></li>
                 </ul>
             </nav>


          </div>
          
          </AreaHeader>
              
            
        
        
    );
}
export default Header;