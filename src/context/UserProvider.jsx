import { createContext, useState } from 'react'
export const UserContext = createContext()
const UserProvider = ({ children }) => {
  const [users, setUsers] = useState(null)

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {children}
    </UserContext.Provider>
  )
}
export default UserProvider
