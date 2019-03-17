import styled from 'styled-components'

export const FormContainer = styled.div`
  width: 250px;
  text-align: center;
  display: inline-block;
  vertical-align: top;
  input {
    width: 100%;
    padding: 10px;
    display: block;
  }
  .react-datepicker-wrapper {
    width: 100%;
    margin-bottom: 10px;
    .react-datepicker__input-container {
      width: 100%;
    }
  }
`

export const Button = styled.button`
  background: #f37736;
  color: #fff;
  padding: 10px;
  display: block;
  border-radius: 3px;

  &:focus {
    background: #ee4035;
  }
`