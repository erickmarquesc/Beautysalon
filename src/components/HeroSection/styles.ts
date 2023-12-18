import styled from "styled-components";
import { Content } from "../containers/containers";

export const ContentHeroSection = styled(Content)`
  gap: 32px;
  flex-wrap: wrap;
  padding-top: 20px;
  align-items: center;
  padding-bottom: 60px;

  @media(max-width: 1100px){
    text-align: center;
    justify-content: center;
    flex-wrap: wrap-reverse;

    img{
      width: 100%;
    }
  }

  img{
    max-width: 658px;
  }

  .textSection{
    max-width: 39.6rem;
  }

  button{
    margin-top: 24px;
  }
`