import styled, { css } from 'styled-components'

export const StyledButton = styled.button`
  border: none;
  color: #ffffff;
  border-radius: 3px;
  cursor: pointer;
  padding: 5px 5px;
  font-weight: 600;
  background-color:${props => props.theme[props.colour]};
  ${props => {
    if (props.cssType === 'input') {
      return css`
        height: 25px;
        width: 25px;
        margin: 0 2px;
      `
    } else if (props.cssType === 'delete') {
      return css`
        padding: 7px 10px;
      `
    } else if (props.cssType === 'submit') {
      return css`
        padding: 10px 30px;
        border-radius: 30px;
        &:disabled {
          background-color: #afafaf;
          cursor:not-allowed;
        }
      `
    }
  }}
`

export const StyledMainTitle = styled.h1`
  border-bottom: 1px solid ${props => props.theme.accent};
  text-align: center;
  padding-bottom: 20px;
  font-size: 2em;
  font-weight: 500;
`

export const StyledPageContainer = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const StyledForm = styled.form`
  width: 60%;
`

export const StyledQuantityInput = styled.input.attrs(props => ({
  ...props,
  type: 'number'
}))`
  border: 1px solid #cccccc;
  border-radius: 0;
  text-align: center;
  -moz-appearance: textfield;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
  }
`

