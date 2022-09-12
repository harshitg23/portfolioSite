import React from 'react'
import styled from 'styled-components'

import { ProgressBar } from './ProgressBar';
import { SKILLS } from '../data/skills';

export const Skills = () => {

    const renderSkills = () =>
        SKILLS.map((item) => {
            const { title, image, width, text } = item
            return (
                <ProgressBar
                    key={title}
                    title={title}
                    image={image}
                    width={width}
                    text={text}
                />
            );
        });

    return (
        <SkillsStyle>
            <div className="skills">
                {renderSkills()}
            </div>
        </SkillsStyle>
    )
}

const SkillsStyle = styled.section`
    .skills{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;
        @media screen and (max-width:700px){
            grid-template-columns: repeat(1, 1fr);
    }
    }
`;
