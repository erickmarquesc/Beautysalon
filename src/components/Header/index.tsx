import LogoPrimary from "../../assets/logo/LogoPrimary.svg";
import {
  ContainerHeader,
  ContentHeader
} from "./styles";

interface IMenuItens {
  title: string,
  url: string,
}

export const Header = () => {
  const menuItens: IMenuItens[] = [
    { title: 'início', url: '#inicio' },
    { title: 'sobre', url: '#sobre' },
    { title: 'serviços', url: '#servicos' },
    { title: 'depoimentos', url: '#depoimentos' },
    { title: 'contato', url: '#contato' },
  ];

  return (
    <ContainerHeader as='header'>
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