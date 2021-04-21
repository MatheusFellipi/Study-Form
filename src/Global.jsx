import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body{
    padding:1rem;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:#E1E9F0;
    font-family: "Roboto", sans-serif;

  }
  button{
    cursor: pointer;
  }
  a{
    text-decoration:none; 
    
  }
`;
