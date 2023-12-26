import styled from 'styled-components'

export const Title = styled.h1`
  font: 700 3.6rem 'Poppins', sans-serif;
  color: ${(props) => props.theme['green-dark']};
  text-transform: capitalize;

  text-transform: none;
  overflow: hidden;

  &:after {
    content: '';
    display: inline-block;
    width: 0;
  };

  &:first-letter {
    text-transform: uppercase;
  };
`
export const SubTitle = styled.h2`
  font: 400 1.8rem 'DM Sans', sans-serif;
  color: ${(props) => props.theme['gray']};

  text-transform: none;
  overflow: hidden;

  &:after {
    content: '';
    display: inline-block;
    width: 0;
  };

  &:first-letter {
    text-transform: uppercase;
  };
`
export const Description = styled.p`
  font: 400 1.6rem 'DM Sans', sans-serif;
  color: ${(props) => props.theme['gray']};

  text-transform: none;
  overflow: hidden;

  &:after {
    content: '';
    display: inline-block;
    width: 0;
  };

  &:first-letter {
    text-transform: uppercase;
  };
`