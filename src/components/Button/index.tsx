import React, { MouseEventHandler } from 'react'

import * as S from './styles'

export interface ButtonProps {
  text?: string
  primary?: boolean
  disabled?: boolean
  size?: 'small' | 'medium' | 'large'
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export const Button = ({
  text,
  primary,
  disabled,
  size,
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <S.StyledButton
      type="button"
      onClick={onClick}
      primary={primary}
      disabled={disabled}
      size={size}
      {...props}
    >
      {text}
    </S.StyledButton>
  )
}
