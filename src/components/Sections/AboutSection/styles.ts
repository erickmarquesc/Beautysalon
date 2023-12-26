import styled from 'styled-components'
import { Content } from '../../containers/styles'

export const ContentAboutSection = styled(Content)`
  gap: 18px;
  max-width: 1350px;
  align-items: center;

  @media (max-width: 1170px) {
    flex-wrap: wrap;
    justify-content: center;
  };

  .ContentDescription {
    gap: 12px;
    display: flex;
    max-width: 610px;
    flex-direction: column;
  };
`
