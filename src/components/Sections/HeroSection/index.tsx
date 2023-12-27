
import { Button } from '../../Button/styles'
import { Title, SubTitle } from '../../Text/styles'
import { Container } from '../../containers/styles'
import { ContentHeroSection } from './styles'

import imgHero from '../../../assets/img/ImgHero.svg'
import { motion } from 'framer-motion'

export const HeroSection = () => {
  return (
    <Container id='hero'>
      <ContentHeroSection>
        <motion.div className="textSection"
          initial={{ opacity: 0, y: '10%' }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        >
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

        </motion.div>
        <motion.img
          src={imgHero}
          alt=""
          initial={{ opacity: 0, x: '10%' }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2.5, ease: 'easeInOut' }}
        />
      </ContentHeroSection>
    </Container>
  )
}