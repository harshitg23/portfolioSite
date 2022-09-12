import React from 'react'
import styled from 'styled-components'
import { PORTFOLIO } from '../data/portfolio';
import { InnerLayout } from '../styles/Layout'
import { PortfolioCard } from './PortfolioCard';
import { Title } from './Title';

export const PortfolioSection = () => {
    const renderHandles = () => PORTFOLIO.map((item, index) => {
        const { link, image, title, paragraph } = item;
        return (
            <a href={link} key={index} target="_blank" rel="noreferrer">
                <PortfolioCard
                    image={image}
                    title={title}
                    paragraph={paragraph}
                />
            </a>
        )
    })


    return (
        <PortfolioSectionStyle>
            <Title title={'Portfolio'} span={'Portfolio'}></Title>
            <InnerLayout>
                <div className="portfolio">
                    {renderHandles()}
                </div>
            </InnerLayout >
        </PortfolioSectionStyle>
    )
}

const PortfolioSectionStyle = styled.section`
    .portfolio{
        /* margin-top: 5rem; */
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
