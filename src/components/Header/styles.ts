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

  ul{
    gap: 32px;
    display: flex;
    padding: 10px 2px;
    flex-direction: row;

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