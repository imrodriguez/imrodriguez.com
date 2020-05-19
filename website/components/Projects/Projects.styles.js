import styled from 'styled-components'

export const Container = styled.div`
    text-align: center;
    @media (min-width: 992px) {
        width: 970px;
        margin: 0 auto;
    }
`

export const Layer = styled.div`
    width: 100%;
    height: calc(100% - 4px);
    background: #5bbe69;

    @media (max-width: 515px) {
        position: absolute;
        opacity: 0;
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
        display: block;
        bottom: 40px;
        width: 100%;
        top: auto;
    }
`

export const Project = styled.div `
    position: relative;

    img {
        width: 100%;
    }

    p {
        color: #fff;
        text-shadow: 1px 1px 10px #000;
        margin: 0;
    }

    

    @media (min-width: 992px) {
        &:hover {
            cursor: pointer;
            img {
                display: none;
                filter: blur(1px) grayscale(100%) opacity(0.5);
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