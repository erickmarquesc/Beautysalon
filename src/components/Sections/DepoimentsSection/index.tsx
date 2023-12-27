
import { ContentDepoimentSection } from './styles'

import avatarI from '../../../assets/img/users/UserImgI.svg'
import avatarII from '../../../assets/img/users/UserImg.svg'
import { Container } from '../../containers/styles'
import { Title, Description } from '../../Text/styles'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

interface IDepoimentsAPI {
  descripation: string,
  user: string,
  avatar: string,
}
export const DepoimentSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Garante que a animação só aconteça uma vez
  })
  const depoimentsAPI: IDepoimentsAPI[] = [
    {
      descripation:
        `Eu sou cliente do Beautysalon há 5 anos e não troco por nada!
      Certamente meu cabelo mudou muito depois que comecei a tratar somente com produtos naturais e veganos.
      São profissionais incríveis e qualificados.`,
      user: 'Luna Falcão',
      avatar: avatarI
    },
    {
      descripation:
        `Minha mãe frequenta o salão há anos e me levou um dia para conhecer.
      Minha experiência foi incrível, eu continuo fazendo o a terapia capilar e isso salvou o meu cabelo.
      Adoro todos os profissionais do Beautysalon.`,
      user: 'Wanessa Souza',
      avatar: avatarII
    },
  ]
  return (
    <Container id='depoiment'>
      <ContentDepoimentSection>
        <Title
          ref={ref}
          initial={{ opacity: 0, y: '10%' }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: '10%' }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        >
          depoimentos de quem já passou por aqui
        </Title>

        <div className="ContentCards">
          {depoimentsAPI.map((depoiment, index) => {
            return (
              <motion.div
                className="cardDepoiment"
                key={index}
                ref={ref}
                initial={{ opacity: 0, y: '10%' }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: '10%' }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
              >
                <Description>
                  <strong>
                    "
                  </strong>
                  {depoiment.descripation}
                  <strong>
                    "
                  </strong>
                </Description>
                <section className="avatarSection">
                  <img
                    src={depoiment.avatar}
                    alt=""
                  />
                  <Description>
                    {depoiment.user}
                  </Description>
                </section>
              </motion.div>
            )
          })}
        </div>
      </ContentDepoimentSection>
    </Container>
  )
}