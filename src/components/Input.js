import styled from 'styled-components'

export const Input = styled.input`
    width: ${props => props.size === 'l' ? '225px' : '540px'};
    height: ${props => props.size === 'l' ? '37px' : '75px'};
    border-radius: 33px;
    border: 2px solid #B105F9;
    font-size: ${props => props.size === 'l' ? '18px' : '36px'};
    background: transparent;
    text-align: center;
    outline: none;
    transition: border .3s linear;

    &:focus {
        border: 2px solid #ff00ff;
    }
`