import './App.css'

import {Component} from 'react'

import {Switch, Route, withRouter, Redirect} from 'react-router-dom'

import Login from './components/Login'

import Home from './components/Home'

import NxtWatchContext from './context/NxtWatchContext'

import ProtectedRoute from './components/ProtectedRoute'

import Trending from './components/Trending'

import Gaming from './components/Gaming'

import VideoDetails from './components/VideoDetails'

import SavedVideos from './components/SavedVideos'

import NotFound from './components/NotFound'

// Replace your code here
class App extends Component {
  state = {
    isDark: true,
    activeTabId: 'HOME',
    savedVideos: [],
    likeStatusList: [],
  }

  toggleTheme = () => {
    this.setState(prev => ({isDark: !prev.isDark}))
  }

  toggleActiveTab = id => {
    this.setState({activeTabId: id})
    const {history} = this.props
    if (id === 'HOME') {
      history.replace('/')
    } else if (id === 'TRENDING') {
      history.replace('/trending')
    } else if (id === 'GAMING') {
      history.replace('/gaming')
    } else if (id === 'SAVED_VIDEOS') {
      history.replace('/saved-videos')
    }
  }

  addLikeStatus = (id, newStatus) => {
    const {likeStatusList} = this.state
    const currentItem = likeStatusList.find(seqItem => seqItem.id === id)
    if (currentItem !== undefined) {
      this.setState(prev => ({
        likeStatusList: prev.likeStatusList.map(obj => {
          if (obj.id === id) {
            return {id, status: newStatus}
          }
          return obj
        }),
      }))
    } else {
      this.setState(prev => ({
        likeStatusList: [...prev.likeStatusList, {id, status: newStatus}],
      }))
    }
  }

  addOrRemoveVideo = (item, isVideoSaved) => {
    const {savedVideos} = this.state
    console.log(savedVideos)
    if (isVideoSaved) {
      this.setState(prev => ({
        savedVideos: prev.savedVideos.filter(iterObj => iterObj.id !== item.id),
      }))
    } else {
      this.setState(prev => ({savedVideos: [...prev.savedVideos, item]}))
    }
  }

  render() {
    const {isDark, activeTabId, savedVideos, likeStatusList} = this.state
    return (
      <NxtWatchContext.Provider
        value={{
          isDark,
          toggleTheme: this.toggleTheme,
          activeTabId,
          toggleActiveTab: this.toggleActiveTab,
          savedVideos,
          addOrRemoveVideo: this.addOrRemoveVideo,
          likeStatusList,
          addLikeStatus: this.addLikeStatus,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute exact path="/videos/:id" component={VideoDetails} />
          <ProtectedRoute exact path="/bad-path" component={NotFound} />
          <Redirect to="/bad-path" />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default withRouter(App)
