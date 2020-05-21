import styled from 'styled-components'

export const HeaderWrapper = styled.div`
    position: relative;

    img {
        width: 100%;
    }

    @media (max-width: 992px) {
        height: 60vh;
        img {
            width: 100%;
            object-fit: cover;
            object-position: 73%;
            height: 100%
        }
    }
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    @media (min-width: 992px) {
        width: 970px;
    }
    @media (max-width: 992px) {
        grid-template-columns: 1fr;
        > div {
            margin: 0 auto;
        }
    }
`

export const Title = styled.div`
    color: #fff;
    font-weight: bold;
    text-transform: uppercase;
    margin: 0;
    margin-bottom: 5px;
    font-size: 1.5em;
`

export const Name = styled.div`
    border: 10px solid #fff;
    width: max-content;
    font-weight: bold;
    text-transform: uppercase;
    color: rgb(255, 255, 255);
    text-align: center;
    padding: 15px;
`

export const FirstName = styled.div`
    margin: 0;
    font-size: 5em;
    line-height: 0.9em;
    @media (max-width: 992px) {
        font-size: 3em;
    }
`

export const LastName = styled.div`
    margin: 0;
    font-size: 1.87em;
    @media (max-width: 992px) {
        font-size: 1.12em;
    }
`