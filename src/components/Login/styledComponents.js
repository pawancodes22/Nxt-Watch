import styled from 'styled-components'

export const LoginPageBg = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => (props.isDark ? 'white' : 'none')};
  background-color: ${props => (props.isDark ? '#1e293b' : 'none')};
`
export const LoginMainBg = styled.div`
  display: flex;
  flex-direction: column;
  width: 330px;
  padding: 30px;
  border-radius: 9px;
  color: ${props => (props.isDark ? 'white' : 'none')};
  background-color: ${props => (props.isDark ? 'black' : 'none')};
  -webkit-box-shadow: 10px 13px 12px 7px rgba(0, 0, 0, 0.22);
  -moz-box-shadow: 10px 13px 12px 7px rgba(0, 0, 0, 0.22);
  box-shadow: 10px 13px 12px 7px rgba(0, 0, 0, 0.22);
`

export const LoginLogo = styled.img`
  align-self: center;
  width: 150px;
  margin-bottom: 30px;
`

export const ShowPasswordContainer = styled.div`
  display: flex;
  margin: 15px 0px;
  width: 135px;
  justify-content: space-between;
`

export const LoginButton = styled.button`
  border-style: none;
  background-color: #3b82f6;
  padding: 10px;
  color: #ffffff;
  border-radius: 7px;
`

export const LoginPageLabel = styled.label`
  font-family: 'Roboto';
  font-weight: 500;
  margin-bottom: 4px;
  font-size: 13px;
`

export const LoginPageInput = styled.input`
  padding: 4px;
`

export const ErrorMsg = styled.p`
  color: red;
  margin: 2px 0px;
`
