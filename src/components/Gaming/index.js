import {Component} from 'react'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import TopHeader from '../TopHeader'

import SideHeader from '../SideHeader'

import GamingVideoItem from '../GamingVideoItem'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  RowContainer,
  AllPageBg,
  GamingMainBgContainer,
  GamingTopContainer,
  GamingLogoContainer,
  GamingLogo,
  GamingHeading,
  VideosContainer,
  LoaderBg,
  FailureContainer,
  FailureImage,
  FailureViewHeading,
  FailureViewPara,
  RetryButton,
} from './styledComponents'

const apiStatusConstants = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  pending: 'PENDING',
}

class Gaming extends Component {
  state = {
    gamingVideosList: [],
    gamingVideoApiStatus: apiStatusConstants.pending,
  }

  componentDidMount() {
    this.fetchGamingVideos()
  }

  fetchGamingVideos = async () => {
    this.setState({gamingVideoApiStatus: apiStatusConstants.pending})
    const jwtToken = Cookies.get('jwtToken')
    const gamingUrl = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(gamingUrl, options)
    const jsonResponse = await response.json()
    if (response.ok) {
      const updatedData = jsonResponse.videos.map(item => ({
        id: item.id,
        thumbnailUrl: item.thumbnail_url,
        title: item.title,
        viewCount: item.view_count,
      }))
      this.setState({
        gamingVideosList: updatedData,
        gamingVideoApiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({gamingVideoApiStatus: apiStatusConstants.failure})
    }
  }

  fetchAgain = () => {
    this.fetchGamingVideos()
  }

  renderLoader = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <LoaderBg isDark={isDark}>
            <div className="loader-container" data-testid="loader">
              <Loader
                type="ThreeDots"
                color=" #3b82f6"
                height="50"
                width="50"
              />
            </div>
          </LoaderBg>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderData = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark} = value
        const {gamingVideosList} = this.state
        return (
          <GamingMainBgContainer>
            <GamingTopContainer isDark={isDark}>
              <GamingLogoContainer isDark={isDark}>
                <GamingLogo />
              </GamingLogoContainer>
              <GamingHeading isDark={isDark}>Gaming</GamingHeading>
            </GamingTopContainer>
            <VideosContainer isDark={isDark}>
              {gamingVideosList.map(item => (
                <GamingVideoItem key={item.id} item={item} />
              ))}
            </VideosContainer>
          </GamingMainBgContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderFailurePage = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <FailureContainer isDark={isDark}>
            {!isDark && (
              <FailureImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
                alt="failure light theme"
              />
            )}
            {isDark && (
              <FailureImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
                alt="failure dark theme"
              />
            )}
            <FailureViewHeading isDark={isDark}>
              Oops! Something Went Wrong
            </FailureViewHeading>
            <FailureViewPara isDark={isDark}>
              We are having some trouble to complete your request.
            </FailureViewPara>
            <FailureViewPara isDark={isDark}>Please try again.</FailureViewPara>
            <RetryButton type="button" onClick={this.fetchAgain}>
              Retry
            </RetryButton>
          </FailureContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderGamingVideos = () => {
    const {gamingVideoApiStatus} = this.state
    switch (gamingVideoApiStatus) {
      case apiStatusConstants.success:
        return this.renderData()
      case apiStatusConstants.pending:
        return this.renderLoader()
      case apiStatusConstants.failure:
        return this.renderFailurePage()
      default:
        return null
    }
  }

  render() {
    return (
      <AllPageBg>
        <TopHeader />
        <RowContainer>
          <SideHeader />
          {this.renderGamingVideos()}
        </RowContainer>
      </AllPageBg>
    )
  }
}
export default Gaming
