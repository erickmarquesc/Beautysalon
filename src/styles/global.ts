import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  };

  html{
    font-size: 10px;
    scroll-behavior: smooth;
  }
  
  body {
    font-weight: 400;
    font-family: 'Poppins', sans-serif;
    background: ${(props) => props.theme['backgound']};
  };

    /* Estilizando a barra de rolagem */
  ::-webkit-scrollbar {
      width: 8px; /* Largura da barra de rolagem no Chrome/Safari/Edge */
  }

  ::-webkit-scrollbar-thumb {
      background-color: ${(props) => props.theme['green']}; /* Cor do "ponteiro" (thumb) da barra de rolagem no Chrome/Safari/Edge */
  }

  ::-webkit-scrollbar-track {
      background-color: ${(props) => props.theme['gray-light']}; /* Cor de fundo da trilha da barra de rolagem no Chrome/Safari/Edge */
  }
`