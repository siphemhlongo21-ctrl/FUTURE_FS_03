import { createContext, useContext, useState } from 'react'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [token] = useState(localStorage.getItem('token'))
  const [admin] = useState(localStorage.getItem('admin'))

  return (
    <AuthContext.Provider value={{ token, admin }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)