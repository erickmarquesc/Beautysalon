import styled from "styled-components";
import {
  Container,
  Content
} from "../containers/containers";

export const ContainerFooter = styled(Container)`
  background-color:   ${(props) => props.theme['green']};
`
export const ContentFooter = styled(Content)`
  align-items: center;
`

export const ContentTextFooter = styled.div`
  gap: 16px;
  display: flex;
  flex-direction: column;
  font: 400 1.6rem 'DM Sans', sans-serif;
`
export const ContentSocialMidia = styled.div`
  gap: 32px;
  display: flex;
`