import AuthProvider from './AuthProvider'
import UserProvider from './UserProvider'
import WelcomeProvider from './WelcomeProvider'

export default function CustommizedContexts({ children }) {
  return (
    <AuthProvider>
      <WelcomeProvider>
        <UserProvider>{children}</UserProvider>
      </WelcomeProvider>
    </AuthProvider>
  )
}
