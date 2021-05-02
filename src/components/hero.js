import React, { useState } from 'react'
import styled from 'styled-components'
import CardHero from '../components/frontHero'
import DetailHero from '../components/backHero'
import ReactCardFlip from 'react-card-flip'

const CardContainer = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const ButtonDelete = styled.button`
    background-color: orange;
    color: #1c36af;
    border-radius: 6px;
    padding: 10px;
    width: fit-content;
    margin: 0 auto;
    border: none;
    outline: none;
    font-size: 1.2rem;
    font-weight: bolder;
    cursor: pointer;
    box-shadow: 2px 3px 2px 1px rgba(0, 0, 0, 0.2);

    &:hover{
        background-color: #1c36af;
        color: orange;
    }
`;

const Hero = ({hero, handleDelete, handleAdd}) => {

    const [isFlipped, setIsFlipped] = useState(false)

    const handleClick = () => {
        setIsFlipped(!isFlipped)
    }

    return(
        <CardContainer>
            <ReactCardFlip isFlipped={isFlipped}>
                <CardHero handleClick={handleClick} hero={hero} />
                <DetailHero handleClick={handleClick} hero={hero} />
            </ReactCardFlip>
            {handleAdd ? <ButtonDelete onClick={() => handleAdd(hero)}>Add to my team</ButtonDelete>
            : <ButtonDelete onClick={() => handleDelete(hero)}>delete</ButtonDelete>
            }
        </CardContainer>
    )
}

export default Hero