import AuthProvider from './AuthProvider'

export default function ContextCustomProvider({ children }) {
  return <AuthProvider>{children}</AuthProvider>
}
