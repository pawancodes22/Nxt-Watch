import {
  SideHeaderContainer,
  SideHeaderUnorderedList,
  SideHeaderDiv,
  SideHeaderButtonContainer,
  SideHeaderPara,
  LowerContainer,
  ContactUsHeading,
  AppIconsContainer,
  AppIconItem,
  AppIconImage,
  HomeIcon,
  TrendingIcon,
  SaveButton,
  GamepadIcon,
  LinkStyled,
  SideHeaderList,
} from './styledComponents'

import NxtWatchContext from '../../context/NxtWatchContext'

const SideHeader = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDark, activeTabId} = value
      return (
        <SideHeaderContainer isDark={isDark}>
          <SideHeaderUnorderedList isDark={isDark}>
            <SideHeaderList>
              <LinkStyled to="/">
                <SideHeaderDiv
                  activeTabId={activeTabId}
                  isDark={isDark}
                  currentId="HOME"
                >
                  <SideHeaderButtonContainer>
                    <HomeIcon isDark={isDark} activeTabId={activeTabId} />
                    <SideHeaderPara isDark={isDark}>Home</SideHeaderPara>
                  </SideHeaderButtonContainer>
                </SideHeaderDiv>
              </LinkStyled>
            </SideHeaderList>
            <SideHeaderList>
              <LinkStyled to="/trending">
                <SideHeaderDiv
                  activeTabId={activeTabId}
                  currentId="TRENDING"
                  isDark={isDark}
                >
                  <SideHeaderButtonContainer>
                    <TrendingIcon isDark={isDark} activeTabId={activeTabId} />
                    <SideHeaderPara isDark={isDark}>Trending</SideHeaderPara>
                  </SideHeaderButtonContainer>
                </SideHeaderDiv>
              </LinkStyled>
            </SideHeaderList>
            <SideHeaderList>
              <LinkStyled to="/gaming">
                <SideHeaderDiv
                  activeTabId={activeTabId}
                  currentId="GAMING"
                  isDark={isDark}
                >
                  <SideHeaderButtonContainer>
                    <GamepadIcon isDark={isDark} activeTabId={activeTabId} />
                    <SideHeaderPara isDark={isDark}>Gaming</SideHeaderPara>
                  </SideHeaderButtonContainer>
                </SideHeaderDiv>
              </LinkStyled>
            </SideHeaderList>
            <SideHeaderList>
              <LinkStyled to="/saved-videos">
                <SideHeaderDiv
                  activeTabId={activeTabId}
                  currentId="SAVED_VIDEOS"
                  isDark={isDark}
                >
                  <SideHeaderButtonContainer>
                    <SaveButton isDark={isDark} activeTabId={activeTabId} />
                    <SideHeaderPara isDark={isDark}>
                      Saved videos
                    </SideHeaderPara>
                  </SideHeaderButtonContainer>
                </SideHeaderDiv>
              </LinkStyled>
            </SideHeaderList>
          </SideHeaderUnorderedList>
          <LowerContainer isDark={isDark}>
            <ContactUsHeading>CONTACT US</ContactUsHeading>
            <AppIconsContainer>
              <AppIconItem>
                <AppIconImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
              </AppIconItem>
              <AppIconItem>
                <AppIconImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
              </AppIconItem>
              <AppIconItem>
                <AppIconImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </AppIconItem>
            </AppIconsContainer>
            <SideHeaderPara isDark={isDark}>
              Enjoy! Now to see your channels and recommendations!
            </SideHeaderPara>
          </LowerContainer>
        </SideHeaderContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)
export default SideHeader
