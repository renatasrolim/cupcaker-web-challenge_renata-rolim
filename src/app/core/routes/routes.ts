import { AppRoute } from './types'
import Home from 'app/core/pages/home'
import NewCoin from 'app/core/pages/newcoin'

export const coreRoutes: AppRoute[] = [
  { path: '/', exact: true, component: Home },
  { path: '/newcoin', exact: true, component: NewCoin },
  { path: '/private', exact: true, component: Home, isPrivate: true },
]
