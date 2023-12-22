import styled from "styled-components";
import { Content } from "../containers/containers";

export const ContainerServicesSection = styled(Content)`

  gap: 56px;
  text-align: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  
  .titheaderServicesSection{
    max-width: 52.3rem;
    text-align: center;
  }
  
  .contentCards{
    gap: 16px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
  }
  
  .card{
    max-width: 352px;
    padding: 58px 48px;
    text-align: center;
    box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 5px;
    border-bottom: 4px solid ${(props) => props.theme['green']};

    h1{
      font-size: 2.4rem;
    }

    p{
      max-width: 25.6rem;
    }
  }
`