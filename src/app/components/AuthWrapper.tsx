'use client'
import { useAuth } from '../context/AuthContext'
import LoginForm from './LoginForm'
import { useState, useEffect } from 'react'

interface AuthWrapperProps {
  children: React.ReactNode
}

export default function AuthWrapper({ children }: AuthWrapperProps) {
  const { isAuthenticated } = useAuth()

  if (!isAuthenticated) {
    return <LoginForm />
  }

  return <>{children}</>
}