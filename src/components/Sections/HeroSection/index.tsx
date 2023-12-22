import { Container } from '@/components/containers/styles'
import { SubTitle, Title } from '@/components/Text/styles'
import { ContentHeroSection } from './styles'
import { Button } from '@/components/Button/styles'

import imgHero from '@/assets/img/ImgHero.svg'

export const HeroSection = () => {
  return (
    <Container>
      <ContentHeroSection>
        <div className="textSection">
          <Title>
            saúde natural para os seus cabelos
          </Title>
          <SubTitle>
            um salão exclusivo em São Paulo,<br />
            especializado em tratamentos naturais.
          </SubTitle>

          <Button>
            <label>
              agendar um horário
            </label>
          </Button>

        </div>
        <img src={imgHero} alt="" />
      </ContentHeroSection>
    </Container>
  )
}