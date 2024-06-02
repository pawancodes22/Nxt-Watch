import Cookies from 'js-cookie'

import {Redirect, Route} from 'react-router-dom'

import NxtWatchContext from '../../context/NxtWatchContext'

const ProtectedRoute = props => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {activeTabId, toggleActiveTab} = value
        const {path} = props
        if (path === '/' && activeTabId !== 'HOME') {
          toggleActiveTab('HOME')
        } else if (path === '/trending' && activeTabId !== 'TRENDING') {
          toggleActiveTab('TRENDING')
        } else if (path === '/gaming' && activeTabId !== 'GAMING') {
          toggleActiveTab('GAMING')
        } else if (path === '/saved-videos' && activeTabId !== 'SAVED_VIDEOS') {
          toggleActiveTab('SAVED_VIDEOS')
        } else if (path.includes('/videos/') && activeTabId !== null) {
          toggleActiveTab(null)
        } else if (path.includes('/bad-path') && activeTabId !== null) {
          toggleActiveTab(null)
        }
        return <Route {...props} />
      }}
    </NxtWatchContext.Consumer>
  )
}
export default ProtectedRoute
