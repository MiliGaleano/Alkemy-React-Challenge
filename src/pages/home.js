import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import Header from '../components/header'
import TeamStats from '../components/teamStats'
import Hero from '../components/hero'
import {getSuperhero} from '../services/getSuperhero'
import { useHistory } from "react-router-dom"
import Loading from '../components/loading'

export const TitleTeam = styled.h1`
     font-size: 2.4rem;
     font-family: Prompt;
     letter-spacing: 0em;
     color: #1c36af;
     font-weight: 800;
     text-align: center;
     width: 100%;
     margin-top: 24px;

     & span {
        font-size: 1rem;
        font-weight: 600;
     }
`;

export const DivTeamCards = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 0 40px;
    margin-bottom: 50px;
`;

const Home = () => {

    const [loading, setLoading] = useState(true)
    const [updateTeam, setUpdateTeam] = useState(false)
    const [myTeam, setMyTeam] = useState(JSON.parse(localStorage.getItem('myTeam')))

    // get token from local storage
    const token = localStorage.getItem('token')
    
    // check if there's a token - if not => takes you to login page
    let history = useHistory()
    useEffect(() => {
        if (!token) {
            history.push("/login")
        }
    }, [])

    // default team if there's no team in storage
    const defaultTeam = [524, 638, 517, 579, 174]

    useEffect(() => {
        setMyTeam(JSON.parse(localStorage.getItem('myTeam')))
    }, [updateTeam])

    useEffect(() => {
        if (!myTeam) {
            getSuperhero(defaultTeam[0])
            .then(()=> getSuperhero(defaultTeam[1]))
            .then(()=> getSuperhero(defaultTeam[2]))
            .then(()=> getSuperhero(defaultTeam[3]))
            .then(()=> getSuperhero(defaultTeam[4]))
            .then(()=> setLoading(false))
        } else {
        setLoading(false)}
    }, [])

    // delete hero from my team in storage
    const handleDelete = (hero) => {
        if (myTeam.length === 1) {
            alert("You can't have an empty team!")
        } else {
        const newTeam = myTeam.filter((team)=> team.name !== hero.name)
        localStorage.setItem('myTeam', JSON.stringify(newTeam))
        setUpdateTeam(!updateTeam)
        }
    }

    if (loading) return <Loading />
    else {
    // sort alphabetically by name
    myTeam.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
        return(
            <div>
                <Header />
                <TitleTeam>My Team <span>{`${myTeam.length}/6`}</span></TitleTeam>
                <DivTeamCards>
                    {myTeam.map(hero => 
                            <Hero hero={hero} key={hero.name} handleDelete={handleDelete}/>
                    )}
                </DivTeamCards>
                <TeamStats myTeam={myTeam} />
            </div>
        )
    }
}

export default Home