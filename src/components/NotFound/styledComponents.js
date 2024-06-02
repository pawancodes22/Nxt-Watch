import styled from 'styled-components'

export const RowContainer = styled.div`
  display: flex;
  flex-grow: 1;
`

export const AllPageBg = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100vh;
`

export const NotFoundContainer = styled.div`
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  height: 92vh;
  width: 100%;
  overflow-y: auto;
  padding: 40px;
`

export const NotFoundImage = styled.img`
  width: 40%;
  margin-bottom: 15px;
  @media (max-width: 767px) {
    width: 50%;
  }
  @media (max-width: 575px) {
    width: 70%;
  }
`

export const NotFoundHeading = styled.h1`
  margin-bottom: 10px;
  color: ${props => (props.isDark ? 'white' : 'black')};
  @media (max-width: 767px) {
    font-size: 20px;
  }
  @media (max-width: 575px) {
    font-size: 15px;
  }
`

export const NotFoundPara = styled.p`
  color: ${props => (props.isDark ? 'white' : '#454343')};
  text-align: center;
  font-weight: 600;
  @media (max-width: 767px) {
    font-size: 17px;
  }
  @media (max-width: 575px) {
    font-size: 13px;
  }
`
