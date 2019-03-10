import React from 'react'
import styled from 'styled-components'

const Rectangle = styled.div`
  height: 30px;
  width: 100%;
  display: flex;
  background-color: #de751f;
  justify-content: center;
  align-items: center;
  font-family: 'Montserrat';
  font-size: 30px;
  color: white;
  padding: 16px;
`

const App = () => (
  <div>
    <Rectangle>Hello!</Rectangle>
  </div>
)

export default App