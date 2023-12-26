import styled from "styled-components"
import { Content } from "../containers/containers"

export const ContentHeroSection = styled(Content)`
  gap: 32px;
  flex-wrap: wrap;
  padding-top: 20px;
  align-items: center;
  padding-bottom: 60px;
  
  @media(max-width: 1130px){
    text-align: center;
    justify-content: center;
    flex-wrap: wrap-reverse;
    
    img{
      width: 100%;
    };
  };
  
  img{
    max-width: 658px;
  };
  
  .textSection{
    display: flex;
    max-width: 39.6rem;
    align-items: center;
    flex-direction: column;
    
    button{
      margin-top: 24px;
    };

  };
`