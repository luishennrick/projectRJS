/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { AreaHeader } from './styled';
import { Link } from 'react-router-dom';

function Header(props) {
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

                 <div className="avatar">
                     <img src={props.user.avatar}/>
                     <labe>{props.user.name}</labe>
                 </div>
             </nav>


          </div>
          
          </AreaHeader>
              
            
        
        
    );
}
export default Header;