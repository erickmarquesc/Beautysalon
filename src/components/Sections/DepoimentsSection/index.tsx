
import { ContentDepoimentSection } from './styles'

import avatarI from '../../../assets/img/users/UserImgI.svg'
import avatarII from '../../../assets/img/users/UserImg.svg'
import { Container } from '../../containers/styles'
import { Title, Description } from '../../Text/styles'

interface IDepoimentsAPI {
  descripation: string,
  user: string,
  avatar: string,
}
export const DepoimentSection = () => {

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
        <Title>
          depoimentos de quem já passou por aqui
        </Title>

        <div className="ContentCards">
          {depoimentsAPI.map((depoiment, index) => {
            return (
              <div className="cardDepoiment" key={index}>
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
              </div>
            )
          })}
        </div>
      </ContentDepoimentSection>
    </Container>
  )
}