import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('App', () => {
  it('shows the About page by default', () => {
    const { container } = render(<App />)
    expect(container.querySelector('article.about')).toHaveClass('active')
    expect(container.querySelector('article.resume')).not.toHaveClass('active')
  })

  it('switches to Resume when the Resume nav button is clicked', () => {
    const { container } = render(<App />)
    fireEvent.click(screen.getByRole('button', { name: /^resume$/i }))
    expect(container.querySelector('article.resume')).toHaveClass('active')
    expect(container.querySelector('article.about')).not.toHaveClass('active')
  })

  it('switches back to About when the About nav button is clicked', () => {
    const { container } = render(<App />)
    fireEvent.click(screen.getByRole('button', { name: /^resume$/i }))
    fireEvent.click(screen.getByRole('button', { name: /^about$/i }))
    expect(container.querySelector('article.about')).toHaveClass('active')
    expect(container.querySelector('article.resume')).not.toHaveClass('active')
  })

  it('opens the sidebar when Show Contacts is clicked', () => {
    const { container } = render(<App />)
    expect(container.querySelector('.sidebar')).not.toHaveClass('active')
    fireEvent.click(screen.getByRole('button', { name: /show contacts/i }))
    expect(container.querySelector('.sidebar')).toHaveClass('active')
  })

  it('closes the sidebar when Show Contacts is clicked a second time', () => {
    const { container } = render(<App />)
    fireEvent.click(screen.getByRole('button', { name: /show contacts/i }))
    fireEvent.click(screen.getByRole('button', { name: /show contacts/i }))
    expect(container.querySelector('.sidebar')).not.toHaveClass('active')
  })
})
