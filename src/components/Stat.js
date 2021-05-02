import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBrain, faRunning, faDumbbell, faFistRaised, faBatteryThreeQuarters, faHeartbeat } from '@fortawesome/free-solid-svg-icons'

const StatDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 0;
`;

const Icon = styled.div`
    width: 15%;
    font-size: ${props => props.vertical ? '1.2rem' : '2rem' };
    display: flex;
    justify-content: center;
    align-items: center;
    transform: ${props => props.vertical ? 'rotate(90deg)' : 'none' };
`;

const StatPercentage = styled.div`
    position: relative;
    width: 80%;
    height: ${props => props.vertical ? '20px' : '30px' };
    box-shadow: ${props => props.percentage && `inset 0px 0px 0px 1px hsl(${props.percentage} 100% 40%)`};
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;

    & h1{
        position: relative;
        z-index: 1;
        font-size: ${props => props.vertical ? '0.8rem' : '1rem' };

    }
`;

const PercentageColor = styled.aside`
    position: absolute;
    width: ${props => props.percentage}%;
    height: 100%;
    background: ${props => props.percentage !== '100' ? `linear-gradient(90deg, hsl(${props.percentage} 100% 40%) 80%, transparent)` : `hsl(${props.percentage} 100% 40%)`};
    z-index: 0;
    left: 0;
    bottom: 0;
    border-radius: 6px;
`;

const Stat = ({percentage, powerstats, vertical}) => {
    return(
        <StatDiv vertical={vertical}>
            <Icon vertical={vertical}>
                <FontAwesomeIcon 
                    icon={powerstats === 'speed' ? faRunning 
                    : powerstats === 'strength' ? faDumbbell
                    : powerstats === 'combat' ? faFistRaised
                    : powerstats === 'power' ? faBatteryThreeQuarters
                    : powerstats === 'durability' ? faHeartbeat
                    : faBrain
                } />
            </Icon>
            <StatPercentage percentage={percentage !== 'null' ? percentage : 0} vertical={vertical}>
                <h1>{`${powerstats} ${percentage !== 'null' ? percentage : 0}%`}</h1>
                <PercentageColor percentage={percentage !== 'null' ? percentage : 0} />
            </StatPercentage>
        </StatDiv>
    )
}

export default Stat