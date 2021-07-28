import { useContext } from 'react'
import { Redirect, Route, useLocation } from 'react-router-dom'
import { AuthContext } from '../../context/AuthProvider'
import { ROUTES } from '../../routes/AppRouter'

export default function PrivateRouter({ component: Component, ...rest }) {
  const auth = useContext(AuthContext)
  const location = useLocation()
  return (
    <Route {...rest}>
      {auth.isLogged() ? (
        <Component />
      ) : (
        <Redirect to={{ pathname: ROUTES.signin, state: { from: location } }} />
      )}
    </Route>
  )
}
