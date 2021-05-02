import React, { useState } from 'react'
import styled from 'styled-components'
import Stat from './Stat'
import {Animated} from "react-animated-css";

const DivContainerStats = styled.div`
    margin: 50px 0;
`;

const Title = styled.h1`
     background-color: #eeeeee;
     font-size: 2.8rem;
     font-family: Prompt;
     letter-spacing: 0em;
     color: #1c36af;
     position: relative;
     font-weight: 800;
     text-align: center;
     width: 280px;
     margin: 0 auto;
     top: 2rem;
     z-index: 1;
     cursor: pointer;
`;

const Title2 = styled(Title)`
    background-color: orange;
    padding: 5px;
    border-radius: 6px;
    top: 0;
    margin-top: 2rem;
    z-index: 0;
    box-shadow: 2px 3px 2px 1px rgba(0, 0, 0, 0.2);
`;

const StatsContainer = styled.div`
    position: relative;
    width: 90%;
    margin-left: 5%;
    display: flex;
    flex-direction: column;
    border-radius: 12px;
    border-color: #1c36af;
    border-width: 1px;
    border-style: solid;
    padding: 3rem 10px 20px 10px;
    z-index: 0;
`;

const AppearanceDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 16px;

    & div {
        width: 40%;
        display: flex;
        flex-direction: column;
        text-align: center;
    }

    & div h1 {
        font-size: 3rem;
    }

    & div h1 span{
        font-size: 1.5rem;
    }

    & div h2 {
        font-size: 1rem;
    }
`;

const TeamStats = ({myTeam}) => {

    const [showStats, setShowStats] = useState(false)
    
    // get average powerstats
    const teamData={
    intelligence: myTeam.reduce((sum, value) => ( sum + parseInt(value.powerstats.intelligence) ), 0) / myTeam.length,
    speed: myTeam.reduce((sum, value) => ( sum + parseInt(value.powerstats.speed) ), 0) / myTeam.length,
    strength: myTeam.reduce((sum, value) => ( sum + parseInt(value.powerstats.strength) ), 0) / myTeam.length,
    combat: myTeam.reduce((sum, value) => ( sum + parseInt(value.powerstats.combat) ), 0) / myTeam.length,
    power: myTeam.reduce((sum, value) => ( sum + parseInt(value.powerstats.power) ), 0) / myTeam.length,
    durability: myTeam.reduce((sum, value) => ( sum + parseInt(value.powerstats.durability) ), 0) / myTeam.length
    }

    return (
    <DivContainerStats>
        {!showStats && <Title2 onClick={() => setShowStats(!showStats)}>TEAM STATS</Title2>}
        { showStats &&
        <>
            <Title onClick={() => setShowStats(!showStats)}>TEAM STATS</Title>
            <Animated animationIn="fadeInDown" animationOut="fadeOutUp" animationInDuration={800} animationOutDuration={800} isVisible={showStats ? true : false}>
                <StatsContainer>
                    {Object.keys(teamData).sort(function(a,b){return teamData[b]-teamData[a]}).map((key, index) =>
                        <Stat key={key} percentage={teamData[key].toFixed(0)} powerstats={key} />
                    )}
                    <AppearanceDiv>
                        <div>
                            <h1>{(myTeam.reduce((sum, value) => ( sum + parseInt(value.appearance.weight[1].split(' ')[0]) ), 0) / myTeam.length).toFixed(0)}<span>kg</span></h1>
                            <h2>weight</h2>
                        </div>
                        <div>
                            <h1>{(myTeam.reduce((sum, value) => ( sum + parseInt(value.appearance.height[1].split(' ')[0]) ), 0) / myTeam.length).toFixed(0)}<span>cm</span></h1>
                            <h2>height</h2>
                        </div>
                    </AppearanceDiv>
                </StatsContainer>
            </Animated>
        </>
        }
    </DivContainerStats>
  )
}

export default TeamStats