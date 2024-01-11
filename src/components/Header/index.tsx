import LogoPrimary from '../../assets/logo/LogoPrimary.svg'
import {
  ContainerHeader,
  ContentHeader,
  HamburgerMenu
} from './styles'

import imgMenu from '../../assets/icons/menu.svg'
import { useState } from 'react'
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

  const [openMenu, setOpemMenu] = useState(false)

  const hasopenMenu = () => {
    setOpemMenu(!openMenu)
  }

  return (
    <ContainerHeader as='header' isheader='true'>
      <ContentHeader>
        <img src={LogoPrimary} alt="" />

        <ul className='notMobile'>
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

        <button
          onClick={() => hasopenMenu()}
        >
          <img src={imgMenu} />
        </button>

        {openMenu && (
          <HamburgerMenu className='mobile'>
            <ul >
              {
                menuItens.map((item, index) => {
                  return (
                    <li key={index}>
                      <a href={item.url}
                        onClick={() => hasopenMenu()}
                      >
                        {item.title}
                      </a>
                    </li>
                  )
                })
              }
            </ul>
          </HamburgerMenu>

        )}

      </ContentHeader>
    </ContainerHeader>
  )
}