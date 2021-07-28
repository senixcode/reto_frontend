import AuthProvider from './AuthProvider'
import WelcomeProvider from './WelcomeProvider'

export default function CustommizedContexts({ children }) {
  return (
    <AuthProvider>
      <WelcomeProvider>{children}</WelcomeProvider>
    </AuthProvider>
  )
}
