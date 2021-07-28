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
export const ROUTES_DASHBOARD = {
  home: '/dashboard',
  messages: '/dashboard/messages',
  myAccount: '/dashboard/myAccount',
}
export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <PublicRouter exact path="/signin" component={SignIn} />
        <PublicRouter exact path="/signup" component={SignUp} />
        <Route path="/dashboard" component={Dashboard} />
        <Route exact path="/404" component={NotFound} />
        <Route path="*">
          <Redirect to="/404" />
        </Route>
      </Switch>
    </Router>
  )
}
