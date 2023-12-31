import { Description, SubTitle, Title } from '../../../components/Text/styles'
import { Container } from '../../../components/containers/styles'
import { ContainerServicesSection } from './styles'

import scissorsIcon from '../../../assets/icons/scissorsIcon.svg'
import shampooIcon from '../../../assets/icons/shampooIcon.svg'
import hairIcon from '../../../assets/icons/hairIcon.svg'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export const ServicesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Garante que a animação só aconteça uma vez
  })
  return (
    <Container id='services'>
      <ContainerServicesSection >
        <motion.div className="titheaderServicesSection"
          ref={ref}
          initial={{ opacity: 0, y: '10%' }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: '10%' }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        >
          <Title>
            serviços
          </Title>
          <SubTitle>
            com mais de 10 anos no mercado, o Beautysalon já conquistou clientes de inúmeros países com seus tratamentos exclusivos e totalmente naturais.
          </SubTitle>
        </motion.div>

        <motion.div className="contentCards"
          ref={ref}
          initial={{ opacity: 0, y: '10%' }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: '10%' }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        >

          <div className="card">
            <img src={hairIcon} alt="" />
            <Title>
              terapia capilar
            </Title>
            <Description>
              terapia completa para couro cabeludo e fios, protegendo todos os tipos de cabelos, inclusive os longos e finos.
            </Description>
          </div>

          <div className="card">
            <img src={scissorsIcon} alt="" />
            <Title>
              cortes
            </Title>
            <Description>
              a nossa equipe é repleta de profissionais renomados, famosos por lançarem tendências com cortes diferenciados e clássicos.
            </Description>
          </div>

          <div className="card">
            <img src={shampooIcon} alt="" />
            <Title>
              tratamento
            </Title>
            <Description>
              o beautysalon conta com diversos tratamentos naturais e totalmente veganos, para qualquer tipo de cabelo.
            </Description>
          </div>

        </motion.div>
      </ContainerServicesSection>
    </Container>
  )
}