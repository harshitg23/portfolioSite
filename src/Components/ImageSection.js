import React from 'react';
import styled from 'styled-components';
import HarshitImage from '../image/harshit.jpeg';
import cv from '../data/cv.pdf';
import { Link } from 'react-router-dom';
import { DOWNLOAD_CV, INFO, INFO_TITLE, I_AM, NAME, OBJECTIVE } from '../data/about'

export const ImageSection = () => {
    const renderInfoTitle = () => INFO_TITLE.map((item, index) => {
        return (
            <p key={index}>{item}</p>
        );
    })
    const renderInfo = () => INFO.map((item, index) => {
        return (
            <p key={index}>{item}</p>
        );
    })
    return (
        <ImageSectionStyle>
            <div className="left-content">
                <img src={HarshitImage} alt="" />
            </div>
            <div className="right-content">
                <h4>{I_AM}<span>{NAME}</span></h4>
                <p className="paragraph">
                    {OBJECTIVE}
                </p>
                <div className="about-info">
                    <div className="info-title">
                        {renderInfoTitle()}
                    </div>
                    <div className="info">
                        {renderInfo()}
                    </div>
                </div>
                <Link to={cv} className="cv" target="_blank" >{DOWNLOAD_CV}</Link>
            </div>

        </ImageSectionStyle>
    )
}

const ImageSectionStyle = styled.div`
    margin-top: 5rem;
    display: flex;

    .left-content{
        width: 100%;
        img{
            width: 95%;
            object-fit: cover;
        }
    }
    .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, info{
                p{
                    padding: .3rem, 0;
                }
            }
        }
    }
    .cv{
        background-color: var(--primary-color);
        padding: .8rem 2.5rem;
        color: white;
        cursor: pointer;
        display: inline-block;
        font-size: inherit;
        text-transform: uppercase;
        position: relative;
        transition: all .4s ease-in-out;
        &::after{
            content: "";
            position: absolute;
            width: 0;
            height: .2rem;
            transition: all .4s ease-in-out;
            left: 0;
            bottom: 0;
            opacity: .7;
        }
        &:hover::after{
            width: 100%;
            background-color: var(--white-color);
        }
    }
    @media screen and (max-width:800px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
`;
