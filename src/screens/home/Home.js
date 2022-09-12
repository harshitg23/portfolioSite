import React from 'react'
import styled from 'styled-components'

import { Particle } from '../../Components'
import { HI, INTRODUCTION, NAME, PROFILES } from '../../data/home'

export const Home = () => {
    const renderProfiles = () => PROFILES.map((item) => {
        const { link, className, icon } = item;
        return (
            <a href={item.link} key={link} target=" _blank" className={className}>{icon}</a>
        )
    })
    return (
        <HomePageStyle>
            <div className="particle-con">
                <Particle />
            </div>
            <div className="typography">
                <h1>{HI}<span>{NAME}</span></h1>
                <p>{INTRODUCTION}</p>
                <div className="icons">
                    {renderProfiles()}
                </div>
            </div>
        </HomePageStyle >
    )
}
const HomePageStyle = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
    @media screen and  (max-width: 520px){
        h1{
            font-size: 80%;
        }
    }
    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;
    }
    .icons{
        display: flex;
        justify-content: center;
        margin-top: 1rem;
        .icon{
            border: 2px solid var(--border-color);
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            transition: all .4s ease-in-out;
            cursor: pointer;
            &:hover{
                border: 2px solid var(--primary-color);
                color: var(--primary-color);

            }
            &:not(:last-child){
                margin-right: 1rem;
            }
            svg{
                margin: .5rem;
            }
        }
        .i-youtube{
            &:hover{
                border: 2px solid #FF0000;
                color: #FF0000;
            }
        }
        .i-github{
            &:hover{
                border: 2px solid #fafafa;
                color: #fafafa;
            }
        }
        .i-facebook{
            &:hover{
                border: 2px solid #4267B2;
                color: #4267B2;
            }
        }
        .i-linked{
            &:hover{
                border: 2px solid #0077b5;
                color: #0077b5;
            }
        }
        .i-instagram{
            &:hover{
                border: 2px solid #833AB4;
                color: #C13584;
            }
        }
    }
`;