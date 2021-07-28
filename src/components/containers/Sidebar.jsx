import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthProvider'
import { ROUTES } from '../../routes/AppRouter'
import HomeIconSvg from '../atoms/HomeIconSvg'
import LogoutIconSvg from '../atoms/LogoutIconSvg'
import MessageIconSvg from '../atoms/MessageIconSvg'
import MyAccountIconSvg from '../atoms/MyAccountIconSvg'
export default function Sidebar() {
  const auth = useContext(AuthContext)
  const NAVS = [
    {
      href: ROUTES.dasboard.home,
      icon: <HomeIconSvg />,
      name: 'Inicio',
    },
    {
      href: ROUTES.dasboard.messages,
      icon: <MessageIconSvg />,
      name: 'Mensajes',
    },
    {
      href: ROUTES.dasboard.myAccount,
      icon: <MyAccountIconSvg />,
      name: 'Mi cuenta',
    },
    {
      href: ROUTES.signin,
      click: () => auth.logout(),
      icon: <LogoutIconSvg />,
      name: 'Cierre de sesión',
    },
  ]
  return (
    <div className="hidden md:block md:w-3/12 lg:w-2/12 bg-primary-600 text-neutral-50 p-3 shadow-lg">
      <div className="flex items-center space-x-4 p-2 mb-5">
        <img
          className="h-12 rounded-full"
          src="https://avatars.githubusercontent.com/u/71798807?s=400&u=0324222b0d740365f4a7b82772a4c28c555fd276&v=4"
          alt="James Bhatta"
        />
        <div>
          <h4 className="font-semibold text-lg capitalize font-poppins tracking-wide">
            Luis Romero
          </h4>
        </div>
      </div>
      <ul className="space-y-2 text-sm">
        {NAVS.map(({ href, icon, name, click }, i) => (
          <li key={i}>
            <Link
              to={href}
              className="nav_sidebar"
              onClick={() => (click ? click() : null)}
            >
              <span>{icon}</span>
              <span>{name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

/* <div className="w-9/12">
  <div className="p-4 text-gray-500">Content here...</div>
</div> */
