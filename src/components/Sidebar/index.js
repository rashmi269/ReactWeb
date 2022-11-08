import React from 'react'
import { SidebarContainer,
    Icon,
    CloseIcon,
    Sidebarwrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute } from './SidebarElements'
const Sidebar = ({isOpen,toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <Sidebarwrapper>
        <SidebarMenu>
            <SidebarLink to="about">About</SidebarLink>
            <SidebarLink to="discover">Discover</SidebarLink>
            <SidebarLink to="services">Services</SidebarLink>
            <SidebarLink to="signup">Sign Up</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
            <SidebarRoute to="/signin">Sign In</SidebarRoute>
        </SideBtnWrap>
        </Sidebarwrapper>
    </SidebarContainer>
  );
};

export default Sidebar
