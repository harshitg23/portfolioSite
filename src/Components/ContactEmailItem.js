import React from 'react';
import styled from 'styled-components';


export const ContactEmailItem = ({ title, icon, email1, email2 }) => {
    const handleOnClick1 = () => {
        window.location = 'mailto:harshitgoyal923@gmail.com'
    }
    const handleOnClick2 = () => {
        window.location = 'mailto:harshit.goyal19@bvicam.in'
    }
    return (
        <ContactItemStyle>
            <div className="left-content" onClick={handleOnClick1}>{icon}</div>
            <div className="right-content">
                <h6>{title}</h6>
                <p onClick={handleOnClick1}>{`${email1}`}</p>
                <p onClick={handleOnClick2}>{`${email2}`}</p>
            </div>
        </ContactItemStyle>
    )
}

const ContactItemStyle = styled.div`
    padding:1.5rem 2rem;
    background-color: var(--background-dark-grey);
    display: flex;
    align-items: center;
    &:not(:last-child){
        margin-bottom: 2.5rem;
    }
    .left-content{
        cursor: pointer;
        padding: 1.5rem;
        border: 1px solid var(--border-color);
        font-size: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 1.5rem;
        svg{
            font-size: 2.3rem;
        }
    }
    .right-content{
        h6{
            color: var(--white-color);
            font-size: 1.2rem;
            padding-bottom: .6rem;
        }
        p{
            padding: .1rem 0;
            cursor: pointer;
        }
    }
`;
