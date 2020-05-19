import styled from 'styled-components'

export const Container = styled.div`
    text-align: ${props => props.align ? props.align : "left"};
    @media (min-width: 992px) {
        width: 970px;
        margin: 0 auto;
    }
`

export const Section = styled.div`
    margin-top: 4em;
    margin-bottom: 4em;
`

export const Button = styled.button`
    border: 4px solid rgb(91, 190, 105);
    background: rgb(91, 190, 105);
    font-size: 1.2em;
    color: #fff;
    padding: 5px 20px;
    margin: 20px 0;

    &:hover {
        background: none;
        color: rgb(91, 190, 105);
    }
`