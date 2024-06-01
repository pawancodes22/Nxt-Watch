import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const LinkItem = styled(Link)`
  text-decoration: none;
`

export const ListItem = styled.li`
  list-style-type: none;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  @media (max-width: 575px) {
    flex-direction: column;
  }
`

export const ImageItem = styled.img`
  width: 400px;
  height: 200px;
  @media (max-width: 575px) {
    width: 100%;
    height: 180px;
  }
`

export const TitlePara = styled.p`
  color: ${props => (props.isDark ? 'white' : 'black')};
  margin: 0px;
  font-weight: 500;
  font-family: 'Roboto';
  font-size: 25px;
  @media (max-width: 767px) {
    font-size: 17px;
  }
  @media (max-width: 575px) {
    font-size: 15px;
  }
`

export const VideoDetailsContainer = styled.div`
  width: 48%;
  padding: 15px;
  @media (max-width: 575px) {
    display: none;
    width: 100%;
  }
`

export const OtherVideoDetails = styled.p`
  color: ${props => (props.isDark ? '#94a3b8' : '#475569')};
  margin: 6px 0px;
  @media (max-width: 767px) {
    font-size: 16px;
  }
  @media (max-width: 575px) {
    font-size: 13px;
  }
`

export const DotIcon = styled.span`
  margin: 0px 10px;
  font-size: 20px;
  color: ${props => (props.isDark ? '#94a3b8' : '#475569')};
`

export const ViewTimePara = styled(OtherVideoDetails)`
  margin: 0px;
`

export const ViewAndTimeContainer = styled.div`
  display: flex;
  align-items: center;
`
export const SubDetailsContainer = styled.div`
  padding: 5px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-family: 'Roboto';
  @media (min-width: 576px) {
    display: none;
    padding: 10px;
  }
`

export const ChannelImage = styled.img`
  width: 30px;
`

export const SmallVideoDetailsContainer = styled(VideoDetailsContainer)`
  color: white;
  display: flex;
  flex-direction: column;
  @media (max-width: 575px) {
    padding-top: 10px;
  }
`
