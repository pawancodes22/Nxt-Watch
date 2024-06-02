import styled from 'styled-components'

import {FaFire} from 'react-icons/fa'

import {BiLike, BiDislike} from 'react-icons/bi'

import {MdPlaylistAdd} from 'react-icons/md'

import ReactPlayer from 'react-player'

export const RowContainer = styled.div`
  display: flex;
  flex-grow: 1;
`

export const AllPageBg = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export const VideoDetailsBgContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 94vh;
  overflow-y: auto;
`

export const VideoDetailsTopContainer = styled.div`
  padding: 25px;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
  display: flex;
  flex-direction: column;
  @media (max-width: 767px) {
    padding: 15px;
  }
`

export const VideoDetailsLogoContainer = styled.div`
  background-color: ${props => (props.isDark ? 'black' : '#e1e9f0')};
  border-radius: 100px;
  padding: 20px;
  margin-right: 17px;
  @media (max-width: 767px) {
    padding: 15px;
  }
`

export const FireLogo = styled(FaFire)`
  font-size: 30px;
  color: red;
  @media (max-width: 767px) {
    font-size: 20px;
  }
`

export const VideoDetailsHeading = styled.p`
  color: ${props => (props.isDark ? 'white' : 'black')};
  margin-top: 20px;
  margin-bottom: 13px;
  font-size: 17px;
  font-weight: 500;
  @media (max-width: 767px) {
    font-size: 20px;
  }
  @media (max-width: 575px) {
    font-size: 15px;
  }
`

export const VideosContainer = styled.ul`
  flex-grow: 1;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
  padding: 40px;
  margin: 0px;
  @media (max-width: 575px) {
    padding: 0px;
  }
`

export const LoaderBg = styled(VideoDetailsBgContainer)`
  background-color: ${props => (props.isDark ? 'black' : '#f9f9f9')};
  display: flex;
  justify-content: center;
  align-items: center;
`
export const FailureContainer = styled(LoaderBg)``

export const FailureImage = styled.img`
  width: 300px;
  height: 250px;
  @media (max-width: 767px) {
    width: 200px;
    height: 150px;
  }
`

export const FailureViewHeading = styled.h1`
  color: ${props => (props.isDark ? 'white' : 'none')};
  font-weight: 700;
  margin: 10px 0px;
  font-size: 25px;
  @media (max-width: 767px) {
    font-size: 23px;
  }
`

export const FailureViewPara = styled.p`
  color: ${props => (props.isDark ? '#e2e8f0' : '#313131')};
  font-weight: 400;
  margin: 10px 0px;
  @media (max-width: 767px) {
    font-size: 13px;
  }
`

export const RetryButton = styled.button`
  border-style: none;
  border-radius: 8px;
  padding: 10px 20px;
  color: white;
  background-color: #4f46e5;
  margin-top: 15px;
`
export const DotIcon = styled.span`
  margin: 0px 10px;
  font-size: 20px;
  color: ${props => (props.isDark ? '#94a3b8' : '#475569')};
`

export const OtherVideoDetails = styled.p`
  color: ${props => (props.isDark ? '#94a3b8' : '#475569')};
  margin: 6px 0px;
`

export const ViewTimePara = styled(OtherVideoDetails)`
  margin: 0px;
  @media (max-width: 575px) {
    font-size: 13px;
  }
`

export const ViewAndTimeContainer = styled.div`
  display: flex;
  align-items: center;
`

export const DetailsAndResponseSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const HorizantalLine = styled.hr`
  color: white;
  width: 100%;
  margin-top: 30px;
  margin-bottom: 30px;
`

export const ChannelDetailsContainer = styled.div`
  display: flex;
`

export const ChannelLogo = styled.img`
  height: 50px;
  width: 50px;
  @media (max-width: 575px) {
    height: 35px;
    width: 35px;
  }
`

export const ChannelOtherDetails = styled.div`
  margin-left: 15px;
`

export const DescriptionPara = styled(ViewTimePara)`
  font-size: 15px;
  margin-top: 15px;
  margin-bottom: 20px;
  @media (max-width: 575px) {
    font-size: 13px;
  }
`

export const ChannelName = styled(VideoDetailsHeading)`
  margin: 0px;
  margin-bottom: 10px;
`

export const LikeButton = styled(BiLike)`
  font-size: 22px;
  margin-right: 5px;
  @media (max-width: 575px) {
    font-size: 15px;
  }
`

export const DislikeButton = styled(BiDislike)`
  font-size: 22px;
  margin-right: 5px;
  @media (max-width: 575px) {
    font-size: 15px;
  }
`

export const SaveButton = styled(MdPlaylistAdd)`
  color: ${props => (props.isVideoSaved ? '#2563eb' : '#64748b')};
  font-size: 22px;
  margin-right: 5px;
  @media (max-width: 575px) {
    font-size: 15px;
  }
`

export const SavePara = styled(ViewTimePara)`
  color: ${props => (props.isVideoSaved ? '#2563eb' : '#64748b')};
`

export const InteractionSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 250px;
  @media (max-width: 575px) {
    display: none;
  }
`

export const SmallInteractionSection = styled(InteractionSection)`
  @media (min-width: 576px) {
    display: none;
  }
  @media (max-width: 575px) {
    margin-top: 20px;
    display: flex;
    width: 200px;
  }
`

export const InteractionOption = styled.div`
  display: flex;
  align-items: center;
  color: ${props =>
    props.videoInteractionStatus === props.currentInteraction
      ? '#2563eb'
      : '#64748b'};
`

export const InteractionPara = styled(ViewTimePara)`
  color: ${props =>
    props.videoInteractionStatus === props.currentInteraction
      ? '#2563eb'
      : '#64748b'};
`

export const NoBorderButton = styled.button`
  border-style: none;
  background-color: transparent;
  padding-left: 0px;
`

export const VideoReactPlayer = styled(ReactPlayer)`
  width: 100% !important;
  height: 500px !important;
  @media (max-width: 767px) {
    height: 300px !important;
  }
  @media (max-width: 575px) {
    height: 200px !important;
  }
`
