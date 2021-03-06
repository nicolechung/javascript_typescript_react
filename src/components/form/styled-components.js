import styled from 'styled-components'

export const FormContainer = styled.div`
  width: 250px;
  text-align: center;
  display: inline-block;
  vertical-align: top;
  margin-right: 20px;
  &> form > div {
    margin-bottom: 10px;
  }
  input {
    width: 100%;
    padding: 10px;
    display: block;
    margin-bottom: 10px;
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
  width: 100%;
  display: block;
  border-radius: 3px;

  &:focus {
    background: #ee4035;
  }
`