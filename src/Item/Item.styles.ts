import styled from 'styled-components';

export const Wrapper = styled.div`
display: flex;
justify-content: space-between;
flex-direction: column;
width: 100%;
border: 3px solid skyBlue;
border-radius: 20px;
height: 100%;

button {
    border-radius: 0 0 20px 20px;
    margin: -2px;

    :hover {
        background-color: skyBlue;
    }
}

img {
    max-height: 250px;
    object-fit: contain;
    border-radius: 20px 20px 0 0;
}

div {
    font-family: Arial, Helvetica, sans-serif;
    padding: 1rem;
    height: 100%;
}
`;