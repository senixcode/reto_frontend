import { useContext } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { AuthContext } from '../../context/AuthProvider'
import { ROUTES } from '../../routes/AppRouter'

export default function PublicRouter({ component: Component, ...rest }) {
  const auth = useContext(AuthContext)

  return (
    <Route {...rest}>
      {!auth.isLogged() ? (
        <Component />
      ) : (
        <Redirect to={ROUTES.dasboard.home} />
      )}
    </Route>
  )
}
