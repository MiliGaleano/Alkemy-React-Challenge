import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import Header from '../components/header'
import { useHistory } from "react-router-dom"
import {TitleTeam, DivTeamCards} from './home'
import { getSearched } from '../services/getSuperhero'
import Hero from '../components/hero'

const DivSearch = styled.form`
    width: 100%;
    max-width: 350px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: space-around;
    margin: 20px auto;
`;

const InputSearch = styled.input`
    width: 70%;
    background-color: #eeeeee;
    border: 2px solid orange;
    outline: none;
    border-radius: 6px;
    padding: 5px;
`;

const ButtonSearch = styled.input`
    width: 15%;
    background-color: orange;
    color: #1c36af;
    border-radius: 6px;
    padding: 5px;
    font-weight: bolder;
    cursor: pointer;
    border: none;
    outline: none;
    text-align: center;
    margin-left: 10px;

    &:hover{
        background-color: #1c36af;
        color: orange;
    }
`;

const Search = () => {

    const [searched, setSearched] = useState()
    const [results, setResults] = useState()
    // get token from local storage
    const token = localStorage.getItem('token')

    // check if there's a token - if not => takes you to login page
    let history = useHistory()
    useEffect(() => {
        if (!token) {
            history.push("/login")
        }
    }, [])

    const handleSearch = (e) => {
        setSearched(e.target.value)
    }

    // search hero
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!searched) {
            alert('Complete the search field!')
        } else {
            getSearched(searched)
            .then(res => {
                if (res !== 'err') {
                    setResults(res)
                } else {
                    alert('Something went wrong, please try again')
                }
            })
            .catch(() => {
                alert('Something went wrong, please try again')
            })
        }
    }

    // add hero to my team
    const handleAdd = (hero) => {
        const myTeam = JSON.parse(localStorage.getItem('myTeam'))
        if (myTeam.length > 5) {
            alert('Your team is complete!')
        } else {
            if (myTeam.filter(item => item.id === hero.id).length !== 0) {
                alert(`${hero.name} is already part of your team!`)
            } else {
                if (myTeam.filter(item => item.biography.alignment === hero.biography.alignment).length > 2) {
                    alert(`Your ${hero.biography.alignment} side is complete`)
                } else {
                    const newTeam = myTeam.concat(hero)
                    localStorage.setItem('myTeam', JSON.stringify(newTeam))
                    const newResults = results.filter(item => item.id !== hero.id)
                    setResults(newResults)
                }
            }
        }
    }

    return(
        <div>
            <Header />
            <TitleTeam>Search a hero</TitleTeam>
            <DivSearch onSubmit={handleSubmit}>
                <InputSearch type='text' onChange={handleSearch} placeholder='search' />
                <ButtonSearch value='GO' type='submit' />
            </DivSearch>
            <DivTeamCards>
                {results &&
                    results.slice(0, 6).map(hero =>
                    <Hero hero={hero} key={hero.id} handleAdd={handleAdd}/>
                    )
                }
            </DivTeamCards>
        </div>
    )
}

export default Search