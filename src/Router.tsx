import { Route, Routes } from 'react-router-dom'

import { DefaultLayout } from './layouts/DefaultLayout'
import { Home } from './pages/home'
import { Sleep } from './pages/sleep'
import { Wakeup } from './pages/wakeup'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/sleep" element={<Sleep />} />
        <Route path="/wakeup" element={<Wakeup />} />
      </Route>
    </Routes>
  )
}