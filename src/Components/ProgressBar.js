import React from 'react'
import styled from 'styled-components'

export const ProgressBar = ({ title, image, width, text }) => {
    return (
        <ProgressBarStyle>
            <h6>{title}</h6>
            <div className="progress-bar">
                {/* <p>{text}</p> */}
                <img src={image} alt={`${title} icon`} />
                <div className="progress">
                    <span style={{ width: width }}></span>
                </div>
            </div>
        </ProgressBarStyle>
    )
}

const ProgressBarStyle = styled.div`
    h6{
        padding-left: .5rem;
    }
    .progress-bar{
        display: flex;
        align-items: center;
        .progress{
            position: relative;
            margin-left: .25rem;
            width: 100%;
            height: .4rem;
            background-color: var(--border-color);
        }
        span{
            position: absolute;
            left: 0;
            bottom: 0;
            height: 100%;
            background-color: var(--primary-color);
        }
    }
`;
