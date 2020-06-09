import styled from 'styled-components'

export const Container = styled.div`
    text-align: center;
    @media (min-width: 992px) {
        width: 970px;
        margin: 0 auto;
    }
`

export const Grid = styled.div `
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 15px;

`

export const Content = styled.div `
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;

    @media (max-width: 515px) {
        position: initial;
        text-align: center;
        transform: inherit;
        display: block;
        width: 100%;
    }
`

export const Project = styled.div `
    position: relative;
    height: calc(100% - 4px);

    img {
        width: 100%;
    }

    p {
        color: #fff;
        text-shadow: 1px 1px 10px #000;
        margin: 0;
        @media (max-width: 515px) {
            color: #000;
            text-shadow: none;
        }
    }

    a {
        text-decoration: none;
    }

    @media (min-width: 992px) {
        &:hover {
            background: #11998e;  /* fallback for old browsers */
            background: -webkit-linear-gradient(to bottom, #38ef7d, #11998e);  /* Chrome 10-25, Safari 5.1-6 */
            background: linear-gradient(to bottom, #38ef7d, #11998e); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
            cursor: pointer;
            img {
                filter: opacity(0);
            }
            ${Content} {
                display: block;
            }
        }
    }
`

export const Title = styled.p`
    font-size: 1.5em;
    font-weight: bold;

    @media (max-width: 515px) {
        font-size: 2em;
    }
`