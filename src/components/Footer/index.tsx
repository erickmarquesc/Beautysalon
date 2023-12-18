import instagramIcon from "../../assets/icons/instagramIcon.svg";
import LogoSecondary from "../../assets/logo/LogoSecondary.svg";
import facebookIcon from "../../assets/icons/facebookIcon.svg";
import youtubeIcon from "../../assets/icons/youtubeIcon.svg";

import {
  ContainerFooter,
  ContentFooter,
  ContentSocialMidia,
  ContentTextFooter
} from "./styles";

export const Footer = () => {
  return (
    <ContainerFooter as='footer'>
      <ContentFooter>
        <ContentTextFooter >
          <img src={LogoSecondary} alt="" />
          <h5>
            &copy;
            2024 Beautysalon.
            Todos os direitos reservados.
          </h5>
          <h6>
            Criado por Erick Marques.
          </h6>
        </ContentTextFooter>

        <ContentSocialMidia >
          <img src={instagramIcon} alt="" />
          <img src={facebookIcon} alt="" />
          <img src={youtubeIcon} alt="" />
        </ContentSocialMidia>
      </ContentFooter>
    </ContainerFooter>
  )
}