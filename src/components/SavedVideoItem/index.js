import {formatDistanceToNow} from 'date-fns'

import {
  ListItem,
  LinkItem,
  ImageItem,
  TitlePara,
  VideoDetailsContainer,
  OtherVideoDetails,
  DotIcon,
  ViewTimePara,
  ViewAndTimeContainer,
  SubDetailsContainer,
  ChannelImage,
  SmallVideoDetailsContainer,
} from './styledComponents'

import NxtWatchContext from '../../context/NxtWatchContext'

const SavedVideoItem = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDark} = value
      const {item} = props
      const {channel, id, publishedAt, thumbnailUrl, title, viewCount} = item
      const {name, profileImageUrl} = channel
      return (
        <LinkItem to={`/videos/${id}`}>
          <ListItem>
            <ImageItem src={thumbnailUrl} alt="title" />
            <VideoDetailsContainer>
              <TitlePara isDark={isDark}>{title}</TitlePara>
              <OtherVideoDetails isDark={isDark}>{name}</OtherVideoDetails>
              <ViewAndTimeContainer>
                <ViewTimePara isDark={isDark}>{viewCount} views</ViewTimePara>
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
            <SubDetailsContainer>
              <ChannelImage src={profileImageUrl} alt="channel" />
              <SmallVideoDetailsContainer>
                <TitlePara isDark={isDark}>{title}</TitlePara>
                <OtherVideoDetails isDark={isDark}>{name}</OtherVideoDetails>
                <ViewAndTimeContainer>
                  <ViewTimePara isDark={isDark}>{viewCount} views</ViewTimePara>
                  <DotIcon isDark={isDark}>•</DotIcon>
                  <ViewTimePara isDark={isDark}>{publishedAt}</ViewTimePara>
                </ViewAndTimeContainer>
              </SmallVideoDetailsContainer>
            </SubDetailsContainer>
          </ListItem>
        </LinkItem>
      )
    }}
  </NxtWatchContext.Consumer>
)
export default SavedVideoItem
