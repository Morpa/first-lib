import React, { ChangeEventHandler } from 'react'

import * as S from './styles'

export interface InputProps {
  id?: string
  label?: string
  error?: boolean
  message?: string
  success?: boolean
  disabled?: boolean
  placeholder?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
}

export const Input = ({
  id,
  label,
  error,
  message,
  success,
  disabled,
  placeholder,
  onChange,
  ...props
}: InputProps) => (
  <>
    <S.StyledLabel>
      <S.StyledText disabled={disabled} error={error}>
        {label}
      </S.StyledText>
    </S.StyledLabel>
    <S.StyledInput
      id={id}
      type="text"
      onChange={onChange}
      disabled={disabled}
      error={error}
      success={success}
      placeholder={placeholder}
      {...props}
    />
    <S.StyledMessage>
      <S.StyledText error={error}>{message}</S.StyledText>
    </S.StyledMessage>
  </>
)
