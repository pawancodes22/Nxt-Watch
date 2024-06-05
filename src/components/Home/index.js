import {FaSearch} from 'react-icons/fa'

import Cookies from 'js-cookie'

import {Component} from 'react'

import Loader from 'react-loader-spinner'

import TopHeader from '../TopHeader'

import SideHeader from '../SideHeader'

import HomeVideoItem from '../HomeVideoItem'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  RowContainer,
  AllPageBg,
  HomeMainBgContainer,
  HomeBanner,
  GetItNowButton,
  BannerPara,
  BannerCompanyLogo,
  BannerCloseButton,
  HomeVideosContainer,
  SearchBoxContainer,
  SearchBox,
  SearchButton,
  CloseCrossSymbol,
  HomeVideosUl,
  NoVideosFoundContainer,
  NoSearchResultsImage,
  NoSearchResultsHeading,
  NoSearchResultsPara,
  RetryButton,
  LoadingDiv,
  FailureContainer,
  FailureImage,
  FailureViewHeading,
  FailureViewPara,
} from './styledComponents'

const apiStatusConstants = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  pending: 'PENDING',
}

class Home extends Component {
  state = {
    displayBanner: true,
    searchInput: '',
    videoDetails: [],
    videosApiStatus: apiStatusConstants.pending,
  }

  componentDidMount() {
    this.fetchVideoDetails()
  }

  changeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  fetchAgain = () => {
    this.fetchVideoDetails()
  }

  fetchVideoDetails = async () => {
    this.setState({videosApiStatus: apiStatusConstants.pending})
    const {searchInput} = this.state
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const jsonData = await response.json()
      const updatedData = jsonData.videos.map(item => ({
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
        videoDetails: updatedData,
        videosApiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({videosApiStatus: apiStatusConstants.failure})
    }
  }

  hideBanner = () => {
    this.setState({displayBanner: false})
  }

  renderLoader = () => (
    <LoadingDiv>
      <div className="loader-container" data-testid="loader">
        <Loader type="ThreeDots" color=" #3b82f6" height="50" width="50" />
      </div>
    </LoadingDiv>
  )

  renderBanner = () => {
    const {displayBanner} = this.state
    return (
      <HomeBanner displayBanner={displayBanner} data-testid="banner">
        <div>
          <BannerCompanyLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="nxt watch logo"
            className="banner-company-logo"
          />
          <BannerPara>Buy Nxt Watch Premium plans with UPI</BannerPara>
          <GetItNowButton type="button">GET IT NOW</GetItNowButton>
        </div>
        <BannerCloseButton
          type="button"
          onClick={this.hideBanner}
          data-testid="close"
        >
          <CloseCrossSymbol />
        </BannerCloseButton>
      </HomeBanner>
    )
  }

  renderVideoDetails = () => {
    const {videoDetails} = this.state
    return videoDetails.map(item => <HomeVideoItem key={item.id} item={item} />)
  }

  renderNoSearchResults = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <NoVideosFoundContainer>
            <NoSearchResultsImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <NoSearchResultsHeading isDark={isDark}>
              No Search Results Found
            </NoSearchResultsHeading>
            <NoSearchResultsPara isDark={isDark}>
              Try different key words or remove search filter
            </NoSearchResultsPara>
            <RetryButton type="button" onClick={this.fetchAgain}>
              Retry
            </RetryButton>
          </NoVideosFoundContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderFailurePage = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <FailureContainer>
            {!isDark && (
              <FailureImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
                alt="failure view"
              />
            )}
            {isDark && (
              <FailureImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
                alt="failure view"
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

  renderVideoPage = () => {
    const {videosApiStatus, videoDetails} = this.state
    const isVideosListEmpty = videoDetails.length === 0
    switch (videosApiStatus) {
      case apiStatusConstants.success:
        return isVideosListEmpty
          ? this.renderNoSearchResults()
          : this.renderVideoDetails()
      case apiStatusConstants.pending:
        return this.renderLoader()
      case apiStatusConstants.failure:
        return this.renderFailurePage()
      default:
        return null
    }
  }

  render() {
    const {searchInput} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <AllPageBg>
              <TopHeader />
              <RowContainer>
                <SideHeader />
                <HomeMainBgContainer>
                  {this.renderBanner()}
                  <HomeVideosContainer isDark={isDark} data-testid="home">
                    <SearchBoxContainer>
                      <SearchBox
                        type="search"
                        placeholder="Search"
                        value={searchInput}
                        onChange={this.changeSearchInput}
                      />
                      <SearchButton
                        type="button"
                        onClick={this.fetchAgain}
                        data-testid="searchButton"
                      >
                        <FaSearch />
                      </SearchButton>
                    </SearchBoxContainer>
                    <HomeVideosUl>{this.renderVideoPage()}</HomeVideosUl>
                  </HomeVideosContainer>
                </HomeMainBgContainer>
              </RowContainer>
            </AllPageBg>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}
export default Home
