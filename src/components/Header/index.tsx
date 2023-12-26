import LogoPrimary from '../../assets/logo/LogoPrimary.svg'
import {
  ContainerHeader,
  ContentHeader
} from './styles'

interface IMenuItens {
  title: string,
  url: string,
}

export const Header = () => {
  const menuItens: IMenuItens[] = [
    { title: 'início', url: '#hero' },
    { title: 'sobre', url: '#about' },
    { title: 'serviços', url: '#services' },
    { title: 'depoimentos', url: '#depoiment' },
    { title: 'contato', url: '#contact' },
  ]

  return (
    <ContainerHeader as='header' header>
      <ContentHeader>
        <img src={LogoPrimary} alt="" />

        <ul >
          {
            menuItens.map((item, index) => {
              return (
                <li key={index}>
                  <a href={item.url}>
                    {item.title}
                  </a>
                </li>
              )
            })
          }
        </ul>
      </ContentHeader>
    </ContainerHeader>
  )
}