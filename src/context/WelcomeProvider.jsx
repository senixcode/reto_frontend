import { createContext, useState } from 'react'

export const WelcomeContext = createContext()

const WelcomeProvider = ({ children }) => {
  const [welcome, setWelcome] = useState(true)

  return (
    <WelcomeContext.Provider value={{ welcome, setWelcome }}>
      {children}
    </WelcomeContext.Provider>
  )
}
export default WelcomeProvider
