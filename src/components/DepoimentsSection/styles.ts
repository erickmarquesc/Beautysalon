import styled from "styled-components";
import { Content } from "../containers/containers";

export const ContentDepoimentSection = styled(Content)`
  flex-direction: column;
  align-items: center;

  h1{ 
    max-width: 52.3rem;
    text-align: center;
  }
  
  .ContentCards{
    gap: 32px;
    display: flex;
    justify-content: center;

    .cardDepoiment{
      gap: 8px;
      display: flex;
      padding: 28px;
      max-width: 542px;
      border-radius: 8px;
      flex-direction: column;
      box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 5px;
      background-color: ${(props) => props.theme['white']};

      .avatarSection{
        gap: 12px;
        display: flex;
        align-items: center;

        img{
          width: 32px;
        }
      }

      p{
        line-height: 200%;
        text-align: justify;

        strong{
          font-size: 3.2rem;
          color: ${(props) => props.theme['green']};
        }
      }
    }
  }
`