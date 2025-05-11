// src/App.test.jsx
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App component', () => {
  test('renders the Vite + React heading', () => {
    render(<App />)
    expect(screen.getByText(/Vite \+ React/i)).toBeInTheDocument()
  })
})
