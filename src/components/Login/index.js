import {Component} from 'react'

import Cookies from 'js-cookie'

import {Redirect} from 'react-router-dom'

import {
  LoginPageBg,
  LoginMainBg,
  LoginLogo,
  ShowPasswordContainer,
  LoginButton,
  LoginPageLabel,
  LoginPageInput,
  ErrorMsg,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    isError: '',
    errorMsg: '',
  }

  changeUsername = event => {
    this.setState({username: event.target.value})
  }

  changePassword = event => {
    this.setState({password: event.target.value})
  }

  changeShowPassword = event => {
    this.setState({showPassword: event.target.checked})
  }

  submitForm = async event => {
    event.preventDefault()
    const loginUrl = 'https://apis.ccbp.in/login'
    const {username, password} = this.state
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(loginUrl, options)
    const jsonResponse = await response.json()
    if (response.ok) {
      Cookies.set('jwt_token', jsonResponse.jwt_token, {expires: 2})
      this.setState({isError: false, errorMsg: ''})
      const {history} = this.props
      history.replace('/')
    } else {
      const errorMsg = jsonResponse.error_msg
      this.setState({isError: true, errorMsg})
    }
  }

  render() {
    const {username, password, showPassword, isError, errorMsg} = this.state
    const isDark = true
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <LoginPageBg isDark={isDark}>
        <form onSubmit={this.submitForm}>
          <LoginMainBg isDark={isDark}>
            {!isDark && (
              <LoginLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                alt="light theme"
              />
            )}
            {isDark && (
              <LoginLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                alt="dark theme"
              />
            )}
            <LoginPageLabel htmlFor="username">Username</LoginPageLabel>
            <LoginPageInput
              id="username"
              value={username}
              onChange={this.changeUsername}
            />
            <br />
            <LoginPageLabel htmlFor="password">Password</LoginPageLabel>
            <LoginPageInput
              id="password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={this.changePassword}
            />
            <ShowPasswordContainer>
              <input
                type="checkbox"
                id="showPassword"
                onChange={this.changeShowPassword}
              />
              <label htmlFor="showPassword">Show Password</label>
            </ShowPasswordContainer>
            <LoginButton type="submit">Login</LoginButton>
            {isError && <ErrorMsg>*{errorMsg}</ErrorMsg>}
          </LoginMainBg>
        </form>
      </LoginPageBg>
    )
  }
}
export default Login

/*

    LoginLogo, 
    ShowPasswordContainer, 
    LoginButton, 
    LoginPageLabel, 
    LoginPageInput

 */
