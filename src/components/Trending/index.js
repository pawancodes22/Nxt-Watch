import {Component} from 'react'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import TopHeader from '../TopHeader'

import SideHeader from '../SideHeader'

import TrendingVideoItem from '../TrendingVideoItem'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  RowContainer,
  AllPageBg,
  TrendingMainBgContainer,
  TrendingTopContainer,
  TrendingLogoContainer,
  FireLogo,
  TrendingHeading,
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

class Trending extends Component {
  state = {
    trendingVideosList: [],
    trendingVideoApiStatus: apiStatusConstants.pending,
  }

  componentDidMount() {
    this.fetchTrendingVideos()
  }

  fetchTrendingVideos = async () => {
    this.setState({trendingVideoApiStatus: apiStatusConstants.pending})
    const jwtToken = Cookies.get('jwtToken')
    const trendingUrl = 'https://apis.ccbp.in/videos/trending'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(trendingUrl, options)
    const jsonResponse = await response.json()
    if (response.ok) {
      const updatedData = jsonResponse.videos.map(item => ({
        channel: {
          name: item.channel.name,
          profileImageUrl: item.channel.profile_image_url,
        },
        id: item.id,
        publishedAt: item.published_at,
        thumbnailUrl: item.thumbnail_url,
        title: item.title,
        viewCount: item.view_count,
      }))
      this.setState({
        trendingVideosList: updatedData,
        trendingVideoApiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({trendingVideoApiStatus: apiStatusConstants.failure})
    }
  }

  fetchAgain = () => {
    this.fetchTrendingVideos()
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
        const {trendingVideosList} = this.state
        return (
          <TrendingMainBgContainer>
            <TrendingTopContainer isDark={isDark}>
              <TrendingLogoContainer isDark={isDark}>
                <FireLogo />
              </TrendingLogoContainer>
              <TrendingHeading isDark={isDark}>Trending</TrendingHeading>
            </TrendingTopContainer>
            <VideosContainer isDark={isDark}>
              {trendingVideosList.map(item => (
                <TrendingVideoItem key={item.id} item={item} />
              ))}
            </VideosContainer>
          </TrendingMainBgContainer>
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

  renderTrendingVideos = () => {
    const {trendingVideoApiStatus} = this.state
    switch (trendingVideoApiStatus) {
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
          {this.renderTrendingVideos()}
        </RowContainer>
      </AllPageBg>
    )
  }
}
export default Trending
