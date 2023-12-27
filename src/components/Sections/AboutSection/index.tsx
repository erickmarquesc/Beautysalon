

import { Container } from '../../containers/styles'
import { Title, Description } from '../../Text/styles'
import { ContentAboutSection } from './styles'
import { motion } from 'framer-motion'

import imgAbout from '../../../assets/img/ImgAbout.svg'
import { useInView } from 'react-intersection-observer'

export const AboutSection = () => {

  const [ref, inView] = useInView({
    triggerOnce: true, // Garante que a animação só aconteça uma vez
  })

  return (
    <Container id='about'>
      <ContentAboutSection >
        <motion.img
          ref={ref}
          src={imgAbout} alt=""
          initial={{ opacity: 0, y: '10%' }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: '10%' }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        />
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: '10%' }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: '10%' }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        >
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
        </motion.div>
      </ContentAboutSection>
    </Container>
  )
}