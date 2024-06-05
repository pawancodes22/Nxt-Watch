import {Link} from 'react-router-dom'

import styled from 'styled-components'

import {MdPlaylistAdd} from 'react-icons/md'

import {FaGamepad, FaFire, FaMoon} from 'react-icons/fa'

import {IoMdHome, IoMdClose} from 'react-icons/io'

import {IoSunnyOutline, IoLogOutOutline} from 'react-icons/io5'

import {GiHamburgerMenu} from 'react-icons/gi'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  background-color: ${props => (props.isDark ? '#212121' : 'none')};
  width: 100%;
  height: 8vh;
`

export const NavItemsContainer = styled.ul`
  padding: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 150px;
  @media (max-width: 767px) {
    width: 100px;
  }
  @media (max-width: 575px) {
    margin: 5px;
  }
`

export const StyledLink = styled(Link)`
  color: none;
  text-decoration: none;
`

export const HeaderLogo = styled.img`
  width: 100px;
  height: 25px;
  @media (max-width: 767px) {
    width: 80px;
    height: 20px;
  }
`

export const ListItem = styled.li`
  list-style-type: none;
`

export const NavProfileImage = styled.img`
  height: 30px;
  width: 30px;
  @media (max-width: 767px) {
    display: none;
  }
`

export const LogoutButton = styled.button`
  border-color: ${props => (props.isDark ? 'white' : '#3b82f6')};
  color: ${props => (props.isDark ? 'white' : '#3b82f6')};
  background-color: transparent;
  border-style: solid;
  margin-bottom: 3px;
  padding: 4px;
  @media (max-width: 767px) {
    border-style: none;
    padding: 0px;
    margin: 0px;
  }
`

export const LogoutText = styled.span`
  @media (max-width: 767px) {
    display: none;
  }
`

export const NoBorderButton = styled.button`
  border-style: none;
  background-color: transparent;
`

export const SunIcon = styled(IoSunnyOutline)`
  font-size: 25px;
  color: white;
  @media (max-width: 767px) {
    font-size: 20px;
  }
`

export const MoonIcon = styled(FaMoon)`
  font-size: 25px;
  @media (max-width: 767px) {
    font-size: 20px;
  }
`

export const SmOptions = styled(GiHamburgerMenu)`
  font-size: 25px;
  color: ${props => (props.isDark ? 'white' : 'black')};
  @media (max-width: 767px) {
    font-size: 20px;
  }
`

export const SmOptionsButton = styled(NoBorderButton)`
  display: none;
  background-color: transparent;
  @media (max-width: 767px) {
    display: inline;
  }
`

export const SmLogOutIcon = styled(IoLogOutOutline)`
  font-size: 25px;
  color: ${props => (props.isDark ? 'white' : 'black')};
  display: none;
  @media (max-width: 767px) {
    font-size: 20px;
    display: inline;
  }
`

export const SmLogoutButton = styled(NoBorderButton)``

export const PopupDiv = styled.div`
  background-color: ${props => (!props.isDark ? '#faf5f5' : '#545352')};
  border-radius: 8px;
  padding: 20px;
`

export const CancelLogoutButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const CancelButton = styled.button`
  color: ${props => (props.isDark ? 'white' : 'dark')};
  background-color: transparent;
  border-color: silver;
  border-style: solid;
  padding: 10px 20px;
  border-radius: 7px;
  margin-right: 20px;
`

export const ConfirmButton = styled.button`
  color: white;
  background-color: #3b82f6;
  border-style: none;
  padding: 10px 20px;
  border-radius: 7px;
`

export const PopupHeading = styled.h1`
  ${props => console.log(props.isDark)}
  color: ${props => (props.isDark ? 'white' : 'none')};
  font-weight: 400;
  font-family: 'Roboto';
  font-size: 20px;
`

export const SmLogOutPopUpDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isDark ? '#212121' : 'white')};
  height: 100%;
  width: 100%;
  padding: 30px;
  border-radius: 10px;
`

export const SideHeaderUnorderedList = styled.ul`
  padding: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const SideHeaderList = styled.li`
  list-style-type: none;
  display: flex;
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

export const SideHeaderButtonContainer = styled.div`
  display: flex;
  padding: 3px 20px;
  justify-content: flex-start;
  align-items: center;
  width: 180px;
`

export const SideHeaderPara = styled.p`
  font-weight: 600;
  color: ${props => (props.isDark ? 'white' : '#1e293b')};
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

export const CloseButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  background-color: ${props => (props.isDark ? '#212121' : 'white')};
  margin-bottom: 40px;
`

export const CloseIcon = styled(IoMdClose)`
  font-size: 25px;
  color: ${props => (props.isDark ? 'white' : 'black')};
`
