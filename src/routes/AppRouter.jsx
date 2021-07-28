import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom'
import PrivateRouter from '../components/molecules/PrivateRoute'
import PublicRouter from '../components/molecules/PublicRoute'
import NotFound from '../screens/404'
import Dashboard from './Dashboard'
import SignIn from '../screens/SignIn'
import SignUp from '../screens/SignUp'

export const ROUTES = {
  index: '/',
  signin: '/signin',
  signup: '/signup',
  dasboard: {
    home: '/dashboard',
    messages: '/dashboard/messages',
    myAccount: '/dashboard/myAccount',
  },
  noFound: '/404',
}

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <PublicRouter exact path={ROUTES.index} component={SignIn} />
        <PublicRouter exact path={ROUTES.signin} component={SignIn} />
        <PublicRouter exact path={ROUTES.signup} component={SignUp} />
        <PrivateRouter path={ROUTES.dasboard.home} component={Dashboard} />
        <Route exact path={ROUTES.noFound} component={NotFound} />
        <Route path="*">
          <Redirect to={ROUTES.noFound} />
        </Route>
      </Switch>
    </Router>
  )
}
