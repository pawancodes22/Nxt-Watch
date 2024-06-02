import {Component} from 'react'

import TopHeader from '../TopHeader'

import SideHeader from '../SideHeader'

import SavedVideoItem from '../SavedVideoItem'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  RowContainer,
  AllPageBg,
  SavedMainBgContainer,
  SavedTopContainer,
  SavedLogoContainer,
  FireLogo,
  SavedHeading,
  VideosContainer,
  NoVideosContainer,
  NoVideosImage,
  NoVideosHeading,
  NoVideosPara,
} from './styledComponents'

class SavedVideos extends Component {
  renderNoVideosPage = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <NoVideosContainer isDark={isDark} data-testid="savedVideos">
            <NoVideosImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
              alt="no saved videos"
            />
            <NoVideosHeading isDark={isDark}>
              No saved videos found
            </NoVideosHeading>
            <NoVideosPara isDark={isDark}>
              You can save your videos while watching them
            </NoVideosPara>
          </NoVideosContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderData = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark, savedVideos} = value
        const areVideosPresent = savedVideos.length !== 0
        return (
          <SavedMainBgContainer>
            <SavedTopContainer isDark={isDark} data-testid="banner">
              <SavedLogoContainer isDark={isDark}>
                <FireLogo />
              </SavedLogoContainer>
              <SavedHeading isDark={isDark}>Saved Videos</SavedHeading>
            </SavedTopContainer>
            {areVideosPresent && (
              <VideosContainer isDark={isDark} data-testid="savedVideos">
                {savedVideos.map(item => (
                  <SavedVideoItem key={item.id} item={item} />
                ))}
              </VideosContainer>
            )}
            {!areVideosPresent && this.renderNoVideosPage()}
          </SavedMainBgContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  render() {
    return (
      <AllPageBg>
        <TopHeader />
        <RowContainer>
          <SideHeader />
          {this.renderData()}
        </RowContainer>
      </AllPageBg>
    )
  }
}
export default SavedVideos
