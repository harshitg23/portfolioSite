import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layout'
import vectoScalarArticle from '../image/article.png'
import { PortfolioCard } from './PortfolioCard'
import { Title } from './Title';

export const BlogSection = () => {
    return (
        <BlogSectionStyle>
            <Title title={'Blogs'} span={'Blogs'}></Title>
            <InnerLayout>
                <div className="blogs">
                    <a href="https://www.geeksforgeeks.org/vectoscalar-technologies-pvt-ltd-interview-experience-for-software-engineer-on-campus-2021/" target="_blank" rel="noreferrer">
                        <PortfolioCard
                            image={vectoScalarArticle}
                            title={'Interview Experience'}
                            paragraph={'Click here to read Article!'}
                        />
                    </a>
                </div>
            </InnerLayout >
        </BlogSectionStyle>
    )
}

const BlogSectionStyle = styled.section`
    .blogs{
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
