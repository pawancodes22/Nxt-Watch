import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const LinkItem = styled(Link)`
  text-decoration: none;
`

export const ListItem = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  font-family: 'Roboto';
  margin-bottom: 30px;
  margin-right: 20px;
`
export const Thumbnail = styled.img`
  height: 300px;
  width: 250px;
  margin-bottom: 10px;
  @media (max-width: 767px) {
    height: 200px;
    width: 150px;
    margin-bottom: 6px;
  }
  @media (max-width: 575px) {
    height: 140px;
    width: 140px;
  }
`

export const Title = styled.h1`
  margin: 5px;
  color: ${props => (props.isDark ? 'white' : 'black')};
  font-size: 17px;
  font-weight: 500;
  @media (max-width: 767px) {
    font-size: 13px;
  }
`

export const ViewCount = styled.p`
  color: ${props => (props.isDark ? '#909090' : 'grey')};
  margin: 2px;
  font-weight: 400;
  font-size: 17px;
  @media (max-width: 767px) {
    font-size: 13px;
  }
  @media (max-width: 575px) {
    width: 120px;
  }
`
