import React from 'react';
import styled from 'styled-components';
import { Navigation } from './Navigation';

export const Sidebar = ({ navToggle, setNavToggle }) => {
    return (
        <SidebarStyle className={`${navToggle ? 'nav-toggle' : ''}`}>
            <Navigation navToggle={navToggle} setNavToggle={setNavToggle} />
        </SidebarStyle>
    )
}

const SidebarStyle = styled.div`
    width: 16.3rem;
    position: fixed;
    height: 100vh;
    background-color: var(--sidebar-dark-color);
    overflow: hidden;
    transition: all .4s ease-in-out;
    @media screen and  (max-width:1200px){
        transform: translateX(-100%);
        z-index: 20;
    }

`;
