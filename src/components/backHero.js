import React from 'react'
import styled from 'styled-components'
import Stat from './Stat'

const CardDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background-color: #1c36af;
    width: 280px;
    height: 505px;
    padding: 16px 0;
    margin: 20px auto;
    border-radius: 6px;
    box-shadow: 2px 3px 2px 1px rgba(0, 0, 0, 0.2);
    cursor: pointer;
`;

const StatsContainer = styled.div`
    position: relative;
    width: 90%;
    display: flex;
    flex-direction: column;
    border-radius: 12px;
    border-color: #1c36af;
    border-width: 1px;
    border-style: solid;
    padding: 0 10px;
    z-index: 0;
`;

const AppearanceDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    & div {
        width: 42%;
        color: orange;
        display: flex;
        flex-direction: column;
        text-align: center;
        padding: 5px;
        border-radius: 6px;
        margin-top: 5px;
    }

    & div h1 {
        font-size: 2rem;
    }

    & div h1 span{
        font-size: 1rem;
    }

    & div h2 {
        font-size: 0.8rem;
    }
`;

const Powerstats = styled.div`
    width: 90%;
    background-color: #eeeeee;
    border-radius: 6px;
    padding: 5px 10px;
    font-family: Prompt;

    & h2 {
    font-size: 0.85rem;
     font-family: Prompt;
     color: #1c36af;
     font-weight: 600;
     margin-bottom: 2px;
    }

    & h2 span{
        font-weight: 400;
    }
`;

const ContainerVertical = styled.div`
    transform: rotate(270deg);
`;

const DetailHero = ({handleClick, hero}) => {
    return(
        <CardDiv onClick={() => handleClick()}>
            <StatsContainer>
                <ContainerVertical>
                {Object.keys(hero.powerstats).sort(function(a,b){return hero.powerstats[b]-hero.powerstats[a]}).map((key, index) =>
                    <Stat key={key} percentage={hero.powerstats[key]} powerstats={key} vertical={true} />
                )}
                </ContainerVertical>
                <AppearanceDiv>
                    <div>
                        <h1>{hero.appearance.weight[1].split(' ')[0]}<span>kg</span></h1>
                        <h2>weight</h2>
                    </div>
                    <div>
                        <h1>{hero.appearance.height[1].split(' ')[0]}<span>cm</span></h1>
                        <h2>height</h2>
                    </div>
                </AppearanceDiv>
            </StatsContainer>
            <Powerstats>
                <h2>Name: <span>{hero.biography['full-name']}</span></h2>
                <h2>Alias: <span>{hero.biography.aliases.slice(0, 4).join(' - ')}</span></h2>
                <h2>Base: <span>{hero.base}</span></h2>
                <h2>Eyes: <span>{hero.appearance['eye-color']} /</span> Hair: <span>{hero.appearance['hair-color']}</span></h2>
            </Powerstats>
        </CardDiv>
    )
}

export default DetailHero