import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import Sidebar from './Sidebar'

describe('Sidebar', () => {
  it('does not have active class when isOpen is false', () => {
    const { container } = render(<Sidebar isOpen={false} onToggle={() => {}} />)
    expect(container.querySelector('.sidebar')).not.toHaveClass('active')
  })

  it('has active class when isOpen is true', () => {
    const { container } = render(<Sidebar isOpen={true} onToggle={() => {}} />)
    expect(container.querySelector('.sidebar')).toHaveClass('active')
  })

  it('calls onToggle when the Show Contacts button is clicked', () => {
    const onToggle = vi.fn()
    render(<Sidebar isOpen={false} onToggle={onToggle} />)
    fireEvent.click(screen.getByRole('button', { name: /show contacts/i }))
    expect(onToggle).toHaveBeenCalledOnce()
  })

  it('renders the name and title', () => {
    render(<Sidebar isOpen={false} onToggle={() => {}} />)
    expect(screen.getByText('Eric Chang')).toBeInTheDocument()
    expect(screen.getByText('Full Stack Developer')).toBeInTheDocument()
  })

  it('renders contact details', () => {
    render(<Sidebar isOpen={true} onToggle={() => {}} />)
    expect(screen.getByText('exc369@case.edu')).toBeInTheDocument()
    expect(screen.getByText('Columbus, OH')).toBeInTheDocument()
  })
})
