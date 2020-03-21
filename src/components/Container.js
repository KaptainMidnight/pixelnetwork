import styled from 'styled-components'

export const Container = styled.div`
    align-items: ${props => props.centered ? 'center' : ''};
    text-align: ${props => props.centered ? 'center' : ''};
    padding-top: ${props => props.padding === 'small' ? '5px' : props.padding === 'medium' ? '1em' : props.padding === 'extra' ? '2em' : '10px'};
`