'use client'
import { useAuth } from '../context/AuthContext'
import { ReactNode } from 'react'

interface RoleBasedWrapperProps {
  children: ReactNode
  allowedRoles: ('admin' | 'user')[]
  fallback?: ReactNode
}

export default function RoleBasedWrapper({ 
  children, 
  allowedRoles, 
  fallback = <AccessDenied /> 
}: RoleBasedWrapperProps) {
  const { user, hasRole } = useAuth()

  if (!user) {
    return fallback
  }

  const hasAccess = allowedRoles.some(role => hasRole(role))

  if (!hasAccess) {
    return fallback
  }

  return <>{children}</>
}

function AccessDenied() {
  return (
    <div className="access-denied">
      <div className="access-denied-content">
        <h2>🚫 Access Denied</h2>
        <p>You don't have permission to access this area.</p>
        <p className="access-denied-help">
          If you believe this is an error, please contact your administrator.
        </p>
      </div>
    </div>
  )
}