import { Outlet } from 'react-router-dom'
import { Header } from '../../shared/components/Header'
import { LayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <div>
      <LayoutContainer>
        <Header />
        <Outlet />
      </LayoutContainer>
    </div>
  )
}