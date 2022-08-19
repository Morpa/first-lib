import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Input } from '.'

describe('</Input>', () => {
  it('Check placeholder in Input', () => {
    const placeholder = 'Hello UI Component!'

    render(<Input placeholder={placeholder} />)

    expect(screen.getByPlaceholderText('Hello UI Component!')).toHaveAttribute(
      'placeholder',
      placeholder
    )
  })

  it('renders the Input Component', async () => {
    const beforePlaceholder = 'before'
    const afterPlaceholder = 'after'

    render(<Input placeholder={beforePlaceholder} />)

    const input = screen.getByPlaceholderText(
      beforePlaceholder
    ) as HTMLInputElement

    await userEvent.type(input, afterPlaceholder)

    expect(input.value).toBe(afterPlaceholder)
  })
})
