import styled from 'styled-components';

export const AreaHeader = styled.div`

  height:60px;
  background-image: linear-gradient(to right, #ffff, yellow, orange) ;

  .container{
      padding: 5px  20px;
      display: flex;
      align-items: center;

  }

  .logo{

      flex:1;
   img{
     width: 50px;
     
    }

  }

  nav{

      ul{
          display:flex;
      }

      li{
          list-style: none;
          margin-left: 45px;

          a{
              text-decoration: none;
              color: red;

              &:hover{
                  color: white;
              }
          }
      }

  }

 




`;