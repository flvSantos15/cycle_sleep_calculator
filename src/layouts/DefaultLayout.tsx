import { Outlet } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

export function DefaultLayout() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}