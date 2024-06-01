import {
  SideHeaderContainer,
  SideHeaderUnorderedList,
  SideHeaderList,
  SideHeaderButtonContainer,
  NoBorderButton,
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
} from './styledComponents'

import NxtWatchContext from '../../context/NxtWatchContext'

const SideHeader = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDark, activeTabId, toggleActiveTab} = value
      return (
        <SideHeaderContainer isDark={isDark}>
          <SideHeaderUnorderedList isDark={isDark}>
            <SideHeaderList
              activeTabId={activeTabId}
              isDark={isDark}
              currentId="HOME"
            >
              <NoBorderButton onClick={() => toggleActiveTab('HOME')}>
                <SideHeaderButtonContainer>
                  <HomeIcon isDark={isDark} activeTabId={activeTabId} />
                  <SideHeaderPara isDark={isDark}>Home</SideHeaderPara>
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
                  <TrendingIcon isDark={isDark} activeTabId={activeTabId} />
                  <SideHeaderPara isDark={isDark}>Trending</SideHeaderPara>
                </SideHeaderButtonContainer>
              </NoBorderButton>
            </SideHeaderList>
            <SideHeaderList
              activeTabId={activeTabId}
              currentId="GAMING"
              isDark={isDark}
            >
              <NoBorderButton onClick={() => toggleActiveTab('GAMING')}>
                <SideHeaderButtonContainer>
                  <GamepadIcon isDark={isDark} activeTabId={activeTabId} />
                  <SideHeaderPara isDark={isDark}>Gaming</SideHeaderPara>
                </SideHeaderButtonContainer>
              </NoBorderButton>
            </SideHeaderList>
            <SideHeaderList
              activeTabId={activeTabId}
              currentId="SAVED_VIDEOS"
              isDark={isDark}
            >
              <NoBorderButton onClick={() => toggleActiveTab('SAVED_VIDEOS')}>
                <SideHeaderButtonContainer>
                  <SaveButton isDark={isDark} activeTabId={activeTabId} />
                  <SideHeaderPara isDark={isDark}>Saved videos</SideHeaderPara>
                </SideHeaderButtonContainer>
              </NoBorderButton>
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
