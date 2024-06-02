import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const LinkStyle = styled(Link)`
  text-decoration: none;
`

export const ListItem = styled.li`
  list-style-type: none;
`

export const VideoContainer = styled.div`
  width: 300px;
  margin-right: 30px;
  margin-bottom: 40px;
  @media (max-width: 767px) {
    width: 260px;
  }
  @media (max-width: 575px) {
    width: 100%;
  }
`

export const Thumbnail = styled.img`
  width: 100%;
`

export const SubDetailsContainer = styled.div`
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  font-family: 'Roboto';
`

export const ChannelImage = styled.img`
  width: 30px;
`

export const TitlePara = styled.p`
  color: ${props => (props.isDark ? 'white' : 'black')};
  margin: 0px;
  font-weight: 500;
  font-family: 'Roboto';
`

export const VideoDetailsContainer = styled.div`
  width: 87%;
`

export const OtherVideoDetails = styled.p`
  color: ${props => (props.isDark ? '#94a3b8' : '#475569')};
  margin: 6px 0px;
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
