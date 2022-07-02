import styled from 'styled-components'
import { InputProps } from '.'

export const StyledInput = styled.input<InputProps>`
  height: 40px;
  width: 300px;
  border-radius: 3px;
  border: solid 2px
    ${(props) =>
      props.disabled
        ? '#e4e3ea'
        : props.error
        ? '#a9150b'
        : props.success
        ? '#067d68'
        : '#353637'};
  background-color: #fff;
  &:focus {
    border: solid 2px #1b116e;
  }
`

export const StyledLabel = styled.div<InputProps>`
  font-size: 14px;
  color: ${(props) => (props.disabled ? '#e4e3ea' : '#080808')};
  padding-bottom: 6px;
`

export const StyledMessage = styled.div<InputProps>`
  font-size: 14px;
  color: '#a9150b8';
  padding-top: 4px;
`

export const StyledText = styled.p<InputProps>`
  margin: 0px;
  color: ${(props) =>
    props.disabled ? '#e4e3ea' : props.error ? '#a9150b' : '#080808'};
`
