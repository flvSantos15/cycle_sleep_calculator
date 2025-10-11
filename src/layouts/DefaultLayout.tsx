import { Outlet } from 'react-router-dom'
import { Footer } from '../components/atoms/Footer'
import { Header } from '../components/organisms/Header'

export function DefaultLayout() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}