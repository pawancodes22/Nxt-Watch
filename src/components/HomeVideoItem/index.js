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
  ListItem,
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
          <ListItem>
            <LinkStyle to={`/videos/${id}`}>
              <VideoContainer>
                <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
                <SubDetailsContainer>
                  <ChannelImage src={profileImageUrl} alt="channel logo" />
                  <VideoDetailsContainer>
                    <TitlePara isDark={isDark}>{title}</TitlePara>
                    <OtherVideoDetails isDark={isDark}>
                      {name}
                    </OtherVideoDetails>
                    <ViewAndTimeContainer>
                      <ViewTimePara isDark={isDark}>
                        {viewCount} views
                      </ViewTimePara>
                      <DotIcon isDark={isDark}>•</DotIcon>
                      <ViewTimePara isDark={isDark}>
                        {/* each.published_at */}
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
          </ListItem>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}
export default VideoItem
