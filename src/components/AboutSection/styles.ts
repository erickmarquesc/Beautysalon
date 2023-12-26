import styled from "styled-components";
import { Content } from "../containers/containers";

export const ContentAboutSection = styled(Content)`  
  max-width: 1350px;
  align-items: center;
  gap: 32px;
  
  @media(max-width: 1130px){
    flex-wrap: wrap;
    justify-content: center;
    
  }
  
  .ContentDescription{
    gap: 12px;
    display: flex;
    max-width: 610px;
    flex-direction: column;
  }
`