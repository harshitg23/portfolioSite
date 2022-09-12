import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layout';
import { ServiceCard } from './ServiceCard';
import { Title } from './Title';
import design from '../image/responsive.svg';
import intelligence from '../image/mobile.svg';
import gamedev from '../image/intelligence.svg';

export const ServicesSection = () => {
    return (
        <InnerLayout>
            <ServicesSectionStyle>
                <Title title={'Services'} span={'Services'}></Title>
                <div className="services">
                    <ServiceCard
                        image={design}
                        title={'Web Development'}
                        paragraph={'I have worked on various web application projects mainly on the Frontend side using HTML, CSS, JavaScript, and ReactJs.'}
                    />
                    <div className="mid-card">
                        <ServiceCard
                            image={intelligence}
                            title={'App Development'}
                            paragraph={'I have started my career in App Development with React Native. I love to work with React Native.'}
                        />
                    </div>
                    <ServiceCard
                        image={gamedev}
                        title={'Development Tools'}
                        paragraph={'I have worked on various tools like Redux, Postman, Jira, GitHub, GitLab, and databases like Firebase, SQL.'}
                    />
                </div>
            </ServicesSectionStyle>
        </InnerLayout>
    )
}

const ServicesSectionStyle = styled.section`
    .services{
        margin-top: 5rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5rem;
        justify-content: space-between;
        @media screen and (max-width:1000px){
            flex-direction: column;
    }
    @media screen and (max-width:1024px){
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width:730px){
        grid-template-columns: repeat(1, 1fr);
    }
    }
`;
