import styled from 'styled-components'

export const TodosContainer = styled.ul`
  width: 400px;
  padding: 10px;
  display: inline-block;
  width: calc(100% - 250px);
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`

export const TodoItem = styled.li`
  padding: 20px 20px;
  margin: 0;
  border: 1px solid #0392cf;
`

export const Dot = styled.div`
  display: inline-block;
  &:before {
    background-color: ${(props) => props.color};
    border-radius: 10px;
    content: ' ';
    display: block;
    margin: 0;
    height: 10px;
    width: 10px;
  }
`

export const Task = styled.p`
  display: inline-block;
  width: 60%;
  margin: 0;
`

export const Date = styled.p`
  margin: 0;
  display: inline-block;
  text-align: right;
`