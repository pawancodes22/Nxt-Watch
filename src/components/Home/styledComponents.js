import styled from 'styled-components'

import {IoMdClose} from 'react-icons/io'

export const RowContainer = styled.div`
  display: flex;
  flex-grow: 1;
`

export const AllPageBg = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100vh;
`

export const HomeMainBgContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  max-height: 92vh;
`

export const HomeBanner = styled.div`
  padding: 25px;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: 130% 130%;
  font-family: 'Roboto';
  display: ${props => (props.displayBanner ? 'flex' : 'none')};
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: 767px) {
    padding: 15px;
    background-size: 100% 100%;
  }
  @media (max-width: 575px) {
    background-image: none;
  }
`

export const GetItNowButton = styled.button`
  color: #1e293b;
  background-color: transparent;
  border-color: #1e293b;
  border-width: 2px;
  border-style: solid;
  font-weight: 600;
  padding: 7px;
  @media (max-width: 767px) {
    font-size: 10px;
  }
`

export const BannerCompanyLogo = styled.img`
  width: 150px;
  margin-bottom: 15px;
  @media (max-width: 767px) {
    width: 80px;
  }
`

export const BannerPara = styled.p`
  width: 300px;
  font-weight: 500;
  margin-bottom: 25px;
  font-size: 25px;
  @media (max-width: 767px) {
    font-size: 15px;
    width: 200px;
  }
`

export const BannerCloseButton = styled.button`
  background-color: transparent;
  border-style: none;
`

export const HomeVideosContainer = styled.div`
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
  padding: 30px;
  padding-left: 95px;
  @media (max-width: 767px) {
    padding: 10px;
  }
  @media (max-width: 575px) {
    padding: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const SearchBoxContainer = styled.div`
  display: flex;
  @media (max-width: 575px) {
    align-self: stretch;
    justify-content: center;
    margin-top: 20px;
  }
`

export const SearchBox = styled.input`
  padding: 8px;
  width: 400px;
  border-color: #94a3b8;
  border-width: 1px;
  border-style: solid;
  outline: none;
  @media (max-width: 575px) {
    width: 80%;
    padding: 4px;
    font-size: 12px;
    height: 30px;
  }
`

export const SearchButton = styled.button`
  border-color: #94a3b8;
  background-color: #f1f5f9;
  border-style: solid;
  border-width: 1px;
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 575px) {
    padding: 4px;
    font-size: 8px;
    height: 30px;
    width: 10%;
  }
`

export const CloseCrossSymbol = styled(IoMdClose)`
  font-size: 22px;
`

export const HomeVideosUl = styled.ul`
  padding: 0px;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 767px) {
    justify-content: center;
  }
  @media (max-width: 575px) {
    flex-direction: column;
    align-items: center;
  }
`

export const NoVideosFoundContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
  font-family: 'Roboto';
`

export const NoSearchResultsImage = styled.img`
  width: 300px;
  height: 250px;
  @media (max-width: 575px) {
    width: 200px;
    height: 150px;
  }
`

export const NoSearchResultsHeading = styled.h1`
  color: ${props => (props.isDark ? 'white' : 'none')};
  font-weight: 700;
  margin: 10px 0px;
  font-size: 25px;
  @media (max-width: 575px) {
    font-size: 20px;
  }
`

export const NoSearchResultsPara = styled.p`
  color: ${props => (props.isDark ? '#e2e8f0' : '#313131')};
  font-weight: 400;
  @media (max-width: 575px) {
    font-size: 15px;
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

export const LoadingDiv = styled(NoVideosFoundContainer)``

export const FailureContainer = styled(LoadingDiv)``

export const FailureImage = styled(NoSearchResultsImage)``

export const FailureViewHeading = styled(NoSearchResultsHeading)`
  font-size: 30px;
  @media (max-width: 575px) {
    font-size: 23px;
  }
`

export const FailureViewPara = styled(NoSearchResultsPara)`
  margin: 10px 0px;
  @media (max-width: 575px) {
    font-size: 13px;
  }
`
