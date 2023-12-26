import { Container } from './components/containers/containers'
import { defaultTheme } from './styles/theme/default'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'




import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { HeroSection } from './components/HeroSection'
import { AboutSection } from './components/AboutSection'
import { ServicesSection } from './components/ServicesSection'
import { DepoimentSection } from './components/DepoimentsSection'
import { ContactSection } from './components/ContactSection'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <Header />

      <main>
        <Container>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <DepoimentSection />
          <ContactSection/>
        </Container>
      </main>

      <Footer />
    </ThemeProvider>
  )
}
