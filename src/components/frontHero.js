import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBrain, faRunning, faDumbbell, faFistRaised, faBatteryThreeQuarters, faHeartbeat } from '@fortawesome/free-solid-svg-icons'
import imgHero from '../assets/heroimg-01.png'

const CardDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: #1c36af;
    width: 280px;
    height: 505px;
    padding: 16px 0;
    margin: 20px auto;
    border-radius: 6px;
    box-shadow: 2px 3px 2px 1px rgba(0, 0, 0, 0.2);
    cursor: pointer;
`;

const ImgHero = styled.img`
    width: 90%;
    max-height: 336px;
    border-radius: 6px;
    margin-bottom: 10px;
`;

const HeroData = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
`;

const HeroName = styled.h1`
    text-align: center;
    font-size: 2rem;
     font-family: Prompt;
     letter-spacing: 0em;
     color: #1c36af;
     background-color: orange;
     font-weight: 700;
     border-radius: 6px;

     &:hover{
         color: #eeeeee;
     }
`;

const Powerstats = styled.div`
    border-radius: 6px;
    padding: 5px 0;
    font-family: Prompt;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
`;

const Power = styled.div`
    width: 30%;
    background-color: #eeeeee;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    border-radius: 6px;
    padding: 3px;
    margin-top: 10px;

    & svg {
       font-size: 1.5rem;
       align-self: center;
    }
`;

const CardHero = ({handleClick, hero}) => {

    return(
        <CardDiv onClick={() => handleClick()}>
            <ImgHero src={hero.img ? hero.img : imgHero} onError={(e) => (e.target.onerror = null, e.target.src = imgHero)} />
            <HeroData>
                <HeroName>{hero.name}</HeroName>
                <Powerstats>
                    {Object.keys(hero.powerstats).map((key, index) => 
                        <Power key={key}>
                            <FontAwesomeIcon 
                                icon={key === 'speed' ? faRunning 
                                : key === 'strength' ? faDumbbell
                                : key === 'combat' ? faFistRaised
                                : key === 'power' ? faBatteryThreeQuarters
                                : key === 'durability' ? faHeartbeat
                                : faBrain
                            } />
                            <h2>{hero.powerstats[key] !== 'null' ? hero.powerstats[key] : 0 }</h2>
                        </Power>
                    )}
                </Powerstats>
            </HeroData>
        </CardDiv>
    )
}

export default CardHero
