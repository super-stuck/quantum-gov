// AuthContext removed: authentication and authorization are now disabled. All content is public.
import React from 'react'
export function AuthProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
export function useAuth() {
  return { isAuthenticated: true, user: null, login: () => true, logout: () => {}, sessionTimeRemaining: 0, hasRole: () => true }
}
