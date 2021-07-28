import { useContext } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { AuthContext } from '../../context/AuthProvider'

export default function PublicRouter({ component: Component, ...rest }) {
  const auth = useContext(AuthContext)

  return (
    <Route {...rest}>
      {!auth.isLogged() ? <Component /> : <Redirect to="/signin" />}
    </Route>
  )
}
