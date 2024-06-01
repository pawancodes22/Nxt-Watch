import {
  ListItem,
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
        <LinkItem to={`/videos/${id}`}>
          <ListItem>
            <Thumbnail src={thumbnailUrl} alt="thumbnail" />
            <Title isDark={isDark}>{title}</Title>
            <ViewCount isDark={isDark}>
              {viewCount} Watching Worldwide
            </ViewCount>
          </ListItem>
        </LinkItem>
      )
    }}
  </NxtWatchContext.Consumer>
)
export default GamingVideoItem
