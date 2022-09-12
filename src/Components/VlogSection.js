import React from 'react'
import styled from 'styled-components'

import { InnerLayout } from '../styles/Layout'
import { Title } from './Title';

export const VlogSection = () => {
    return (
        <VlogSectionStyle>
            <Title title={'Vlogs'} span={'Vlogs'}></Title>
            <InnerLayout>
                <div className="vlogs">
                    <iframe
                        width="360"
                        height="203"
                        src="https://www.youtube.com/embed/ZAVg6MpUduA"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;"
                        // allowfullscreen
                        title="video"
                    />
                    <iframe
                        width="360"
                        height="203"
                        src="https://www.youtube.com/embed/nbs5HKY0jaE"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;"
                        // allowfullscreen
                        title="video"
                    />
                </div>
            </InnerLayout>
        </VlogSectionStyle>
    )
}

const VlogSectionStyle = styled.section`
    .vlogs{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5rem;
        justify-content: space-between;
        @media screen and (max-width:1000px){
            flex-direction: column;
    }
    @media screen and (max-width:950px){
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width:650px){
        grid-template-columns: repeat(1, 1fr);
        
    }
    }
`;
