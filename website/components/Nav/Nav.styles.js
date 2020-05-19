import styled from 'styled-components'

export const Logo = styled.div`
    display: flex;

    p {
        margin: 0;
        margin-top: 3px;
        font-weight: bold;
        @media (max-width: 900px) {
            margin-top: 0;
            font-size: 1.5em;
        }
    }
`

export const Menu = styled.nav `
    text-align: center;
    position: fixed;
    top: 0;
    z-index: 90;
    width: 100%;
    box-shadow: ${props => props.transparent ? 'none' : '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)'};
    background-color: ${props => props.transparent ? 'transparent' : '#fff'};
    display: flex;
    padding: 16px 40px;
    justify-content: space-between;

    @media (max-width: 900px) {
        padding-left: 15px;
    }

    svg {
        display: none;
        font-size: 1.5em;
        margin-right: 10px;
        color: ${props => props.transparent ? '#fff' : '#000'};
        @media (max-width: 900px) {
            display: block;
            margin-top: 3px;
        }
    }

    nav > ul {
        padding: 4px 16px;
    }
    li {
        display: flex;
        padding: 6px 8px;
    }
    a {
        font-size: 1em;
        color: ${props => props.transparent ? '#fff' : '#000'};
        text-decoration: none;
    }
`

export const MenuItems = styled.ul`
    margin: 0;
    padding-right: 80px;
    display: flex;

    li {
        margin: 0 5px;
        padding: 5px 15px;
        &.selected {
            background: #eee;
            color: ${props => props.transparent ? '#fff' : '#000'};
        }
        &:hover {
            background: #eee;
            color: ${props => props.transparent ? '#fff' : '#000'};
        }
    }

    @media (max-width: 900px) {
        display: ${props => props.open ? 'block' : 'none'};
        position: absolute;
        top: 60px;
        background: #fff;
        width: 100%;
        left: 0;
        padding: 30px 0;
        box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;
        li {
            font-size: 1.2em;
            color: #000;
            margin: 0;
            padding: 15px 15px;
        }
    }
`