import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layout';
import { SmallTitle } from './SmallTitle';
import { Title } from './Title';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import { ResumeItem } from './ResumeItem';
import { WORKING_EXPERIENCE } from '../data/workingExperience';
import { EDUCATIONAL_QUALIFICATIONS } from '../data/qualifications';
import { Skills } from './Skills';


export const ResumeDetails = () => {
    const skills = <AssignmentTurnedInIcon />
    const briefcase = <BusinessCenterIcon />;
    const school = <SchoolIcon />;

    const renderWorkingExperience = () =>
        WORKING_EXPERIENCE.map((item, index) => {
            const { year, title, subTitle, text } = item
            return (
                <ResumeItem
                    key={index}
                    year={year}
                    title={title}
                    subTitle={subTitle}
                    text={text}
                />
            );
        })

    const renderEducationalQualifications = () =>
        EDUCATIONAL_QUALIFICATIONS.map((item, index) => {
            const { year, title, subTitle, text } = item
            return (
                <ResumeItem
                    key={index}
                    year={year}
                    title={title}
                    subTitle={subTitle}
                    text={text}
                />
            );
        })

    return (
        <ResumeDetailsStyle>
            <Title title={'Resume'} span={'Resume'} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={skills} title={'My Skills'} />
                </div>
                <Skills />
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={briefcase} title={'Working Experience'} />
                </div>
                <div className="resume-content">
                    {renderWorkingExperience()}
                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Educational Qualifications'} />
                </div>
                <div className="resume-content ">
                    {renderEducationalQualifications()}
                </div>
            </InnerLayout>
        </ResumeDetailsStyle>
    )
}

const ResumeDetailsStyle = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }
    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`;
