import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import About from './About'

describe('About', () => {
  it('has active class when isActive is true', () => {
    const { container } = render(<About isActive={true} />)
    expect(container.querySelector('article')).toHaveClass('active')
  })

  it('does not have active class when isActive is false', () => {
    const { container } = render(<About isActive={false} />)
    expect(container.querySelector('article')).not.toHaveClass('active')
  })

  it('renders the About me heading', () => {
    render(<About isActive={true} />)
    expect(screen.getByRole('heading', { name: /about me/i })).toBeInTheDocument()
  })

  it('renders all four service items', () => {
    render(<About isActive={true} />)
    expect(screen.getByRole('heading', { name: /web design/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /web development/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /mobile apps/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /photography/i })).toBeInTheDocument()
  })

  it('renders the bio text', () => {
    render(<About isActive={true} />)
    expect(screen.getByText(/full stack developer/i)).toBeInTheDocument()
  })
})
