
import { Button } from '../../Button/styles'
import { Title, SubTitle } from '../../Text/styles'
import { Container } from '../../containers/styles'
import { ContentHeroSection } from './styles'

import imgHero from '../../../assets/img/ImgHero.svg'

export const HeroSection = () => {
  return (
    <Container id='hero'>
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