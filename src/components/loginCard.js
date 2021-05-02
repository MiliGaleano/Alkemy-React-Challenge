import React, { useState } from 'react'
import styled from 'styled-components'
import LogoIcon from '../assets/logo.png'
import {logUserIn} from '../services/logIn'
import { useHistory } from "react-router-dom"

const LoginContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Logo = styled.section`
    width: 120px;
    height: 120px;
    background-color: orange;
    border-radius: 50%;
    position: relative;
    top:60px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 2px 5px 2px 1px rgba(0, 0, 0, 0.2);

    img{
        width: 60%;
        margin-left: 10%;
    }
`;

const FormLogin = styled.form`
    width: 80%;
    max-width: 800px;
    background-color: #1c36af;
    border-radius: 6px;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 80px 10px 20px;
    margin-bottom:60px;
    box-shadow: 4px 5px 2px 1px rgba(0, 0, 0, 0.2);
`;

const Label = styled.label`
    font-size: 1.2rem;
    color: orange;
    text-align: left;
    width: 80%;
    margin-bottom: 10px;
`;

const Input = styled.input`
    width: 80%;
    background-color: #eeeeee;
    border: none;
    outline: none;
    border-radius: 6px;
    padding: 5px;
    margin-bottom: 20px;
`;

const ButtonLogIn = styled.input`
    background-color: orange;
    color: #1c36af;
    border-radius: 6px;
    width: 40%;
    padding: 5px;
    border: none;
    outline: none;
    font-size: 1.2rem;
    font-weight: bolder;
    margin: 20px;
    cursor: pointer;
    box-shadow: 2px 3px 2px 1px rgba(0, 0, 0, 0.2);

    &:hover{
       opacity: 0.9;
       color: #eeeeee;
    }
`;

const Message = styled(Label)`
    text-align: center;
    color: #eeeeee;
    margin:10px;
`;

const ModalLogin = styled(LoginContainer)`
    position: absolute;
    background-color: #eeeeee;
    left: 0;
    top: 0;
    z-index: 5;

    & div {
        width: 250px;
        height: 250px;
        background-color: orange;
        color: #1c36af;
        text-align: center;
        font-size: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 6px;
        box-shadow: 2px 3px 2px 1px rgba(0, 0, 0, 0.2);
    }
`;

const LoginCard = () => {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [incomplete, setIncomplete] = useState(false)
    const [showModal, setShowModal] = useState(false)

    let history = useHistory()

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if ( !email || !password) {
           setIncomplete(true)
        }
        else {
            const data = {
                email: email,
                password: password
            }
            logUserIn(data)
            .then(res => {
                if (res === 'ok') {
                    history.push("/")
                } else {
                    setShowModal(true)
                }
            })
            .catch(err => console.log(err))
        }
    }

    return(
        <LoginContainer>
            {showModal && 
                <ModalLogin onClick={() => setShowModal(false)}>
                    <div>Access denied, please try again.</div>
                </ModalLogin>
            }
            <Logo><img src={LogoIcon} alt='Superheroe icon' /></Logo>
            <FormLogin onSubmit={handleSubmit}>
                <Label>Email:</Label>
                <Input type='email' onChange={handleEmail} />
                <Label>Password:</Label>
                <Input type='password' onChange={handlePassword} />
                {incomplete && <Message>Please complete all fields!</Message>}
                <ButtonLogIn type='submit' value='Log in' />
            </FormLogin>
        </LoginContainer>
    )
}

export default LoginCard