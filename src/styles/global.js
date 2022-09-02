import { createGlobalStyle } from "styled-components";

import "react-toastify/dist/ReactToastify.css";

export default createGlobalStyle`

  *{ 
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
  }
  body{
      background: #FEFFFE;
      -webkit-font-smoothing: antialiased;
  }
  body,input, button{
      font: 14px Roboto,sans-serif;
  }
  .container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 0 20px 50px;
  }
  button{
      cursor: pointer;
  }
  html{ 
  @media(max-width:1080px){
    font-size:93.75%; //15px
  }
  @media(max-width:720px){
    font-size:87.5%; //14px
  }    
}  
  

`;
