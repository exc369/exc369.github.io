import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import Navbar from './Navbar'

describe('Navbar', () => {
  it('renders a button for every page', () => {
    render(<Navbar activePage="about" onNavigate={() => {}} />)
    expect(screen.getByRole('button', { name: /^about$/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /^resume$/i })).toBeInTheDocument()
  })

  it('applies active class only to the current page button', () => {
    render(<Navbar activePage="resume" onNavigate={() => {}} />)
    expect(screen.getByRole('button', { name: /^resume$/i })).toHaveClass('active')
    expect(screen.getByRole('button', { name: /^about$/i })).not.toHaveClass('active')
  })

  it('calls onNavigate with the correct page name when a button is clicked', () => {
    const onNavigate = vi.fn()
    render(<Navbar activePage="about" onNavigate={onNavigate} />)
    fireEvent.click(screen.getByRole('button', { name: /^resume$/i }))
    expect(onNavigate).toHaveBeenCalledWith('resume')
  })

  it('calls onNavigate with lowercase page name', () => {
    const onNavigate = vi.fn()
    render(<Navbar activePage="resume" onNavigate={onNavigate} />)
    fireEvent.click(screen.getByRole('button', { name: /^about$/i }))
    expect(onNavigate).toHaveBeenCalledWith('about')
  })
})
