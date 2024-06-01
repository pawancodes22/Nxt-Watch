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

export const SavedMainBgContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 92vh;
  overflow-y: auto;
`

export const SavedTopContainer = styled.div`
  padding: 25px;
  background-color: ${props => (props.isDark ? '#181818' : ' #f1f1f1')};
  display: flex;
  align-items: center;
  @media (max-width: 767px) {
    padding: 15px;
  }
`

export const SavedLogoContainer = styled.div`
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

export const SavedHeading = styled.h1`
  color: ${props => (props.isDark ? 'white' : 'black')};
  margin: 5px;
  font-size: 25px;
  @media (max-width: 767px) {
    font-size: 20px;
  }
`

export const VideosContainer = styled.ul`
  flex-grow: 1;
  background-color: ${props => (props.isDark ? 'black' : '#f9f9f9')};
  padding: 40px;
  margin: 0px;
  @media (max-width: 575px) {
    padding: 0px;
  }
`

export const NoVideosContainer = styled.div`
  background-color: ${props => (props.isDark ? 'black' : '#f9f9f9')};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
`

export const NoVideosImage = styled.img`
  width: 50%;
  margin-bottom: 15px;
`

export const NoVideosHeading = styled.h1`
  margin-bottom: 10px;
  color: ${props => (props.isDark ? 'white' : 'black')};
`

export const NoVideosPara = styled.p`
  color: ${props => (props.isDark ? 'white' : '#454343')};
  font-weight: 600;
`
