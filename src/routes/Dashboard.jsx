import { Redirect, Route, Switch } from 'react-router-dom'
import Sidebar from '../components/containers/Sidebar'
import PrivateRouter from '../components/molecules/PrivateRoute'
import PublicRoute from '../components/molecules/PublicRoute'
import NoFoundPage from '../screens/404'
import Home from '../screens/Home'
import Message from '../screens/Message'
import MyAccount from '../screens/MyAccount'
import { ROUTES_DASHBOARD } from './AppRouter'

export default function Dashboard() {
  return (
    <div className="flex flex-wrap bg-gray-100 w-full h-screen">
      <Sidebar />
      <Switch>
        <Route exact path={ROUTES_DASHBOARD.home} component={Home} />
        <PublicRoute
          exact
          path={ROUTES_DASHBOARD.messages}
          component={Message}
        />
        <PublicRoute
          exact
          path={ROUTES_DASHBOARD.myAccount}
          component={MyAccount}
        />
        <Route path="*">
          <Redirect to="/404">
            <NoFoundPage />
          </Redirect>
        </Route>
      </Switch>
    </div>
  )
}
