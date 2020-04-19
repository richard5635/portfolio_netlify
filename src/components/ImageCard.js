import React from 'react'
// import { Link } from 'gatsby'
import styled from 'styled-components'
import { colors } from '../tokens'

const ImageCardComp = styled.div`

`

const ImageContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
`

const ImageEl = styled.img`
    max-height: 300px;
    margin-right: 16px;

    & :last-child{
        margin-right: 0;
    }

    @media (min-width: 780px) and (max-width: 1023px){
    }

    @media (max-width: 779px) and (min-width: 564px){
        max-height: 250px;
        margin-right: 8px;
    }

    @media (max-width: 563px){
        max-height: 200px;
        margin-right: 8px;
    }
`

const Caption = styled.h5`
    letter-spacing: 0;
    text-align: center;
`

const ImageCard = props => {
    const { images, caption } = props

    return (
        <ImageCardComp>
            <ImageContainer>
                {/* Accepts array of image paths */}
                {images.map(imgPath => {
                    return <ImageEl src={imgPath} />
                })}
                {/* sss */}
            </ImageContainer>
            <Caption>
                {caption}
                {/* sssssss */}
            </Caption>
        </ImageCardComp>
    )
}

export default ImageCard