import {formatDistanceToNow} from 'date-fns'

import {
  DivItem,
  ListItem,
  LinkItem,
  ImageItem,
  TitlePara,
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
        <ListItem>
          <LinkItem to={`/videos/${id}`}>
            <DivItem>
              <ImageItem src={thumbnailUrl} alt="video thumbnail" />
              <SubDetailsContainer>
                <ChannelImage src={profileImageUrl} alt="channel" />
                <SmallVideoDetailsContainer>
                  <TitlePara isDark={isDark}>{title}</TitlePara>
                  <OtherVideoDetails isDark={isDark}>{name}</OtherVideoDetails>
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
                </SmallVideoDetailsContainer>
              </SubDetailsContainer>
            </DivItem>
          </LinkItem>
        </ListItem>
      )
    }}
  </NxtWatchContext.Consumer>
)
export default SavedVideoItem
