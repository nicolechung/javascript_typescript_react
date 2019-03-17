import styled from 'styled-components'

export const TodosContainer = styled.ul`
  width: 400px;
  padding: 10px;
`

export const TodoItem = styled.li`
  padding: 10px;
`

export const Dot = styled.div`
  display: inline-block;
  &:before {
    background-color: ${(props) => props.color};
    border-radius: 10px;
    content: ' ';
    display: block;
    margin: 0 8px;
    height: 10px;
    width: 10px;
  }
`