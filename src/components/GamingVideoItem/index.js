import {
  ListItem,
  DivItem,
  Thumbnail,
  Title,
  ViewCount,
  LinkItem,
} from './styledComponents'

import NxtWatchContext from '../../context/NxtWatchContext'

const GamingVideoItem = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDark} = value
      const {item} = props
      const {id, thumbnailUrl, title, viewCount} = item
      return (
        <ListItem>
          <LinkItem to={`/videos/${id}`}>
            <DivItem>
              <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
              <Title isDark={isDark}>{title}</Title>
              <ViewCount isDark={isDark}>
                {viewCount} Watching Worldwide
              </ViewCount>
            </DivItem>
          </LinkItem>
        </ListItem>
      )
    }}
  </NxtWatchContext.Consumer>
)
export default GamingVideoItem
