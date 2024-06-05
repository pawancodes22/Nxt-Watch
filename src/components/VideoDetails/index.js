import {formatDistanceToNow} from 'date-fns'

import {Component} from 'react'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import TopHeader from '../TopHeader'

import SideHeader from '../SideHeader'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  RowContainer,
  AllPageBg,
  VideoDetailsBgContainer,
  VideoDetailsTopContainer,
  VideoDetailsHeading,
  LoaderBg,
  FailureContainer,
  FailureImage,
  FailureViewHeading,
  FailureViewPara,
  RetryButton,
  ViewAndTimeContainer,
  ViewTimePara,
  DotIcon,
  DetailsAndResponseSection,
  HorizantalLine,
  ChannelDetailsContainer,
  ChannelLogo,
  ChannelOtherDetails,
  DescriptionPara,
  ChannelName,
  LikeButton,
  DislikeButton,
  SaveButton,
  InteractionSection,
  InteractionOption,
  NoBorderButton,
  SavePara,
  VideoReactPlayer,
} from './styledComponents'

const apiStatusConstants = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  pending: 'PENDING',
}

class VideoDetails extends Component {
  state = {
    videoDetailsList: [],
    videoDetailsApiStatus: apiStatusConstants.pending,
  }

  componentDidMount() {
    this.fetchVideosDetails()
  }

  getId = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    return id
  }

  fetchVideosDetails = async () => {
    this.setState({videoDetailsApiStatus: apiStatusConstants.pending})
    const jwtToken = Cookies.get('jwt_token')
    const videoDetailsUrl = `https://apis.ccbp.in/videos/${this.getId()}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(videoDetailsUrl, options)
    const jsonResponse = await response.json()
    if (response.ok) {
      const vidDetails = jsonResponse.video_details
      const updatedData = {
        channel: {
          name: vidDetails.channel.name,
          profileImageUrl: vidDetails.channel.profile_image_url,
          subscriberCount: vidDetails.channel.subscriber_count,
        },
        description: vidDetails.description,
        id: vidDetails.id,
        publishedAt: vidDetails.published_at,
        thumbnailUrl: vidDetails.thumbnail_url,
        title: vidDetails.title,
        videoUrl: vidDetails.video_url,
        viewCount: vidDetails.view_count,
      }
      this.setState({
        videoDetailsList: updatedData,
        videoDetailsApiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({videoDetailsApiStatus: apiStatusConstants.failure})
    }
  }

  fetchAgain = () => {
    this.fetchVideosDetails()
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
        const {
          isDark,
          savedVideos,
          addOrRemoveVideo,
          addLikeStatus,
          likeStatusList,
        } = value
        const {videoDetailsList} = this.state
        const {
          channel,
          description,
          id,
          publishedAt,
          title,
          videoUrl,
          viewCount,
        } = videoDetailsList
        const {name, profileImageUrl, subscriberCount} = channel
        const currentItem = likeStatusList.find(item => item.id === id)

        const videoInteractionStatus =
          currentItem !== undefined ? currentItem.status : null
        const isVideoSaved = savedVideos.find(
          currentObj => currentObj.id === id,
        )
        const saveOrDeleteVideo = () => {
          addOrRemoveVideo(videoDetailsList, isVideoSaved)
        }
        const callAddLikeStatus = status => {
          addLikeStatus(id, status)
        }
        const likeVideo = () => {
          const currentValue = videoInteractionStatus === 'LIKE' ? null : 'LIKE'
          callAddLikeStatus(currentValue)
        }

        const dislikeVideo = () => {
          const currentValue =
            videoInteractionStatus === 'DISLIKE' ? null : 'DISLIKE'
          callAddLikeStatus(currentValue)
        }
        return (
          <VideoDetailsBgContainer>
            <VideoDetailsTopContainer
              isDark={isDark}
              data-testid="videoItemDetails"
            >
              <VideoReactPlayer url={videoUrl} />
              <VideoDetailsHeading isDark={isDark}>{title}</VideoDetailsHeading>
              <DetailsAndResponseSection>
                <ViewAndTimeContainer>
                  <ViewTimePara isDark={isDark}>{viewCount} views</ViewTimePara>
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
                <InteractionSection>
                  <InteractionOption
                    videoInteractionStatus={videoInteractionStatus}
                    currentInteraction="LIKE"
                  >
                    <LikeButton />
                    <NoBorderButton
                      videoInteractionStatus={videoInteractionStatus}
                      currentInteraction="LIKE"
                      type="button"
                      onClick={likeVideo}
                    >
                      Like
                    </NoBorderButton>
                  </InteractionOption>

                  <InteractionOption
                    videoInteractionStatus={videoInteractionStatus}
                    currentInteraction="DISLIKE"
                  >
                    <DislikeButton />
                    <NoBorderButton
                      videoInteractionStatus={videoInteractionStatus}
                      currentInteraction="DISLIKE"
                      type="button"
                      onClick={dislikeVideo}
                    >
                      Dislike
                    </NoBorderButton>
                  </InteractionOption>

                  <NoBorderButton type="button" onClick={saveOrDeleteVideo}>
                    <InteractionOption>
                      <SaveButton isVideoSaved={isVideoSaved} />
                      <SavePara isVideoSaved={isVideoSaved}>
                        {isVideoSaved ? 'Saved' : 'Save'}
                      </SavePara>
                    </InteractionOption>
                  </NoBorderButton>
                </InteractionSection>
              </DetailsAndResponseSection>
              <HorizantalLine />
              <ChannelDetailsContainer>
                <ChannelLogo src={profileImageUrl} alt="channel logo" />
                <ChannelOtherDetails>
                  <ChannelName isDark={isDark}>{name}</ChannelName>
                  <ViewTimePara isDark={isDark}>
                    {subscriberCount} subscribers
                  </ViewTimePara>
                  <DescriptionPara isDark={isDark}>
                    {description}
                  </DescriptionPara>
                </ChannelOtherDetails>
              </ChannelDetailsContainer>
            </VideoDetailsTopContainer>
          </VideoDetailsBgContainer>
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
                alt=" failure view"
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

  renderVideoDetailsPage = () => {
    const {videoDetailsApiStatus} = this.state
    switch (videoDetailsApiStatus) {
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
          {this.renderVideoDetailsPage()}
        </RowContainer>
      </AllPageBg>
    )
  }
}
export default VideoDetails
