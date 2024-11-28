import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Login from '@/pages/login'
import { AuthContext } from '@/context/AuthContext'
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider'

jest.mock('next/router', () => require('next-router-mock'))

const MockAuthProvider = ({ children }) => (
  <AuthContext.Provider value={{ user: null }}>
    {children}
  </AuthContext.Provider>
)

describe('Login', () => {
  it('renders a Login Form', () => {
    render(
      <MemoryRouterProvider>
        <MockAuthProvider>
          <Login />
        </MockAuthProvider>
      </MemoryRouterProvider>
    )
  })
})