import React from 'react'
import styled from 'styled-components'

export const SmallTitle = ({ icon, title }) => {
    return (
        <SmallTitleStyle>
            <p>{icon}</p>
            <h3>{title}</h3>
        </SmallTitleStyle>
    )
}

const SmallTitleStyle = styled.div`
    display: flex;
    align-items: center;
    p{
        padding-right: 1rem;
        svg{
            font-size: 3rem;
        }
    }
    h3{
        color: var(--white-color);
        font-size: 2rem;
    }
`;
