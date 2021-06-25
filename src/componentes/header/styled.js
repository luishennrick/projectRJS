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

      display: flex;

      ul{
          display:flex;
          margin-right: 35px;
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

      .avatar{
          display: flex;
          align-items: center;
          
          img{
              width: 35px;
              border-radius: 20px;
              border-margin: 20px;
              margin-right: 10px;
              cursor: pointer;

          }

          label{
              font-size: 14px;
              cursor: pointer;
              color: #ccc;

          }
      }

  }

 




`;