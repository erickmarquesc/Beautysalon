

import { Container } from '../../containers/styles'
import { Title, Description } from '../../Text/styles'
import { ContentAboutSection } from './styles'

import imgAbout from '../../../assets/img/ImgAbout.svg'

export const AboutSection = () => {
  return (
    <Container id='about'>
      <ContentAboutSection >
        <img src={imgAbout} alt="" />
        <div>
          <Title>
            sobre nós
          </Title>
          <div className="ContentDescription">
            <Description>
              beautysalon, seu espaço exclusivo para cuidados capilares em São Paulo!
              Há mais de 10 anos no mercado, somos um salão especializado em tratamentos naturais
              fundado por três mulheres brasileiras apaixonadas por realçar a beleza autêntica dos cabelos.
            </Description>
            <Description>
              em pleno coração de São Paulo, destacamo-nos por oferecer terapia capilar, cortes e tratamentos personalizados.
              Aqui, acreditamos na saúde natural dos seus cabelos e proporcionamos uma experiência única,
              guiada pela expertise das nossas fundadoras.
            </Description>
            <Description>
              no Beautysalon, a feminilidade, força e graça das mulheres se encontram.
              Confie em nós para cuidar da saúde dos seus cabelos em um ambiente acolhedor e elegante.
              Venha viver a experiência Beautysalon, onde a excelência se une à tradição e inovação.
            </Description>
          </div>
        </div>
      </ContentAboutSection>
    </Container>
  )
}