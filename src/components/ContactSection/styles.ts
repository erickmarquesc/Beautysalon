import styled from "styled-components";
import { Content } from "../containers/containers";

export const ContentContactSection = styled(Content)`

  align-items: center;
  flex-wrap: wrap;
  gap: 64px;

  .textContactSection{
    max-width: 404px;

    display: flex;
    flex-direction: column;
    gap: 24px;

   h2{
      max-width: 364px;
    }

    .ContenttextContactSection{
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
  }

  .iconsContactSection{
    display: flex;
    flex-direction: column;
    gap: 32px;
    margin-right:80px;
    
    li{
      all: inherit;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 12px;

    }
    
    .typeEmail{
      &:after {
        content: '';
        display: inline-block;
        width: 0;
      }

      &:first-letter {
        text-transform: lowercase;
      }
    }
  }
`