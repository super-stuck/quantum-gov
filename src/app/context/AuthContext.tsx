'use client'
import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type UserRole = 'admin' | 'user'

interface User {
  username: string
  role: UserRole
}

interface AuthContextType {
  isAuthenticated: boolean
  user: User | null
  login: (username: string, password: string) => boolean
  logout: () => void
  sessionTimeRemaining: number
  hasRole: (role: UserRole) => boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Simple credential check - in production, this should be more secure
const VALID_CREDENTIALS: Record<string, { password: string; role: UserRole }> = {
  'woke': {
    password: '*888*1*4#',
    role: 'admin'
  },
  'user': {
    password: 'quantum2024',
    role: 'user'
  }
}

// Session timeout in milliseconds (30 minutes)
const SESSION_TIMEOUT = 30 * 60 * 1000

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState<User | null>(null)
  const [sessionTimeRemaining, setSessionTimeRemaining] = useState(0)

  // Check for existing authentication on mount and validate session
  useEffect(() => {
    const authStatus = localStorage.getItem('quantumgov-auth')
    const loginTime = localStorage.getItem('quantumgov-login-time')
    const userInfo = localStorage.getItem('quantumgov-user')
    
    if (authStatus === 'authenticated' && loginTime && userInfo) {
      const currentTime = Date.now()
      const sessionAge = currentTime - parseInt(loginTime)
      
      if (sessionAge < SESSION_TIMEOUT) {
        setIsAuthenticated(true)
        setUser(JSON.parse(userInfo))
        setSessionTimeRemaining(SESSION_TIMEOUT - sessionAge)
      } else {
        // Session expired, clear storage
        localStorage.removeItem('quantumgov-auth')
        localStorage.removeItem('quantumgov-login-time')
        localStorage.removeItem('quantumgov-user')
      }
    }
  }, [])

  // Session timeout countdown
  useEffect(() => {
    if (!isAuthenticated) return

    const interval = setInterval(() => {
      const loginTime = localStorage.getItem('quantumgov-login-time')
      if (loginTime) {
        const currentTime = Date.now()
        const sessionAge = currentTime - parseInt(loginTime)
        const timeRemaining = SESSION_TIMEOUT - sessionAge
        
        if (timeRemaining <= 0) {
          logout()
        } else {
          setSessionTimeRemaining(timeRemaining)
        }
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [isAuthenticated])

  const login = (username: string, password: string): boolean => {
    // Basic input validation
    if (!username || !password) {
      return false
    }
    
    // Trim whitespace and validate credentials
    const trimmedUsername = username.trim()
    const trimmedPassword = password.trim()
    
    const userCredentials = VALID_CREDENTIALS[trimmedUsername]
    if (userCredentials && trimmedPassword === userCredentials.password) {
      const currentTime = Date.now()
      const userData: User = {
        username: trimmedUsername,
        role: userCredentials.role
      }
      
      setIsAuthenticated(true)
      setUser(userData)
      setSessionTimeRemaining(SESSION_TIMEOUT)
      localStorage.setItem('quantumgov-auth', 'authenticated')
      localStorage.setItem('quantumgov-login-time', currentTime.toString())
      localStorage.setItem('quantumgov-user', JSON.stringify(userData))
      return true
    }
    return false
  }

  const logout = () => {
    setIsAuthenticated(false)
    setUser(null)
    setSessionTimeRemaining(0)
    localStorage.removeItem('quantumgov-auth')
    localStorage.removeItem('quantumgov-login-time')
    localStorage.removeItem('quantumgov-user')
    
    // Clear any other sensitive data
    sessionStorage.clear()
  }
  
  const hasRole = (role: UserRole): boolean => {
    if (!user) return false
    if (user.role === 'admin') return true // Admin has access to everything
    return user.role === role
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout, sessionTimeRemaining, hasRole }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
