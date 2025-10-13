'use client'
import { useAuth } from '../context/AuthContext'
import LoginForm from './LoginForm'
import { useState, useEffect } from 'react'

interface AuthWrapperProps {
  children: React.ReactNode
}

export default function AuthWrapper({ children }: AuthWrapperProps) {
  const { isAuthenticated, user, logout, sessionTimeRemaining } = useAuth()
  const [showSessionWarning, setShowSessionWarning] = useState(false)

  // Show session warning when 5 minutes or less remain
  useEffect(() => {
    if (sessionTimeRemaining <= 5 * 60 * 1000 && sessionTimeRemaining > 0) {
      setShowSessionWarning(true)
    } else {
      setShowSessionWarning(false)
    }
  }, [sessionTimeRemaining])

  const formatTimeRemaining = (ms: number) => {
    const minutes = Math.floor(ms / 60000)
    const seconds = Math.floor((ms % 60000) / 1000)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  const extendSession = () => {
    // Force a re-authentication to extend the session
    const currentAuth = localStorage.getItem('quantumgov-auth')
    if (currentAuth === 'authenticated') {
      localStorage.setItem('quantumgov-login-time', Date.now().toString())
      setShowSessionWarning(false)
      // Refresh the page to update the session
      window.location.reload()
    }
  }

  if (!isAuthenticated) {
    return <LoginForm />
  }

  return (
    <>
      {/* Session timeout warning */}
      {showSessionWarning && (
        <div className="session-warning">
          <div className="session-warning-content">
            <span>⚠️ Session expires in {formatTimeRemaining(sessionTimeRemaining)}</span>
            <button onClick={extendSession} className="extend-session-btn">
              Extend Session
            </button>
            <button onClick={() => setShowSessionWarning(false)} className="dismiss-warning-btn">
              ×
            </button>
          </div>
        </div>
      )}
      
      {/* Add logout button and session info to the authenticated view */}
      <div className="auth-controls">
        <div className="user-info">
          <span className="user-name">
            {user?.username} 
            {user?.role === 'admin' && <span className="admin-badge">👑</span>}
          </span>
          <span className="session-info">
            {formatTimeRemaining(sessionTimeRemaining)}
          </span>
        </div>
        <button onClick={logout} className="logout-button">
          Sign Out
        </button>
      </div>
      {children}
    </>
  )
}