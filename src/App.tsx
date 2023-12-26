import { defaultTheme } from './styles/theme/default'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Main } from './components/Main'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <Header />

      <Main.Root>
        <Main.Hero />
        <Main.About />
        <Main.Services />
        <Main.Depoiment />
        <Main.Contact/>
      </Main.Root>

      <Footer />
    </ThemeProvider>
  )
}
