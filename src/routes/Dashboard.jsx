import { Redirect, Route, Switch } from 'react-router-dom'
import Sidebar from '../components/containers/Sidebar'
import PrivateRouter from '../components/molecules/PrivateRoute'
import PublicRoute from '../components/molecules/PublicRoute'
import NoFoundPage from '../screens/404'
import Home from '../screens/Home'
import Message from '../screens/Message'
import MyAccount from '../screens/MyAccount'
import { ROUTES } from './AppRouter'

export default function Dashboard() {
  return (
    <div className="flex flex-wrap bg-gray-100 w-full h-screen">
      <Sidebar />
      <Switch>
        <Route exact path={ROUTES.dasboard.home} component={Home} />
        <PublicRoute
          exact
          path={ROUTES.dasboard.messages}
          component={Message}
        />
        <PublicRoute
          exact
          path={ROUTES.dasboard.myAccount}
          component={MyAccount}
        />
        <Route path="*">
          <Redirect to={ROUTES.noFound}>
            <NoFoundPage />
          </Redirect>
        </Route>
      </Switch>
    </div>
  )
}
