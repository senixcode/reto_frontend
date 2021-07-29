import { createContext, useEffect, useState } from 'react'

export const WelcomeContext = createContext()
const STORAGE_WELCOME = 'welcome'

const parseWelcomeLocalStorage = localStorage.getItem(STORAGE_WELCOME)
  ? false
  : true
const WelcomeProvider = ({ children }) => {
  const [welcome, setWelcome] = useState(parseWelcomeLocalStorage)
  const deleteWelcome = () => {
    localStorage.removeItem(STORAGE_WELCOME)
    setWelcome(true)
  }
  useEffect(() => {
    if (welcome === false) localStorage.setItem(STORAGE_WELCOME, 'true')
  }, [welcome])
  return (
    <WelcomeContext.Provider value={{ welcome, setWelcome, deleteWelcome }}>
      {children}
    </WelcomeContext.Provider>
  )
}
export default WelcomeProvider
