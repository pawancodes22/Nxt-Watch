import {formatDistanceToNow} from 'date-fns'

import {
  VideoContainer,
  Thumbnail,
  SubDetailsContainer,
  ChannelImage,
  TitlePara,
  VideoDetailsContainer,
  OtherVideoDetails,
  ViewAndTimeContainer,
  DotIcon,
  ViewTimePara,
  LinkStyle,
} from './styledComponents'

import NxtWatchContext from '../../context/NxtWatchContext'

const VideoItem = props => {
  const {item} = props
  const {id, channel, publishedAt, thumbnailUrl, title, viewCount} = item
  const {name, profileImageUrl} = channel
  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <LinkStyle to={`/videos/${id}`}>
            <VideoContainer>
              <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
              <SubDetailsContainer>
                <ChannelImage src={profileImageUrl} alt="channel" />
                <VideoDetailsContainer>
                  <TitlePara isDark={isDark}>{title}</TitlePara>
                  <OtherVideoDetails isDark={isDark}>{name}</OtherVideoDetails>
                  <ViewAndTimeContainer>
                    <ViewTimePara isDark={isDark}>
                      {viewCount} views
                    </ViewTimePara>
                    <DotIcon isDark={isDark}>•</DotIcon>
                    <ViewTimePara isDark={isDark}>
                      {formatDistanceToNow(new Date(publishedAt), {
                        addSuffix: true,
                      })
                        .split(' ')
                        .splice(1, 3)
                        .join(' ')}
                    </ViewTimePara>
                  </ViewAndTimeContainer>
                </VideoDetailsContainer>
              </SubDetailsContainer>
            </VideoContainer>
          </LinkStyle>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}
export default VideoItem
