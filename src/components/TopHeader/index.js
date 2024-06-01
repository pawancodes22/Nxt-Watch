import Popup from 'reactjs-popup'

import Cookies from 'js-cookie'

import {withRouter} from 'react-router-dom'

import {
  HeaderContainer,
  NavItemsContainer,
  HeaderLogo,
  NavProfileImage,
  ListItem,
  LogoutButton,
  NoBorderButton,
  SunIcon,
  MoonIcon,
  SmOptions,
  SmLogOutIcon,
  SmLogoutButton,
  SmOptionsButton,
  SmLogOutPopUpDiv,
  StyledLink,
  PopupDiv,
  CancelLogoutButtonsContainer,
  CancelButton,
  ConfirmButton,
  PopupHeading,
  SideHeaderUnorderedList,
  SideHeaderList,
  SideHeaderButtonContainer,
  SideHeaderPara,
  HomeIcon,
  TrendingIcon,
  SaveButton,
  GamepadIcon,
  CloseButtonContainer,
  CloseIcon,
} from './styledComponents'

import NxtWatchContext from '../../context/NxtWatchContext'

const TopHeader = props => {
  const LogOut = () => {
    Cookies.remove('jwtToken')
    const {history} = props
    history.replace('/login')
  }
  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark, toggleTheme, activeTabId, toggleActiveTab} = value
        return (
          <HeaderContainer isDark={isDark}>
            <StyledLink to="/">
              {!isDark && (
                <HeaderLogo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                  alt="light theme"
                />
              )}
              {isDark && (
                <HeaderLogo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                  alt="dark theme"
                />
              )}
            </StyledLink>
            <NavItemsContainer>
              <NoBorderButton onClick={toggleTheme}>
                <ListItem>
                  {!isDark && <MoonIcon />}
                  {isDark && <SunIcon />}
                </ListItem>
              </NoBorderButton>
              <ListItem>
                <NavProfileImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
                <div className="popup-container">
                  <Popup
                    modal
                    trigger={
                      <SmOptionsButton type="button">
                        <SmOptions isDark={isDark} />
                      </SmOptionsButton>
                    }
                  >
                    {close => (
                      <SmLogOutPopUpDiv isDark={isDark}>
                        <CloseButtonContainer isDark={isDark}>
                          <NoBorderButton
                            type="button"
                            className="trigger-button"
                            onClick={() => close()}
                          >
                            <CloseIcon isDark={isDark} />
                          </NoBorderButton>
                        </CloseButtonContainer>

                        <SideHeaderUnorderedList isDark={isDark}>
                          <SideHeaderList
                            activeTabId={activeTabId}
                            isDark={isDark}
                            currentId="HOME"
                          >
                            <NoBorderButton
                              onClick={() => toggleActiveTab('HOME')}
                            >
                              <SideHeaderButtonContainer
                                activeTabId={activeTabId}
                                isDark={isDark}
                                currentId="HOME"
                              >
                                <HomeIcon
                                  isDark={isDark}
                                  activeTabId={activeTabId}
                                />
                                <SideHeaderPara isDark={isDark}>
                                  Home
                                </SideHeaderPara>
                              </SideHeaderButtonContainer>
                            </NoBorderButton>
                          </SideHeaderList>
                          <SideHeaderList
                            activeTabId={activeTabId}
                            currentId="TRENDING"
                            isDark={isDark}
                          >
                            <NoBorderButton>
                              <SideHeaderButtonContainer
                                onClick={() => toggleActiveTab('TRENDING')}
                              >
                                <TrendingIcon
                                  isDark={isDark}
                                  activeTabId={activeTabId}
                                />
                                <SideHeaderPara isDark={isDark}>
                                  Trending
                                </SideHeaderPara>
                              </SideHeaderButtonContainer>
                            </NoBorderButton>
                          </SideHeaderList>
                          <SideHeaderList
                            activeTabId={activeTabId}
                            currentId="GAMING"
                            isDark={isDark}
                          >
                            <NoBorderButton
                              onClick={() => toggleActiveTab('GAMING')}
                            >
                              <SideHeaderButtonContainer>
                                <GamepadIcon
                                  isDark={isDark}
                                  activeTabId={activeTabId}
                                />
                                <SideHeaderPara isDark={isDark}>
                                  Gaming
                                </SideHeaderPara>
                              </SideHeaderButtonContainer>
                            </NoBorderButton>
                          </SideHeaderList>
                          <SideHeaderList
                            activeTabId={activeTabId}
                            currentId="SAVED_VIDEOS"
                            isDark={isDark}
                          >
                            <NoBorderButton
                              onClick={() => toggleActiveTab('SAVED_VIDEOS')}
                            >
                              <SideHeaderButtonContainer>
                                <SaveButton
                                  isDark={isDark}
                                  activeTabId={activeTabId}
                                />
                                <SideHeaderPara isDark={isDark}>
                                  Saved videos
                                </SideHeaderPara>
                              </SideHeaderButtonContainer>
                            </NoBorderButton>
                          </SideHeaderList>
                        </SideHeaderUnorderedList>
                      </SmLogOutPopUpDiv>
                    )}
                  </Popup>
                </div>
              </ListItem>
              <ListItem>
                <div className="popup-container">
                  <Popup
                    modal
                    trigger={
                      <LogoutButton
                        type="button"
                        isDark={isDark}
                        className="trigger-button"
                      >
                        Logout
                      </LogoutButton>
                    }
                  >
                    {close => (
                      <>
                        <PopupDiv isDark={isDark}>
                          <PopupHeading isDark={isDark}>
                            Are you sure you want to logout?
                          </PopupHeading>
                          <CancelLogoutButtonsContainer>
                            <CancelButton
                              type="button"
                              className="trigger-button"
                              isDark={isDark}
                              onClick={() => close()}
                            >
                              Cancel
                            </CancelButton>
                            <ConfirmButton onClick={LogOut}>
                              Confirm
                            </ConfirmButton>
                          </CancelLogoutButtonsContainer>
                        </PopupDiv>
                      </>
                    )}
                  </Popup>
                </div>
              </ListItem>
              <ListItem>
                <div className="popup-container">
                  <Popup
                    modal
                    trigger={
                      <SmLogoutButton
                        type="button"
                        isDark={isDark}
                        className="trigger-button"
                      >
                        <SmLogOutIcon isDark={isDark} />
                      </SmLogoutButton>
                    }
                  >
                    {close => (
                      <>
                        <PopupDiv isDark={isDark}>
                          <PopupHeading isDark={isDark}>
                            Are you sure you want to logout?
                          </PopupHeading>
                          <CancelLogoutButtonsContainer>
                            <CancelButton
                              type="button"
                              className="trigger-button"
                              onClick={() => close()}
                            >
                              Cancel
                            </CancelButton>
                            <ConfirmButton onClick={LogOut}>
                              Confirm
                            </ConfirmButton>
                          </CancelLogoutButtonsContainer>
                        </PopupDiv>
                      </>
                    )}
                  </Popup>
                </div>
              </ListItem>
            </NavItemsContainer>
          </HeaderContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default withRouter(TopHeader)
