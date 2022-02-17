import React from 'react'
import { NavBar } from '../components/ui/NavBar'

export const DashboardRoutes = () => {
  return (
    <div>

        <NavBar />
        <Routes>
            <Route path="/create" component={} />
            <Route path="/read" component={} />
            <Route path="/update" component={} />
            <Route path="/delete" component={} />

            <Route />
        </Routes>
    </div>
  )
}
