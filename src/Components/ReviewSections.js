import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layout';
import { ReviewItem } from './ReviewItem';
import { Title } from './Title';

export const ReviewSections = () => {
    return (
        <ReviewSectionsStyle>
            <Title title={'Reviews'} span={'Reviews'}></Title>
            <InnerLayout>
                <div className="reviews">
                    <ReviewItem
                        text={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt culpa ad itaque quas?'}
                    />
                    <ReviewItem
                        text={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt culpa ad itaque quas? Dos ir por culpa ad itaque quas!'}
                    />

                </div>
            </InnerLayout>
        </ReviewSectionsStyle>
    )
}

const ReviewSectionsStyle = styled.section`
    .reviews{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1.5rem;
        width: 100%;
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;
