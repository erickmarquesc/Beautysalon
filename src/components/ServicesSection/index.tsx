import scissorsIcon from '../../assets/icons/scissorsIcon.svg'
import shampooIcon from '../../assets/icons/shampooIcon.svg'
import hairIcon from '../../assets/icons/hairIcon.svg'
import { ContainerServicesSection } from './styles'
import { Description, SubTitle, Title } from '../Text/styles'

export const ServicesSection = () => {
  return (
    <ContainerServicesSection >

      <div className="titheaderServicesSection">
        <Title>
          serviços
        </Title>
        <SubTitle>
          com mais de 10 anos no mercado, o Beautysalon já conquistou clientes de inúmeros países com seus tratamentos exclusivos e totalmente naturais.
        </SubTitle>
      </div>

      <div className="contentCards">

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

      </div>

    </ContainerServicesSection>
  )
}