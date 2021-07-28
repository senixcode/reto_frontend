import { Route } from 'react-router-dom'

export default function PublicRouter({ component: Component, ...rest }) {
  return <Route {...rest}>{<Component />}</Route>
}
