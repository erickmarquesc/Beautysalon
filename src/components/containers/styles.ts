import styled from 'styled-components'

interface IContainer {
  header?: boolean;
}

export const Container = styled.div<IContainer>`
  height: auto;
  padding: ${(props) => (props.header ? '10px' : '80px')} 0;
  
  border-bottom: 2px solid;
  border-image: linear-gradient(90deg, rgba(105,185,157,1) 0%, rgba(204,244,230,0.34) 100%);
  border-image-slice: 1;
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  margin: 0 auto;
  padding: 0 15px;
  max-width: 1120px;
  justify-content: space-between;
`