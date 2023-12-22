import styled from 'styled-components'

import { Content } from '@/components/containers/styles'

export const ContentHeroSection = styled(Content)`
  gap: 32px;
  flex-wrap: wrap;
  align-items: center;

  @media (max-width: 1100px) {
    text-align: center;
    justify-content: center;
    flex-wrap: wrap-reverse;

    img {
      width: 100%;
    }
  }

  img {
    max-width: 658px;
  }

  .textSection {
    display: flex;
    max-width: 39.6rem;
    align-items: center;
    flex-direction: column;

    button {
      margin-top: 24px;
      align-items: center;
      justify-content: center;
    }
  }
`
