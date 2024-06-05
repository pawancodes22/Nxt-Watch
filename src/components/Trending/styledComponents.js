import styled from 'styled-components'

import {FaFire} from 'react-icons/fa'

export const RowContainer = styled.div`
  display: flex;
  flex-grow: 1;
`

export const AllPageBg = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export const TrendingMainBgContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 92vh;
  overflow-y: auto;
`

export const TrendingTopContainer = styled.div`
  padding: 25px;
  background-color: ${props => (props.isDark ? '#181818' : ' #f1f1f1')};
  display: flex;
  align-items: center;
  @media (max-width: 767px) {
    padding: 15px;
  }
`

export const TrendingLogoContainer = styled.div`
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

export const TrendingHeading = styled.h1`
  color: ${props => (props.isDark ? 'white' : 'black')};
  margin: 5px;
  font-size: 25px;
  @media (max-width: 767px) {
    font-size: 20px;
  }
`

export const VideosContainer = styled.div`
  flex-grow: 1;
  background-color: ${props => (props.isDark ? ' #0f0f0f ' : '#f9f9f9')};
  padding: 40px;
  margin: 0px;
  @media (max-width: 575px) {
    padding: 0px;
  }
`

export const LoaderBg = styled(TrendingMainBgContainer)`
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
