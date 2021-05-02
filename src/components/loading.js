import React from 'react'
import styled, {keyframes} from 'styled-components'
import icon from '../assets/loading.png'

const DivLoading = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #eeeeee;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const movement = keyframes`
  from {
    right: 100px;
    top: 100px;
  }

  to {
    right: -100px;
    top: -100px;
  }
`;

const Image = styled.img`
    position: relative;
    width: 50px;
    animation: ${movement} 2s linear infinite;
`;

const Loading = () => {
    return(
        <DivLoading>
            <Image src={icon} />
        </DivLoading>
    )
}

export default Loading