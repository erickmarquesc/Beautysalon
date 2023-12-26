import styled from 'styled-components'

/**
 * @component @example
 * // Exemplo de uso:
 * <Button>
      <img src={icon} />
        <label>
          text button
        </label>
    </Button>
 */
export const Button = styled.button`
  gap: 10px;
  border: none;
  display: flex;
  max-width: 25rem;
  overflow: hidden;
  flex-wrap: nowrap;
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
  text-transform: none;
  padding: 14px 32px 15px 32px;
  font: 700 1.6rem 'DM Sans', sans-serif;
  color: ${ (props) => props.theme['white'] };
  background-color: ${ (props) => props.theme['green'] };

  cursor: pointer;

  transition: 1s;

  &:hover{
    filter: brightness(80%);
  };
  
  label{
    cursor: pointer;

    &:after {
      content: '';
      display: inline-block;
      width: 0;
    };
    
    &:first-letter {
      text-transform: uppercase;
    };
  };
`