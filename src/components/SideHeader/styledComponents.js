import styled from 'styled-components'

import {MdPlaylistAdd} from 'react-icons/md'

import {FaGamepad, FaFire} from 'react-icons/fa'

import {IoMdHome} from 'react-icons/io'

export const SideHeaderContainer = styled.div`
  width: 18%;
  background-color: ${props => (props.isDark ? '#212121' : 'none')};
  align-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 767px) {
    display: none;
  }
`

export const SideHeaderUnorderedList = styled.ul`
  padding: 0px;
  display: flex;
  flex-direction: column;
`

export const SideHeaderList = styled.li`
  list-style-type: none;
  background-color: ${props => {
    if (props.activeTabId === props.currentId) {
      if (props.isDark) {
        return '#475569'
      }
      return '#e2e8f0'
    }
    return 'none'
  }};
`

export const NoBorderButton = styled.button`
  border-style: none;
  background-color: transparent;
`

export const SideHeaderButtonContainer = styled.div`
  display: flex;
  padding: 3px 20px;
  align-items: center;
`

export const SideHeaderPara = styled.p`
  font-weight: 600;
  color: ${props => (props.isDark ? 'white' : '#1e293b')};
`

export const LowerContainer = styled.div`
  color: ${props => (props.isDark ? 'white' : '#1e293b')};
  padding: 20px;
`

export const ContactUsHeading = styled.h1`
  font-size: 15px;
`

export const AppIconsContainer = styled.ul`
  padding: 0px;
  display: flex;
`

export const AppIconItem = styled.li`
  list-style-type: none;
`

export const AppIconImage = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`

export const HomeIcon = styled(IoMdHome)`
  margin-right: 15px;
  font-size: 20px;
  color: ${props => {
    if (props.activeTabId === 'HOME') {
      return 'red'
    }
    return props.isDark ? 'white' : '#1e293b'
  }};
  background-color: ${props => {
    if (props.activeTabId === 'HOME') {
      return props.isDark ? '#475569' : '#e2e8f0'
    }
    return props.isDark ? '#212121' : 'white'
  }};
`

export const TrendingIcon = styled(FaFire)`
  margin-right: 15px;
  font-size: 20px;
  color: ${props => {
    if (props.activeTabId === 'TRENDING') {
      return 'red'
    }
    return props.isDark ? 'white' : '#1e293b'
  }};
  background-color: ${props => {
    if (props.activeTabId === 'TRENDING') {
      return props.isDark ? '#475569' : '#e2e8f0'
    }
    return props.isDark ? '#212121' : 'white'
  }};
`

export const GamepadIcon = styled(FaGamepad)`
  margin-right: 15px;
  font-size: 20px;
  color: ${props => {
    if (props.activeTabId === 'GAMING') {
      return 'red'
    }
    return props.isDark ? 'white' : '#1e293b'
  }};
  background-color: ${props => {
    if (props.activeTabId === 'GAMING') {
      return props.isDark ? '#475569' : '#e2e8f0'
    }
    return props.isDark ? '#212121' : 'white'
  }};
`

export const SaveButton = styled(MdPlaylistAdd)`
  margin-right: 15px;
  font-size: 20px;
  color: ${props => {
    if (props.activeTabId === 'SAVED_VIDEOS') {
      return 'red'
    }
    return props.isDark ? 'white' : '#1e293b'
  }};
  background-color: ${props => {
    if (props.activeTabId === 'SAVED_VIDEOS') {
      return props.isDark ? '#475569' : '#e2e8f0'
    }
    return props.isDark ? '#212121' : 'white'
  }};
`
