import styled from 'styled-components'

export const Button = styled.button`
    background-color: ${props => props.color === 'pink' ? '#B105F9' : '#414141'};
    width: ${props => props.size === 'l' ? '225px' : '280px'};
    height: ${props => props.size === 'l' ? '37px' : '35px'};
    border-radius: 50px;
    border: none;
    font-size: 16px;
    color: #fff;
    outline: none;
    cursor: pointer;
    transition: background .3s linear;

    &:hover {
        background: #191970;
    }
`