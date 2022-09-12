import React from 'react'
import styled from 'styled-components'
import { ImageSection, ServicesSection, Title } from '../../Components';
import { MainLayout } from '../../styles/Layout';


export const About = () => {
    return (
        <MainLayout>
            <AboutStyle>
                <Title title={'About Me'} span={'About Me'} />
                <ImageSection />
                <ServicesSection />
                {/* <ReviewSections /> */}
            </AboutStyle>
        </MainLayout>

    )
}

const AboutStyle = styled.section`
    
`;
export default About
