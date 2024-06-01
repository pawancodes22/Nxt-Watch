import React from 'react'

const NxtWatchContext = React.createContext({
  isDarkMode: false,
  toggleTheme: () => {},
  activeTabId: 'HOME',
  toggleActiveTab: () => {},
  savedVideos: [],
  addVideo: () => {},
  likeStatusList: [],
  addLikeStatus: () => {},
})
export default NxtWatchContext
