import styled from 'styled-components'
import {
  Container,
  Content
} from '../containers/styles'

export const ContainerHeader = styled(Container)`
  background-color: ${(props) => props.theme['white']};
  border-bottom: 1px solid ${(props) => props.theme['gray-light']};
`

export const ContentHeader = styled(Content)`
  align-items: center;

  button{
    border: none;
    display: flex;
    padding: 12px;
    cursor: pointer;
    align-items: center;
    justify-content: center;

    border-radius: 8px;

    @media(min-width: 700px){
      display: none;
    };
  };

  .notMobile{ 
    @media(max-width: 700px){
      display: none;
    };
  };
  .mobile{
    @media(min-width: 700px){
      display: none;
    };
  };

  ul{
    gap: 32px;
    display: flex;
    padding: 10px 2px;
    flex-direction: row;

    @media(max-width: 700px){
      gap: 16px;
      padding: 8px 2px;
      flex-direction: column;
    }

    li{
      all: inherit;
      font: 400 1.6rem 'DM Sans', sans-serif;
      
      a{
        all: inherit;
        padding-bottom: 6px;
        text-transform: capitalize;
        border-bottom: 6px solid transparent;

        &:hover{
          cursor: pointer;
          border-radius: 0 0 2px 2px;
          border-bottom: 3px solid ${(props) => props.theme['green']};
        };
      };
    };

    
  };
`

export const HamburgerMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 68px;
  right: 0;
  width: 200px;
  background-color: ${(props) => props.theme['white']};
  border: 1px solid ${(props) => props.theme['gray-light']};
  padding: 10px;
  z-index: 1000;
  border-radius: 8px;

`