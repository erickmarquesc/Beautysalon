import imgHero from '../../assets/img/ImgHero.svg'
import { Button } from '../Button/styles'
import { SubTitle, Title } from '../Text/styles'
import { ContentHeroSection } from './styles'

export const HeroSection = () => {
  return (
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
  )
}