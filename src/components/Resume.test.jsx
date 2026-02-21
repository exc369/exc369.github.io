import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Resume from './Resume'

describe('Resume', () => {
  it('has active class when isActive is true', () => {
    const { container } = render(<Resume isActive={true} />)
    expect(container.querySelector('article')).toHaveClass('active')
  })

  it('does not have active class when isActive is false', () => {
    const { container } = render(<Resume isActive={false} />)
    expect(container.querySelector('article')).not.toHaveClass('active')
  })

  it('renders the Resume heading', () => {
    render(<Resume isActive={true} />)
    expect(screen.getByRole('heading', { name: /^resume$/i })).toBeInTheDocument()
  })

  it('renders Education and Experience sections', () => {
    render(<Resume isActive={true} />)
    expect(screen.getByRole('heading', { name: /^education$/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /^experience$/i })).toBeInTheDocument()
  })

  it('renders the skills section', () => {
    render(<Resume isActive={true} />)
    expect(screen.getByRole('heading', { name: /my skills/i })).toBeInTheDocument()
    expect(screen.getByText('Web design')).toBeInTheDocument()
    expect(screen.getByText('Graphic design')).toBeInTheDocument()
    expect(screen.getByText('Branding')).toBeInTheDocument()
    expect(screen.getByText('WordPress')).toBeInTheDocument()
  })

  it('renders timeline entries for education', () => {
    render(<Resume isActive={true} />)
    expect(screen.getByRole('heading', { name: /university school of the arts/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /new york academy of art/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /high school of art and design/i })).toBeInTheDocument()
  })
})
