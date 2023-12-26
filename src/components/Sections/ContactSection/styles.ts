import styled from 'styled-components'
import { Content } from '../../containers/containers'


export const ContentContactSection = styled(Content)`
  gap: 64px;
  flex-wrap: wrap;
  align-items: center;

  .textContactSection {
    gap: 24px;
    display: flex;
    max-width: 404px;
    flex-direction: column;

    h2 {
      max-width: 364px;
    }

    .ContenttextContactSection {
      gap: 12px;
      display: flex;
      flex-direction: column;
    }
  }

  .iconsContactSection {
    gap: 32px;
    display: flex;
    margin-right: 80px;
    flex-direction: column;

    li {
      all: inherit;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 12px;
    }

    .typeEmail {
      &:after {
        content: "";
        display: inline-block;
        width: 0;
      }

      &:first-letter {
        text-transform: lowercase;
      }
    }
  }
`
