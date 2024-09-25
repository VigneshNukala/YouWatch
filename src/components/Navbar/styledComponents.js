import styled from 'styled-components'

export const DivContainer = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const ListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  @media (max-width: 767px) {
    position: absolute;
    width: 100%;
    height: 100vh;
    opacity: 1;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #ffffff;
    display: none;
  }
`

export const ListItems = styled.li`
  color: ${props => props.color};
  padding: 10px 0;
  display: flex;
  align-items: center;
  padding: 10px 25px;
  transition: background-color 0.5s;
  transform-origin: center center;

  :hover {
    background-color: ${props => props.bgColor};
    color: black;
    .nav-icons {
      color: red;
    }
  }
`

export const SpanEl = styled.span`
  padding: 0 10px;
`

export const ParaEl = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 600;
`
