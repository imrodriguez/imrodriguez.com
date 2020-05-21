import styled from 'styled-components'

export const Line = styled.div`
    position: relative;
    text-align: center;
    &::after {
        content: '';
        position: absolute;
        width: 6px;
        background-color: #05a06d;
        top: -5%;
        height: 110%;
        bottom: 0;
        left: 50%;
        margin-left: -3px;
        z-index: -1;
    }
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 25px 15px;

    > div:nth-child(odd) {
        grid-column-start: 2;
        text-align: left;
    }

    > div:nth-child(even) {
        text-align: right;
    }
`

export const Title = styled.p`
    font-weight: bold;
    font-size: 1.5em;
    margin: 0;
`

export const Date = styled.p`
    font-size: 0.7rem;
    font-weight: 300;
    margin: 0;
`

export const Place = styled.p`
    margin: 0;
    font-size: 0.9em;
`