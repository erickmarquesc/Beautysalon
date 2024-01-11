import { ButtonHTMLAttributes } from 'react'
import { Button } from './styles'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: string;
  label: string;
}

/**
 * ButtonCTA é um componente de botão personalizado que pode ser usado para chamadas à ação.
 * Ele permite a adição de um ícone (SVG) e um texto principal.
 *
 * @component
 * @example
 * // Exemplo de uso:
 * <ButtonCTA icon="/caminho/do/icon.svg" label="Clique Aqui" onClick={() => console.log('Botão Clicado')} />
 *
 * @param {string} icon - Caminho para o ícone em formato SVG.
 * @param {string} label - Texto principal a ser exibido no botão.
 * @param {...ButtonHTMLAttributes<HTMLButtonElement>} rest - Outras propriedades comuns de um botão HTML.
 */

export const ButtonCTA = ({ icon, label, ...rest }: IButtonProps) => {
  return (
    <Button {...rest}>
      {icon && <img src={icon} alt="Icon button" />}
      <span>{label}</span>
    </Button>
  )
}