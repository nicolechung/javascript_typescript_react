import styled from 'styled-components'

export const TodosContainer = styled.div`
  padding: 0;
  display: inline-block;
  width: calc(100% - 270px);
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`

export const TodoItem = styled.li`
  padding: 20px 20px;
  margin: 0;
  border-top: 1px solid #fff;
  cursor: pointer;
  & > svg:not(:root).svg-inline--fa {
    display: inline-block;
    margin-left: 10px;
    text-align: right;
    path {
      fill: #7bc043;
    }
  }
`

export const Dot = styled.div`
  display: inline-block;
  margin-right: 10px;
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
  width: calc(100% - 180px);
  margin: 0;
  text-decoration: ${props => props.completed ? 'line-through' : 'none' };
`

export const Date = styled.p`
  margin: 0;
  display: inline-block;
  text-align: right;
  color: #555;
`