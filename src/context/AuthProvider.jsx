import { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext()

const STORAGE_USER = 'user'

const validateUserLocalStorage = (user) => {
  try {
    localStorage.setItem(STORAGE_USER, JSON.stringify(user))
  } catch (error) {
    localStorage.removeItem(STORAGE_USER)
    console.log(error)
  }
}
const parseUserLocalStorage = JSON.parse(localStorage.getItem(STORAGE_USER))

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(parseUserLocalStorage || null)
  useEffect(() => {
    validateUserLocalStorage(user)
  }, [user])

  const contextValue = {
    user,
    login(data) {
      setUser(data)
    },
    logout() {
      setUser(null)
    },
    isLogged() {
      return !!user
    },
  }

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  )
}
export default AuthProvider
