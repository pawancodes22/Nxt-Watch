import NxtWatchContext from '../../context/NxtWatchContext'

import TopHeader from '../TopHeader'

import SideHeader from '../SideHeader'

import {
  NotFoundContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundPara,
  AllPageBg,
  RowContainer,
} from './styledComponents'

const NotFound = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDark, activeTabId, toggleActiveTab} = value
      if (activeTabId !== null) {
        toggleActiveTab(null)
      }
      return (
        <AllPageBg>
          <TopHeader />
          <RowContainer>
            <SideHeader />
            <NotFoundContainer isDark={isDark}>
              {isDark && (
                <NotFoundImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
                  alt="not found"
                />
              )}
              {!isDark && (
                <NotFoundImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png"
                  alt="not found"
                />
              )}
              <NotFoundHeading isDark={isDark}>Page Not Found</NotFoundHeading>
              <NotFoundPara isDark={isDark}>
                we are sorry, the page you requested could not be found.
              </NotFoundPara>
            </NotFoundContainer>
          </RowContainer>
        </AllPageBg>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default NotFound
