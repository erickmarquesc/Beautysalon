

import { ContentContactSection } from './styles'

import whatsappIcon from '../../../assets/icons/whatsappIcon.svg'
import mappinIcon from '../../../assets/icons/mappinIcon.svg'
import phoneIcon from '../../../assets/icons/phoneIcon.svg'
import mailIcon from '../../../assets/icons/mailIcon.svg'
import { Button } from '../../Button/styles'
import { Title, SubTitle } from '../../Text/styles'
import { Container } from '../../containers/styles'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export const ContactSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Garante que a animação só aconteça uma vez
  })
  return (
    <Container id='contact'>
      <ContentContactSection>
        <motion.div
          className="textContactSection"
          ref={ref}
          initial={{ opacity: 0, y: '10%' }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: '10%' }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        >
          <div className="ContenttextContactSection">
            <Title>
              entre em contato com a gente!
            </Title>
            <SubTitle>
              entre em contato com a Beautysalon, queremos tirar suas dúvidas, ouvir suas críticas e sugestões.
            </SubTitle>
          </div>

          <Button>
            <img src={whatsappIcon} />
            Entrar em contato
          </Button>
        </motion.div>

        <motion.ul className="iconsContactSection"
          ref={ref}
          initial={{ opacity: 0, y: '10%' }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: '10%' }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        >
          <li>
            <img src={phoneIcon} alt="" />
            <SubTitle>
              (21) 9-7681-8468
            </SubTitle>
          </li>
          <li>
            <img src={mappinIcon} alt="" />
            <SubTitle>
              R. Marginal Luiz Inácio, 157
            </SubTitle>
          </li>
          <li>
            <img src={mailIcon} alt="" />
            <SubTitle className="typeEmail">
              erickmarques3@gmail.com
            </SubTitle>
          </li>
        </motion.ul>
      </ContentContactSection>
    </Container>
  )
}