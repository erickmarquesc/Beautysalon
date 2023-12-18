import { Container, Content } from "./components/containers/containers";
import { defaultTheme } from "./styles/theme/default";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";

import imgAbout from "./assets/img/ImgAbout.svg";

import scissorsIcon from "./assets/icons/scissorsIcon.svg";
import whatsappIcon from "./assets/icons/whatsappIcon.svg";
import shampooIcon from "./assets/icons/shampooIcon.svg";
import mappinIcon from "./assets/icons/mappinIcon.svg";
import phoneIcon from "./assets/icons/phoneIcon.svg";
import hairIcon from "./assets/icons/hairIcon.svg";
import mailIcon from "./assets/icons/mailIcon.svg";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <Header/>

      <Container>
        <HeroSection />
        
        <Content>
          <main>

            <section className="about">
              <img src={imgAbout} alt="" />
              <div>
                <h1 className="title">
                  sobre nós
                </h1>
                <div className="paragrafos">
                  <p>beautysalon, seu espaço exclusivo para cuidados capilares em São Paulo!
                    Há mais de 10 anos no mercado, somos um salão especializado em tratamentos naturais
                    fundado por três mulheres brasileiras apaixonadas por realçar a beleza autêntica dos cabelos.
                  </p>
                  <p>em pleno coração de São Paulo, destacamo-nos por oferecer terapia capilar, cortes e tratamentos personalizados.
                    Aqui, acreditamos na saúde natural dos seus cabelos e proporcionamos uma experiência única,
                    guiada pela expertise das nossas fundadoras.
                  </p>
                  <p>no Beautysalon, a feminilidade, força e graça das mulheres se encontram.
                    Confie em nós para cuidar da saúde dos seus cabelos em um ambiente acolhedor e elegante.
                    Venha viver a experiência Beautysalon, onde a excelência se une à tradição e inovação.
                  </p>
                </div>
              </div>
            </section>

            <section className="services">

              <div className="title">
                <h1>serviços</h1>
                <strong className="subTitle">
                  com mais de 10 anos no mercado, o Beautysalon já conquistou clientes de inúmeros países com seus tratamentos exclusivos e totalmente naturais.
                </strong>
              </div>

              <div className="cardsContente">

                <div className="card">
                  <img src={hairIcon} alt="" />
                  <h1 className="title">
                    terapia capilar
                  </h1>
                  <p className="description">
                    terapia completa para couro cabeludo e fios, protegendo todos os tipos de cabelos, inclusive os longos e finos.
                  </p>
                </div>

                <div className="card">
                  <img src={scissorsIcon} alt="" />
                  <h1 className="title">
                    cortes
                  </h1>
                  <p className="description">
                    a nossa equipe é repleta de profissionais renomados, famosos por lançarem tendências com cortes diferenciados e clássicos.
                  </p>
                </div>

                <div className="card">
                  <img src={shampooIcon} alt="" />
                  <h1 className="title">
                    tratamento
                  </h1>
                  <p className="description">
                    o beautysalon conta com diversos tratamentos naturais e totalmente veganos, para qualquer tipo de cabelo.
                  </p>
                </div>

              </div>

            </section>

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
