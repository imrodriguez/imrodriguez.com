import styled from 'styled-components'

export const Container = styled.div`
    text-align: ${props => props.align ? props.align : "left"};
    padding: 0 15px;

    @media (min-width: 992px) {
        width: 970px;
        margin: 0 auto;
        padding: 0;
    }
`

export const Section = styled.div`
    margin: 5em 0;
`

export const Button = styled.button`
    border: 4px solid #05a06d;
    background: #05a06d;
    font-size: 1.2em;
    color: #fff;
    padding: 5px 20px;
    margin: 20px 10px;

    &:hover {
        cursor: pointer;
        background: #fff;
        color: #05a06d;
    }
`