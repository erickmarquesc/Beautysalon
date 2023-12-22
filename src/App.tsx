import { Container, Content } from "./components/containers/containers";
import { defaultTheme } from "./styles/theme/default";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";


import whatsappIcon from "./assets/icons/whatsappIcon.svg";

import mappinIcon from "./assets/icons/mappinIcon.svg";
import phoneIcon from "./assets/icons/phoneIcon.svg";
import mailIcon from "./assets/icons/mailIcon.svg";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ServicesSection } from "./components/ServicesSection";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <Header/>

      <Container>
        <HeroSection />
        <AboutSection />
        <ServicesSection/>
        <Content>
          <main>
            <section className="depoiments">
              <h1>
                depoimentos de quem já passou por aqui
              </h1>

              <div>
                <div className="cardDepoiment">
                  <p>
                    Eu sou cliente do Beautysalon há 5 anos e não troco por nada!
                    Certamente meu cabelo mudou muito depois que comecei a tratar somente com produtos naturais e veganos.
                    São profissionais incríveis e qualificados.
                  </p>

                  <img />
                  <label>Luna Falcão</label>
                </div>

                <div className="cardDepoiment">
                  <p>
                    Minha mãe frequenta o salão há anos e me levou um dia para conhecer.
                    Minha experiência foi incrível, eu continuo fazendo o a terapia capilar e isso salvou o meu cabelo.
                    Adoro todos os profissionais do Beautysalon.
                  </p>

                  <img />
                  <label>Luna Falcão</label>
                </div>
              </div>

            </section>

            <section className="contact">

              <div className="TextContactSection">
                <h1 className="title">
                  entre em contato com a gente
                </h1>
                <strong className="subTitle">
                  entre em contato com a Beautysalon, queremos tirar suas dúvidas, ouvir suas críticas e sugestões.
                </strong>
                <button>
                  <img src={whatsappIcon} />
                  agendar um horário
                </button>
              </div>

              <ul className="IconsContactSection">
                <li>
                  <img src={phoneIcon} alt="" />
                  <label>
                    (21) 9-7681-8468
                  </label>
                </li>
                <li>
                  <img src={mappinIcon} alt="" />
                  <label>
                    R. Marginal Luiz Inácio, 157
                  </label>
                </li>
                <li>
                  <img src={mailIcon} alt="" />
                  <label>
                    erickmarques3@gmail.com
                  </label>
                </li>
              </ul>

            </section>
          </main>
        </Content>
      </Container>

      <Footer/>
    </ThemeProvider>
  )
}
