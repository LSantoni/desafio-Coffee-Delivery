import { Outlet } from 'react-router-dom'
import { Header } from "../shared/components/Header/Header";

export function DefaultLayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}