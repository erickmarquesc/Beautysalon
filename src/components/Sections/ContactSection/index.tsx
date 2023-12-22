import { Container } from '@/components/containers/styles'
import { SubTitle, Title } from '@/components/Text/styles'
import { Button } from '@/components/Button/styles'

import { ContentContactSection } from './styles'

import whatsappIcon from '@/assets/icons/whatsappIcon.svg'
import mappinIcon from '@/assets/icons/mappinIcon.svg'
import phoneIcon from '@/assets/icons/phoneIcon.svg'
import mailIcon from '@/assets/icons/mailIcon.svg'

export const ContactSection = () => {
  return (
    <Container>
      <ContentContactSection>
        <div className="textContactSection">
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
        </div>

        <ul className="iconsContactSection">
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
        </ul>
      </ContentContactSection>
    </Container>
  )
}