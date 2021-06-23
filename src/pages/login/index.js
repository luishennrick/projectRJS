import  React from 'react';
import {BrowserRouter, Switch, Route ,Link } from 'react-router-dom';
import {Arealogin} from './styled.js'
import { BtnDefaultIcons, BtnDefaut} from '../../componentes/styled.js';
import  FacebookIcon  from '@material-ui/icons/Facebook';
import GTranslateIcon from '@material-ui/icons/GTranslate';
 export default function login() {

  return(
   <BrowserRouter>
    <Switch>
      <Route exact path="/registrar">
      <Arealogin>
        <h1>Crie sua conta</h1>

          <form >
              <div className="form--imput">
                  <label>Usuário:</label>
                  <input type="text"/>
              </div><br/>

              <div className="form--imput">
                  <label>E-mail:</label>
                  <input type="email"/>
              </div><br/>

              <div className="form--imput">
                  <label>Senha:</label>
                  <input type="password"/>
              </div><br/>
             
             <BtnDefaut>Cadastrar</BtnDefaut>

             <div className="footerLogin">
                 Já tem uma conta?
                <Link to="/">Login</Link>
             </div>
              
          </form>

    </Arealogin>

      </Route>




    <Arealogin>
        <h1>Login</h1>

        <BtnDefaultIcons> 
         <FacebookIcon/>
        <div className="center">  Login com Facebook </div>
        </BtnDefaultIcons>

        <BtnDefaultIcons> 
         <GTranslateIcon/>
        <div className="center"> Login com Google </div>
        </BtnDefaultIcons>
          
          <p>OU</p>

          <form >
              <div className="form--imput">
                  <label>E-mail:</label>
                  <input type="email"/>
              </div><br/>

              <div className="form--imput">
                  <label>Senha:</label>
                  <input type="password"/>
              </div><br/>
             
             <BtnDefaut>Entrar</BtnDefaut>

             <div className="footerLogin">
                 Não tem uma conta?
                <Link to="/Registrar">Registre-se</Link>
             </div>
              
          </form>

    </Arealogin>
    </Switch>
  </BrowserRouter>
  );
}

